'use strict';

/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    'files': [
        '**/*.html',
        '**/*.js',
        '**/*.css',
        'images/**/*'
    ],
    'watchOptions': {
        'ignoreInitial': true
    },
    'server': {
        'baseDir': '.',
    },
    'port': 9000,
    'open': 'local',
    'browser': 'google-chrome',
    'reloadOnRestart': false,
    'notify': false
};
