import { readdir } from "fs/promises";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const list = async () => {
  const src = dirname + "/files";
  const errorMsg = "FS operation failed";
  try {
    const files = await readdir(src);
    files.forEach((file) => console.log(file));
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await list();
