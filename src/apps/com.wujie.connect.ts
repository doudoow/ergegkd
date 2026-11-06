// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "无界趣连",
  "id": "com.wujie.connect",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"no_update_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/14296122",
          "key": 0
        }
      ]
    }
  ]
});
