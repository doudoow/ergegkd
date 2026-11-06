// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "权限管理服务",
  "id": "com.lbe.security.miui",
  "groups": [
    {
      "name": "功能类-权限授予弹窗",
      "desc": "自动点击\"仅在使用中允许\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"仅在使用中允许\"]",
          "activityIds": "com.android.packageinstaller.permission.ui.GrantPermissionsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13761264",
          "key": 0
        },
        {
          "matches": "[text=\"仅在使用中允许\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击拒绝",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text$=\"发送通知\"]",
            "[text=\"拒绝\"]"
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14321882",
          "exampleUrls": "https://m.gkd.li/57941037/0487a113-5b57-402e-96ca-1f351e121d82",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-权限授予弹窗",
      "desc": "自动点击【仅在使用中允许】",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"仅在使用中允许\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-权限授予弹窗",
      "desc": "自动点击【仅在使用中允许】",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"仅在使用中允许\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限授予弹窗",
      "desc": "自动点击【仅在使用中允许】",
      "enable": false,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"仅在使用中允许\"]",
          "key": 0
        }
      ]
    }
  ]
});
