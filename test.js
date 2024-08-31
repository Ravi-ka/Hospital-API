// import url from "url";

// const address =
//   "https://www.neimanmarcus.com/p/christian-louboutin-miss-jane-red-sole-ankle-strap-sandals-prod265680297?childItemId=NMX6B5M_24&msid=4652092&navpath=cat000000_cat000141_cat47190746&page=0&position=1";

// const data = url.parse(address, true);
// console.log(data);

// import express from "express";
// import crypto from "crypto";

// const app = express();

// app.get("/", (req, res) => {
//   const user = {
//     name: "ka",
//     age: 25,
//   };
//   res.setHeader("authorization", user.age);
//   const cookieOptions = {
//     // expire: expire: 400000 + Date.now(),
//     maxAge: 360000,
//   };

//   res.cookie("personal", user, cookieOptions);
//   //   console.log(res.cookie());
//   res.end("Welcome");
// });

// app.get("/token", (req, res) => {
//   const resetToken = crypto.randomBytes(20).toString("hex");
//   const hashToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");
//   res.json({ token: resetToken, hash: hashToken });
//   //   res.json({ token: hashToken });
// });

// app.get("/logout", (req, res) => {
//   res.cookie("personal", null, { maxAge: 0 });
//   res.end("Logout successful");
// });

// app.listen(3000, (err) => {
//   if (err) console.log("Error while starting the server");
//   else console.log("Server listening on port 3000");
// });

// import dns from "dns";

// dns.lookup("www.npmjs.com", (error, address, family) => {
//   console.log(error);
//   console.log(address);
//   console.log(family);
// });

// import path from "path";

// const filePath = path.resolve(path.join("config", "uat.env"));
// console.log(filePath);

// import fs from "fs";
// const filePath = path.resolve(path.join("swagger.json"));
// const file = fs.readFile(filePath, (err, data) => {
//   console.log(data.toString());
//   fs.appendFile("test.json", data, () => {
//     console.log("Process done");
//   });
// });

// import os from "os";

// console.log(os.cpus());

import fs from "fs";
import zlib from "zlib";

// const readableStream = fs.createReadStream("input.txt");
// const gzipStream = zlib.createGzip();
// const writableStream = process.stdout;

// readableStream.pipe(gzipStream).pipe(writableStream);
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));
