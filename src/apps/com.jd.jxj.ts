// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "京粉",
  "id": "com.jd.jxj",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"popup_close_imgid\"]",
          "activityIds": "com.jd.jxj.modules.main.SlidingTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15369226",
          "exampleUrls": "https://m.gkd.li/57941037/ac5a04ef-3199-4ae5-8863-ea365b5efbab",
          "key": 0
        },
        {
          "matches": "[vid=\"popup_close_imgid\"]",
          "activityIds": ".modules.main.SlidingTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15369226",
          "exampleUrls": "https://m.gkd.li/57941037/ac5a04ef-3199-4ae5-8863-ea365b5efbab",
          "key": 1
        }
      ]
    }
  ]
});
