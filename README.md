# ngrx-ionic-2-samples #

[Ionic 2](https://angular.io/) + [ngrx](https://github.com/ngrx) samples. This project ports [btroncone](https://github.com/ngrx)'s [ngrx-examples](https://github.com/btroncone/ngrx-examples) into Ionic 2

## Objective of this project ##

The objective is to create an implentation in Ionic 2 out of the example apps of created by [btroncone](https://github.com/ngrx), as a learning experience for me, and that can be shared with other people.

## Samples Implemented so far ##

* Counter
* Todos
* Async
* Shopping Cart

## Notes about ##

* This application uses the ngrx version 2.0.0, which is slightly different than the version used in the inspiring project. These slight differences can be noticed on the following the following features:
  * Reducers have been implemented as regular functions, to avoid a problem with the AoT compiler.
  * The class `StateUpdates` and the operator `whenAction` are not available for V 2.0.0. Therefore, access to the store when using effects is solved in a with 'withLatestFrom'.

## Roadmap ##

These samples work for the following Ionic Environment:

Cordova CLI: 6.4.0
Ionic Framework Version: 2.0.0-rc.3
Ionic CLI Version: 2.1.8
Ionic App Lib Version: 2.1.4
Ionic App Scripts Version: 0.0.45
ios-deploy version: Not installed
ios-sim version: Not installed
OS: Windows 10
Node Version: v4.4.7
Xcode version: Not installed

I will be checking with newer versions of Ionic as long as they show up.

## Resources ##


* [Brian Troncone ngrx-examples](https://github.com/btroncone/ngrx-examples), source of inspiracion.
* [Ashteya Biharisingh guide for Inonic 2 and ngrx](http://gonehybrid.com/a-beginners-guide-to-using-ngrx-in-an-ionic-2-app-part-1/), a good start.
* [ngrx/effects Gitter conversation](https://gitter.im/ngrx/effects). Just a great place to learn.