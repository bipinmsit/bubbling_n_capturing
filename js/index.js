// First capturing then bubbling executed.
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child clicked");
    e.stopPropagation();
  },
  false
);
