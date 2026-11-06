// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "19楼",
  "id": "com.nineteenlou.nineteenlou",
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
          "matches": [
            "[vid=\"adv_layout\"][visibleToUser=true]",
            "[vid=\"jump\"][visibleToUser=true]"
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20438918",
          "exampleUrls": "https://e.gkd.li/3c41a2ae-a470-4dc5-974b-4157c77b6efb",
          "key": 0
        }
      ]
    }
  ]
});
