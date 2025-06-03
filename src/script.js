function displayPoem(response) {
  console.log("Generated");

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

  let apiKey = "10fa90a2o832483bf734tfe8a27fcdad";
  let context =
    "You are a romantic poem expert with the knowledge of many languages and your work is to generate only a 6 lines poem in basic HTML, without the HTML lines. Follow the user instructions. Sign at the end of the poem, adding a <br /> element on top of it, as: by Shecodes Ai.";
  let prompt = `User instruccions are: Generate a poem based on this: ${instructionsInput.value}, make sure to do it in the language that was written.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-ai");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "text-generating"> Generating the poem...</div>`;

  console.log("Generating Poem");

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
