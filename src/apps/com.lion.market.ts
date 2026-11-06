// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "虫虫助手",
  "id": "com.lion.market",
  "groups": [
    {
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"dlg_main_ad_close\"][visibleToUser=true]",
          "activityIds": ".app.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23784776",
          "exampleUrls": "https://e.gkd.li/6e29aaa4-1a01-4422-8379-24140a4ffed5",
          "key": 0
        }
      ]
    }
  ]
});
