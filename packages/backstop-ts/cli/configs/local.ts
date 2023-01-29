import type {Config} from 'backstopjs'
import {CALLING_DIR, LOCAL_DIR} from '../utils'


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
        "label": "Backstop Homepage",
       
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
      "bitmaps_reference": `backstop_data/bitmaps_reference`,
      "bitmaps_test": `backstop_data/bitmaps_test`,
      "engine_scripts": `backstop_data/engine_scripts`,
      "html_report": `backstop_data/html_report`,
      "ci_report": `backstop_data/ci_report`
    },
    "report": ["browser"],
    "engine": "playwright",
    "engineOptions": {
      "args": ["--no-sandbox", "--font-render-hinting=none", "--disable-skia-runtime-opts", "--disable-font-subpixel-positioning", "--disable-lcd-text"],
      "browser": "chromium"
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false,
    "dockerCommandTemplate": "docker run --rm -i --mount type=bind,source=\"{cwd}\",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}"
  }
  