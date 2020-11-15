/**
 * This code is used to generate the Tokenized library from
 *  the protobuf definitions of their specification.
 *
 * Requirements:
 *  - git (command line tools)
 *  - protobuf-typescript (npm i -g protobuf-typescript)
 */

const fs = require("fs");
const path = require("path");
const jsExec = require("child_process").exec;

const repoName = "specification";
const gitRepo = `https://github.com/tokenized/${repoName}.git`;
generate();

async function generate() {
  await cloneRepo();
  await generateCode();
  await deleteFolderIfPresent(`./${repoName}`);
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

async function generateCode() {
  const folder = `./${repoName}/dist/protobuf`;
  const outFolder = "./generated";

  await deleteFolderIfPresent(outFolder);
  fs.mkdirSync(outFolder);

  const protobufFiles = ["actions", "assets", "messages"];
  for (let i = 0; i < protobufFiles.length; i++) {
    const f = protobufFiles[i];
    const p = path.join(folder, f + ".proto");
    const o = path.join(outFolder, f);
    const command1 = `pbjs -t static-module -w commonjs -o ${o}.js ${p}`;
    const command2 = `pbts -o ${o}.d.ts ${o}.js`;
    await exec(command1, true, {});
    await exec(command2, true, {});
  }
}

async function exec(command, log = false, o = {}) {
  return new Promise((resolve, reject) => {
    console.log(">> RUNNING : " + command);
    jsExec(command, o, (err, stdout, stderr) => {
      var toLog = [stdout, stderr].filter((i) => i).join("\n");
      if (log && toLog) console.log(toLog);
      if (err) reject(err);
      resolve({ stdout, stderr });
    });
  });
}
