import { createReadStream, createWriteStream } from "fs";
import path from "path";
import url from "url";
import { createUnzip } from "zlib";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const decompress = async () => {
  // Write your code here
  const srcOut = dirname + "/files/fileToCompress.txt";
  const srcIn = dirname + "/files/archive.gz";

  const inputFile = createReadStream(srcIn);
  const outputFile = createWriteStream(srcOut);

  inputFile.pipe(createUnzip()).pipe(outputFile);
  console.log("decompresses archive.gz ");
};

await decompress();
