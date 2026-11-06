// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "二柄",
  "id": "com.diershoubing.erbing",
  "groups": [
    {
      "name": "分段广告",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13868396",
          "exampleUrls": "https://e.gkd.li/921d559f-6535-4d54-9bb2-8bbc82a6f2e1"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13868401",
          "exampleUrls": "https://e.gkd.li/e6818e93-3fab-4afa-95b9-0ba38ea7f2db"
        },
        {
          "matches": "[id=\"com.diershoubing.erbing:id/mainV\"] >n [text=\"广告\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13868396",
          "exampleUrls": "https://m.gkd.li/47232102/5498dc61-9f29-42c6-a75b-ac8471e48328"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "@[id$=\"tt_splash_skip_btn\"] <<n [vid=\"containerV\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13378853",
            "https://i.gkd.li/i/13546165"
          ]
        },
        {
          "matches": "[text=\"跳过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13538207"
        },
        {
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid=\"containerV\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13857307"
        }
      ]
    }
  ]
});
