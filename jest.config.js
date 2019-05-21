const {defaults} = require('jest-config');

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
};
