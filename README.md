# YJA-RegForm-App
All files for YJA registration form web app - Rushil Vora 2019-2020 Director of Tech Work Product

/Form-Frontend contains all of the files for the registration form
The form is hosted on one of my university servers at http://web.engr.oregonstate.edu/~voraru/yja/.
The form itself is bare bones and there isn't any input validation currently.

/API-Server-Files contains all of the files for the API
The API currently has three routes:
- GET <hostname>/forms
- POST <hostname>forms
- GET <hostname>forms/csv

The routes are not authenticated and are accessible at host https://jains.localtunnel.me/.
The URL is a tunnel into my local server instance (development version).
If the form doesn't seem to work, the API server is likely down.
Text me at (503) 929-9530 and I'll restart it.

A MongoDB collection is used to store the form submissions in the MongoDB cloud.
