# nodeserver
This is a basic nodejs server built to facilitate CRUD operations on a user

- [Installation](#installation)
- [Start](#start)
- [Usage](#usage)

## Installation
- Install MongoDB for data storage and Postman as your http client
- Run the below command to install the predefined packages that the server comes with
  ``` bash
  npm install
  ```
## Start
- Before you run the server make sure to check the following:
  - The server scripts in the **package.json** should read *"start":"nodemon sever.js"*
  - All the dependencies and dev depenedenices should be installed
  - Make sure the *.env* file has the **PORT, MONGO_URL, TOKEN & REFRESH TOKEN** 
- In the same root directory run the following command to start the server
  ``` bash
  npm start
  ```
## Usage
- If done correctly your app should be running on *http://locahost:4000*
- Or your desired port number
