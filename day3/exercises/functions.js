// greet(name) – prints a greeting
// toCelsius(fahrenheit) – converts Fahrenheit to Celsius
// isAdult(age) – returns true if age ≥ 18
// randomBetween(min, max) – returns a random number between min and max

const greet = () => {
    console.log("Greetings!")
}

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9
}

const isAdult = (age) => {
    return age >= 18
}

const randomBetween = (min, max) => {
    min = Math.ceil(min);   // Ensure min is a whole number, rounded up
    max = Math.floor(max);  // Ensure max is a whole number, rounded down
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(9, 55))