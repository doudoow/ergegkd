// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "VMOS Pro",
  "id": "com.vmos.pro",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"不再显示本活动\"]",
          "activityIds": "com.vmos.pro.activities.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13536416",
          "key": 0
        },
        {
          "matches": "[text=\"不再显示本活动\"]",
          "activityIds": ".activities.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13536416",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.vmos.pro:id/iv_dismiss\"] ",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.vmos.pro:id/iv_dismiss\"] ",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.vmos.pro:id/iv_dismiss\"] ",
          "key": 0
        }
      ]
    }
  ]
});
