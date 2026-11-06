// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "TeraBox",
  "id": "com.dubox.drive",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[id=\"com.dubox.drive:id/tv_skip\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13200574"
        },
        {
          "matches": "@[id=\"com.dubox.drive:id/ivClose\"] - * >2 [id=\"inmobi-ad\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13688384"
        },
        {
          "matches": [
            "[id=\"inmobi-ad\"]",
            "[id=\"com.dubox.drive:id/ivClose\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13688384",
          "key": 2
        },
        {
          "matches": "TextView[vid=\"tv_skip\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13200574"
        },
        {
          "matches": "@[vid=\"ivClose\"] - * >2 [id=\"inmobi-ad\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13688384"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"com.dubox.drive:id/ivClose\"]",
          "activityIds": "com.dubox.drive.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13200577",
          "key": 0
        },
        {
          "matches": "ImageView[vid=\"ivClose\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13200577",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"Authorize\"] - [id=\"com.dubox.drive:id/dialog_button_cancel\"]",
          "activityIds": ".permission.view.PermissionDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/13688406",
          "key": 0
        },
        {
          "matches": "[text=\"Authorize\"] - [vid=\"dialog_button_cancel\"]",
          "activityIds": ".permission.view.PermissionDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/13688406",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[id=\"com.dubox.drive:id/ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-通知权限",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"Authorize\"] - [id=\"com.dubox.drive:id/dialog_button_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView[id=\"com.dubox.drive:id/ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知权限",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"Authorize\"] - [id=\"com.dubox.drive:id/dialog_button_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "ImageView[id=\"com.dubox.drive:id/ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知权限",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"Authorize\"] - [id=\"com.dubox.drive:id/dialog_button_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
