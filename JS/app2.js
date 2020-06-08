'use strict'

var workHours = ['06:00am', '07:00am', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '13:00pm', '14:00pm', '15:00pm', '16:00pm', '17:00pm', '18:00pm', '19:00pm']
var branches = [];


function Branch(location, Minc, Maxc, AvgSal) {
    this.location = location;
    this.Minc = Minc;
    this.Maxc = Maxc;
    this.AvgSal = AvgSal;
    this.CustNumGen = [];
    this.purchaces = [];
    this.total = 0;
    branches.push(this);
}

Branch.prototype.Tijara = function () {
    for (var i = 0; i < workHours.length; i++) {
        var custoNumH = getRandomCsuto(this.Minc, this.Maxc);
        this.CustNumGen.push(custoNumH);
        var sales = Math.ceil(this.CustNumGen[i] * this.AvgSal);
        this.purchaces.push(sales);
        this.total += sales;
    }
}
function getRandomCsuto(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Branch.prototype.maktab = 
function Jada (){
    var container = document.getElementById('container');
    var jadwal = document.createElement('table');
    container.appendChild(jadwal);
    var maqlab = document.createElement('td')
    jadwal.appendChild(maqlab);
    maqlab.textContent=null;
for (var i = 0; i < workHours.length; i++) {
    var saaa = document.createElement('td')
    jadwal.appendChild(saaa);
    saaa.textContent = workHours[i];
}
for (var j = 0; j < branches.length; j++) {
    var ssaf = document.createElement('tr');
    jadwal.appendChild(ssaf);
    var muraba = document.createElement('td');
    ssaf.appendChild(muraba);
    muraba.textContent = branches[j].location;
    for (var i = 0; i < workHours.length; i++) {
        var muraba = document.createElement('td');
        ssaf.appendChild(muraba);
        muraba.textContent = branches[j].purchaces[i];
        // console.log('>>>>>>>>>>>>>>>>>>>>>', branches)
        // Nested loop omg wow oh my god
    }
    var muraba = document.createElement('td');
    ssaf.appendChild(muraba);
    muraba.textContent = branches[j].total;
}
var foottab = document.createElement('tr');
foottab.textContent = 'Totals'
jadwal.appendChild(foottab);
var tooTotals = 0;
for (var k = 0; k < workHours.length; k++) {
    var hTotal = 0;
    for (var l = 0; l < branches.length; l++) {
        
        hTotal = hTotal + branches[l].purchaces[k];
        tooTotals += branches[l].purchaces[k];
    }
    var tooted = document.createElement('td');
    tooted.textContent = hTotal;
    foottab.appendChild(tooted);

}
var toomuchtooted = document.createElement('td');
toomuchtooted.textContent = tooTotals;
foottab.appendChild(toomuchtooted);
}



// -------------
var Seattle = new Branch('Seattle', 23, 63, 6.3);
Seattle.Tijara();
// Seattle.maktab();

var Tokyo = new Branch('Tokyo',     2, 24, 1.2);
Tokyo.Tijara();
// Tokyo.maktab();
var Dubai = new Branch('Dubai',     11, 38, 3.7);
Dubai.Tijara();
// Dubai.maktab();
var Paris = new Branch('Paris',     20, 38, 2.3);
Paris.Tijara();
// Paris.maktab();
var Lima = new Branch('Lima',       2, 16, 4.6);
Lima.Tijara();
// Lima.maktab();
// var Totals = new Branch ('Totals' , 11, 35, 25)
// Totals.Tijara();
// Totals.maktab();
// ///////////////
var cittform = document.getElementById("cityform")
cittform.addEventListener("submit", function(event){
    event.preventDefault();
    var wordcit = event.target.citnamzz.value;
    var numlo = event.target.minzz.value;
    var numhi = event.target.maxzz.value;
    var numbet = parseInt(event.target.avgzz.value)
    
    var addBranch = new Branch (wordcit,numlo,numhi,numbet)
    console.log(branches);
    
    addBranch.Tijara();
    cleartable();
    Jada();
    // addBranch.maktab();
    // addBranch
    // branches.push(addBranch)
    
})
// ------------------


Jada();
function cleartable (){
    container.innerHTML='';
}


{/* <table><td></td></table>w */}

// var cittform = document.getElementById("cityform")
// cittform.addEventListener("submit", function(event){
//     event.preventDefault();
//     var wordcit = event.target.citnamzz.value;
// var numlo = event.target.minzz.value;
// var numhi = event.target.maxzz.value;
// var numbet = parseFloat(event.target.avgzz.value)
    
//     var addBranch = new Branch(wordcit,numlo,numhi,numbet)
//     console.log(branches);
//     // addBranch
//     // branches.push(addBranch)
//     addBranch.Tijara();
    
//     console.log(addBranch)
// })
// document.getElementById("subszz").addEventListener("click", flycal);
// function flycal () {
// var anszz = numlo+numhi+numbet
// console.log(anszz)
// }