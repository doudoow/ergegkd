// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "初音社",
  "id": "mikuclub.app",
  "groups": [
    {
      "name": "全屏广告-谷歌广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"关闭广告\"] + View >2 Image[text=\"\"]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "forcedTime": 10000,
          "snapshotUrls": "https://i.gkd.li/i/14306002",
          "exampleUrls": "https://m.gkd.li/57941037/2fa2793e-187e-44e6-91e4-6a5a355568c6",
          "key": 0
        }
      ]
    }
  ]
});
