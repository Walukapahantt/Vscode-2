const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
  console.log(`Put The web Adress In Uptimerobot!`)
})

const { exec } = require('child_process');
var yourscript = exec('sh live.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
