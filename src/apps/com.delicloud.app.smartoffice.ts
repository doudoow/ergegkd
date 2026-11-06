// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "得力e+",
  "id": "com.delicloud.app.smartoffice",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"跳过\"][childCount=0][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14553055",
          "exampleUrls": "https://m.gkd.li/57941037/23262900-c52d-494a-9b7d-bb821025665a"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [vid=\"splash_container\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13840775",
            "https://i.gkd.li/i/13944086"
          ]
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [vid=\"splash_container\"]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/import/13840775",
            "https://i.gkd.li/import/13944086"
          ],
          "key": 2
        }
      ]
    }
  ]
});
