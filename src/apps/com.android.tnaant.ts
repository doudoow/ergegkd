// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蚂蚁加速器",
  "id": "com.android.tnaant",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"公告\"] +2 [text=\"我知道了\"]",
          "activityIds": "com.dd.antss.ui.activity.LaunchActivity",
          "snapshotUrls": "https://i.gkd.li/i/13713449",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"公告\"] +2 [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"公告\"] +2 [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"公告\"] +2 [text=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
