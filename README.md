# YJA-RegForm-App
All files for YJA registration form web app - Rushil Vora 2019-2020 Director of Tech Work Product

/Form-Frontend contains all of the files for the registration form
The form is hosted on one of my university servers at http://web.engr.oregonstate.edu/~voraru/yja/.
The form itself is bare bones and there isn't any input validation currently.

/API-Server-Files contains all of the files for the API
The API currently has three routes:
- GET <hostname>/forms - provides a JSON string containing
- POST <hostname>forms - submits a form submission to the database.
- GET <hostname>forms/csv - provides a downloadable CSV file with all of the submission data stored in the database.

The routes are not authenticated and are accessible at host https://jains.localtunnel.me/.
The URL is a tunnel into my local server instance (development version).
If launching you own API server:
\_launch-api.sh, \_close-api.sh can be run to launch and close a containerized API server.
\_launch-tunnel.sh can be used to run localtunnel with subdomain 'jains'
\* If subdomain is changed, make sure subdomain matches in API URL used in /Form-Frontend/script.js  

A MongoDB collection is used to store the form submissions in the MongoDB cloud.
