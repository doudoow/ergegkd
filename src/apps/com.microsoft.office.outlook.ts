// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Outlook",
  "id": "com.microsoft.office.outlook",
  "groups": [
    {
      "name": "分段广告-收件箱顶部广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageButton[clickable=true] <n [vid=\"ad_choices_container\"] <n * < [vid=\"ad_right_container\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25366102",
          "exampleUrls": "https://e.gkd.li/b1354900-bc3f-4925-a9d0-a56fd46b4b2d"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"Hide ad\" || text=\"隐藏广告\"]",
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/25366119"
          ]
        }
      ]
    }
  ]
});
