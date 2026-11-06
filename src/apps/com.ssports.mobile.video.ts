// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱奇艺体育",
  "id": "com.ssports.mobile.video",
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
          "matches": "[vid=\"tv_jump_start_ad\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17901123",
          "exampleUrls": "https://e.gkd.li/6a6a6c4f-4a16-4a10-bb5c-2ce53ebe5e81",
          "key": 0
        }
      ]
    }
  ]
});
