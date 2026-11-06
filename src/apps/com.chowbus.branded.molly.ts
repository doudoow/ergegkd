// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Molly Tea",
  "id": "com.chowbus.branded.molly",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionCd": 800,
      "actionMaximum": 3,
      "resetMatch": "app",
      "forcedTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[desc^=\"Skip\"][visibleToUser=true]",
          "activityIds": "com.chowbus.branded.branded_app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/29147518",
          "exampleUrls": "https://e.gkd.li/a43170a0-8196-49d8-bb4d-3554aeae1900",
          "key": 0
        }
      ]
    }
  ]
});
