const fs = require("fs");

/*fs.writeFile("Message.txt","Hello from nodeJS", (err) => {
    if(err) throw err
    console.log("The file have been saved")
})*/


var f = require("fs");

fs.readFile("./message.txt","utf8" ,(err,data) => {
    if(err) throw err;
    console.log(data)
})