// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "哔哩哔哩HD",
  "id": "tv.danmaku.bilibilihd",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bilibilihd:id/count_down\"]",
          "snapshotUrls": "https://i.gkd.li/i/13031261",
          "key": 0
        },
        {
          "matches": "[vid=\"count_down\"]",
          "snapshotUrls": "https://i.gkd.li/i/13031261",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-首页、视频播放页广告",
      "desc": "点击[更多]-点击[不感兴趣]",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"more\"][visibleToUser=true] - [vid=\"desc_content\"]",
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/17726316",
            "https://i.gkd.li/i/17891830"
          ],
          "exampleUrls": "https://e.gkd.li/c947945b-db14-4873-8245-269d5bd7c496"
        },
        {
          "matches": "@[vid=\"more\"] -3 [vid=\"ad_desc\"][visibleToUser=true]",
          "activityIds": "com.bilibili.ship.theseus.hd.detail.HDUnitedBizDetailsActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17726295",
          "exampleUrls": "https://e.gkd.li/ba14fc80-a227-479a-be82-fcddf01b1aa9"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.ship.theseus.hd.detail.HDUnitedBizDetailsActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/17726321",
            "https://i.gkd.li/i/17726285",
            "https://i.gkd.li/i/17892061"
          ],
          "exampleUrls": [
            "https://e.gkd.li/516beab1-9421-4d71-b803-9f56a15f94de",
            "https://e.gkd.li/ea61bb70-6919-48de-bf07-dbf653a09e08"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] + [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] + [text=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
