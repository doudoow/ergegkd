// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易蜗牛读书",
  "id": "com.netease.snailread",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView",
          "key": 0,
          "name": "穿山甲SDK",
          "snapshotUrls": "https://i.gkd.li/i/14095278"
        }
      ]
    }
  ]
});
