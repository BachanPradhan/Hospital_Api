const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://hospital:z2swpgr4Ken6sdGz@cluster1.c3wrh.mongodb.net/hospitalApi?retryWrites=true&w=majority');

    //await mongoose.connect('mongodb+srv://BachanPradhan:BachanPradhan@cluster0.bf0ldsl.mongodb.net/');

    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
