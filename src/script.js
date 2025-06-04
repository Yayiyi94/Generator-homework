function displayPoem(response) {
  new Typewriter("#poem-ai", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#prompt-input");
  let instructionslinesInput = document.querySelector("#prompt-number-input");

  let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
  let context = `You are a gothic poem expert, writing that employs dark and picturesque scenery, startling and melodramatic narrative devices, and an overall atmosphere of exoticism, mystery, fear, and dread, with the knowledge of many languages, and your work is to generate only a ${instructionslinesInput.value} lines poem in basic HTML, taking off the HTML lines. Format the poem using <p> elements. Follow the user instructions. Add an signature at the end of the poem as: by Shecodes Ai with an <br /> element on top of the signature.`;
  let prompt = `User instruccions are: Generate a gothic poem based on this: ${instructionsInput.value}, make sure to do it in the language that was written.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-ai");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "text-generating"> Generating the poem...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
