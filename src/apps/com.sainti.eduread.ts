// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "出口成章",
  "id": "com.sainti.eduread",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": ".home.FrActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18392760",
          "exampleUrls": "https://e.gkd.li/38334f57-2796-48a7-9000-76de3e8221ed",
          "key": 0
        }
      ]
    }
  ]
});
