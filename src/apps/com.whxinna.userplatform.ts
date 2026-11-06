// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "住理生活",
  "id": "com.whxinna.userplatform",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/26462136"
        },
        {
          "matches": "@[name$=\"View\"][clickable=true][width<500 && height<300] <3 FrameLayout[childCount=4] <<(2,3,4) [vid=\"adsFl\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/26332230",
            "https://i.gkd.li/i/26462322",
            "https://i.gkd.li/i/31610751"
          ]
        }
      ]
    },
    {
      "name": "通知提示-公告",
      "key": 1,
      "rules": [
        {
          "matches": "@Button[clickable=true][width<150 && height<150] - * >3 [text=\"温馨提示\"]",
          "activityIds": "com.whxinna.webview.WebViewActivity",
          "snapshotUrls": "https://i.gkd.li/i/26308642",
          "key": 0
        }
      ]
    }
  ]
});
