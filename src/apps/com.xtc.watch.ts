// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小天才",
  "id": "com.xtc.watch",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"App功能更新了\"]",
            "[id=\"com.xtc.watch:id/iv_close\"]"
          ],
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity14",
          "snapshotUrls": "https://i.gkd.li/i/13197390",
          "key": 0
        },
        {
          "matches": [
            "[text=\"App功能更新了\"]",
            "[vid=\"iv_close\"]"
          ],
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity14",
          "snapshotUrls": "https://i.gkd.li/i/13197390",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text*=\"开启消息通知\"]",
            "[id=\"com.xtc.watch:id/iv_close\"]"
          ],
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13063274"
        },
        {
          "matches": "[id=\"com.xtc.watch:id/iv_notify_permission_close\"]",
          "activityIds": ".view.home.activity.XtcHomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13059965"
        },
        {
          "matches": [
            "[text*=\"开启消息通知\"]",
            "[vid=\"iv_close\"]"
          ],
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13063274"
        },
        {
          "matches": "[vid=\"iv_notify_permission_close\"]",
          "activityIds": ".view.home.activity.XtcHomeActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13059965"
        }
      ]
    },
    {
      "name": "未分类-弹窗提醒",
      "desc": "已知包括APP升级提醒与开启通知提醒，自动点击关闭。",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.xtc.watch:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-开启通知提醒",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[id=\"com.xtc.watch:id/iv_notify_permission_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13059965"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗提醒",
      "desc": "已知包括APP升级提醒与开启通知提醒，自动点击关闭。",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.xtc.watch:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开启通知提醒",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "[id=\"com.xtc.watch:id/iv_notify_permission_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13059965"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗提醒",
      "desc": "已知包括APP升级提醒与开启通知提醒，自动点击关闭。",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.xtc.watch:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开启通知提醒",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": [
            "[id=\"com.xtc.watch:id/iv_notify_permission_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13059965"
          ],
          "key": 0
        }
      ]
    }
  ]
});
