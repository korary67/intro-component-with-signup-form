let but = document.querySelector("button");
let allInputs = document.querySelectorAll("input");

but.addEventListener("click", function (event) {
  event.preventDefault();

  let isError = false;
  allInputs.forEach(function (inp) {
    let inputGroup = inp.parentElement;

    if (inp.value.trim() === "") {
      isError = true;
      inputGroup.classList.add("error");
    } else {
      inputGroup.classList.remove("error");
    }
  });

  if (!isError) {
    location.reload();
  }
});
