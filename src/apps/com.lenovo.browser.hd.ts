// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "联想浏览器HD",
  "id": "com.lenovo.browser.hd",
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
          "matches": "[text=\"发现新版本\"] - * > [id=\"com.lenovo.browser.hd:id/fl_close\"]",
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "snapshotUrls": "https://i.gkd.li/i/13401982",
          "key": 0
        },
        {
          "matches": "[text=\"发现新版本\"] - * > [id=\"com.lenovo.browser.hd:id/fl_close\"]",
          "key": 1
        },
        {
          "matches": "[text=\"发现新版本\"] - * > [vid=\"fl_close\"]",
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "snapshotUrls": "https://i.gkd.li/i/13401982",
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
          "matches": "[text=\"开启消息通知\"] +n * > [id=\"com.lenovo.browser.hd:id/tv_cancle\"]",
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "snapshotUrls": "https://i.gkd.li/i/13401980",
          "key": 0
        },
        {
          "matches": "[text=\"开启消息通知\"] +n * > [vid=\"tv_cancle\"]",
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "snapshotUrls": "https://i.gkd.li/i/13401980",
          "key": 1
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
          "matches": "[text=\"开启消息通知\"] +n * > [id=\"com.lenovo.browser.hd:id/tv_cancle\"]",
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
          "matches": "[text=\"开启消息通知\"] +n * > [id=\"com.lenovo.browser.hd:id/tv_cancle\"]",
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
          "matches": "[text=\"发现新版本\"] - * > [id=\"com.lenovo.browser.hd:id/fl_close\"]",
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
          "matches": "[text=\"开启消息通知\"] +n * > [id=\"com.lenovo.browser.hd:id/tv_cancle\"]",
          "key": 0
        }
      ]
    }
  ]
});
