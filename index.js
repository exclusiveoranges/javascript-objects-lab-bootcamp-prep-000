describe('Objects', function() {
  it('defines a `recipes` object', function() {
    expect(typeof recipes).toEqual('object')
  })

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

