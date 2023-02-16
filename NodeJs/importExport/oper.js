const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mult = (a, b) => {
    return a * b;
}

const name = "Jarviz";

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

// With Object destructoring in single lOC.
module.exports = { add, sub, mult, name };
