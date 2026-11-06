// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智慧人社",
  "id": "com.powersi.zhrs",
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
          "matches": "[vid=\"tv_time\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19746757",
          "exampleUrls": "https://e.gkd.li/1cad6c38-5c76-4b5a-b350-bb9630221661",
          "key": 0
        }
      ]
    }
  ]
});
