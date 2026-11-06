// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "去哪儿旅行",
  "id": "com.Qunar",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[text^=\"关闭\"][visibleToUser=true] - RelativeLayout > [vid=\"mery_splash_ad_resource\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23180019",
          "exampleUrls": "https://e.gkd.li/e5b86f58-2938-4e00-ae5b-cefe05135582",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"残忍拒绝\"][visibleToUser=true]",
          "activityIds": "com.mqunar.atom.attemper.pupgrade.PUpgradeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23742676",
          "exampleUrls": "https://e.gkd.li/068a6e67-572f-4cd5-a4db-ba63d760cbd0",
          "key": 0
        }
      ]
    }
  ]
});
