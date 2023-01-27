import type {Config} from 'backstopjs'

export const config: Config = {
    "id": "backstop_default",
    "viewports": [
      {
        "label": "phone",
        "width": 320,
        "height": 480
      },
      {
        "label": "tablet",
        "width": 1024,
        "height": 768
      }
    ],
    "onBeforeScript": "playwright/onBefore.js",
    "onReadyScript": "playwright/onReady.js",
    "scenarios": [
      {
        "label": "BackstopJS Homepage",
        "cookiePath": "backstop_data/engine_scripts/cookies.json",
        "url": "https://garris.github.io/BackstopJS/",
        "referenceUrl": "",
        "readyEvent": "",
        "readySelector": "",
        "delay": 0,
        "hideSelectors": [],
        "removeSelectors": [],
        "hoverSelector": "",
        "clickSelector": "",
        "postInteractionWait": 0,
        "selectors": [],
        "selectorExpansion": true,
        "expect": 0,
        "misMatchThreshold" : 0.1,
        "requireSameDimensions": true
      }
    ],
    "paths": {
      "bitmaps_reference": "src/backstop_data/bitmaps_reference",
      "bitmaps_test": "src/backstop_data/bitmaps_test",
      "engine_scripts": "src/backstop_data/engine_scripts",
      "html_report": "src/backstop_data/html_report",
      "ci_report": "src/backstop_data/ci_report"
    },
    "report": ["browser"],
    "engine": "playwright",
    "engineOptions": {
      "args": ["--no-sandbox"],
      "browser": "chromium"
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false,
    "dockerCommandTemplate": "docker run --rm -i --mount type=bind,source=\"{cwd}\",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}"
  }
  