const parseArgs = () => {
  // Write your code here
  const temp = [];
  process.argv.forEach((i, index, arr) => {
    if (i.startsWith("--")) {
      temp.push(`${i.replace("--", " ")} is ${arr[index + 1]}`);
    }
  });
  console.log(temp.join(","));
};

parseArgs();
