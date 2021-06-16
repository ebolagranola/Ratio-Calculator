let errorIsRunning = false;
let cleanInput = 0;
let indexToCheck;
let errorRunTime = 1500;

$(window).on("load", function() {
  let inputs = ["","","",""];
  let solution;

  $("#ratio-calculate").on("click", function() {
    inputs[0] = $('#inputA').val();
    inputs[1] = $('#inputB').val();
    inputs[2] = $('#inputC').val();
    inputs[3] = $('#inputD').val();

    checkForErrors(inputs);
  });

  function calculateRatio() {
    if (indexToCheck == 0) {
      solution = (inputs[2]/inputs[3])*inputs[1];
    } else if (indexToCheck == 1) {
      solution = inputs[0]/(inputs[2]/inputs[3]);
    } else if (indexToCheck == 2) {
      solution = (inputs[0]/inputs[1])*inputs[3];
    } else if (indexToCheck == 3) {
      solution = inputs[2]/(inputs[0]/inputs[1]);
    }

    $('.ratio-result').children().eq(1).text(parseFloat(solution.toFixed(4)));

    cleanInput = 0;
  }

  function checkForErrors(inputsArray) {
    for (let i = 0; i < inputsArray.length; i++) {
      if (inputsArray[i].trim().length > 0) {
        if (!isNaN(inputsArray[i].trim())) {
            cleanInput++;
        } else {
          throwError('.ratio-result', 'that\'s not a number!');
          break;
        }
      } else {
        indexToCheck = i;
      }
    }

    if (cleanInput < 3) {
      throwError('.ratio-result', "not enough inputs!");
    } else if (cleanInput > 3) {
    throwError('.ratio-result', "too many inputs!");
    } else {
      calculateRatio();
    }
  }

});

function throwError(selector, reason) {
  if (errorIsRunning == false) {
    errorIsRunning = true;
    $(selector).children().eq(1).hide();
    $(selector).append("<p class='error'>ERROR " + reason + "</p>");

    setTimeout(function() {
      $(selector).children().last().remove();
      $(selector).children().eq(1).show();
      errorIsRunning = false;
    }, errorRunTime);
    cleanInput = 0;
  }
}
