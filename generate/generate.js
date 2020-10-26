const exec = require("./exec");
const fs = require("fs");
const path = require("path");
const yaml = require("yaml");

const repoName = "specification";
const gitRepo = `https://github.com/tokenized/${repoName}.git`;

generate();

async function generate() {
  // await cloneRepo();
  var data = await loadData();
  await generateCode(data);
  console.log("DONE!");
}

async function cloneRepo() {
  var path = `./${repoName}`;
  await deleteFolderIfPresent(path);
  await exec("git clone " + gitRepo);
}

async function deleteFolderIfPresent(path) {
  if (fs.existsSync(path)) {
    await exec("rm -r " + path);
  }
}

async function loadData() {
  var folders = fs.readdirSync(`./${repoName}/src`);
  var parsedYaml = {};
  for (let i = 0; i < folders.length; i++) {
    parsedYaml["dir_" + folders[i]] = await parseYamlRecursively(
      `./${repoName}/src/${folders[i]}/develop`
    );
  }
  fs.writeFileSync("./data.json", JSON.stringify(parsedYaml, null, 2));

  const types = [];
  const schemas = [];
  const dirAliases = [];
  const typeAliases = [];
  await traverseTree(parsedYaml, (node, currentPath, name) => {
    const isDir = name.startsWith("dir_");
    const isFile = name.startsWith("file_");
    const isDirAlias = name.startsWith("dirAlias_");
    const isFileAlias = name.startsWith("fileAlias_");
    const isSchema = name.toLowerCase() === "file_schema";
    const isType = isFile && !isSchema;

    currentPath = currentPath.map((i) => i.substr("dir_".length));
    if (!isDir) name = name.substr(name.indexOf("_") + 1);
    if (isType) types.push({ node, path: currentPath, name });
    if (isSchema) schemas.push({ node, path: currentPath, name });
    if (isDirAlias) dirAliases.push({ node, path: currentPath, name });
    if (isFileAlias) typeAliases.push({ node, path: currentPath, name });
    return isDir;
  });

  return {
    types,
    schemas,
    dirAliases,
    typeAliases,

    typeLocations: Object.assign(
      {},
      ...types.map((i) => ({ [i.name]: i.path }))
    ),
  };
}

function parseYamlRecursively(currentPath) {
  var contents = fs.readdirSync(currentPath);
  var files = [];
  var folders = [];

  for (let i = 0; i < contents.length; i++) {
    var contentPath = path.join(currentPath, contents[i]);
    var contentStat = fs.lstatSync(contentPath);
    if (contentStat.isDirectory()) folders.push(contents[i]);
    else files.push(contents[i]);
  }

  var parsedYaml = {};

  for (let i = 0; i < files.length; i++) {
    var filePath = path.join(currentPath, files[i]);
    if (!filePath.endsWith(".yaml"))
      throw new Error("Non-YAML file detected : " + filePath);
    var name = files[i].substr(0, files[i].length - 5);
    var names = parseName(name);
    var text = fs.readFileSync(filePath, { encoding: "utf8" });
    try {
      parsedYaml["file_" + names[0]] = yaml.parse(text);
      for (let n = 1; n < names.length; n++) {
        parsedYaml["fileAlias_" + names[n]] = {
          propertyIsAliasOf: names[0],
        };
      }
    } catch (error) {
      error.message = error.message + "\n\n-------\nTEXT:\n-------\n\n" + text;
      throw error;
    }
  }

  for (let i = 0; i < folders.length; i++) {
    var folderPath = path.join(currentPath, folders[i]);
    var names = parseName(folders[i]);
    parsedYaml["dir_" + names[0]] = parseYamlRecursively(folderPath);
    for (let n = 1; n < names.length; n++) {
      parsedYaml["dirAlias_" + names[n]] = {
        propertyIsAliasOf: names[0],
      };
    }
  }

  return parsedYaml;
}

function parseName(name) {
  name = name.replace(/_/g, " ");
  var regex = /^((?<code>[A-Z]{0,4}[0-9]{0,5}) - )?(?<name>[a-zA-Z ]*)(\((?<altName>[a-zA-Z ]*)\))?$/;
  var regexResult = regex.exec(name);
  var groups = regexResult.groups;
  var results = [];
  if (groups.name) results.push(formatName(groups.name));
  if (groups.altName) results.push(formatName(groups.altName));
  if (groups.code) results.push(groups.code);
  return results;
}

