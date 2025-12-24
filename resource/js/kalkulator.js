function appendToDisplay(value) {
  const display = document.getElementById("display");

  if (value === '^') {
    try {
      const hasil = eval(display.value);
      const newWindow = window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "_blank",
        "toolbar=no,scrollbars=no,resizable=yes,top=0,left=0,width=" + screen.width + ",height=" + screen.height
    );
      display.value = hasil * hasil;
    } catch {
      display.value = "Error";
    }
  } else {
    display.value += value;
  }
}


function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
  if (display.value === "") {
    return;
  }
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
        const newWindow = window.open(
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "_blank",
          "toolbar=no,scrollbars=no,resizable=yes,top=0,left=0,width=" + screen.width + ",height=" + screen.height
      );
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

document.addEventListener("keydown", e => {
    if ("0123456789+-*/".includes(e.key)) {
      display.value += e.key;
    } else if (e.key === "Enter" || e.key === "=") {
      display.value = eval(display.value);
      const newWindow = window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "_blank",
        "toolbar=no,scrollbars=no,resizable=yes,top=0,left=0,width=" + screen.width + ",height=" + screen.height
    );
    } else if (e.key === "Backspace") {
      display.value = display.value.slice(0, -1);
    } else if (e.key === "^") {
      try{
        appendToDisplay('^');
      } catch (error){
        document.getElementById("display").value = "";
      }
    }
  });
  