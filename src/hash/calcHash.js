import crypto from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import url from "url";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const calculateHash = async () => {
  // Write your code here
  const src = dirname + "/files/fileToCalculateHashFor.txt";
  try {
    const data = await readFile(src, "utf-8");
    console.log(data);
    const hashSha256 = crypto.createHash("sha256");
    hashSha256.update(data);
    console.log(hashSha256.digest("hex"));
  } catch (error) {
    throw new Error(error);
  }
};

await calculateHash();
