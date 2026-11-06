// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "全知识",
  "id": "com.allhistory.dls.marble",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击暂不开启",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"v_open\"] + [vid=\"v_not\"]",
          "activityIds": "com.pwrd.dls.marble.other.notification.NotificationDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/13997956",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-左下角参与答题卡片",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[vid=\"iv_board\"]",
            "[vid=\"iv_close\"]"
          ],
          "activityIds": "com.pwrd.dls.marble.moudle.homepage.HomePageActivity",
          "snapshotUrls": "https://i.gkd.li/i/13997954",
          "key": 0
        }
      ]
    }
  ]
});
