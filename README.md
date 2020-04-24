## Getting started

Technologies used in this project are the following:
 - Node.js
 - Expo
 - React-Native
 - Express
 - MongoDB

Follow the instructions below to run the project
 1. Make sure to have [Node.js](https://nodejs.org/en/) installed. "Current" version is the most updated version while "LTS" version is for long term support which provides greater security and stability
 2. Clone the repository onto your local machine. [How to clone git repository?](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
 3. Navigate to the repository and install expo-cli on command line. 'npm install -g expo-cli' This will be used to run the mobile app. We are installing this package globally so we can use the command line interface
 4. Install package dependencies. You can do this manually by executing the following commands: 'npm i', 'cd client', and 'npm i' or you can run the script to install all dependencies 'npm run-script install-all'
 5. To run the project, simply use 'npm run-script client' which will run expo for the frontend of the project


 ## Scripts
 
 Please note that for most scripts that run the server 'nodemon' is used in place of 'node' for easier development. in the pojrect directoyr, you can run:

 ### 'npm run-script dev'

Runs both the client app and the server app in development mode. Expo will automatically open a localhost for you to test using a real or virtual device. You can also use the command line QR code to run the project on your phone ([ios](https://apps.apple.com/us/app/expo-client/id982107779) or [android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US))

### 'npm run-script client'

Runs just the client app in development mode. Expo will automatically open a localhost for you to test using a real or virtual device.

### 'npm run-script server'

Runs just the server in development mode.


## File Structure

#### 'client' - Holds the client application
 - #### 'App.js' - Entry point for frontend display
 - #### 'package.json' - Defines the npm behaviors and packages for the client
 - #### '.gitignore' - Tells git which files to ignore in the client folder when pushing
#### 'server' - Holds the server application
 - #### 'server.js' - Entry point for backend
#### 'package.json' - Defines npm behaviors for the whole project including the backend
#### '.gitignore' - Tells git which files to ignore in the entire project when pushing
#### 'README.md' - This file that gives an overview on the project

## Config File
Currently has no content as app is still in development. This section should contain the necessary keys for different APIs such as databases or GPS tracking

## Environment Variables
Currently has no content as app is still in development. This section should contain the variables used for accessing API keys