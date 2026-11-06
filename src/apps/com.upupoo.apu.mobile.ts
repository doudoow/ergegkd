// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "UPUPOO动态壁纸",
  "id": "com.upupoo.apu.mobile",
  "groups": [
    {
      "name": "青少年模式",
      "desc": "点击\"我知道了\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"青少年模式\"] +3 [desc=\"我知道了\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14052188",
          "key": 0
        },
        {
          "matches": "[desc=\"青少年模式\"] +3 [desc=\"我知道了\"]",
          "activityIds": "com.upupoo.apu.mobile.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/14052188",
          "key": 1
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView",
          "key": 0
        }
      ]
    }
  ]
});
