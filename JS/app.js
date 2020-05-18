'use strict';


var Seattle = {

    location: `Seattle`,
    workHours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    AvgSal: 6.3,
    purchaces: [a,b,c],
    // min max customer 
    custo: 0,
    custoNs: function (min, max) {
        this.custo = getRandomCsuto(min, max);

    },



    // avg cookie for customer 

    // customer every hour

    // cookies every hour doing math


    // display every array

    // calculate the sum of hour totals
    render:function ()  {
    
        for (var i = 0; i < Seattle.purchaces.length; i++) {
            var liP = document.createElement('li');
            ulE1.appendChild(liP);
            liP.textContent = Seattle.purchaces[i];
        }
    }
    
}

// for (var i = 0; i < 13; i++) {


//     var wHour = Seattle.custo
//     console.log(wHour)
// }

for (var i = 0; i < Seattle.workHours.length; i++) {
    
    var purch = Seattle.AvgSal*Seattle.custoNs;
    console.table(purch)
}


// calling dudes
function getRandomCsuto(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Seattle.custoNs(23, 65);
console.log(Seattle);






var Tokyo


var Dubai


var Paris


var Lima  