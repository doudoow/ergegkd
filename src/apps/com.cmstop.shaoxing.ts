// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "越牛新闻",
  "id": "com.cmstop.shaoxing",
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
          "matches": "[id=\"com.cmstop.shaoxing:id/roundProgressBar\"]",
          "snapshotUrls": "https://i.gkd.li/i/13611775",
          "key": 0
        },
        {
          "matches": "[vid=\"roundProgressBar\"]",
          "snapshotUrls": "https://i.gkd.li/i/13611775",
          "key": 1
        }
      ]
    }
  ]
});
