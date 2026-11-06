// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国移动云盘",
  "id": "com.chinamobile.mcloud",
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
          "matches": [
            "[text=\"发现新版本\"]",
            "[vid=\"bn_cancel\"]"
          ],
          "activityIds": ".client.ui.setting.UpgradeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14297700"
        },
        {
          "matches": "@[id=\"com.chinamobile.mcloud:id/bn_cancel\"] + [id=\"com.chinamobile.mcloud:id/upgrade_title\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.chinamobile.mcloud:id/iv_close\"]",
          "actionMaximum": 1,
          "activityIds": [
            "com.chinamobile.mcloud.client.ui.MenuActivity",
            "com.chinamobile.mcloud.client.ui.CustomScanActivity",
            "com.mcloud.login.ui.ConfirmLoginTvActivity"
          ],
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13627826",
            "https://i.gkd.li/i/14549523",
            "https://i.gkd.li/i/14732062"
          ]
        },
        {
          "matches": "@Image[clickable=true] < View -3 [text=\"马上领取\"] < View < View < View < WebView < WebView < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13627832"
        },
        {
          "matches": "[vid=\"rl_container\"] + [vid=\"iv_close\"]",
          "activityIds": [
            "com.chinamobile.mcloud.client.ui.MenuActivity",
            "com.chinamobile.mcloud.client.ui.CustomScanActivity",
            "com.mcloud.login.ui.ConfirmLoginTvActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13627826",
            "https://i.gkd.li/i/14549477",
            "https://i.gkd.li/i/14732062"
          ]
        },
        {
          "matches": "[text=\"马上领取\"] +n View > Image[clickable=true]",
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13627832"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "actionMaximum": 1,
          "activityIds": [
            ".client.ui.MenuActivity",
            ".client.ui.CustomScanActivity",
            "com.mcloud.login.ui.ConfirmLoginTvActivity"
          ],
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13627826",
            "https://i.gkd.li/i/14549523",
            "https://i.gkd.li/i/14732062"
          ]
        },
        {
          "matches": "@Image[clickable=true] < View -3 [text=\"马上领取\"] < View < View < View < WebView < WebView < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".client.ui.MenuActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13627832"
        },
        {
          "matches": "[id=\"com.chinamobile.mcloud:id/rl_container\"] + [id=\"com.chinamobile.mcloud:id/iv_close\"]",
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/import/13627826"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.chinamobile.mcloud:id/iv_logo\"] + [id=\"com.chinamobile.mcloud:id/iv_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13627834"
        },
        {
          "matches": "[vid=\"iv_logo\"] + [vid=\"iv_close\"]",
          "actionMaximum": 1,
          "activityIds": ".client.ui.MenuActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13627834"
        }
      ]
    },
    {
      "name": "全屏广告-请求开启自动备份弹窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"开启自动备份\"] +4 [text=\"暂不设置\"][visibleToUser=true]",
          "activityIds": ".client.ui.MenuActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13627830",
          "key": 0
        },
        {
          "matches": "[text=\"开启自动备份\"] +n [id=\"com.chinamobile.mcloud:id/tv_skip\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"btn_push_notice_close_dialog\"]",
          "activityIds": ".client.ui.MenuActivity",
          "snapshotUrls": "https://i.gkd.li/i/14882447",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_push_notice_close_dialog\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-请求开启自动备份弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"开启自动备份\"] +n [id=\"com.chinamobile.mcloud:id/tv_skip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"com.chinamobile.mcloud:id/bn_cancel\"] + [id=\"com.chinamobile.mcloud:id/upgrade_title\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.chinamobile.mcloud:id/rl_container\"] + [id=\"com.chinamobile.mcloud:id/iv_close\"]",
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13627826"
        },
        {
          "matches": "[text=\"马上领取\"] +n View > Image[clickable=true]",
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13627832"
        }
      ]
    },
    {
      "name": "悬浮广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.chinamobile.mcloud:id/iv_logo\"] + [id=\"com.chinamobile.mcloud:id/iv_close\"]",
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13627834"
        }
      ]
    },
    {
      "name": "请求开启自动备份弹窗",
      "enable": false,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"开启自动备份\"] +n [id=\"com.chinamobile.mcloud:id/tv_skip\"]",
          "key": 0
        }
      ]
    }
  ]
});
