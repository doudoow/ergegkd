// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "咪咕快游",
  "id": "cn.emagsoftware.gamehall",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"cn.emagsoftware.gamehall:id/btn_update\"] -2 [id=\"cn.emagsoftware.gamehall:id/btn_cancle\"]",
          "activityIds": "com.migugame.home_module.ui.activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13448894",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_update\"] -2 [vid=\"btn_cancle\"]",
          "activityIds": "com.migugame.home_module.ui.activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13448894",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.emagsoftware.gamehall:id/btn_update\"] -2 [id=\"cn.emagsoftware.gamehall:id/btn_cancle\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"cn.emagsoftware.gamehall:id/btn_update\"] -2 [id=\"cn.emagsoftware.gamehall:id/btn_cancle\"]",
          "key": 0
        }
      ]
    }
  ]
});
