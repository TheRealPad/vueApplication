//
// Refer to the online docs for more details:
// https://nightwatchjs.org/guide/configuration/nightwatch-configuration-file.html
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//

module.exports = {
  src_folders: ['tests/e2e'], // Ensure src_folders points to where your test files are located

  page_objects_path: [],

  custom_commands_path: [],

  custom_assertions_path: [],

  plugins: ['@nightwatch/vue'],

  globals_path: '',

  vite_dev_server: {
    start_vite: true,
    port: process.env.CI ? 4173 : 5173
  },

  webdriver: {},

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: `http://localhost:${process.env.CI ? '4173' : '5173'}`,

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'firefox'
      },

      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
          w3c: true,
          args: [
            //'--headless'
          ]
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    }
  }
}
