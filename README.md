![](https://www.mbejda.com/content/images/2015/11/AngularJS-large-1.png#cover)<br>
Angular `ngColored` directive lets you display colors in your templates. <br>
![](https://www.mbejda.com/content/images/2015/11/Screen-Shot-2015-11-22-at-12-26-58-AM.png)<br>


## Installation
```
bower install ngColored --save
```
Add `ngcolored` module into your Angular application : 
```
angular
    .module('coloredApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngcolored'
    ])
    .config(function($routeProvider) {

    })
```
##Getting Started With ngColored
Add the `colored` directive into the templates : 
```
  <colored color="colorModel" width="125px" height="125px"></colored>

```
It works with Twitter Bootstrap 3.x by default. You can add a class attribute to the directive to add your own class styles. The `ngColored` module utilizes the following directive attributes : 

- color (ngModel)
- width
- height
- class

## Colors
The color attribute is a ngModel inside the parent controller. This allows the directive to have dynamic color changing capability. The color can either be a hex or rgba. 
<hr>
Source code can be found here : 
[https://github.com/mbejda/ngColored](https://github.com/mbejda/ngColored)<br>
For any questions send me a tweet at 
[@notmilosbejda](https://twitter.com/notmilobejda)

