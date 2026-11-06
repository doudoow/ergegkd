// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "AfuseKt",
  "id": "com.attempt.afusekt",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"下次一定\"]",
          "activityIds": "com.attempt.afusekt.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16938883",
          "exampleUrls": "https://e.gkd.li/7c513592-123b-4dde-92cd-54fad5d14dee",
          "key": 0
        },
        {
          "matches": "[text=\"下次一定\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16938883",
          "exampleUrls": "https://e.gkd.li/7c513592-123b-4dde-92cd-54fad5d14dee",
          "key": 1
        }
      ]
    }
  ]
});
