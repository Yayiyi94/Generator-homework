function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-ai", {
    strings: "this is a test for the real thing",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
