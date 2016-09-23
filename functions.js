function piratifyWords(words) {
  return words.replace("hello", "ahoy");
}

function piratifyAddition(number1, number2) {
  return number1 + number2 + 1
}
 
function setPageText(text) {
  document.body.innerHTML = text;
}

function transformAndSetPageText(modifier) {
  return function(text) {
    document.body.innerHTML = modifier(text);
  }  
}

function getClassRoster(callback) {
  setTimeout(function() {
    callback(["Bran", "Katya", "Sophia", "Zach", "Jack", "David", "Clay", "Austin", "Grace"])  
  }, 1500)
}