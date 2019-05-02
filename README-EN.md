# vuejs-pwa-sample

## Preface
This sample project is implemented by [Vue.js](https://vuejs.org/index.html), [Vue Material](https://vuematerial.io/) and [PWA(Progressive Web Apps)](https://developers.google.com/web/progressive-web-apps/).
This sample uses the [Connpass Web API](https://connpass.com/about/api/).

## Install
Perform the following steps:
1. Download and install [Node.js](https://nodejs.org/ja/).
1. Download and install [Visual Studio Code(VS Code)](https://code.visualstudio.com/).
1. Install [vetur](https://github.com/vuejs/vetur) extension for VS Code.
1. Download and install npm packages.
    ```bash
    npm install
    ```

## Starting Server
Perform the following steps:
1. Clone this repository.
1. Start the development server.
    ```bash
    npm run serve
    ```
1. Access the next URL by Chrome browser.  
[http://localhost:8080/home](http://localhost:8080/home)

To check the performance of Service Worker, build this source code and deploy it on my web server.

## Creating a Production Build
Perform the following command:
```bash
npm run build
```

## Views
There are the following views in this sample.

|View Name|File Name|Description|
|:---|:---|:---|
|Home View|``Home.vue``|Search for events via the Connpass Web API.|
|About View|``About.vue``|About this sample.|

## Components
There are the following components in this sample.

|Component Name|File Name|Description|
|:---|:---|:---|
|Header|``Header.vue``|Define the header of this web app.|
|Card|``Card.vue``|Define a card to display content|

## Library
This sample uses the following library.

|Library Name|Version|Description|
|:---|:---|:---|
|Vue.js|``2.6.10``|Javascript Framework|
|Vue Router|``3.0.3``|Routing library for Vue.js|
|Vue Material|``1.0.0-beta-10.2``|Material Design for Vue.js|

## License
This sample is MIT License.
