let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let arr = [...drivers, name]
  return arr
}

function prependDriver(name) {
  let arr = [name, ...drivers]
  return arr
}

function removeLastDriver(){
    const newDriversArray = drivers.slice(0,2);
    return newDriversArray;
}

function removeFirstDriver(){
    const newDriversArray = drivers .slice(1);
    return newDriversArray;
}
