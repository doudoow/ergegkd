// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OnStream",
  "id": "com.maertsno.m",
  "groups": [
    {
      "name": "全屏广告",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tv_button\"]",
          "activityIds": "co.notix.interstitial.InterstitialActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13842558",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_button\"]",
          "key": 1
        }
      ]
    }
  ]
});
