import { createReadStream, createWriteStream } from "fs";
import path from "path";
import url from "url";
import { createGzip } from "zlib";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compress = async () => {
  // Write your code here
  const srcIn = dirname + "/files/fileToCompress.txt";
  const srcOut = dirname + "/files/archive.gz";
  const inputFile = createReadStream(srcIn);
  const outputFile = createWriteStream(srcOut);
  inputFile.pipe(createGzip()).pipe(outputFile);
  console.log("compresses file fileToCompress.txt ");
};

await compress();
