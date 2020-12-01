const greeting = (name) => {
    return `Hello ${name ? name : 'World'}`;
}

const sum = (...numbers) => {
    return numbers.reduce((a, b) => (a + b), 0);
}

module.exports = { greeting, sum }