# Weather App

This is an AngularJS based app that fetches data from the [Open Weather Map API](http://openweathermap.org/) to display the forecast for 5 european cities.

## Running the Project
This project relies on a webserver to make requests to the Open Weather Map API, in order to retrieve the weather info. Because of that, it's not possible to open an html file in a browser and see the project.

> ⚠️ To see a live version of the app you can click on this link: [http://krystalcampioni.com/weatherapp](http://krystalcampioni.com/weatherapp)

#### Running the project locally
1. Open the terminal and clone this repository by typing:

 `$ git clone git@bitbucket.org:krystalcampioni/weatherapp.git`

2. Enter the folder that was just created:

  `$ cd weatherapp`

3. Download and install Node using this link:
  [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

4. Install the dependencies by typing in the terminal:

  `$ npm install`

5. Start a local server:

  `$ gulp start`

6. Open [http://localhost:8888/](http://localhost:8888/) in your browser 🚀

## File structure
The source code is on the `app` folder. This project uses [Gulp](http://gulpjs.com/) to run several tasks and outputs a final production ready version of the code to the `dist` folder.

* **app/js**
You'll find an `app.js` file that declares the angular module, dependencies and routes. The `controllers`, `directives`, `filters` and `services` are kept in different files.

* **app/lib** 



## Gulp Features
 - Live reload via [gulp-webserver](https://www.npmjs.com/package/gulp-webserver)
 - Minified CSS via [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
 - Sass globbing support via [node-sass-globbing](https://www.npmjs.com/package/node-sass-globbing)
 - Bourbon support via [node-bourbon](https://www.npmjs.com/package/node-bourbon)
 - Neat support via [node-neat](https://www.npmjs.com/package/node-neat)
 - Concat and minified JS via [gulp-concat](https://www.npmjs.com/package/gulp-concat) and [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
 - Minified HTML via [gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
 - Image compression via [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
