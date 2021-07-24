const corsConfig = {
  api: {
    origin: '*',
    optionsSuccessStatus: 200,
  },
  allowList: 'http://ec2-52-221-196-68.ap-southeast-1.compute.amazonaws.com:4200'
};

corsConfig.api.origin = function (origin, callback) {
  if (corsConfig.allowList.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

module.exports = corsConfig;
