// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "快科技",
  "id": "com.kkeji.news.client",
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
          "matches": "[id=\"com.kkeji.news.client:id/tv_counter\"]",
          "snapshotUrls": "https://i.gkd.li/i/13197536",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_counter\"]",
          "snapshotUrls": "https://i.gkd.li/i/13197536",
          "key": 1
        }
      ]
    }
  ]
});
