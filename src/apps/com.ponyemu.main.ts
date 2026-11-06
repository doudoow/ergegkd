// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小马模拟器",
  "id": "com.ponyemu.main",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text*=\"跳过\"]",
          "activityIds": "com.ponyemu.main.activitys.AdLaunchActivity",
          "snapshotUrls": "https://i.gkd.li/import/14892481",
          "key": 0
        }
      ]
    }
  ]
});
