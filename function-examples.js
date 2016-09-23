//var name = whoAmI();
//console.log(name);

function whoAmI() {
  return "David"
}

//var message = goodMorning(); 
//console.log(message);

function goodMorning() {
  console.log("GOOOOOOOOD MORNIIINNNNNG");
}

//var res = addNumbers()
//console.log(res)

function addNumbers() {
  for (var number = 0; number < 10; number++) {
    console.log(number)
  }
}

//var noDavid = eraseDavid(["Bran", "Katya", "Sophia", "Zach", "Jack", "David", "Clay", "Austin", "Grace"])

//console.log(noDavid)

function eraseDavid(namesArr) {
  var davidLocation = namesArr.indexOf("David");
  namesArr.splice(davidLocation, 1);  
  console.log("HERE 1");
  return namesArr;
}

var res = getClassRoster(eraseDavid)
console.log("HERE 2")
//console.log(res);
