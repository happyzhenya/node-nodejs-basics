import { access, writeFile } from "fs/promises";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const create = async () => {
  const src = dirname + "/files/fresh.txt";
  const data = "I am fresh and young";
  const errorMsg = "FS operation failed";

  try {
    await writeFile(src, data, { flag: "wx" });
    console.log("file create");
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await create();
