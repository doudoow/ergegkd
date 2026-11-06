// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "芝麻粒",
  "id": "pansong291.xposed.quickenergy.repair",
  "groups": [
    {
      "name": "通知提示-开屏[提示]弹窗",
      "desc": "点击[我知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"我知道了\"]",
          "activityIds": "pansong291.xposed.quickenergy.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13445477",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-开屏弹窗跳过",
      "desc": "打开app点击知道了",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[id='android:id/button2']"
          ],
          "activityIds": [
            "pansong291.xposed.quickenergy.ui.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13445477"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开屏弹窗跳过",
      "desc": "打开app点击知道了",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[id='android:id/button2']"
          ],
          "activityIds": [
            "pansong291.xposed.quickenergy.ui.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13445477"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "开屏弹窗跳过",
      "desc": "打开app点击知道了",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[id='android:id/button2']"
          ],
          "activityIds": [
            "pansong291.xposed.quickenergy.ui.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13445477"
          ],
          "key": 0
        }
      ]
    }
  ]
});
