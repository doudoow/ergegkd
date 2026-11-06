// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蚂蚁财富",
  "id": "com.antfortune.wealth",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true] <2 [id=\"com.antfortune.wealth:id/welcome_page\"]",
          "key": 0
        }
      ]
    }
  ]
});
