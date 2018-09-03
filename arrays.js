var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
   array.unshift("element")
   return []
}
function addElementToEndOfArray (array, element) {
  return [array, ...element]
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push("element")
  return []
}
function accessElementInArray(array, index){
  console.log(array[index])
}
function destructivelyRemoveElementFromBeginningOfArray (array, element) {
  array.shift(element)
  return []
}
function removeElementFromBeginningOfArray (array){
  array.slice(1)
  return []
}
function destructivelyRemoveElementFromEndOfArray (array) {
  array.slice(-1)
  return []
}
function destructivelyAddElementToEndOfArray (array) {
   array.pop()
   return[]
}
function removeElementFromEndOfArray (array) {
  array.slice(0, array.length -1)
  return []
}
