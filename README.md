<h1>GDSC PLM GA APP</h1>

### How to get started

- Clone the repo by running `git clone https://github.com/GDSC-PLM/GDSC-PLM-GA-APP.git` command in your terminal
- Open the GDSC-PLM-GA-APP folder in vscode
- Run `npm i` or `yarn install`
- Locally host the web app with `npm run start` or `yarn start` - In case you're receiving an error when locally hosting the web app, rename the folder to `gdsc-plm-ga-app`

### Firebase Set up

- Create a new file called `.env` and copy the content in the `.env.example` file
- Given that you have the keys that would link the app to GDSC PLM's Firestore database, start filling out the `.env` file with the appropriate values for each key.
- That's it! You've successfully linked up the web app to GDSC PLM's Firestore database.

### Storybook

- Run `yarn storybook` to view individual components
