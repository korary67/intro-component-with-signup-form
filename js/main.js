let but = document.querySelector("button");
let allInputs = document.querySelectorAll("input");
let emailMassege = document.getElementById("lastName");

function emailValid(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

but.addEventListener("click", function (event) {
  event.preventDefault();

  allInputs.forEach(function (inp) {
    let inputGroup = inp.parentElement;

    if (inp.value.trim() === "") {
      inputGroup.classList.add("error");
    } else {
      inputGroup.classList.remove("error");
    }
  });
});
