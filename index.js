// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name); 
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name); 
}

function destructivelyRemoveLastDriver() {
    drivers.pop(); 
}

function destructivelyRemoveFirstDriver() {
    drivers.shift(); 
}


function appendDriver(name) {
   const x = [...drivers,name]; 
   return x
}

function prependDriver(name) {
    const x = [name,...drivers]; 
    return x
 }

 function removeFirstDriver() {
    const x =  drivers.slice(1);
    return x
 }

 function removeLastDriver () {
    const x = drivers.slice(0, drivers.length - 1);
    return x
  }