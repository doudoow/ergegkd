// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易大神",
  "id": "com.netease.gl",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] +2 LinearLayout >n [id=\"com.netease.gl:id/btn_update\"]",
          "activityIds": ".serviceupdate.widget.DialogUpdate",
          "snapshotUrls": "https://i.gkd.li/i/12883135",
          "key": 0
        },
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] +2 LinearLayout >n [id=\"com.netease.gl:id/btn_update\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"iv_close\"] +2 LinearLayout >n [vid=\"btn_update\"]",
          "activityIds": ".serviceupdate.widget.DialogUpdate",
          "snapshotUrls": "https://i.gkd.li/i/12883135",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [id=\"com.netease.gl:id/iv_cover\"]",
          "activityIds": "com.netease.gl.ui.activity.welcome.WelcomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12883277"
        },
        {
          "matches": "@[vid=\"iv_close\"] + [vid=\"iv_cover\"]",
          "activityIds": ".ui.activity.welcome.WelcomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12883277"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [text=\"开启推送\"]",
          "activityIds": ".compfeed.widget.CommonWebPopupDialog",
          "snapshotUrls": "https://i.gkd.li/i/13072071",
          "key": 0
        },
        {
          "matches": "@[vid=\"iv_close\"] + [text=\"开启推送\"]",
          "activityIds": ".compfeed.widget.CommonWebPopupDialog",
          "snapshotUrls": "https://i.gkd.li/i/13072071",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-应用内广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [id=\"com.netease.gl:id/iv_cover\"]",
          "activityIds": "com.netease.gl.ui.activity.welcome.WelcomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12883277"
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [text=\"开启推送\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [id=\"com.netease.gl:id/iv_cover\"]",
          "activityIds": "com.netease.gl.ui.activity.welcome.WelcomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12883277"
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [text=\"开启推送\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] +2 LinearLayout >n [id=\"com.netease.gl:id/btn_update\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内广告弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [id=\"com.netease.gl:id/iv_cover\"]",
          "activityIds": "com.netease.gl.ui.activity.welcome.WelcomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12883277"
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [text=\"开启推送\"]",
          "key": 0
        }
      ]
    }
  ]
});
