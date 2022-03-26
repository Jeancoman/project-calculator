//Variables Globales

let firstValue = "";
let secondValue = "";
let thirdValue = "";
let addClick = 0;
let subsClick = 0;
let multiClick = 0;
let diviClick = 0;
let remaClick = 0;
let pointClick = 0;
let operatorClick = 0;
let ifClickedClicked = 0;
let result = 0;
let sign = "";
let secondSign = "";
let negative = 0;
let negativeSign = "";

// Variables Globales

// Funciones Logísticas

function storeValue(string) {
  if (
    (result > 0 || result < 0) &&
    ifClickedClicked === 1 &&
    thirdValue.length <= 19
  ) {
    return (thirdValue += string);
  } else if (ifClickedClicked === 1 && secondValue.length <= 19) {
    return (secondValue += string);
  } else if (ifClickedClicked === 0 && firstValue.length <= 19) {
    return (firstValue += string);
  } else if ((result > 0 || result < 0) && ifClickedClicked == 0) {
    return;
  }
}

function ifClicked(event) {
  if (result > 0 || result < 0) {
    switch (true) {
      case event === "+" &&
        (result > 0 || result < 0) &&
        thirdValue.length === 0:
        ifClickedClicked = 1;
        addClick = 1;
        subsClick = 0;
        multiClick = 0;
        diviClick = 0;
        remaClick = 0;
        secondSign = "+";
        break;
      case event === "-" &&
        (result > 0 || result < 0) &&
        thirdValue.length === 0:
        ifClickedClicked = 1;
        subsClick = 1;
        addClick = 0;
        multiClick = 0;
        diviClick = 0;
        remaClick = 0;
        secondSign = "-";
        break;
      case event === "*" &&
        (result > 0 || result < 0) &&
        thirdValue.length === 0:
        ifClickedClicked = 1;
        multiClick = 1;
        addClick = 0;
        subsClick = 0;
        diviClick = 0;
        remaClick = 0;
        secondSign = "x";
        break;
      case event === "/" &&
        (result > 0 || result < 0) &&
        thirdValue.length === 0:
        ifClickedClicked = 1;
        diviClick = 1;
        addClick = 0;
        subsClick = 0;
        multiClick = 0;
        remaClick = 0;
        secondSign = "÷";
        break;
      case event === "%" &&
        (result > 0 || result < 0) &&
        thirdValue.length === 0:
        ifClickedClicked = 1;
        remaClick = 1;
        addClick = 0;
        subsClick = 0;
        multiClick = 0;
        diviClick = 0;
        secondSign = "%";
        break;
      case event === ".":
        if (
          pointClick == 0 &&
          firstValue.length > 0 &&
          secondValue.length > 0 &&
          (result > 0 || result < 0) &&
          thirdValue.includes(".") === false
        ) {
          thirdValue += ".";
        } else console.log("Error");
        break;
    }
  } else {
    if (event === "-" && firstValue.length === 0) {
      negative = 1;
      negativeSign = "-";
    }
    switch (true) {
      case event === "+" && firstValue.length > 0 && secondValue.length === 0:
        ifClickedClicked = 1;
        addClick = 1;
        subsClick = 0;
        multiClick = 0;
        diviClick = 0;
        remaClick = 0;
        sign = "+";
        break;
      case event === "-" && firstValue.length > 0 && secondValue.length === 0:
        ifClickedClicked = 1;
        subsClick = 1;
        addClick = 0;
        multiClick = 0;
        diviClick = 0;
        remaClick = 0;
        sign = "-";
        break;
      case event === "*" && firstValue.length > 0 && secondValue.length === 0:
        ifClickedClicked = 1;
        multiClick = 1;
        addClick = 0;
        subsClick = 0;
        diviClick = 0;
        remaClick = 0;
        sign = "x";
        break;
      case event === "/" && firstValue.length > 0 && secondValue.length === 0:
        ifClickedClicked = 1;
        diviClick = 1;
        addClick = 0;
        subsClick = 0;
        multiClick = 0;
        remaClick = 0;
        sign = "÷";
        break;
      case event === "%" && firstValue.length > 0 && secondValue.length === 0:
        ifClickedClicked = 1;
        remaClick = 1;
        addClick = 0;
        subsClick = 0;
        multiClick = 0;
        diviClick = 0;
        sign = "%";
        break;
      case event === ".":
        if (
          pointClick == 0 &&
          firstValue.length > 0 &&
          secondValue.length == 0
        ) {
          pointClick = 1;
          firstValue += ".";
        } else if (secondValue.includes(".") === true) {
          console.log("Error");
        } else if (
          pointClick == 1 &&
            firstValue.length > 0 &&
            secondValue.length > 0 &&
            secondValue.includes(".") === false)
         {
          secondValue += ".";
          pointClick = 0;
        }
        break;
    }
  }
}

