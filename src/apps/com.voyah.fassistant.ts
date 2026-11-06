// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "岚图汽车",
  "id": "com.voyah.fassistant",
  "groups": [
    {
      "name": "功能类-自动签到",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"签到\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20742927",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20727658",
          "exampleUrls": "https://e.gkd.li/80aa2e89-de9e-45aa-b2cb-5194eaac849a",
          "key": 0
        }
      ]
    }
  ]
});
