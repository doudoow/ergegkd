// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "聆听音乐",
  "id": "com.yfoo.listen",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < * > [text=\"下载\"]",
          "activityIds": "com.yfoo.listenx.activity.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15856014"
        },
        {
          "matches": "@[text=\"取消\"] < * > [text=\"下载\"]",
          "activityIds": "x.activity.HomeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15856014"
        }
      ]
    }
  ]
});
