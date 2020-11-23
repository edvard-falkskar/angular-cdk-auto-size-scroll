
# Demo of CDK-experimental Auto size strategy

Angular CDK just ships with a fixed size virtual scrolling strategy at the moment, so if you want to support variable height items you have to omplement it yourself.

> Other virtual scrolling strategies can be implemented by extending VirtualScrollStrategy. An autosize strategy that works on elements of differing sizes is currently being developed in @angular/cdk-experimental, but it is not ready for production use yet.

https://material.angular.io/cdk/scrolling/overview

This repository was created to test/demo the Auto size strategy code that is currently found in the [CDK Experimental](https://github.com/angular/components/tree/master/src/cdk-experimental) package.

The strategy seems to work nicely. I had to do some small changes to make it compile properly in the in this project generated with Angular CLI version 10.2.0.

## Problems found
Like most virtual scrolling solutions the problem is that it can only handle scrolling as far as the *maximum element height* allows. The maximum element height is basically how hight an element can become in the browser and this is set by the creators of the browser.

Below I have compiled the most common browsers and their limits in pixels and how many rows this translestes to if the average row is 20 pixels high.

| Browser      | Pixels     | Max nr rows |
|--------------|------------|-------------|
| Chrome (86)  | 33 554 400 |   1 677 720 |
| Safari (14)  | 33 554 428 |   1 677 721 |
| Firefox (83) | 17 895 690 |     894 785 |

As long as you dont have data sets that are more than 894 785 rows long you are ok. Well if you need to support IE 11 you will have a much smaller number but I dont have acess to IE 11 at the moment.

<br />
<br />

---

<br />
<br />

# Scroll

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
