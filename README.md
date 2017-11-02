# MiniFacebookGalerie

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

The project is implementing a small Facebook-powered web app. The goal of the app is to let the user export his photos from Facebook.

## Expected Behavior of the app

	Via the app homepage, the user can create a new account using an email and password.
	After the new account is created, the user can connect to the app anytime with the same email and password.
	The first time the user sign in, he can link his Facebook account and grant access to his Facebook albums & photos.
	After linking his Facebook account, the user can see on the app homepage a grid/list of his albums from Facebook.
	The user can click on a photo from the homepage to export it to Firebase Cloud Storage.

## The graph API and FireBase API 

To use these APIs you have to create an account for each one and then create personal app (graph or firebase) to get your parameters.

Also you'll need to allow non-authentified requests in FireBase (realTime Database security rules). 

The project use my accounts for graph and FireBase API, to adapt it go to:

	src/file/profil/profil.component.ts   and adjust "initParams" with your graph API account configuration 
	src/environments/environments.ts      and adjust "config" with your firebase API account configuration

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
