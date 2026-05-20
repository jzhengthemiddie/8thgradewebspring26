function shake() {
  ask_question();
  reveal_fortune();
  animate_shake();
}

function ask_question() {
  // empty for now
}

function reveal_fortune() {
  console.log('revealing!')
  const fortunes = get_fortunes();
  const random = Math.floor( Math.random() * fortunes.length )
   document.getElementById("fortune").textContent = fortunes[random];
}

function get_fortunes() {
  return [
    "It is certain",
    "Aryan says no",
    "Don't count on it",
    "Most likely",
    "I believe so",
    "Definintely not",
    "My sources say no",
    "Yes",
    "Perhaps"
  ];
}

function animate_shake() {
     const ball = document.getElementById("ball");
    ball.classList.remove("shaking");
    void ball.offsetWidth;  // restart the CSS animation
    ball.classList.add("shaking");
}