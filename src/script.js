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
    "You are a romantic poem expert and your work is to generate only a 6 lines poem in basic HTML, without the HTML lines. Follow the user instructions. Sign at the end of the poem, adding a <br /> element, by Shecodes Ai";
  let prompt = `User instruccions are: Generate a poem in the language Spanish around the word ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
