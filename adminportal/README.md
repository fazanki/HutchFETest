# Adminportal
****
## Hutched FE Test - approach explained
Given the time constrains I have done the following: 
- have split existing user component into sub components. These components are within the containers directory as they are 'smart' components containing the state for that component.These further should be split into smaller stateless reusable components that sit under the components directory.
- have moved user feature in its own module that is lazy loaded when on 'user/' route - this improves preformance and it scales very well. 
- have left the original code as it is and it is still accessible under 'user-old/' route - it can be just deleted but left for comparison purposes.   
- have introduced 'ngrx' sate management solution and have moved application logic within the ngrx, leaving the components logic free. If 'Ngrx Chrome Dev Tools' are installed state action can be observed there. This massively improves scalability, also makes the app very easy do debug as it's using immutable strategy.
- the responsive is not the best approach as I have used bootstrap already included in the app. Better solution can be achieved buy using a better libraries (i.e materialUI) or indeed can be bespoke. I have examples to show how responsive 'mobile first' approach is coded in SASS. I did not write any CSS for this test just played with what I had available in bootstrap.
- I kept simple UX as there is not much going on atm but it can scale well.

Todo: 
- BDD and unit testing hasn't been done due to time constrains but as the logic is with the ngrx, which is using functional programming approach, that is very easy to test. If given opportunity can provide with mmany examples for this kind of unit testing. 
- rewrite forms using Reactive Form approach. 

I have introduced this approach to few teams and it proved to be a great success for developing complex applications that scale and preform well. Hope it fits your needs too.  
****
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
