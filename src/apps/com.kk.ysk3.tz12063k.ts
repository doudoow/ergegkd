// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "可可影视",
  "id": "com.kk.ysk3.tz12063k",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[朕知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"朕知道了\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.salmon.film.main.ui.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14321907",
          "exampleUrls": "https://m.gkd.li/57941037/c93d9be8-559a-46aa-8416-f52a7c99df4b",
          "key": 0
        }
      ]
    }
  ]
});
