// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米换机",
  "id": "com.miui.huanji",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"下次再说\"] + [text=\"立即升级\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14332463",
          "key": 0
        }
      ]
    }
  ]
});
