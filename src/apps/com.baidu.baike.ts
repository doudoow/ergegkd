// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百度百科",
  "id": "com.baidu.baike",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击\"不允许\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"打开推送通知\"] +2 [text=\"不允许\"]",
          "activityIds": ".component.push.NotificationEnableDialog",
          "snapshotUrls": "https://i.gkd.li/i/12755717",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"打开推送通知\"] +2 [text=\"不允许\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "enable": false,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@TextView[text=\"不允许\"] -n TextView[text*=\"发送通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text^=\"打开推送通知\"] +2 [text=\"不允许\"]",
          "key": 0
        }
      ]
    }
  ]
});
