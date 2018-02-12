var recipes = {
  recipes: "type of"};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
  var recipes = Object.assign({}, recipes)
  delete new Object.key;
  new Object();
}

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }