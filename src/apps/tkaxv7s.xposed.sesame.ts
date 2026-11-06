// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "芝麻粒",
  "id": "tkaxv7s.xposed.sesame",
  "groups": [
    {
      "name": "通知提示-提示弹窗",
      "desc": "点击[我知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"我知道了\"]",
          "activityIds": "tkaxv7s.xposed.sesame.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/16060201",
          "exampleUrls": "https://m.gkd.li/57941037/75d1d639-5234-4ad4-865d-2b1617994a16",
          "key": 0
        },
        {
          "matches": "[text=\"我知道了\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/16060201",
          "exampleUrls": "https://m.gkd.li/57941037/75d1d639-5234-4ad4-865d-2b1617994a16",
          "key": 1
        }
      ]
    }
  ]
});
