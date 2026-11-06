// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国移动江苏",
  "id": "com.jsmcc",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[vid=\"notice_dia\"]",
          "action": "back",
          "activityIds": ".ui.MainActivityGroupNew",
          "snapshotUrls": "https://i.gkd.li/i/16215987",
          "key": 0
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
          "matches": "[id=\"com.jsmcc:id/cancelVersionTV\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13327322"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.jsmcc:id/cancelVersionTV\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13327322"
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
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.jsmcc:id/cancelVersionTV\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13327322"
        }
      ]
    }
  ]
});
