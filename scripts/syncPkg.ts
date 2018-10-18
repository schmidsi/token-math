import * as fs from "fs";
import * as R from "ramda";
import * as mkdirp from "mkdirp";

const rootPkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));
const srcPkg = JSON.parse(fs.readFileSync("./src/package.json", "utf8"));

const newSrcPkg = {
  ...srcPkg,
  ...R.omit(
    ["description", "private", "devDependencies", "scripts", "workspaces"],
    rootPkg
  )
};

const distPkg = {
  ...srcPkg,
  main: "index.js"
};

mkdirp.sync("./dist");

fs.writeFileSync("./src/package.json", JSON.stringify(newSrcPkg, null, 2));
fs.writeFileSync("./dist/package.json", JSON.stringify(distPkg, null, 2));
