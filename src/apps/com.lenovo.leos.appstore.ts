// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "联想应用中心",
  "id": "com.lenovo.leos.appstore",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.lenovo.leos.appstore:id/dialog_cancel\"] + [text$=\"版本更新\"]",
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "snapshotUrls": "https://i.gkd.li/i/13401992",
          "key": 0
        },
        {
          "matches": "@[id=\"com.lenovo.leos.appstore:id/dialog_cancel\"] + [text$=\"版本更新\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"dialog_cancel\"] + [text$=\"版本更新\"]",
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "snapshotUrls": "https://i.gkd.li/i/13401992",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text$=\"打开应用中心通知\"]",
            "[text=\"知道了\"]"
          ],
          "activityIds": ".activities.NotificationGuideActivity",
          "snapshotUrls": "https://i.gkd.li/i/13401991",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text$=\"打开应用中心通知\"] +n [text=\"知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text$=\"打开应用中心通知\"] +n [text=\"知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.lenovo.leos.appstore:id/dialog_cancel\"] + [text$=\"版本更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text$=\"打开应用中心通知\"] +n [text=\"知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
