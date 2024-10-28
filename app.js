// Collecting the elements from the DOM
const inputField = document.getElementById('fahrenheitInput');
const displayEl = document.getElementById('displayElement');
const switchModeEl = document.getElementById('switchMode');
const headingEl = document.getElementById('heading');
let conversionMode = "celsius";

switchModeEl.addEventListener('click', (e) => {
    // Toggle the switch mode
    if(conversionMode === "celsius") {
        conversionMode = "fahrenheit";
        inputField.setAttribute('placeholder', "Enter a Celsius Value to Convert")
        headingEl.textContent = "Convert Celsius to Fahrenheit";
        mainAction();
    } else {
        conversionMode = "celsius";
        inputField.setAttribute('placeholder', "Enter a Fahrenheit Value to Convert")
        headingEl.textContent = "Convert Fahrenheit to Celsius";
        mainAction();
    }
    mainAction();
});

function mainAction() {
    // Checking if the input field is empty
    inputField.addEventListener('input', function(){
        if (!inputField.value) {
            displayEl.textContent = 'please enter a numeric value!';
            return;
        };

        // checking the conversion mode
        if (conversionMode === "celsius") {
            const fahrenheit = parseFloat(this.value);
            const celsius = fahrenheitToCelsius(fahrenheit);
            displayEl.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
        } else if(conversionMode === "fahrenheit") {
            const celsius = parseFloat(this.value);
            const fahrenheit = celsiusToFahrenheit(celsius);
            displayEl.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        }
    });
};
mainAction();

// function to convert to celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
};

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
};