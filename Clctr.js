// ------ ---- -------- --------- ---------  JS CODE START  ------- ----- ---- ---- ------- -----//


const display = document.getElementById('display');

// Oprtr func //

function appendToDisplay(input){

  display.value += input;

}

function clearDisplay() {

  display.value = "";

}

function calcute() {

  try {
    display.value = eval( display.value);
  }
  
  catch(error) {
    display.value = "Error";
  }
  
}


