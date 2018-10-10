# Chrome Extension TypeScript Starter

Chrome Extension, TypeScript and Visual Studio Code

## What's different in this fork from the original

- All source files including manifest, html, icons are in `Src` folder, they are copied to dist folder during build
- Support for ES* javascript (not only typescript) via `babel`
- ts-loader replaced with `@Babel/typescript`
- dist folder is flat now (no `dist/js` folder anymore), js-files are minified

## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Option

* [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

* TypeScript
* Webpack
* Moment.js
* jQuery
* Example Code
    * Chrome Storage
    * Options Version 2
    * content script
    * count up badge number
    * background

## Project Structure

* src: TypeScript source files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build in watch mode

### terminal

```
npm run build
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

