<h1 align="center">
  NPS
 </h1>
 
 <p align="center">
   Made with :coffee: by <a href="https://www.linkedin.com/in/nicholas-cabral-dos-anjos-13b3981a7/" target="_blank"> Nicholasscabral </a> 
 </p>
 
 <p align="center">
   <img src="https://img.shields.io/github/languages/top/nicholasscabral/nps-api"> 
   <img src="https://img.shields.io/github/repo-size/nicholasscabral/nps-api"> 
   <img src="https://img.shields.io/badge/License-MIT-green.svg"> 
   <img src="https://img.shields.io/badge/PRs-welcome-brightgreen">
 </p>
 
 <div align="center">
  
  [Technologies](#construction_worker-built-with) | 
  [Installing](#arrow_down-installing) |
  [Configuring](#gear-configuring) | 
  [How to run](#triangular_flag_on_post-usage) |
  [Tests](#heavy_check_mark-tests) |
  [License](#label-license)
   
 </div>
 
 ## :construction_worker: Built with
 <ul>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li><a href="https://www.sqlite.org/index.html">SQLite</a></li>
    <li><a href="https://typeorm.io/#/">TypeORM</a></li>
    <li><a href="https://jestjs.io/">Jest</a></li>
 </ul>

 ## :arrow_down: Installing
 
 <p>You can run:</p>

 ```
 $ yarn
 ```

 <p>Or:</p>

 ```
 $ npm install
 ```

 ## :gear: Configuring
 <p>The application use <a href="https://www.sqlite.org/index.html">SQLite</a> as database</p>
 
 ### SQLite
 <p>Is responsible for storing all the users and surveys</p>
 <li><a href="https://typeorm.io/#/">typeorm</a></li>

 ### Migrations
 <p>Running the database migrations.</p>

 ```
 $ yarn typeorm migration:run
 ```
 
 ## :triangular_flag_on_post: Usage
 <p>to start up the server run:</p>

 ```
 $ yarn dev
 ```

 <p>Or:</p>

 ```
 $ npm dev
 ```

 ### Routes
  |  route | HTTP method  | params  | description  |
  |---|---|---|---|
  | /users  |  POST | body with user name and email  | Create a new user  |
  | /surveys  | POST  | body with survey title and description  | Create a new survey  |
  | /surveys  | GET  | -  | Lists all surveys  |
  | /sendMail  | POST  | body with user email and survey_id  | Send the NPS to the user  |
  | /answers | GET | -  | Lists survey answers  |
  | /answers/:value  | GET  | survey value as url parameter and surveyUser id as query parameter  | Set user's avaliation to one survey  |
  | /nps/:survey_id  | GET  | survey_id as url parameter  | Show survey NPS  |
 ---
  ### Requests
  * `POST /users`
  <br>
  <p>Request body</p>

  ```json
 {
   "name": "Name LastName",
   "email": "Name@example.com"
 }
  ```
 ---
 * `POST /surveys`
  <br>
  <p>Request body</p>

  ```json
  {
    "title": "this is a survey test",
    "description": "this is the description of a test"
  }
  ```
  ---
  * `POST /sendMail`
  <br>
  <p>Request body</p>

  ```json
  {
    "email": "name@example.com",
    "survey_id": "88312fa3-fdc9-4ee6-a571-5a9eefddecef"
  }
  ```
  ---
 ## :heavy_check_mark: Tests
 <p><a href="https://jestjs.io/">Jest</a> was chosen to test this app. You can run</p>

 ```
 $ yarn test
 ```

 <p>Or:</p>

 ```
 $ npm run test
 ```
 
 
 ## :label: License
 <ul>
   <li> MIT License -<a href="https://github.com/nicholasscabral/nps-api/blob/master/LICENSE"> About </a></li>
 </ul>
 
