/* eslint-disable max-statements */
// Refactoring Calculator

const READLINE = require("readline-sync");
const DATAMESSAGES = require("./calculator_messages.json");
const LANGUAGE = "en";
// console.log(DATAMESSAGES);

function prompt(msg) {
  console.log(`\n=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function messages (message, lang = LANGUAGE) {
  return DATAMESSAGES[lang][message];
}

(function intro() {
  prompt(messages("intro", LANGUAGE));

  prompt(`${messages("firstNumber", LANGUAGE)}`);
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(`${messages("invalidNumber", LANGUAGE)}`);
    number1 = READLINE.question();
  }

  prompt(`${messages("secondNumber", LANGUAGE)}`);
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(`${messages("invalidNumber", LANGUAGE)}`);
    number2 = READLINE.question();
  }

  prompt(
    "Select an arithmetic operator:\n1: Addition\n2: Multiplication\n3: Division\n4: Subtraction\n"
  );
  let operation = +READLINE.question();

  while (![1, 2, 3, 4].includes(operation)) {
    prompt(`Invalid number. You must choose 1, 2, 3, or 4: `);
    operation = +READLINE.question();
  }

  let output;
  switch (operation) {
    case 1:
      output = Number(number1) + Number(number2);
      break;

    case 2:
      output = Number(number1) * Number(number2);
      break;

    case 3:
      output = Number(number1) / Number(number2);
      break;

    case 4:
      output = Number(number1) - Number(number2);
      break;

    default:
      prompt("\nInvalid selection.\nEnd of program.");
      break;
  }

  prompt(`The result is ${output}\n`);

  let answer;
  prompt("Do you want to perform new calculation?\n1: yes\n2: no");
  answer = +READLINE.prompt();

  while (![1, 2].includes(answer)) {
    prompt(`Invalid number. You must choose 1: for yes or, 2: for no `);
    answer = +READLINE.question();
  }

  switch (answer) {
    case 1:
      intro();
      break;
    case 2:
      break;
  }
})();

/*

Extract messages to json file:

decide which messages need extracting and make a list
  - start with 1 and test each as they work

create file: calculator_messages.json
  construct json object:
    "keys" are messageName strings : values are message strings where required

in js file: let message = require("./calculator_messages.json")

access object values via key name and use messages as required

*/

/*

Internationalization:

Allow the messages to be read by users of a different language
  - identify by ISO language country code: en, es
  - leave key the same but translate the value in json file
  - inside an object {}
    - nest messages under top level country "key": {"value", "value"}
      - repeat for each country translation:
      {
        "en" : {
          // "messageValuesHere"
        },
        "es" : {
          // "messageValuesHere"
        }
      }
  - change the way the messages are accessed in program considering country key

  - move this functionality to a function:
      - function takes: message, lang (default lang="en")
        - lang first required to get the message in that language
*/
