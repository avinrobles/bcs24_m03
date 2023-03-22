console.log('Hello, Welcome to De La Salle University!');

function computeSupply(age, amount){
    const max = 99;
    total = Math.round(age * amount);
    console.log('You need ' + total + ' calories/liters to last you until the ripe old age of ' + age);
}

computeSupply(95, 50);
computeSupply(70, 80);
computeSupply(20, 120);