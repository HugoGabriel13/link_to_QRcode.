/* 
1. Use the inquirer npm package to get user input.
//prompt user for input URL.txt

2. Use the qr-image npm package to turn the user entered URL into a QR code image.
//make that URL into a QR code

3. Create a txt file to save the user input using the native fs node module.
//create a txt like shown beofre 
*/




import inquirer from 'inquirer';
import qr from 'qr-image';
//const fs = require("fs");
import fs from "fs";


inquirer
    .prompt([
        {
        message:"include your URL please?",//Following format 
        name:"URL",
        },//Following format 
    ])

    .then((answers) => { //answer is suppose to be all previous answers of other questions
        const url = answers.URL //the input should be save here, we are using an object to save it
        var qr_svg = qr.image(url);//default is png but I'll leave it for good practice
        qr_svg.pipe(fs.createWriteStream('qr_img9.png'));

        fs.writeFile("URL.txt",url,(err) => {
            if (err) throw err;
            console.log("it worked, we have saved the file");

        });
        

    })
    .catch((error) => {
        if (error.isTtyError) {
           
        } else {
          
        }
    });


//make the fs to create a file where to save the url input








