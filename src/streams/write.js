import { createWriteStream } from "fs";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const write = async () => {
  // Write your code here
  const src = dirname + "/files/fileToWrite.txt";
  const file = createWriteStream(src);
  process.stdin.pipe(file);
  console.log("Enter text: \n");
};

await write();
