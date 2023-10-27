function convertToAll(fromUnit) {
    const temperature = parseFloat(document.getElementById(fromUnit).value);
    if(isNaN(temperature))
    {
        window.alert('enter valid number');
        document.getElementById(fromUnit).value="";
        return;
    }
    const conversions = {
        celsius: {
            fahrenheit: (temperature * 9/5) + 32,
            kelvin: temperature + 273.15,
            rankine: (temperature + 273.15) * 9/5,
        },
        fahrenheit: {
            celsius: (temperature - 32) * 5/9,
            kelvin: (temperature - 32) * 5/9 + 273.15,
            rankine: temperature + 459.67,
        },
        kelvin: {
            celsius: temperature - 273.15,
            fahrenheit: (temperature - 273.15) * 9/5 + 32,
            rankine: temperature * 1.8,
        },
        rankine: {
            celsius: (temperature - 491.67) * 5/9,
            fahrenheit: temperature - 459.67,
            kelvin: temperature * 5/9,
        },
    };

    const results = document.getElementById("results");
    results.innerHTML = "";

    for (const toUnit in conversions[fromUnit]) {
        results.innerHTML += `${temperature} ${fromUnit} = ${conversions[fromUnit][toUnit].toFixed(2)} ${toUnit}<br>`;
    }
    document.getElementById(fromUnit).value="";
    window.alert('check converterd results in results section!');
}
