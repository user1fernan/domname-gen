/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domname-gen").innerHTML = domainGenerator();
  });
  console.log("Hi Sebas and Luis");
};

let domainGenerator = () => {
  let pron = ["the", "my", "your", "their", "our", "his", "her"];

  let adj = [
    "last",
    "cute",
    "small",
    "tasty",
    "amazing",
    "salty",
    "sugary",
    "heavy",
    "happy",
    "sad",
    "green",
    "red"
  ];

  let noun = [
    "of",
    "rock",
    "lamp",
    "chair",
    "wig",
    "apple",
    "leaf",
    "cannoli",
    "bolognesa"
  ];

  let extension = [".us", ".com", ".cl", ".net", ".io"];

  let pronIndex = Math.floor(Math.random() * pron.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extensionIndex = Math.floor(Math.random() * extension.length);

  if (pron[pronIndex] == "the") {
    return pron[0] + "" + adj[0] + "" + noun[0] + extension[0];
  } else {
    return (
      pron[pronIndex] +
      "" +
      adj[adjIndex] +
      "" +
      noun[nounIndex] +
      "" +
      extension[extensionIndex]
    );
  }
};
