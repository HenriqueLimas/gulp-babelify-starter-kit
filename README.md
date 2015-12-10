# gulp-babelify-starter-kit
<p>
 <img alt="gulp" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" width="60">
 <img alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" width="250">
 <img alt="browserify" src="http://browserify.org/images/wizard_hat_blue.png" width="150">
</p>
A web application starter kit with [Gulp](http://gulpjs.com/), [Browserify](http://browserify.org/) and [Babel](https://babeljs.io/)

## How to use?
You can choose to use with Yeoman or you can dowload it.

### Yeoman
[generator-gulp-babelify](https://github.com/HenriqueLimas/generator-gulp-babelify)

More about Yeoman [here](http://yeoman.io/)

### Dowload
- [Download](https://github.com/HenriqueLimas/gulp-babelify-starter-kit/archive/master.zip) this repository and start developing your web app/site inside the ```public``` folder.
- Install dependencies running ```npm install``` inside the project folder.
- Run ```gulp serve``` in your terminal to start the web server with [live-reloading](http://www.browsersync.io/docs/api/#api-reload).

## How to test?
- Write yours tests in the ```test``` folder using the [Jasmine](http://jasmine.github.io/2.1/introduction.html) framework.
- Run ```gulp test:unit``` to start yours unit tests using the [Karma Runner](http://karma-runner.github.io/0.13/index.html).

## And if I don't like this folder structure?
No problem, feel free to edit the ```build/sources.js``` file with the folder structure you like following the API below:
#### sources.js
- **dist** (string): this is the path for the root folder for production.
- **dist_src** (string): this is the path for the sources (```.js```, ```.css```...) folder for production.
- **scripts** (object): everything related to scripts files (```.js```...):
  - **main** (string): this is the path of the main file used with browserify;
  - **all** (string/array): this the path(s) for all the ```.js``` files;
  - **main_dist** (string): this is the output file generated from browserify.
- **styles** (object): everything related to styles files (```.css```, ```.scss```...):
  - **all**: (string/array): this the path(s) for all the ```.css```, ```.scss```... files;
- **templates** (object): everything related to templates files (```.html```):
  - **all**: (string/array): this the path(s) for all the ```.html``` files;

## Editing Gulp tasks
If you need to add, remove or edit any tasks from the default ```gulpfile```, you can edit all the files you want inside the ```build``` folder.

For example, if you want to add [Sass](https://www.npmjs.com/package/gulp-sass) in your process you can edit the ```gulp-styles.js``` file with the respective configuration.
