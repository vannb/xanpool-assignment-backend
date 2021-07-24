const corsConfig = {
  api: {
    origin: '*',
    optionsSuccessStatus: 200,
  },
  allowList: 'http://xanpool-assignment-frontend.s3-website-ap-southeast-1.amazonaws.com/'
};

corsConfig.api.origin = function (origin, callback) {
  if (corsConfig.allowList.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

module.exports = corsConfig;
