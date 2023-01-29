// luas persegi
function lPersegi() {
    let sisiPersegi = document.getElementById("slPersegi").value;
    const luasPersegi = sisiPersegi * sisiPersegi;
    document.getElementById("lhPersegi").innerHTML = `Luas Persegi Adalah ${luasPersegi} cm`;
}

// keliling persegi
function kPersegi() {
    let sisiPersegi = document.getElementById("skPersegi").value;
    const kelilingPersegi = 4 * sisiPersegi;
    document.getElementById("khPersegi").innerHTML = `Keliling Persegi Adalah ${kelilingPersegi} cm`;
}

// luas lingkaran
function lLingkaran() {
    let jari = document.getElementById("rlLingkaran").value;
    const phi = 3.14
    let luasLingkaran = phi * jari * jari;
    const luasLingkarans = luasLingkaran.toFixed(2);
    document.getElementById("lhLingkaran").innerHTML = `Luas Lingkaran Adalah ${luasLingkarans} cm`;
}

// keliling Lingkaran
function kLingkaran() {
    let jari = document.getElementById("rkLingkaran").value;
    const phi = 3.14
    const kelilingLingkaran = 2 * phi * jari;
    const kelilingLingkarans = kelilingLingkaran.toFixed(2);
    document.getElementById("khLingkaran").innerHTML = `Keliling Lingkaran Adalah ${kelilingLingkarans} cm`;
}

// luas segitiga
function lSegitiga() {
    let alas = document.getElementById("lAlas").value;
    let tinggi = document.getElementById("lTinggi").value;
    const luasSegitiga = 1 / 2 * alas * tinggi;
    document.getElementById("lhSegitiga").innerHTML = `Luas Segitiga Adalah ${luasSegitiga} cm`;
}

// keliling segitiga
function kSegitiga() {
    let sisi1 = document.getElementById("skSegitiga1").value;
    let sisi2 = document.getElementById("skSegitiga2").value;
    let sisi3 = document.getElementById("skSegitiga3").value;
    const kelilingSegitiga = sisi1 * sisi2 * sisi3;
    document.getElementById("khSegitiga").innerHTML = `Keliling Segitiga Adalah ${kelilingSegitiga} cm`;
}

// luas jajar genjang
function lJajar() {
    let alas = document.getElementById("laJajar").value;
    let tinggi = document.getElementById("ltJajar").value;
    const luasJajar = alas * tinggi;
    document.getElementById("lhJajar").innerHTML = `Luas Jajar Genjang Adalah ${luasJajar} cm`;
}

// keliling jajar genjang
function kJajar() {
    let saJajar = document.getElementById("saJajar").value;
    let ssJajar = document.getElementById("ssJajar").value;

    let saJajars = parseInt(saJajar);
    let ssJajars = parseInt(ssJajar);
    const kelilingJajar = 2 * (saJajars + ssJajars);
    document.getElementById("khJajar").innerHTML = `Luas Jajar Genjang Adalah ${kelilingJajar} cm`;
}

// luas persegi panjang
function lPanjang() {
    let panjang = document.getElementById("plPanjang").value;
    let lebar = document.getElementById("pkPanjangr").value;
    const luas = panjang * lebar;
    document.getElementById("lhPanjang").innerHTML = `Luas Persegi Panjang Adalah ${luas} cm`;
}

// keliling persegi panjang
function kPanjang() {
    let panjang = document.getElementById("pkPanjang").value;
    let lebar = document.getElementById("lpPanjang").value;
    const keliling = 2 * (panjang * lebar);
    document.getElementById("khPanjang").innerHTML = `Keliling Persegi Panjang Adalah ${keliling} cm`;
}

// imt


function hitungIMT() {
    let tinggiBadan = document.getElementById("tinggiBadan").value;
    let beratBadan = document.getElementById("beratBadan").value;
    let bmi = (beratBadan / (tinggiBadan * tinggiBadan) * 10000).toFixed(1);
    let hasil

    if (bmi < 17) {
        hasil = 'Berat Badan kamu <strong>Sangat Kurus</strong>';
    } else if (bmi >= 17.0 && bmi < 18.5) {
        hasil = 'Berat Badan kamu <strong>Kurus</strong>';
    } else if (bmi >= 18.5 && bmi < 25.0) {
        hasil = 'Berat Badan kamu <strong>Normal</strong>';
    } else if (bmi >= 25.0 && bmi < 27.0) {
        hasil = 'Berat Badan Kamu <strong>Gemuk</strong>';
    } else if (bmi >= 27.0) {
        hasil = 'Berat Badan Kamu <strong>Obesitas</strong>';
    }
    console.log(bmi)

    document.getElementById("hasilIMT").innerHTML = hasil;
    document.getElementById("ankaIMT").innerHTML = bmi;
}

// calculator
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) {
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      // Append the decimal point
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('operator')) {
      handleOperator(target.value);
      updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
      updateDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      resetCalculator();
      updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });
