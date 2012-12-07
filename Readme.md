# Heroku Redis Flexi
This is a fork of the connect-heroku-redis package with minor tweaks.

Heroku Redis Flexi is a wrapper for [connect-redis](https://github.com/visionmedia/connect-redis) using any of the Redis products
that Heroku provides.  Currently it supports openredis, RedisGreen, Redis To Go, MyRedis (beta), and Redis Cloud (beta).
     
      
## Installation

    $ npm install heroku-redis-flexi
    
## Features

  * Detects Heroku Redis product url on the environment and defaults it onto the RedisStore options.
  * Defaults to local store if Heroku Redis to Go environment variable is not detected.
    
## Examples

    var connect = require('connect'), 
        HerokuRedisStore = require('heroku-redis-flexi')(connect);

    connect.createServer(
      connect.cookieParser(),
      // 5 minutes
      connect.session({ store: new HerokuRedisStore({product: 'myRedis'}), secret: 'keyboard cat' })
    );
    
## License

Copyright (C) 2012 by Morgan Rich <morgan@framlinggroup.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.