function allClear() {
  firstValue = "";
  secondValue = "";
  thirdValue = "";
  addClick = 0;
  subsClick = 0;
  multiClick = 0;
  diviClick = 0;
  remaClick = 0;
  pointClick = 0;
  operatorClick = 0;
  ifClickedClicked = 0;
  result = 0;
  sign = "";
  secondSign = "";
  negative = 0;
  negativeSign = "";
}

function remove(string) {
  return string.substring(0, string.length - 1);
}

function notAllClear() {
  if (result > 0 || result < 0) {
    thirdValue = remove(thirdValue);
    if (thirdValue.length === 0) {
      switch (ifClickedClicked === 1) {
        case addClick === 1:
          addClick = 0;
          secondSign = "";
          ifClickedClicked = 0;
          break;
        case subsClick === 1:
          subsClick = 0;
          secondSign = "";
          ifClickedClicked = 0;
          break;
        case multiClick === 1:
          multiClick = 0;
          secondSign = "";
          ifClickedClicked = 0;
          break;
        case diviClick === 1:
          diviClick = 0;
          secondSign = "";
          ifClickedClicked = 0;
          break;
        case remaClick === 1:
          remaClick = 0;
          secondSign = "";
          ifClickedClicked = 0;
          break;
      }
      if (thirdValue.includes(".") === false) {
        pointClick = 0;
      }
      return thirdValue;
    }
  } else {
    if (secondValue.length === 0 && ifClickedClicked === 1) {
      switch (ifClickedClicked == 1) {
        case addClick === 1:
          addClick = 0;
          sign = "";
          ifClickedClicked = 0;
          break;
        case subsClick === 1:
          subsClick = 0;
          sign = "";
          ifClickedClicked = 0;
          break;
        case multiClick === 1:
          multiClick = 0;
          sign = "";
          ifClickedClicked = 0;
          break;
        case diviClick === 1:
          diviClick = 0;
          sign = "";
          ifClickedClicked = 0;
          break;
        case remaClick === 1:
          remaClick = 0;
          sign = "";
          ifClickedClicked = 0;
          break;
      }
    }
    else if (secondValue.length === 0) {
      firstValue = remove(firstValue);
      if (firstValue.includes(".") === false) {
        pointClick = 0;
      }
      if (negative === 1 && firstValue.length === 0) {
        negative = 0;
        negativeSign = "";
      }
      return firstValue;
    } else if (firstValue.length > 0 && secondValue.length > 0) {
      ifClickedClicked = 0;
      secondValue = remove(secondValue);
      if (secondValue.includes(".") === false) {
        pointClick = 0;
      }
      return secondValue;
    }
  }
}

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function addition(a, b) {
  return round(a + b, 3);
}

function substraction(a, b) {
  return round(a - b, 3);
}

function multiplication(a, b) {
  return round(a * b, 3);
}

function division(a, b) {
  return round(a / b, 3);
}

function remainder(a, b) {
  return round(a % b, 3);
}

function operator() {
  if (result > 0 || result < 0) {
    firstValue = "";
    secondValue = "";
    ifClickedClicked = 0;
    if (addClick == 1) {
      return (result = addition(result, thirdValue * 1)), (thirdValue = "");
    } else if (subsClick == 1) {
      return (result = substraction(result, thirdValue)), (thirdValue = "");
    } else if (multiClick == 1) {
      return (result = multiplication(result, thirdValue)), (thirdValue = "");
    } else if (diviClick == 1) {
      return (result = division(result, thirdValue)), (thirdValue = "");
    } else if (remaClick == 1) {
      return (result = remainder(result, thirdValue)), (thirdValue = "");
    }
  } else {
    ifClickedClicked = 0;
    if (addClick == 1 && negative == 1) {
      return (
        (result = addition(-(firstValue * 1), secondValue * 1)),
        (negative = 0),
        (negativeSign = "")
      );
    } else if (subsClick == 1) {
      return (
        (result = substraction(-firstValue, secondValue)),
        (negative = 0),
        (negativeSign = "")
      );
    } else if (multiClick == 1) {
      return (
        (result = multiplication(-firstValue, secondValue)),
        (negative = 0),
        (negativeSign = "")
      );
    } else if (diviClick == 1) {
      return (
        (result = division(-firstValue, secondValue)),
        (negative = 0),
        (negativeSign = "")
      );
    } else if (remaClick == 1) {
      return (
        (result = remainder(-firstValue, secondValue)),
        (negative = 0),
        (negativeSign = "")
      );
    }
    if (addClick == 1) {
      return (result = addition(firstValue * 1, secondValue * 1));
    } else if (subsClick == 1) {
      return (result = substraction(firstValue, secondValue));
    } else if (multiClick == 1) {
      return (result = multiplication(firstValue, secondValue));
    } else if (diviClick == 1) {
      return (result = division(firstValue, secondValue));
    } else if (remaClick == 1) {
      return (result = remainder(firstValue, secondValue));
    }
  }
}

