import { Transform, pipeline } from "stream";

const transform = async () => {
  // Write your code here
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      //process.stdout.write("");
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });
  pipeline(process.stdin, reverseText, process.stdout, (err) => {
    throw new Error("Error");
  });
};
console.log("enter text: \n");
await transform();
