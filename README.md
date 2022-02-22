# osc-api
This API provides the front-end client inforation in regards to the Ontario Science Centre exhibits, along with possible challenges users can do at each exhibit.

# Endpoints

There's two endpoints for this api.

GET /api/exhibits?id={id number}

This end ponit returns an exhibit along with name, description, and photoId based on id number. If no id number is entered, all exhibits are returned.

GET /api/challenges?id={id number}

This end ponit returns all challenges based on the exhibit id

