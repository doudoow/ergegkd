// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "浙商银行",
  "id": "com.czbank.mbank",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_close_btn\"][visibleToUser=true]",
          "activityIds": "com.mixhome.MainMarsMixAct",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23324592",
          "exampleUrls": "https://e.gkd.li/5c4f7917-8d01-419e-ac77-3d1fb27a9613",
          "key": 0
        }
      ]
    }
  ]
});
