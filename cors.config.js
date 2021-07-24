const corsConfig = {
  api: {
    origin: '*',
    optionsSuccessStatus: 200,
  },
  allowList: 'http://localhost:4200'
};

corsConfig.api.origin = function (origin, callback) {
  if (corsConfig.allowList.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

module.exports = corsConfig;
