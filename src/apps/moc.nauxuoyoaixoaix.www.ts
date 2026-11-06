// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "晓晓优选",
  "id": "moc.nauxuoyoaixoaix.www",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id$=\"tt_splash_skip_btn\"] <<n [vid=\"adsFl\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13476862"
        },
        {
          "matches": [
            "[vid=\"adsFl\"]",
            "[text^=\"跳过\"][text.length<=10]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13625367"
        },
        {
          "matches": "@View <3 FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [vid=\"adsFl\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13820450"
        }
      ]
    }
  ]
});
