import { Worker } from "worker_threads";
import path from "path";
import url from "url";

import os from "os";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const performCalculations = async () => {
  // Write your code here
  const count = os.cpus();
  //console.log("count=", count);
  let number = 10;
  const src = dirname + "/worker.js";

  const resultWorker = await Promise.allSettled(
    count.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(src, { workerData: number++ });
        worker.on("message", resolve);
        worker.on("error", reject);
      });
    })
  );

  const results = resultWorker.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));
  console.log(results);
  return results;
};

await performCalculations();
