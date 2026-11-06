// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智校乐",
  "id": "com.hnjiajie.zhixiaole",
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
          "matches": "[vid=\"tev_countdown\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20745490",
          "exampleUrls": "https://e.gkd.li/0b7ec3a5-d601-489a-a50c-32c876f38edf",
          "key": 0
        }
      ]
    }
  ]
});
