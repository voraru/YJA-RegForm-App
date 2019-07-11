/*
 * Performs data validation on an object by verifying that it contains
 * all required fields specified in a given schema.
 * Returns true if the object is valid agianst the schema.
 */
exports.validateAgainstSchema = function (obj, schema) {
  return obj && Object.keys(schema).every(
    field => !schema[field].required || obj[field]
  );
};

/*
 * Extracts all fields from an object that is valid.
 * Returns a new object containing all valid fields extracted from the
 * original object.
 */
exports.extractValidFields = function (obj, schema) {
  let validObj = {};
  Object.keys(schema).forEach((field) => {
    if (obj[field]) {
      validObj[field] = obj[field];
    }
  });
  return validObj;
};
