/*
 * Form schema and data accessor methods;
 */

const { Parser } = require('json2csv');
const { ObjectId } = require('mongodb');
const stringify = require('csv-stringify');
const { getDBReference } = require('../lib/mongo');
const { extractValidFields } = require('../lib/validation');

/*
* Schema describing required/optional fields of a form object.
*/
const FormSchema = {
  name: { required: true },
  birthdate: { required: true },
  phone: { required: true },
  email: { required: true },
  address: { required: true },
  city: { required: true },
  state: { required: true },
  zip: { required: true },
  center: { required: true },
  diet: { required: true },
  needs: { required: false }
};
exports.FormSchema = FormSchema;

/*
 * Executes a DB query to return form responses.
 */
async function getForm() {
  // Currently limited to returning the first 20 form submissions as a result of
  // Mongo cursor limit
  const db = getDBReference();
  const collection = db.collection('forms');
  const forms = await collection.find().toArray();
  return {
    formSubmissions: forms
  };
}
exports.getForm = getForm;

/*
 * Executes a DB query to insert a new form into the database. Returns
 * inserted form object ID.
 */
async function insertNewForm(form) {
  form = extractValidFields(form, FormSchema); // Extract all valid fields from object
  const db = getDBReference();
  const collection = db.collection('forms');
  const result = await collection.insertOne(form);
  return result.insertedId;
}
exports.insertNewForm = insertNewForm;

/*
 * Executes a DB query to return a downloadable CSV for form submissions.
 */
async function getFormsCSV(){
  const db = getDBReference();
  const collection = db.collection('forms');
  // Set fields to return in CSV
  const fields = ['name','birthdate','phone','address','city','state','zip','center','diet','needs'];
  const formSubmissions = await collection.find().toArray();
  const json2csvParser = new Parser({fields}); // Create parser object
  const csvFile = json2csvParser.parse(formSubmissions); // Parse out form submission info
  return csvFile;
}
exports.getFormsCSV = getFormsCSV;
