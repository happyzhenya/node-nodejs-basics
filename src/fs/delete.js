import { unlink } from "fs/promises";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const remove = async () => {
  // Write your code here
  const errorMsg = "FS operation failed";
  const src = dirname + "/files/fileToRemove.txt";

  try {
    await unlink(src);
    console.log("file delete");
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await remove();
