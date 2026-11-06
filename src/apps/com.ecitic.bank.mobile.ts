// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中信银行",
  "id": "com.ecitic.bank.mobile",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"暂不更新\"] + [text=\"立即更新\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12701217",
          "key": 0
        },
        {
          "matches": "@[text=\"暂不更新\"] + [text=\"立即更新\"]",
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
          "matches": "[id=\"com.ecitic.bank.mobile:id/close_product_send\"]",
          "activityIds": [
            "com.ecitic.bank.mobile.ui.MainActivity",
            "com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12701230",
            "https://i.gkd.li/i/13402746"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"close_product_send\"]",
          "activityIds": [
            ".ui.MainActivity",
            ".ui.webview.CordovaWebViewActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12701230",
            "https://i.gkd.li/i/13402746"
          ],
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
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即开启\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13399102",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-理财产品悬浮广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[clickable=true] +2 [visibleToUser=true][text=\"恭喜您关注到宝藏基金\"] <<n [vid=\"cordova_view\"]",
          "activityIds": "com.ecitic.bank.mobile.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14208637",
          "key": 0
        },
        {
          "matches": "@[clickable=true] +2 [text=\"恭喜您关注到宝藏基金\"]",
          "key": 1
        },
        {
          "matches": "@[clickable=true] +2 [visibleToUser=true][text=\"恭喜您关注到宝藏基金\"] <<n [vid=\"cordova_view\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14208637",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.ecitic.bank.mobile:id/id_cordova_view\"] + [id=\"com.ecitic.bank.mobile:id/close_product_send\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求开通知权限弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.ecitic.bank.mobile:id/id_cordova_view\"] + [id=\"com.ecitic.bank.mobile:id/close_product_send\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求开通知权限弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 8,
      "rules": [
        {
          "matches": "@[text=\"暂不更新\"] + [text=\"立即更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.ecitic.bank.mobile:id/id_cordova_view\"] + [id=\"com.ecitic.bank.mobile:id/close_product_send\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求开通知权限弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即开启\"]",
          "key": 0
        }
      ]
    }
  ]
});
