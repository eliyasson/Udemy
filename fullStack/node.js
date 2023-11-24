const fs = require("fs");

const filePath = "message.txt";
const contentToWrite = "Hello";

fs.writeFile(filePath, contentToWrite, (err) => {
    if (err) {
        console.error("Error occurred while writing to file:", err);
    } else {
        console.log("The file has been saved!");
    }
});    
fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
        
    console.log(data);
});
