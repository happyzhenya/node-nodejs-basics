const parseEnv = () => {
  // Write your code here
  //console.log(process.env);
  const temp = [];
  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith("RSS_")) {
      temp.push(`${key}=${value}`);
    }
  });
  console.log(temp.join("; "));
};

parseEnv();
