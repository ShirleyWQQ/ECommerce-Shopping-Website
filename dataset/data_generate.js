const Chance = require("chance");
const chanceObj = new Chance();

const generatePerson = () => {
    return {
        "name" : chanceObj.animal(),
        "price" : chanceObj.floating({ min: 0, max: 10000, fixed: 2 }),
        "sentence" : chanceObj.sentence(),
        "rate" : chanceObj.floating({ min: 0, max: 5, fixed: 1 }),
        "picture" : chanceObj.url({path: 'images'})
        }
};

// const dom = generatePerson();

// console.log(dom);

const item = Array.from({ length: 2000 }, generatePerson);

    for (var i = 1; i <= 100; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","napkin"+i);
       
        }
    for (var i = 101; i <= 200; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","milk"+(i-100));
        
        }
    for (var i = 201; i <= 300; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","apple"+(i-200));

        }
    for (var i = 301; i <= 400; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","orrange"+(i-300));

        }
    for (var i = 401; i <= 500; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","bread"+(i-400));

        }
    for (var i = 501; i <= 600; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","T-shirt"+(i-500));

        }
    for (var i = 601; i <= 700; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","fish"+(i-600));

        }
    for (var i = 701; i <= 800; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","butter"+(i-700));

        }
    for (var i = 801; i <= 900; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","bag"+(i-800));

        }
    for (var i = 901; i <= 1000; i++) {
        console.log(i,"   ",item[i].sentence,"   ",item[i].price,"   ",item[i].rate,"   ",item[i].picture,"   ","face-washer"+(i-900));

        }

