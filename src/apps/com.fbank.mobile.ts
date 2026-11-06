// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "富民银行",
  "id": "com.fbank.mobile",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.fbank.mobile:id/iv_dumiao\"]",
          "snapshotUrls": "https://i.gkd.li/i/13797434",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_dumiao\"]",
          "snapshotUrls": "https://i.gkd.li/i/13797434",
          "key": 1
        }
      ]
    }
  ]
});
