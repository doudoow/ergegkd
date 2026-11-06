// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "手机天猫",
  "id": "com.tmall.wireless",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.tmall.wireless:id/update_button_cancel\"]",
          "activityIds": [
            ".splash.TMSplashActivity",
            ".maintab.module.TMMainTabActivity",
            ".webview.TMCommonWebViewActivity",
            ".themis.container.TMThemisActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13162603",
            "https://i.gkd.li/i/13258201",
            "https://i.gkd.li/i/13399536",
            "https://i.gkd.li/i/19881137"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"update_button_cancel\"]",
          "activityIds": [
            ".splash.TMSplashActivity",
            ".maintab.module.TMMainTabActivity",
            ".webview.TMCommonWebViewActivity",
            ".themis.container.TMThemisActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13162603",
            "https://i.gkd.li/i/13258201",
            "https://i.gkd.li/i/13399536",
            "https://i.gkd.li/i/19881137"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.tmall.wireless:id/update_button_cancel\"]",
          "key": 2
        },
        {
          "matches": "[id=\"com.tmall.wireless:id/update_button_cancel\"]",
          "activityIds": [
            ".splash.TMSplashActivity",
            ".maintab.module.TMMainTabActivity",
            ".webview.TMCommonWebViewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13162603",
            "https://i.gkd.li/i/13258201",
            "https://i.gkd.li/i/13399536"
          ],
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "Image[id=null][clickable=false] < View + Image[id=null][clickable=true]",
          "activityIds": [
            "com.tmall.wireless.maintab.module.TMMainTabActivity",
            "com.tmall.wireless.turboweb.container.TurboWebViewActivity",
            "com.tmall.wireless.webview.TMCommonWebViewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13222394",
            "https://i.gkd.li/i/13222500",
            "https://i.gkd.li/i/13222510"
          ],
          "key": 0
        },
        {
          "matches": "Image[id=null][clickable=false] < View + Image[id=null][clickable=true]",
          "activityIds": [
            ".maintab.module.TMMainTabActivity",
            ".turboweb.container.TurboWebViewActivity",
            ".webview.TMCommonWebViewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13222394",
            "https://i.gkd.li/i/13222500",
            "https://i.gkd.li/i/13222510"
          ],
          "key": 1
        },
        {
          "matches": "Image[id=null][clickable=false] < View + Image[id=null][clickable=true]",
          "key": 2
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
          "matches": "View[text=\"开启系统通知\"] - View[clickable=true]",
          "activityIds": ".messagebox.activity.TMMsgboxMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13258215",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.tmall.wireless:id/update_button_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "Image[id=null][clickable=false] < View + Image[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-系统通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 5,
      "rules": [
        {
          "matches": "View[text=\"开启系统通知\"] - View[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-系统通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 6,
      "rules": [
        {
          "matches": "View[text=\"开启系统通知\"] - View[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.tmall.wireless:id/update_button_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "Image[id=null][clickable=false] < View + Image[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "系统通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 9,
      "rules": [
        {
          "matches": "View[text=\"开启系统通知\"] - View[clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
