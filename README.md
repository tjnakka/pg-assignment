STEPS:
1. Clone Both Repositories
  - Sails App: https://github.com/tjnakka/pg-assignment
  - React App: https://github.com/tjnakka/pg-assignment-ui

2. Update .env File
  - location: <path-to-sails-app>/docker/.env
  - update 'MYSQL_DATA_FOLDER' to your local mysql empty folder.
  - update 'SAILS_FOLDER' to your local folder where you have cloned Sails App Repository.
  - update 'REACT_FOLDER' to your local folder where you have cloned React App Repository.

3. Run Docker Compose
  - go to your local Sails App folder
  - open terminal
  - execute 'docker-compose -f "docker/docker-compose.yml" up -d --build'

4. Open Browser
  - go to 'http://localhost:3000/' for React App.
  - go to 'http://localhost:1337/' for Sails App.