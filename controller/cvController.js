const genCv = require("../service/cvGenerator");

const cvData = [
  {
    name: "obaid ur rehman",
    email: "obaid@gmail.com",
    qualification: "Bachelor in Software Engineering",
    description:
      "I am a skilled software developer with experience in building web applications.",
  },
  {
    name: "ali",
    email: "ali@gmail.com",
    qualification: "Bachelor in Software Engineering",
    description:
      "I am a skilled software developer with experience in building web applications.",
  },
  {
    name: "ahmed",
    email: "ahmed@gmail.com",
    qualification: "Bachelor in Software Engineering",
    description:
      "I am a skilled software developer with experience in building web applications.",
  },
];


// it will only execute for single user
// const executeCvService = (req, res) => {
//   try {
//     const finalcvData = [];
//     cvData.forEach((data) => {
//       const cvText = genCv.generateCV(data);
//       genCv.saveCVToFile(cvText);
//       finalcvData.push(cvText);
//     });
//     res.send(`CV has been successfully generated  and saved to cv.txt`);
//   } catch (error) {
//     console.error("Error generating or saving CVs:", error);
//     res.status(500).send("Error generating or saving CVs");
//   }
// };


// it will only execute for multiple users
const executeCvService = (req, res) => {
  try {

    for (const data of cvData) {
      const cvDoc = genCv.generateCV(data);
      genCv.saveCVToFile(cvDoc , data.name);
    }

    // res.attachment("cv.pdf"); // Set the filename when downloading
    // res.sendFile("cv.pdf", { root: __dirname }); // Send the generated PDF to the client for download

    res.send(`CVs have been successfully generated and saved.`);
  } catch (error) {
    console.error("Error generating or saving CVs:", error);
    res.status(500).send("Error generating or saving CVs");
  }
};

module.exports = {
  executeCvService,
};
