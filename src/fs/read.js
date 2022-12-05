import { readFile } from "fs/promises";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const read = async () => {
  // Write your code here
  const src = dirname + "/files/fileToRead.txt";
  const errorMsg = "FS operation failed";

  try {
    const data = await readFile(src, "utf-8");
    console.log(data);
  } catch (error) {
    throw new Error(errorMsg);
  }
};
await read();
