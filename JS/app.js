'use strict';

var workHours = ['06:00am', '07:00am', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '13:00pm', '14:00pm', '15:00pm', '16:00pm', '17:00pm', '18:00pm', '19:00pm']

var Seattle = {
    location: `Seattle`,
    Minc: 23,
    Maxc: 63,
    AvgSal: 6.3,
    CustNumGen: [],
    purchaces: [],
    total: 0,
    step1: function () {
        for (var i = 0; i < workHours.length; ++i) {
            var custoNumH = getRandomCsuto(this.Minc, this.Maxc);
            this.CustNumGen.push(custoNumH);
        }
        // console.log(this.CustNumGen);
    },
    step2: function () {
        for (var i = 0; i < workHours.length; ++i) {
            var sales = Math.ceil(this.CustNumGen[i] * this.AvgSal);
            this.purchaces.push(sales);
            this.total += sales;
        }
        // console.log(this.purchaces);
    },
    render: function () {
        var container = document.getElementById('container');
        var shpName = document.createElement('p')
        shpName.textContent = this.location;
        var ulE1 = document.createElement('ul');
        for (var i = 0; i < workHours.length; i++) {
            var hourName = document.createElement('p');
            hourName.textContent = workHours[i];
        }
        for (var i = 0; i < workHours.length; i++) {
            var liP = document.createElement('li');
            liP.textContent = this.purchaces[i];
            ulE1.appendChild(liP);
        }
        // container.appendChild(ulE1);
    }
}
Seattle.step1();
Seattle.step2();
Seattle.render();
// ------------------------------

var Tokyo = {
    location: `Tokyo`,
    Minc: 2,
    Maxc: 24,
    AvgSal: 1.2,
    CustNumGen: [],
    purchaces: [],
    total: 0,
    step1: function () {
        for (var i = 0; i < workHours.length; i++) {
            var custoNumH = getRandomCsuto(this.Minc, this.Maxc);
            this.CustNumGen.push(custoNumH);
        }
        // console.log(this.CustNumGen);
    },
    step2: function () {
        for (var i = 0; i < workHours.length; i++) {
            var sales = Math.ceil(this.CustNumGen[i] * this.AvgSal);
            this.purchaces.push(sales);
            this.total += sales;
        }
        // console.log(this.purchaces);
    },
    render: function () {
        var container = document.getElementById('container')
        var ulE1 = document.createElement('ul')
        for (var i = 0; i < workHours.length; i++) {
            var liP = document.createElement('li');
            liP.textContent = this.purchaces[i];
            ulE1.appendChild(liP);
        }
    }
}
Tokyo.step1();
Tokyo.step2();
Tokyo.render();
// ----------------------
var Dubai = {
    location: `Dubai`,
    Minc: 11,
    Maxc: 38,
    AvgSal: 3.7,
    CustNumGen: [],
    purchaces: [],
    total: 0,
    step1: function () {
        for (var i = 0; i < workHours.length; i++) {
            var custoNumH = getRandomCsuto(this.Minc, this.Maxc)
            this.purchaces.push(custoNumH)
        }
    },
    step2: function () {
        for (var i = 0; i < workHours.length; i++) {
            var sales = Math.ceil(this.CustNumGen[i] * this.AvgSal)
            this.purchaces.push(sales);
            this.total += sales;
        }
    },
    render: function () {
        var container = document.getElementById('container');
        var ulE1 = document.createElement('ul');
        for (var i = 0; i < workHours.length; i++) {
            var liP = document.createElement('li');
            liP.textContent = this.purchaces[i];
            ulE1.appendChild(liP);
        }
    }
}
Dubai.step1();
Dubai.step2();
Dubai.render();
// -------------------------
var Paris = {
    location: `{Paris}`,
    Minc: 20,
    Maxc: 38,
    AvgSal: 2.3,
    CustNumGen: [],
    purchaces: [],
    total: 0,
    step1: function () {
        for (var i = 0; i < workHours.length; i++) {
            var custoNumH = getRandomCsuto(this.Minc, this.Maxc)
            this.purchaces.push(custoNumH)
        }
    },
    step2: function () {
        for (var i = 0; i < workHours.length; i++) {
            var sales = Math.ceil(this.CustNumGen[i] * this.AvgSal)
            this.purchaces.push(sales);
            this.total += sales;
        }
    },
    render: function () {
        var container = document.getElementById('container');
        var ulE1 = document.createElement('ul');
        for (var i = 0; i < workHours.length; i++) {
            var liP = document.createElement('li');
            liP.textContent = this.purchaces[i];
            ulE1.appendChild(liP);
        }
    }

}
Paris.step1();
Paris.step2();
Paris.render();
// ----------------
var Lima = {
    location: `Lima`,
    Minc: 2,
    Maxc: 16,
    AvgSal: 4.6,
    CustNumGen: [],
    purchaces: [],
    total: 0,
    step1: function () {
        for (var i = 0; i < workHours.length; i++) {
            var custoNumH = getRandomCsuto(this.Minc, this.Maxc)
            this.purchaces.push(custoNumH)
        }
    },
    step2: function () {
        for (var i = 0; i < workHours.length; i++) {
            var sales = Math.ceil(this.CustNumGen[i] * this.AvgSal)
            this.purchaces.push(sales);
            this.total += sales;
        }
    },
    render: function () {
        var container = document.getElementById('container');
        var ulE1 = document.createElement('ul');
        for (var i = 0; i < workHours.length; i++) {
            var liP = document.createElement('li');
            liP.textContent = this.purchaces[i];
            ulE1.appendChild(liP);
        }
    }
}
Lima.step1();
Lima.step2();
Lima.render();
// --------------
function getRandomCsuto(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomCsuto();