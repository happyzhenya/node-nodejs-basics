import { createReadStream } from "fs";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const read = async () => {
  // Write your code here
  const src = dirname + "/files/fileToRead.txt";

  createReadStream(src).pipe(process.stdout);
};
await read();
