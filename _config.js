var config = {}

// Update to have your correct username and password
config.mongoURI = {
  production:
    'mongodb+srv://leila:2CBajYvm3dTT6tsi@gallery.qmbelyw.mongodb.net/darkroom?retryWrites=true&w=majority&appName=gallery',
  development:
    'mongodb+srv://leila:2CBajYvm3dTT6tsi@gallery.qmbelyw.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=gallery',
  test: 'mongodb+srv://leila:2CBajYvm3dTT6tsi@gallery.qmbelyw.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=gallery',
};
module.exports = config;
