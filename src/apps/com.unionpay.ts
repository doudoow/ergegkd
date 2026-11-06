// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云闪付",
  "id": "com.unionpay",
  "groups": [
    {
      "name": "分段广告-支付完成界面卡片广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13070564"
        },
        {
          "matches": "[text=\"关闭广告\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13070974"
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"frog_float\"][visibleToUser=true] >2 [vid=\"close_view\"]",
          "position": {
            "left": "width * 0.8893",
            "top": "width * 0.4607"
          },
          "activityIds": "com.unionpay.activity.UPActivityMain",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14586427",
          "exampleUrls": "https://m.gkd.li/57941037/0f4f6a7f-55ce-4f87-a4cb-97e9c7107359",
          "key": 0
        },
        {
          "matches": "[vid=\"frog_float\"] >2 [vid=\"close_view\"][clickable=true]",
          "activityIds": ".activity.UPActivityMain",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14586427",
            "https://i.gkd.li/i/31259720"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/0f4f6a7f-55ce-4f87-a4cb-97e9c7107359",
          "key": 1
        },
        {
          "matches": "[id=\"com.unionpay:id/frog_float\"] >2 [id=\"com.unionpay:id/close_view\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12695699",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "自动点击\"不允许\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.unionpay:id/view_locate_close\"]",
          "activityIds": ".activity.UPActivityMain",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13634882"
        },
        {
          "matches": [
            "[text*=\"访问您的位置信息\"]",
            "[text=\"不允许\"]"
          ],
          "activityIds": [
            ".activity.UPActivityMain",
            ".base.UPDialog"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12695773",
            "https://i.gkd.li/i/14209001"
          ]
        },
        {
          "matches": "[text*=\"访问您的位置信息\"] < * +n * > [text=\"不允许\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12695773",
            "https://i.gkd.li/i/14209001"
          ]
        },
        {
          "matches": "[id=\"com.unionpay:id/view_locate_close\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13634882"
        },
        {
          "matches": "@[clickable=true] > [vid=\"locate_iv_close\"]",
          "activityIds": ".activity.UPActivityMain",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13634882",
            "https://i.gkd.li/i/31263858"
          ]
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
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"开启消息通知\"] < * + [id=\"com.unionpay:id/view_alert_cancel\"][visibleToUser=true]",
          "activityIds": ".base.UPDialog",
          "snapshotUrls": "https://i.gkd.li/i/12695736",
          "key": 0
        },
        {
          "matches": "[text=\"开启消息通知\"] < * + [id=\"com.unionpay:id/view_alert_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12695736",
          "key": 1
        },
        {
          "matches": "[text=\"开启消息通知\"] < * + [vid=\"view_alert_cancel\"][visibleToUser=true]",
          "activityIds": ".base.UPDialog",
          "snapshotUrls": "https://i.gkd.li/i/12695736",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-天天签到-获得新勋章提示",
      "desc": "点击左上角返回",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "WebView[text=\"天天签到\"] TextView[text=\"炫耀一下\"] + TextView[clickable=true]",
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "snapshotUrls": "https://i.gkd.li/i/13440341",
          "key": 0
        },
        {
          "matches": "WebView[text=\"天天签到\"] TextView[text=\"炫耀一下\"] + TextView[clickable=true]",
          "activityIds": ".cordova.UPActivityCordovaWeb",
          "snapshotUrls": "https://i.gkd.li/i/13440341",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-领取优惠弹窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "@View[clickable=true][text=\"关闭按钮\"] <<n [vid=\"view_content_container\"]",
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13848688",
          "key": 0
        },
        {
          "matches": "[id=\"com.unionpay:id/view_content_container\"] View[text=\"关闭按钮\"][clickable=true]",
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "snapshotUrls": "https://i.gkd.li/i/13848688",
          "key": 1
        },
        {
          "matches": "@View[clickable=true][text=\"关闭按钮\"] <<n [vid=\"view_content_container\"]",
          "activityIds": ".cordova.UPActivityCordovaWeb",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13848688",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-支付完成界面广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13070564"
        },
        {
          "matches": "[text=\"关闭广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13070974"
        }
      ]
    },
    {
      "name": "未分类-天天签到-获得新勋章提示",
      "desc": "点击左上角返回",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "WebView[text=\"天天签到\"] TextView[text=\"炫耀一下\"] + TextView[clickable=true]",
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "snapshotUrls": "https://i.gkd.li/i/13440341",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-我的页面-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.unionpay:id/container\"] + [id=\"com.unionpay:id/image\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-支付完成界面广告卡片",
      "desc": "关闭支付完成页面底部的广告卡片",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13070564"
        },
        {
          "matches": "[text=\"关闭广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13070974"
        }
      ]
    },
    {
      "name": "局部广告-浮窗广告",
      "desc": "点击关闭浮窗广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[vid=\"close_view\"][visibleToUser=true]",
          "activityIds": "com.unionpay.activity.UPActivityMain",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20239453"
        },
        {
          "matches": "[vid=\"frog_float\"] >2 [vid=\"close_view\"][clickable=true]",
          "activityIds": ".activity.UPActivityMain",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14586427",
            "https://i.gkd.li/i/31259720"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-各类全屏弹窗广告",
      "desc": "点击关闭各类全屏弹窗广告，例如获得新勋章提示、我的页面广告弹窗、领取优惠弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "WebView[text=\"天天签到\"] TextView[text=\"炫耀一下\"] + TextView[clickable=true]",
          "actionMaximum": 1,
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "resetMatch": "app",
          "key": 0,
          "name": "天天签到-获得新勋章提示",
          "snapshotUrls": "https://i.gkd.li/import/13440341"
        },
        {
          "matches": "[id=\"com.unionpay:id/container\"] + [id=\"com.unionpay:id/image\"][clickable=true]",
          "actionMaximum": 1,
          "activityIds": "com.unionpay.activity.UPActivityMain",
          "matchTime": 10000,
          "key": 1,
          "name": "我的页面-广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13440341"
        },
        {
          "matches": "[id=\"com.unionpay:id/view_content_container\"] View[text=\"关闭按钮\"][clickable=true]",
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "key": 2,
          "name": "领取优惠弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13848688"
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
      "key": 12,
      "rules": [
        {
          "matches": "@[text=\"稍候再说\"] + [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/import/12727278",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-支付完成界面广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13070564"
        },
        {
          "matches": "[text=\"关闭广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13070974"
        }
      ]
    },
    {
      "name": "全屏广告-定位权限悬浮弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.unionpay:id/view_locate_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-访问位置请求弹窗",
      "desc": "自动点击【不允许】。默认关闭，请手动开启",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[text$=\"想访问您的位置信息\"] < * +2 LinearLayout > [id=\"com.unionpay:id/btn_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12695773",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开启消息通知弹窗",
      "desc": "默认关闭，请手动开启",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"开启消息通知\"] < * + [id=\"com.unionpay:id/view_alert_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12695736",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-我的页面-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.unionpay:id/container\"] + [id=\"com.unionpay:id/image\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "@[text=\"稍候再说\"] + [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/import/12727278",
          "key": 0
        }
      ]
    },
    {
      "name": "支付完成界面广告卡片",
      "enable": false,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13070564"
        },
        {
          "matches": "[text=\"关闭广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13070974"
        }
      ]
    },
    {
      "name": "右侧悬浮广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.unionpay:id/frog_float\"] >2 [id=\"com.unionpay:id/close_view\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12695699",
          "key": 0
        }
      ]
    },
    {
      "name": "定位权限悬浮弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.unionpay:id/view_locate_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "访问位置请求弹窗",
      "desc": "自动点击【不允许】。默认关闭，请手动开启",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "[text$=\"想访问您的位置信息\"] < * +2 LinearLayout > [id=\"com.unionpay:id/btn_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12695773",
          "key": 0
        }
      ]
    },
    {
      "name": "开启消息通知弹窗",
      "desc": "默认关闭，请手动开启",
      "enable": false,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "[text=\"开启消息通知\"] < * + [id=\"com.unionpay:id/view_alert_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12695736",
          "key": 0
        }
      ]
    },
    {
      "name": "天天签到-获得新勋章提示",
      "desc": "点击左上角返回",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 24,
      "rules": [
        {
          "matches": "WebView[text=\"天天签到\"] TextView[text=\"炫耀一下\"] + TextView[clickable=true]",
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "snapshotUrls": "https://i.gkd.li/import/13440341",
          "key": 0
        }
      ]
    },
    {
      "name": "我的页面-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 25,
      "rules": [
        {
          "matches": "[id=\"com.unionpay:id/container\"] + [id=\"com.unionpay:id/image\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
