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
  var copy = Object.assign({}, recipes)
  delete copy.key;
  return copy;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete recipes.key;
  return object;
}