console.log("HOME", process.env.HOME);

const fs = require("fs");
const dir = fs.readdirSync(process.env.HOME);
console.log(dir);
