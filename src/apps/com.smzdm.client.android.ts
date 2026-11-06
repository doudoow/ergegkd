// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "什么值得买",
  "id": "com.smzdm.client.android",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.smzdm.client.android:id/dialog_home_close\"]",
          "activityIds": "com.smzdm.client.android.app.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12695751",
          "key": 0
        },
        {
          "matches": "[vid=\"dialog_home_close\"]",
          "activityIds": ".app.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12695751",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.smzdm.client.android:id/tv_version\"] +2 [id=\"com.smzdm.client.android:id/iv_close\"]",
          "activityIds": ".app.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13198016",
          "key": 0
        },
        {
          "matches": "[id=\"com.smzdm.client.android:id/tv_version\"] +2 [id=\"com.smzdm.client.android:id/iv_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"tv_version\"] +2 [vid=\"iv_close\"]",
          "activityIds": ".app.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13198016",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-请求读取剪贴板权限弹窗",
      "desc": "点击暂不允许",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"暂不允许\"] + [text=\"允许\"]",
          "activityIds": "com.smzdm.client.android.app.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13198020",
          "key": 0
        },
        {
          "matches": "@[text=\"暂不允许\"] + [text=\"允许\"]",
          "activityIds": ".app.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13198020",
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
      "key": 3,
      "rules": [
        {
          "matches": [
            "TextView[text^=\"开启推送通知\"]",
            "[vid=\"iv_close\" || id=\"com.smzdm.client.android:id/ib_close\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".module.haojia.detail.HaojiaDetailActivity",
            ".module.community.module.bask.BaskDetailActivity",
            ".app.HomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13438810",
            "https://i.gkd.li/i/13626746",
            "https://i.gkd.li/i/18150286"
          ],
          "exampleUrls": [
            "https://e.gkd.li/2e979f31-7498-497f-a4ed-b82b884e2d8d",
            "https://e.gkd.li/a52462c1-e3bf-45ad-8639-6fa764f2135d"
          ],
          "key": 0
        },
        {
          "matches": [
            "TextView[text^=\"开启推送通知\"]",
            "[vid=\"iv_close\" || vid=\"ib_close\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".module.haojia.detail.HaojiaDetailActivity",
            ".module.community.module.bask.BaskDetailActivity",
            ".app.HomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13438810",
            "https://i.gkd.li/i/13626746",
            "https://i.gkd.li/i/18150286"
          ],
          "exampleUrls": [
            "https://e.gkd.li/2e979f31-7498-497f-a4ed-b82b884e2d8d",
            "https://e.gkd.li/a52462c1-e3bf-45ad-8639-6fa764f2135d"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-APP内弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.smzdm.client.android:id/dialog_home_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求读取剪贴板权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"暂不允许\"] + [text=\"允许\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "ImageView[id=\"com.smzdm.client.android:id/ib_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-APP内弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.smzdm.client.android:id/dialog_home_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求读取剪贴板权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@[text=\"暂不允许\"] + [text=\"允许\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "ImageView[id=\"com.smzdm.client.android:id/ib_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "APP内弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.smzdm.client.android:id/dialog_home_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.smzdm.client.android:id/tv_version\"] +2 [id=\"com.smzdm.client.android:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求读取剪贴板权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 12,
      "rules": [
        {
          "matches": "@[text=\"暂不允许\"] + [text=\"允许\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 13,
      "rules": [
        {
          "matches": "ImageView[id=\"com.smzdm.client.android:id/ib_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
