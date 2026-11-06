// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "布蕾4K",
  "id": "com.wn.app.bl",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[我知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"我知道了\"][clickable=true] + [desc=\"了解更多\"]",
          "snapshotUrls": "https://i.gkd.li/i/14228688",
          "exampleUrls": "https://m.gkd.li/57941037/405a7072-bae5-4db7-8743-608ab3750c1c",
          "key": 0
        }
      ]
    }
  ]
});
