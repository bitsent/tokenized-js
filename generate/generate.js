const exec = require("./exec");
const fs = require("fs");
const path = require("path");

const gitRepo = "https://github.com/tokenized/specification.git";

(async function () {
  await exec("git clone " + gitRepo);
  var folders = fs.readdirSync("./specification/src");
  var parsedYaml = {};
  for (let i = 0; i < folders.length; i++) {
    parsedYaml[folders[i]] = await parseYamlRecursively(
      `./specification/src/${folders[i]}/develop`
    );
  }
})();

function parseYamlRecursively(currentPath) {
  // TODO: list all files and directories
  // TODO: load all files
  // TODO: load all directories recursively
  // TODO: return it all
}
