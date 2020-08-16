const fs = require('fs');
const readline = require('readline');
const readlineInterface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

const project = () => {
    readlineInterface.question('What is the title of your project: ', (answer) => {
        let title = answer.toUpperCase();
        fs.writeFile('README.md', `${title}\n${answer}`, (err) => {
            if (err) console.log(err);
            else{
                readlineInterface.question('List project prerequisites: ', (answer) => {
                    fs.appendFile('README.md', `PREREQUISITES\n${answer}\n`, (err) =>{
                        if (err) console.log(err);
                        else{
                            readlineInterface.question('Installation process', (answer) => {
                                fs.appendFile('README.md', `\nINSTALLATION PROCESS\n${answer}\n`, (err) =>{
                                if (err) console.log(err);
                                else{
                                    readlineInterface.question('Deployment process: ', (answer) => {
                                        fs.appendFile('README.md', `\nDEPLOYMENT PROCESS\n${answer}\n`,(err) => {
                                            if (err) console.log(err);
                                            else{
                                                readlineInterface.question('Tools used in the project: ',(answer) => {
                                                    fs.appendFile('README.md', `\n TOOLS\n ${answer.split(',')}\n\n`, (err) => {
                                                        if (err) console.log(err);
                                                        else{
                                                            readlineInterface.question('Contributors',(answer) => {
                                                                fs.appendFile('README.md', `CONTRIBUTORS\n${answer.split(',')}\n\n`, (err) => {
                                                                    if (err) console.log(err);
                                                                    else{
                                                                        readlineInterface.question('License: ', (answer) => {
                                                                            fs.appendFile('README.md', `LICENSE \n This project is licensed under the ${answer} license \n\n`, (err) => {
                                                                                if (err) console.log(err)
                                                                                else{
                                                                                    readlineInterface.question('Authors: ', (answer) => {
                                                                                        fs.appendFile('README.md', `AUTHOR\n${answer}`, (err) => {
                                                                                            if (err) console.log(err)
                                                                                            else{ readlineInterface.question('Acknowledgements : ', (answer) =>{
                                                                                              fs.appendFile('README.md', `ACKNOWLEDGEMENT\n${answer.split(',')}\n\n`, (err) => {
                                                                                                  if (err) console.log(err)
                                                                                                  else{
                                                                                                      console.log('README file created')
                                                                                                  }
                                                                                              }) 
                                                                                              readlineInterface.close()
                                                                                            })

                                                                                            }
                                                                                        })
                                                                                    })
                                                                                }
                                                                            })
                                                                        })
                                                                    }
                                                                })
                                                            } )
                                                        }
                                                    })
                                                })
                                            }
                                        })
                                    })
                                }
                                })
                            })
                        }
                    })
                })
            }
        })
    })
};
project();