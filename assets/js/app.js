function myFunc() {    
const userValue = document.getElementById('inp').value;
let result = document.getElementById('demo');
if ((userValue >= 90) && (userValue >= 100)) {
    console.log('A+');
    result.innerHTML = 'A+';
} else if (userValue >= 80) {
    console.log('B');
    result.innerHTML = 'B';
} else if (userValue >= 70) {
    console.log('C');
    result.innerHTML = 'c';
} else if (userValue >= 60) {
    console.log('D');
    result.innerHTML = 'D';
} else if (userValue <= 50) {
    console.log('F');
    result.innerHTML = 'F';
}
}