// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "青藤之恋",
  "id": "com.wepie.ivy",
  "groups": [
    {
      "name": "评价提示-好评弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"我要吐槽\"] + [text=\"五星好评\"]",
          "action": "back",
          "activityIds": ".module.start.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14602933"
        },
        {
          "matches": "[text=\"我要吐槽\"] + [text=\"五星好评\"]",
          "action": "back",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14602933"
        }
      ]
    }
  ]
});
