# xm-username-generator

A random username generator, made out of one random adjective, one random noun and a random number.

This application has zero dependencies.

## Installation

copy the `/src` folder into your application.

## Usage

import the username generator like this:

```js
const usernameGenerator = require('./src/index.js');
```

and create a random username with this command:

```js
const username = usernameGenerator.createUserName(50000);
```

The generated username will look something like this:
- IndestructibleMaster43126
- KindLogic38451 
- FriendlyOrigin10087

## License
Copyright (c) 2021 Camila M. K. Piotrowski Licensed under the terms of the MIT license. http://camila-mk-piotrowski.mit-license.org/