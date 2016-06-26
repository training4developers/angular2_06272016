# Welcome to Comprehensive Angular 2!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:
- Monday - Friday: 8:30am to 4:30pm

Breaks:
- Morning: 10:15am to 10:30am
- Lunch: Noon to 1pm
- Afternoon: 2:45pm to 3:00pm

## Course Outline

	TypeScript & JavaScript topics will be included as needed into the Angular 2 content

- Day 1 - Introduction to Components, Pipes, Event Handling, Directives & Routing
- Day 2 - Form Validation, Custom Validators, Custom Pipes, Service Injection
- Day 3 - Http Service & REST Services, Observables/Promises, Web Sockets, Advanced Routing
- Day 4 - Composing Components, Structural and Attribute Directives, Unit Testing
- Day 5 - Project Day

## Links

### Instructor's Resources

- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [React Blog Posts](https://github.com/training4developers/react-flux-blog)
- [TopTal Angular Directive](https://www.toptal.com/angular-js/angular-js-demystifying-directives)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)
- [JavaScript Blog Posts](https://www.accelebrate.com/blog/?s=Greene)

### Other Resources

- [Accelebrate's Blog](https://www.accelebrate.com/blog/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)

## Setup Instructions

Step 1. Install Node.js version 6 or higher. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository from [here](https://github.com/training4developers/ng2-widgets-app/archive/master.zip). Extract the zip file to a working folder on your system.

Step 3. Open a terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the standard Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
$ npm i && npm start
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** and **.typingsrc** files per the instructions in those files. Then re-run the command above.

This set has been completed successfully when you receive the following message:

```bash
web server running on port 3000
please do not close this terminal window
please use a new terminal window to run additional commands
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. Open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The Angular 2 web application should load and be usable.

**To Modify the Web Application**

Step 6. Open a new terminal window, change to the project folder.

Step 7. From the terminal, run the following command:

```bash
$ npm run webpack
```

Step 8. Open your favorite text editor (such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com)), and modify the files in the **src/www** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and deploy it to the **dist** folder. To see the changes, reload your web browser.

Visual Studio Code supports TypeScript out of the box. Atom requires the 	**atom-typescript** package to be installed. To install it from the menu bar, goto Packages -> Settings View -> Install Packages/Themes. Search for **atom-typescript**, then click **Install**. Sometimes Atom will not be able to download the package because of proxy settings. To resolve this run the following commands from a terminal window, replacing the localhost URL with your proxy URL setting:

```bash
$ apm config set proxy "http://localhost:8080"

$ apm config set https_proxy "http://localhost:8080"

$ apm config set strict-ssl false
```

Restart Atom, then re-attempt to install the **atom-typescript** package again.

## Running Unit Tests

From a terminal run the following command:

```bash
$ npm test
```

The results of the unit tests and code coverage report will be displayed in the terminal window.

To view the HTML version of the code coverage report, open the **index.html** in the **reports/coverage/browser-name** folder with a web browser.

## NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - starts the web server
- **npm test** - starts karma to run unit tests
- **npm run clean** - removes the **dist** folder
- **npm run typings** - installs TypeScript type definitions as specified in the **typings.json** file
- **npm run build** - removes the dist folder, builds and deploys the server app, and the web app
- **npm run webpack** - runs webpack in watch mode so web app file changes are automatically processed, and deployed to the **dist/www** folder
- **npm run webpack-once** - runs webpack once to process web app files, and deploys them to the **dist/www** folder
- **npm run server** - builds the server application, and deploys it to the **dist** folder

## Useful Resources

- [TypeScript Coding Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
- [Angular 2 Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
- [Angular 2 Cheat Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
- [Angular 2 API](https://angular.io/docs/ts/latest/api/)
- [Angular Quick Start Project](https://angular.io/docs/ts/latest/quickstart.html)
- [Angular Webpack Project](https://angular.io/docs/ts/latest/guide/webpack.html)