function formatName(name) {
  var words = name
    .toString()
    .split(" ")
    .filter((i) => i);
  var complete = words.join("");
  return complete;
}

var basicTypes = {
  bool: {
    getTypeName: (f) => "BooleanType",
    acceptedType: "Boolean",
  },
  uint: {
    getTypeName: (f) => "UInt" + (f.size ? f.size * 8 : ""),
    acceptedType: "number",
  },
  varchar: {
    getTypeName: (f) => "VarChar" + (f.varSize ? `_${f.varSize}` : ""),
    acceptedType: "string",
  },
  varbin: {
    getTypeName: (f) => "VarBin" + (f.varSize ? `_${f.varSize}` : ""),
    acceptedType: "Uint8Array",
  },
  bin: {
    getTypeName: (f) => "Bin" + (f.size ? f.size : ""),
    acceptedType: "Uint8Array",
  },
  fixedchar: {
    getTypeName: (f) => "FixedChar" + (f.size ? f.size : ""),
    acceptedType: "string",
  },

  /** ALIASES */
  Role: { getTypeName: (f) => "Role", acceptedType: "number" },
  EntityType: { getTypeName: (f) => "EntityType", acceptedType: "string" },
  Polity: { getTypeName: (f) => "Polity", acceptedType: "string" },
  RejectionCode: {
    getTypeName: (f) => "RejectionCode",
    acceptedType: "number",
  },
  Tag: { getTypeName: (f) => "Tag", acceptedType: "number" },
  Address: { getTypeName: (f) => "Address", acceptedType: "Uint8Array" },
  ContractCode: {
    getTypeName: (f) => "ContractCode",
    acceptedType: "Uint8Array",
  },
  AssetType: { getTypeName: (f) => "AssetType", acceptedType: "string" },
  AssetCode: { getTypeName: (f) => "AssetCode", acceptedType: "Uint8Array" },
  Timestamp: { getTypeName: (f) => "Timestamp", acceptedType: "number" },
  TxId: { getTypeName: (f) => "TxId", acceptedType: "Uint8Array" },
  PublicKey: { getTypeName: (f) => "PublicKey", acceptedType: "Uint8Array" },
  Signature: { getTypeName: (f) => "Signature", acceptedType: "Uint8Array" },
  ProofOfIdentityType: {
    getTypeName: (f) => "ProofOfIdentityType",
    acceptedType: "number",
  },
  CurrencyType: { getTypeName: (f) => "CurrencyType", acceptedType: "string" },
};

var unknownTypes = [];

async function generateCode(data, baseDir = __dirname + "/../out") {
  await deleteFolderIfPresent(baseDir);
  fs.mkdirSync(baseDir);
  getAllFolders(data.types, baseDir).forEach((p) => fs.mkdirSync(p));

  fs.writeFileSync(
    baseDir + "/Base.ts",
    fs.readFileSync(__dirname + "/Base.ts")
  );

  for (let i = 0; i < data.types.length; i++) {
    await generateType(data.types[i], data.typeLocations, baseDir);
  }

  console.log(data.types.length + " types generated!");
  if (unknownTypes.length) reportUnknownTypes(unknownTypes);
}

function reportUnknownTypes(unknownTypes) {
  var countedUnknowns = unknownTypes.reduce(
    (a, c) => ((a[c] = (a[c] || 0) + 1), a),
    {}
  );
  console.log(
    unknownTypes.length +
      " field with unknown types. The types are:\n" +
      JSON.stringify(countedUnknowns, null, 2)
  );
}

/**
 * each class has:
 * - fieldNames[]
 * - set <fieldName>
 * - get <fieldName>
 * - validate()
 */
async function generateType(type, typeLocations, baseDir) {
  var fields = parseFields(type, typeLocations);

  var pathUpToRoot = "." + type.path.map((i) => "/..").join("");

  var tokenizedImports = fields
    .filter((f) => f.isTokenizedType || f.isTokenizedArrayType)
    .map((f) => {
      return `import ${f.importType} from "${pathUpToRoot}/${typeLocations[
        f.importType
      ].join("/")}/${f.importType}";`;
    })
    .join("\n");
  var baseImports = filterUnique(
    fields
      .filter((f) => f.isBasic || f.isBasicArrayType)
      .map((f) => f.importType)
  );
  baseImports = baseImports.length ? `, { ${baseImports.join(", ")} }` : "";

  var code = `
import BaseType${baseImports} from "${pathUpToRoot}/Base";
${tokenizedImports}

/**
 * # ${type.node.label}
 * ${type.node.description}
 */
class ${type.name} extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ ${
      fields
        ? fields
            .filter((i) => i.required === true)
            .map((i) => `"${i.name}"`)
            .join(", ")
        : ""
    } ];
    super.fieldNames = [ ${
      fields ? fields.map((i) => `"${i.name}"`).join(", ") : ""
    } ];
  }

  public validate() {
    super.validateAllFields();
  }

  ${fields.map((f) => `private _${f.name}: ${f.type};`).join("\n  ")}

  ${fields.map(generateFieldCode).join("\n")}
}

export default ${type.name};`;

  fs.writeFileSync(path.join(baseDir, ...type.path, type.name + ".ts"), code);
}

