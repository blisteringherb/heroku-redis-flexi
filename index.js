/**
 * heroku-redis
 * Copyright(c) 2012 Morgan Rich <morgan@solosuenos.com>
 * MIT Licensed
 */

var parse = require("url").parse;

/**
 * Return connect heroku redis store
 * @param {int} version
 * @return RedisStore
 * @api public
 */
module.exports = function(connect) {
  
  var RedisStore = require('connect-redis')(connect);
  
  var product = {myRedis: 'MYREDIS_URL', redisToGo: 'REDISTOGO_URL', openRedis: 'OPENREDIS_URL', redisGreen: 'REDISGREEN', redisCloud: 'REDISCLOUD_URL'};

  function ConnectHerokuRedis(options) {

    var redisUrl = process.env[product[options.product]] ? parse(process.env[product[options.product]]) : false;
    console.log("redisUrl", redisUrl);
    options = options || {};

    if (redisUrl) {
      options.host = options.host || redisUrl.host;
      options.port = options.port || redisUrl.port;
      
      if (!options.pass && redisUrl.auth) {
        options.pass = options.pass || redisUrl.auth.split(":")[1];
      }
    }
    console.log("RedisStore options", options);
    RedisStore.call(this, options);
  }
  
  // Inherit from Connect Redis
  ConnectHerokuRedis.prototype = new RedisStore;
  
  return ConnectHerokuRedis;
}