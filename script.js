// const input = document.getElementsByTagName('input');
document.addEventListener('keydown', function(event) {
    var key = event.key; 
    console.log(key);
    document.getElementById("eventKey").innerHTML= key;
    var code = event.code;
    

    let keyCode = event.which; 
    console.log(keyCode);
    document.getElementById("demo").innerHTML= keyCode;
    document.getElementById("code").innerHTML= code;


    //document.write(`The keyCode is ${key} \n`);
    //document.write("<br>");
    //document.write(`\n The keyCode is ${keyCode}`);
    //document.write("<br>");
    //document.write(`\n The keyCode is ${code}`);
    function myFunction() {
 var value=   document.getElementById("name").value="";
 console.log(value);
}
myFunction();
   
});


const welcome = document.getElementById('welcome');
const generator = document.getElementById('generator');
const head = document.getElementById('keycode');

function keycode(event) {
var key = event.key;
var location = event.location;
var which = event.which;
var code = event.code;
head.textContent = which;
document.getElementById("eventKey").innerHTML= key;
document.getElementById("eventLocation").innerHTML= location;
document.getElementById("eventWhich").innerHTML= which;
document.getElementById("eventCode").innerHTML= code;

//var keys = document.getElementById("");
//console.log(keys);
var char = head.charCodeAt()

console.log(char);
generator.classList.remove("show");
welcome.remove()
}


// document.body.addEventListener ('onkeydown', (event) => {
//     if (event.which === null) {
//         generator.style.display = 'block'
//         welcome.style.display = 'none'
        
//     } else {
//         generator.style.display = 'none'
//         welcome.style.display = 'block'
        

// })

// generator.classList.toggle("show");