function parseFields(type, typeLocations) {
  var fields = type.node.fields || [];
  for (let i = 0; i < fields.length; i++) {
    var f = fields[i];
    f.originalType = f.type;

    f.isDeprecated = f.originalType === "deprecated";

    f.isArray = f.originalType.endsWith("[]");
    f.arrayType = f.isArray
      ? f.originalType.substr(0, f.originalType.length - 2)
      : null;
    if (f.isArray) f.originalType = f.arrayType;

    f.isTokenizedArrayType = f.isArray && typeLocations[f.arrayType];
    f.isBasicArrayType = f.isArray && basicTypes[f.arrayType];

    f.isTokenizedType = !!typeLocations[f.originalType];
    f.isBasic = !!basicTypes[f.originalType];

    f.acceptedType = f.type;
    if (f.isBasic && !f.isArray) {
      f.type = basicTypes[f.originalType].getTypeName(f);
      f.acceptedType = basicTypes[f.originalType].acceptedType;
    } else if (f.isBasic && f.isArray) {
      f.acceptedType = basicTypes[f.originalType].acceptedType + "[]";
      f.arrayType = basicTypes[f.originalType].getTypeName(f);
      f.type = f.arrayType + "[]";
    }

    f.importType = f.arrayType || f.type;

    f.isKnown = f.isBasic || f.isTokenizedType || f.isDeprecated;

    if (!f.isKnown) unknownTypes.push(f.importType);
  }

  fields = fields.filter((f) => !f.isDeprecated);
  return fields;
}

function generateFieldCode(f) {
  var comment = `
  /**
   * ### ${f.label} 
   * ${f.description}
   */
  `;
  var setter = `
  public set ${f.name}(val: ${f.acceptedType}) {
    ${
      f.acceptedType === f.type
        ? `this._${f.name} = val;`
        : f.isArray
        ? `this._${f.name} = val.map(v => new ${f.importType}(v));`
        : `this._${f.name} = new ${f.type}(val);`
    }
    ${valueValidationCode(f)}
  }`;
  var getter = `
  public get ${f.name}() : ${f.acceptedType} {
    ${valueGeterCode(f)}
  }`;

  return (
    "\n" +
    [comment, setter, comment, getter]
      .join("\n")
      .split("\n")
      .filter((i) => i.trim())
      .join("\n")
  );
}

function valueValidationCode(f) {
  if (f.isArray) return `this._${f.name}.forEach(i => i.validate());`;
  else return `this._${f.name}.validate();`;
}

function valueGeterCode(f) {
  if (f.isArray && f.isTokenizedType)
    return `return this._${f.name}.map(i => i);`;
  else if (f.isArray && f.isBasic)
    return `return this._${f.name}.map(i => i.value);`;
  else if (!f.isArray && f.isTokenizedType) return `return this._${f.name};`;
  else if (!f.isArray && f.isBasic) return `return this._${f.name}.value;`;
  else return "// TODO: implement this unsupported scenario";
}

function getAllFolders(typeNodes, baseDir) {
  var paths = typeNodes.map((i) => i.path.map((v, i, a) => a.slice(0, i + 1)));
  var paths = [].concat.apply([], paths);
  var paths = filterUnique(paths.map((p) => path.join(baseDir, ...p)));
  return paths;
}

function filterUnique(arr = []) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}

async function traverseTree(tree, nodeCallback, currentPath = []) {
  for (const name in tree) {
    if (tree.hasOwnProperty(name)) {
      const node = tree[name];
      var keepGoing = await nodeCallback(node, currentPath, name);
      if (keepGoing === true)
        await traverseTree(node, nodeCallback, [...currentPath, name]);
    }
  }
}
