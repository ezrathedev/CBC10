const os = require('os');
const fs = require('fs');
const path = require('path');
console.log(os.cpus());
console.log(os.platform());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.uptime);
//BONUS: Write your computer specs to a file called specs.txt Check out the attached image and mimic a similar format. HINT: You'll want the path & fs module for this

// fs.writeFile(path.join(__dirname, 'homework2', specs.txt), (err, data) => {
//     fs.appendFile(path.join(__dirname, 'homework2', specs.txt), (err, data) = {
        
//     })

// })

