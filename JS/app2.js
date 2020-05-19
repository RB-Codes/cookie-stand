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
// -------------
var Seattle = new Branch('Seattle', 23, 63, 6.3);
var Tokyo = new Branch('Tokyo', 2, 24, 1.2);
var Dubai = new Branch('Dubai', 11, 38, 3.7);
var Paris = new Branch('Paris', 20, 38, 2.3);
var Lima = new Branch('Lima', 2, 16, 4.6);
Seattle.Tijara();
Tokyo.Tijara();
Dubai.Tijara();
Paris.Tijara();
Lima.Tijara();
// ------------------
var container = document.getElementById('container');
var jadwal = document.createElement('table');
container.appendChild(jadwal);
var maqlab = document.createElement('td')
jadwal.appendChild(maqlab)
maqlab.textContent=null
for (var i = 0; i < workHours.length; i++) {
    var saaa = document.createElement('td')
    jadwal.appendChild(saaa);
    saaa.textContent = workHours[i]
}
for (var j = 0; j < branches.length; j++) {
    var ssaf = document.createElement('tr')
    jadwal.appendChild(ssaf);
    var muraba = document.createElement('td');
    ssaf.appendChild(muraba);
    muraba.textContent = branches[j].location
    for (var i = 0; i < workHours.length; i++) {
        var muraba = document.createElement('td');
        ssaf.appendChild(muraba);
        muraba.textContent = branches[j].purchaces[i]
        // Nested loop omg wow oh my god
    }
    var muraba = document.createElement('td');
    ssaf.appendChild(muraba);
    muraba.textContent = branches[j].total
}