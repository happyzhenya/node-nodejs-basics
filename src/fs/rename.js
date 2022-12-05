import { rename as getNewName, access } from "fs/promises";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const rename = async () => {
  // Write your code here
  const src = dirname + "/files/wrongFilename.txt";
  const srcNew = dirname + "/files/properFilename.md";
  const errorMsg = "FS operation failed";

  try {
    await getNewName(src, srcNew);
    console.log("file rename");
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await rename();
