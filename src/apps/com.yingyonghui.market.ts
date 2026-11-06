// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "应用汇",
  "id": "com.yingyonghui.market",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]"
          ],
          "activityIds": "com.yingyonghui.market.ui.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13538316"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]"
          ],
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13538316"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView"
          ],
          "activityIds": "com.yingyonghui.market.ui.MainActivity",
          "key": 2,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13538316"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView"
          ],
          "activityIds": "com.yingyonghui.market.ui.MainActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13538316"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"splashAdvert_skipLayout\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/32155585"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView"
          ],
          "activityIds": "com.yingyonghui.market.ui.MainActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13538316"
        }
      ]
    }
  ]
});
