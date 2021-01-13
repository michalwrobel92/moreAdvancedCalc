"use strict";

/* -----------------------------------------------------------
                            NUMBERS
   ----------------------------------------------------------- */
document.querySelector(".num1").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "1";
  console.log("1");
});

document.querySelector(".num2").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "2";
  console.log("2");
});

document.querySelector(".num3").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "3";
  console.log("3");
});

document.querySelector(".num4").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "4";
  console.log("4");
});

document.querySelector(".num5").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "5";
  console.log("5");
});

document.querySelector(".num6").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "6";
  console.log("6");
});

document.querySelector(".num7").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "7";
  console.log("7");
});

document.querySelector(".num8").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "8";
  console.log("8");
});

document.querySelector(".num9").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "0" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "9";
  console.log("9");
});

document.querySelector(".num0").addEventListener("click", function () {
  if (
    document.querySelector(".result").textContent === "=" ||
    document.querySelector(".result").textContent === "+" ||
    document.querySelector(".result").textContent === "–" ||
    document.querySelector(".result").textContent === "*" ||
    document.querySelector(".result").textContent === "/"
  ) {
    document.querySelector(".result").innerHTML = "";
  } else if (document.querySelector(".result").textContent === "0") {
    document.querySelector(".result").innerHTML === "0";
  }
  if (lastAction === "clear") {
    subtotal = 0;
    lastAction = "";
    document.querySelector(".result").textContent = "";
  }
  document.querySelector(".result").innerHTML += "0";
  console.log("0");
});

/* -----------------------------------------------------------
                            OPERATIONS
   ----------------------------------------------------------- */

let subtotal = parseInt("0");
let lastAction = "";

document.querySelector(".add").addEventListener("click", function () {
  if (document.querySelector(".result").textContent === "=") {
    window.alert("You have to give a number, before you try sum!");
  } else {
    if (lastAction !== "") {
      subtotal += parseInt(document.querySelector(".result").textContent);
      lastAction = "+";
      console.log(subtotal);
      document.querySelector(".result").textContent = "+";
    } else {
      subtotal = parseInt(document.querySelector(".result").textContent);
      lastAction = "+";
      console.log(subtotal);
      document.querySelector(".result").textContent = "+";
    }
  }
});

document.querySelector(".substract").addEventListener("click", function () {
  if (document.querySelector(".result").textContent === "=") {
    window.alert("You have to give a number, before you try sum!");
  } else {
    if (lastAction !== "") {
      subtotal -= parseInt(document.querySelector(".result").textContent);
      lastAction = "–";
      console.log(subtotal);
      document.querySelector(".result").textContent = "–";
    } else {
      subtotal = parseInt(document.querySelector(".result").textContent);
      lastAction = "–";
      console.log(subtotal);
      document.querySelector(".result").textContent = "–";
    }
  }
});

document.querySelector(".multiply").addEventListener("click", function () {
  if (document.querySelector(".result").textContent === "=") {
    window.alert("You have to give a number, before you try sum!");
  } else {
    if (lastAction !== "") {
      subtotal *= parseInt(document.querySelector(".result").textContent);
      lastAction = "*";
      console.log(subtotal);
      document.querySelector(".result").textContent = "x";
    } else {
      console.subtotal = parseInt(
        document.querySelector(".result").textContent
      );
      lastAction = "*";
      console.log(subtotal);
      document.querySelector(".result").textContent = "x";
    }
  }
});

document.querySelector(".divide").addEventListener("click", function () {
  if (document.querySelector(".result").textContent === "=") {
    window.alert("You have to give a number, before you try sum!");
  } else {
    if (lastAction !== "") {
      subtotal /= parseInt(document.querySelector(".result").textContent);
      lastAction = "/";
      console.log(subtotal);
      document.querySelector(".result").innerHTML = "/";
    } else {
      subtotal = parseInt(document.querySelector(".result").textContent);
      lastAction = "/";
      console.log(subtotal);
      document.querySelector(".result").textContent = "/";
    }
  }
});

document.querySelector(".equals").addEventListener("click", function () {
  if (document.querySelector(".result").textContent === "=") {
    window.alert("You have to give a number, before you try sum!");
  } else {
    switch (lastAction) {
      case "+":
        subtotal += parseInt(document.querySelector(".result").textContent);
        break;
      case "–":
        subtotal -= parseInt(document.querySelector(".result").textContent);
        break;
      case "*":
        subtotal *= parseInt(document.querySelector(".result").textContent);
        break;
      case "/":
        subtotal /= parseInt(document.querySelector(".result").textContent);
        break;
    }
    console.log(subtotal);
    document.querySelector(".result").innerHTML = subtotal;
    subtotal = 0;
    lastAction = "clear";
  }
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".result").textContent = "=";
  subtotal = 0;
});
