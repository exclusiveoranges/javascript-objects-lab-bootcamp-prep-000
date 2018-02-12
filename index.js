var recipes = {
  recipes: "type of"};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue 
