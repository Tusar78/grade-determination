const userValue = document.getElementById('input').value;

if (userValue >= 90 && userValue >= 100) {
    console.log('A+');
} else if (userValue >= 80) {
    console.log('B');
} else if (userValue >= 70) {
    console.log('C');
} else if (userValue >= 60) {
    console.log('D');
} else if (userValue >= 50) {
    console.log('F');
}