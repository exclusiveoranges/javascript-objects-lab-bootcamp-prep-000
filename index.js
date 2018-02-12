var recipes = {
  recipes: "type of"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { [key]: value });
}

