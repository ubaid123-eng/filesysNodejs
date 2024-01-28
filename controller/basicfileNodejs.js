const fs = require("fs");

// create a new file synchornously with adddition of any info you want to add in this case i add hey obaid here
//fs.writeFileSync("./test.txt", "hey obaid here");

// create a new file asynchornously with adddition of any info you want to add in this case i add hey obaid here
// fs.writeFile("./test1.txt", "hey obaid asynchronously", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file addedd successfully");
//   }
// });





// this line of code will fetch synchornously any of your file in the directory and outptut the content of it
// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

/* 
this line of code will fetch asynchornously any of your file in the directory and outptut the content of it 
remember it didn't return any thing cause type is void instead it return a call back function
*/

// fs.readFile("./test1.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });






/* 
this line of code will  append anything in any of your file in the directory 
as of now em appending the current date time and day
*/
const currentDate = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};
const formattedDate = currentDate.toLocaleDateString("en-US", options);

// fs.appendFileSync(
//   "./test.txt",
//   `hey obaid synchronously ${formattedDate}` + "\n"
// );

/* 
this line of code will  append asynchronously anything in any of your file in the directory 
as of now em appending the current date time and day
*/
// fs.appendFile(
//   "./test1.txt",
//   `hey obaid asynchronously ${formattedDate}` + "\n",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );







/* 
this line of code will file from your directory
*/
// fs.unlink("./test1.txt", (err) => {
//   return err ? err : console.log("file delete successfully");
// });
