let homePts = document.getElementById('home-pts')
let homeCount = 0
let awayPts = document.getElementById('away-pts')
let awayCount = 0

function homeAddPoint() {
    homeCount = homeCount + 1
    homePts.innerText = homeCount
}

function homeAddTwoPoints() {
    homeCount = homeCount + 2
    homePts.innerText = homeCount
}

function homeAddThreePoints() {
    homeCount = homeCount + 3
    homePts.innerText = homeCount
}

function awayAddPoint() {
    awayCount = awayCount + 1
    awayPts.innerText = awayCount
}

function awayAddTwoPoints() {
    awayCount = awayCount + 2
    awayPts.innerText = awayCount
}

function awayAddThreePoints() {
    awayCount = awayCount + 3
    awayPts.innerText = awayCount
 }