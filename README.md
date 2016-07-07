# LinkShortener

## Overview

Demo Install: https://shrtl.herokuapp.com/

This is a basic link shortener with simple HTML GUI and a NodeJS, MongoDB Backend.

![screenshot](https://cloud.githubusercontent.com/assets/5188694/16643416/a991dc98-4414-11e6-8920-34b5b6daf627.png)

# Quick Start Guide

### Prerequisites

In order to use LinkShortener, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Git](https://git-scm.com/)

### Installation & Startup

To install LinkShortener, simply enter the below in the terminal window:

```bash
$ git clone https://github.com/eiselems/link-shortener-node.git
```

This will install the LinkShortener components into the `your-project` directory.

### Local Environment Variables

Create a file named `.env` in the root directory. This file should contain:

```
MONGO_URL=mongodb://localhost:27017/links
PORT=8080
```

Default values are the ones mentioned above.

### Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```
Node.js listening on port 8080...
```

Next, open your browser and enter `http://localhost:8080/`. Congrats, you're up and running!


## Based on

[Clementine.js](http://www.clementinejs.com).

## License

MIT License. [Click here for more information.](LICENSE.md)
