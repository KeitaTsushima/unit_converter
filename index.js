"use strict"

const toFeet = 3.281
const toMeters = 1 / 3.281
const toGallomns = 0.264
const toLiters = 1 / 0.264
const toPounds = 2.204
const toKilos = 1 / 2.204

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const calcAreaEl = document.getElementById("calcArea-el")

let inputNumber = 0

convertBtn.addEventListener("click", getInputNumber)

inputEl.addEventListener("input", () => {
    convertBtn.classList.remove("disabled")
})

function getInputNumber() {
    inputNumber = parseFloat(inputEl.value)

    let feet = (Math.round(inputNumber * 1000 * toFeet)/1000).toFixed(3)
    let meters = (Math.round(inputNumber * 1000 * toMeters)/1000).toFixed(3)
    let gallons = (Math.round(inputNumber * 1000 * toGallomns)/1000).toFixed(3)
    let liters = (Math.round(inputNumber * 1000 * toLiters)/1000).toFixed(3)
    let pounds = (Math.round(inputNumber * 1000 * toPounds)/1000).toFixed(3)
    let kilos = (Math.round(inputNumber * 1000 * toKilos)/1000).toFixed(3)

    calcAreaEl.innerHTML = `
    <div class="outputArea">
        <h2>Length (Meter/Feet)</h2>
        <p>${inputNumber} meters = ${feet} feet | ${inputNumber} feet = ${meters} meters</p>
    </div>
        <div class="outputArea">
        <h2>Volume (Liters/Galloms)</h2>
        <p>${inputNumber} liters = ${gallons} gallons | ${inputNumber} gallons = ${liters} liters</p>
    </div>
    <div class="outputArea">
        <h2>Mass (Kilograms/Pounds)</h2>
        <p>${inputNumber} kilos = ${pounds} pounds | ${inputNumber} pounds = ${kilos} kilos</p>
    </div>`
}




