
function countCharacters(){
  var text = document.querySelector(".app-textarea");
  var counter = document.querySelector(".counter");
  var resetBtn = document.querySelector(".btn");
  var maxTextLength = 250;
  counter.innerHTML = maxTextLength;

  function displayCounter(){
    var textValue = text.value;
    var counterRemain = maxTextLength - textValue.length;
    if(textValue.length === 0){
      counter.innerHTML = maxTextLength;
    }else if(textValue.length <= 239){
      counter.style.color = "#59b542";
      counter.innerHTML = "-" + counterRemain.toString();
    }else if(textValue.length <= 249){
      hideWarning();
      counter.style.color = "red";
      counter.innerHTML = "-" + counterRemain.toString();
    }else if(textValue.length == 250){
      counter.style.color = "red";
      counter.innerHTML = counterRemain.toString();
      showWarning();
    }
  }
  function showWarning(){
    var message = document.querySelector(".app-warning");
    message.style.opacity = 1;
    message.style.transform = "translateX(0%) translateY(50%) scale(1, 1)";
  }
  function hideWarning(){
    var message = document.querySelector(".app-warning");
    message.style.opacity = 0;
    message.style.transform = "translateX(0%) translateY(80%) scale(.8, .8)";
  }
  function reset(){
    text.value = "";
    counter.style.color = "#59b542";
    counter.innerHTML = maxTextLength;
    hideWarning();
  }
  text.addEventListener("input", displayCounter);
  resetBtn.addEventListener("click", reset);
}
countCharacters();
