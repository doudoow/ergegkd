// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小特",
  "id": "com.xiaote",
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
          "matches": "[id=\"com.xiaote:id/ad_close\"][text*=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/14035706",
          "key": 0
        },
        {
          "matches": "[vid=\"ad_close\"][text*=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/14035706",
          "key": 1
        }
      ]
    }
  ]
});
