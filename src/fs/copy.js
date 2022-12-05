import { access, mkdir, readdir, copyFile } from "fs/promises";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const copy = async () => {
  // Write your code here
  const src = dirname + "/files/";
  const srcCopy = dirname + "/files_copy/";
  const errorMsg = "FS operation failed";

  try {
    await access(src);
    throw new Error(errorMsg);
  } catch (error) {
    try {
      if (error === errorMsg) throw new Error(errorMsg);
      await mkdir(srcCopy);
      const folderFiles = await readdir(src);
      folderFiles.forEach((file) => {
        // console.log(path.join(src, file));
        copyFile(path.join(src, file), path.join(srcCopy, file));
      });
      console.log("files copy");
    } catch (error) {
      throw new Error(errorMsg);
    }
  }
};

copy();
