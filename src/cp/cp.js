import { createReadStream } from "fs";
import path from "path";
import url from "url";
import { spawn } from "child_process";
import "./files/script.js";
import { allowedNodeEnvironmentFlags } from "process";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const spawnChildProcess = async (args) => {
  // Write your code here
  const src = dirname + "/files/scripts.js";
  const child = spawn("node", [src, ...args.split(" ")]);
  process.stdin.on("data", (message) => {
    child.stdin.write(message);

    child.stdout.on("data", (data) => {
      console.log(`stdout:\n ${data}`);
    });
    /*child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });*/

    child.on("error", (error) => {
      console.error(`error: ${error.message}`);
    });

    child.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess("--all");
