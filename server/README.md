# Server
## How to run
1. Prepare the `.env` file
    - Make a copy of `.env.empty`
    - Rename the copy to `.env`
    - Fill in the environmental variables in there
2. Install packages
    ```bash
    npm install
    ```
3. Start the server
    ```bash
    npm start
    ```
    You should see something like this if the server starts successfully
    ```bash
    > server@1.0.0 start
    > node ./src/server.js

    Server running on port 3001
    Connected to MySQL server
    ```