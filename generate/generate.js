const exec = require("./exec");
const fs = require("fs");
const path = require("path");
const yaml = require("yaml");

const repoName = "specification";
const gitRepo = `https://github.com/tokenized/${repoName}.git`;

generate();

async function generate() {
  var data = await loadData();
  await generateCode(data);
  console.log("DONE!");
}

async function loadData() {
  if (fs.existsSync(`./${repoName}`))
    fs.rmdirSync(`./${repoName}`, { recursive: true });

  await exec("git clone " + gitRepo);

  var folders = fs.readdirSync(`./${repoName}/src`);
  var parsedYaml = {};
  for (let i = 0; i < folders.length; i++) {
    parsedYaml[folders[i]] = await parseYamlRecursively(
      `./${repoName}/src/${folders[i]}/develop`
    );
  }
  fs.writeFileSync("./data.json", JSON.stringify(parsedYaml, null, 2));
  return parsedYaml;
}

async function generateCode(data) {
  throw new Error("Not Implemented");
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
      parsedYaml[names[0]] = yaml.parse(text);
      for (let n = 1; n < names.length; n++) {
        parsedYaml[names[n]] = {
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
    parsedYaml[names[0]] = parseYamlRecursively(folderPath);
    for (let n = 1; n < names.length; n++) {
      parsedYaml[names[n]] = {
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
  words = words.map((i) => i[0].toUpperCase() + i.substr(1).toLowerCase());
  var complete = words.join("");
  return complete;
}
