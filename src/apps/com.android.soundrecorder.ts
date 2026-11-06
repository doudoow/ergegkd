// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "录音机",
  "id": "com.android.soundrecorder",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "activityIds": ".RecordPreviewActivity",
          "snapshotUrls": "https://i.gkd.li/i/14140552",
          "key": 0
        }
      ]
    }
  ]
});
