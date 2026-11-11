"use strict";

function solveEquation(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;
    let arr = [];

    if (discriminant < 0) {
        return arr;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        arr.push(root);
        return arr;
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(root1, root2);
        return arr;
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let p = percent / 100 / 12;
    let s = amount - contribution;

    if (s <= 0) {
        return 0;
    }

    let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));

    let totalAmount = payment * countMonths;

    return Number(totalAmount.toFixed(2));
}