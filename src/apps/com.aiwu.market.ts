// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱吾游戏宝盒",
  "id": "com.aiwu.market",
  "groups": [
    {
      "name": "青少年模式",
      "desc": "点击[我知道了]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"hintTextView2\"] + [vid=\"confirmView\"]",
          "activityIds": ".ui.activity.NewHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/14032203",
          "key": 0
        }
      ]
    }
  ]
});
