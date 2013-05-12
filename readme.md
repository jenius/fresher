Fresher
-------

Fresher is a very small and simple utility for checking the local version of a node library installed through npm against the most recent remote version. This way, you can notify your users if there's a new version out so they can update it as soon as possible.

> "I'm in between but way more fresher"    
> ~ Kanye West

### Usage

All you need to feed it is the name of your npm project and the path to the project's `package.json` file. The callback recieves a boolean which tells you if there's a newer and fresher version out or not.

```js
var fresher = require('fresher');

fresher('name_on_npm', '../package.json', function(err, needs_update){
  err && console.error(err);

  if (needs_update){
    console.log('your shit is not fresh enough. time for updatez!');
  } else {
    console.log('you are running on the freshest homie');
  }

});
```

### FAQ

**What is the meaning of that Kanye quote up there?**    
Absolutely nothing. It makes no sense at all.

**This whole project is like less than 10 lines. Is it really worth it?**    
Yes. 10 less lines you have to write.

**How much time did you spend on this?**    
Probably like a half hour, honestly.

**Will you go out with me?**    
Maybe.