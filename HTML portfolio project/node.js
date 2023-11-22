const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) {
        console.error("Error occurred while writing to file:", err);
    } else {
    console.log("The file has been saved!");
    }
});