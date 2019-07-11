/*
 * API sub-router for form collection endpoints.
 */

const router = require('express').Router();
const { validateAgainstSchema } = require('../lib/validation');
const {
  FormSchema,
  getForm,
  insertNewForm,
  getFormsCSV
} = require('../models/form');

/*
 * Route to return a list of all submitted forms.
 */
router.get('/', async (req, res) => {
  try {
    const forms = await getForm();
    res.status(200).send(forms); // Returns all submitted forms if successful
  } catch (err) {
    res.status(500).send({
      error: "Error fetching forms.  Try again later."
    });
  }
});

/*
 * Route to insert a new form.
 */
router.post('/', async (req, res) => {
  const form = req.body;
  if (validateAgainstSchema(form, FormSchema)) {
    try {
      const id = await insertNewForm(form);
      res.status(201).send({
        id: id
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "Failed to insert form. Try again later."
      });
    }
  } else {
    res.status(400).json({
      error: "Request body is not a valid form object."
    });
  }
});

/*
 * Route to return a CSV download of all submitted forms.
 */
router.get('/csv', async (req, res) => {
  try {
    const csv = await getFormsCSV();
    res.attachment('forms.csv');
    res.status(200).send(csv); // Returns a CSV file if successful
  } catch (err) {
    res.status(500).send({
      error: "Error sending form CSV. Try again later."
    });
  }
});

module.exports = router;
