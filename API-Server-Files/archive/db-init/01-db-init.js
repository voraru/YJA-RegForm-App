/*
 * DB Init file to insert sample form submissions.
 */
db.forms.insertMany([
  {
      "name": "Sample Jain 1",
      "birthdate": "01/01/2000",
      "phone": "1234567890",
      "email": "sample1@gmail.com",
      "address": "123 Jain Way",
      "city": "Portland",
      "state": "OR",
      "zip": "97229",
      "center": "Jain Society of the Internet",
      "diet": "Vegan",
      "needs": "Allergic to peanuts"
    },
    {
      "name": "Sample Jain 2",
      "birthdate": "01/01/2000",
      "phone": "0987654321",
      "email": "sample2@gmail.com",
      "address": "456 Jain Dr",
      "city": "Portland",
      "state": "OR",
      "zip": "97229",
      "center": "Jain Society of the Internet",
      "diet": "Vegetarian",
      "needs": "N/A"
    }
]);