// Display

const display = document.querySelector(".text");
const upDisplay = document.querySelector(".uptext");
document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.cssText = "background-color: #e0e0e0";
  });
  element.addEventListener("mouseleave", () => {
    element.style.cssText = "background-color: ";
  });
  element.addEventListener("mousedown", () => {
    element.style.cssText = "background-color: #d9d9d9";
  });
  element.addEventListener("mouseup", () => {
    element.style.cssText = "background-color: #e0e0e0 ";
  });
});

document.querySelectorAll(".btn").forEach((element) =>
  element.addEventListener("click", () => {
    if (result > 0 || result < 0) {
      if (thirdValue.length > 0) {
        upDisplay.style.marginBottom = "-5px";
      } else {
        upDisplay.style.marginBottom = "";
      }
      if (ifClickedClicked === 0 && thirdValue.length === 0) {
        upDisplay.textContent = "";
        display.textContent = `${result}`;
      } else if (ifClickedClicked === 0 && thirdValue.length > 0) {
        upDisplay.textContent = `${result} ${secondSign}`;
        display.textContent = `${thirdValue}`;
      } else if (ifClickedClicked === 1) {
        upDisplay.textContent = `${result} ${secondSign}`;
        display.textContent = `${thirdValue}`;
      }
    } else {
      if (firstValue.length > 0 && secondValue.length > 0) {
        upDisplay.style.marginBottom = "-5px";
      } else {
        upDisplay.style.marginBottom = "";
      }
      if (ifClickedClicked === 0 && secondValue.length === 0) {
        upDisplay.textContent = "";
        display.textContent = `${negativeSign}${firstValue}`;
      } else if (ifClickedClicked === 0 && secondValue.length > 0) {
        upDisplay.textContent = `${negativeSign}${firstValue} ${sign}`;
        display.textContent = `${secondValue}`;
      } else if (ifClickedClicked === 1) {
        upDisplay.textContent = `${negativeSign}${firstValue} ${sign}`;
        display.textContent = `${secondValue}`;
      }
    }
  })
);

document.addEventListener(
  "keydown",
  (event) => {
    switch (true) {
      case event.key == 1:
        storeValue("1");
        break;
      case event.key == 2:
        storeValue("2");
        break;
      case event.key == 3:
        storeValue("3");
        break;
      case event.key == 4:
        storeValue("4");
        break;
      case event.key == 5:
        storeValue("5");
        break;
      case event.key == 6:
        storeValue("6");
        break;
      case event.key == 7:
        storeValue("7");
        break;
      case event.key == 8:
        storeValue("8");
        break;
      case event.key == 9:
        storeValue("9");
        break;
      case event.key == 0:
        storeValue("0");
        break;
      case event.key == ".":
        ifClicked(".");
        break;
      case event.key == "+":
        ifClicked("+");
        break;
      case event.key == "-":
        ifClicked("-");
        break;
      case event.key == "*":
        ifClicked("*");
        break;
      case event.key == "/":
        ifClicked("/");
        break;
      case event.key == "%":
        ifClicked("%");
        break;
      case event.key == "Backspace":
        notAllClear();
        break;
      case event.key == "Escape":
        allClear();
        break;
      case event.key == "Enter":
        operator();
        break;
      default:
        break;
    }
    if (result > 0 || result < 0) {
      if (thirdValue.length > 0) {
        upDisplay.style.marginBottom = "-5px";
      } else {
        upDisplay.style.marginBottom = "";
      }
      if (ifClickedClicked === 0 && thirdValue.length === 0) {
        upDisplay.textContent = "";
        display.textContent = `${result}`;
      } else if (ifClickedClicked === 0 && thirdValue.length > 0) {
        upDisplay.textContent = `${result} ${secondSign}`;
        display.textContent = `${thirdValue}`;
      } else if (ifClickedClicked === 1) {
        upDisplay.textContent = `${result} ${secondSign}`;
        display.textContent = `${thirdValue}`;
      }
    } else {
      if (firstValue.length > 0 && secondValue.length > 0) {
        upDisplay.style.marginBottom = "-5px";
      } else {
        upDisplay.style.marginBottom = "";
      }
      if (ifClickedClicked === 0 && secondValue.length === 0) {
        upDisplay.textContent = "";
        display.textContent = `${negativeSign}${firstValue}`;
      } else if (ifClickedClicked === 0 && secondValue.length > 0) {
        upDisplay.textContent = `${negativeSign}${firstValue} ${sign}`;
        display.textContent = `${secondValue}`;
      } else if (ifClickedClicked === 1) {
        upDisplay.textContent = `${negativeSign}${firstValue} ${sign}`;
        display.textContent = `${secondValue}`;
      }
    }
  },
  false
);
