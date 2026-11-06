// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米应用商店",
  "id": "com.xiaomi.market",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchRoot": true,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[text=\"关闭\" || desc=\"关闭\"][clickable=true][visibleToUser=true] <<n [vid=\"webview\"]",
          "action": "clickCenter",
          "activityIds": [
            ".ui.FloatWebActivity",
            ".ui.HomeFloatWebActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16323123",
            "https://i.gkd.li/i/20946336",
            "https://i.gkd.li/i/23249365"
          ]
        },
        {
          "matches": "@Button[text=\"关闭\"] <<n [id=\"com.xiaomi.market:id/webview\"]",
          "activityIds": "com.xiaomi.market.ui.FloatWebActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13248808"
        },
        {
          "matches": "[vid=\"iv_ad\"] + [vid=\"iv_close\"]",
          "activityIds": ".business_ui.main.MarketTabActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/28141509"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/iv_close_tip\"]",
          "activityIds": "com.xiaomi.market.ui.UpdateListActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13197334",
          "key": 0
        },
        {
          "matches": "[id=\"com.xiaomi.market:id/iv_close_tip\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_close_tip\" || vid=\"orchard_banner_close\"]",
          "activityIds": ".ui.UpdateListActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13197334",
            "https://i.gkd.li/i/30699398"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-忽略升级",
      "desc": "应用升级界面-自动点击忽略",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"expand_button\"][visibleToUser=true]",
          "excludeMatches": "[text=\"忽略本次\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14931577"
        },
        {
          "matches": "[text=\"忽略本次\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14931578"
        },
        {
          "matches": "[id=\"com.xiaomi.market:id/fold_text\"][text^=\"查看全部升级\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12674261"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭按钮",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"dialog_cancel\" || text=\"不再提醒\"][visibleToUser=true]",
          "activityIds": ".ui.UpdateListActivity",
          "key": 0,
          "name": "升级软件后的\"开启推送\"弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/14814456",
            "https://i.gkd.li/i/19643114"
          ]
        },
        {
          "matches": [
            "[text=\"开启通知栏提醒\"]",
            "[text=\"不了，谢谢\"]"
          ],
          "activityIds": ".business_ui.main.MarketTabActivity",
          "matchTime": 10000,
          "key": 1,
          "name": "开启通知栏提醒",
          "snapshotUrls": "https://i.gkd.li/i/13691701"
        },
        {
          "matches": "[vid=\"dialog_cancel\"]",
          "activityIds": "com.xiaomi.market.ui.UpdateListActivity",
          "key": 2,
          "name": "升级软件后的\"开启推送\"弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14814456"
        },
        {
          "matches": [
            "[text=\"开启通知栏提醒\"]",
            "[text=\"不了，谢谢\"]"
          ],
          "matchTime": 10000,
          "key": 3,
          "name": "开启通知栏提醒",
          "snapshotUrls": [
            "https://i.gkd.li/i/13197306",
            "https://i.gkd.li/i/13691701"
          ]
        }
      ]
    },
    {
      "name": "局部广告-个性化推荐卡片",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/close_float_recommend\"]",
          "activityIds": "com.xiaomi.market.business_ui.main.MarketTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13624971",
          "key": 0
        },
        {
          "matches": "[id=\"com.xiaomi.market:id/close_float_recommend\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"close_float_recommend\"]",
          "activityIds": ".business_ui.main.MarketTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13624971",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动点击[查看全部升级]",
      "desc": "应用升级页面",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"查看全部升级\" || text^=\"查看全部更新\"]",
          "activityIds": [
            "com.xiaomi.market.ui.UpdateListActivity",
            ".ui.UpdateAppsActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14782814",
            "https://i.gkd.li/i/24461973"
          ],
          "exampleUrls": [
            "https://m.gkd.li/57941037/8549db1e-17a5-44e3-b657-1d2d712efd2a",
            "https://e.gkd.li/e1a4d832-e582-4185-b93e-08ca41f46d92"
          ],
          "key": 0
        },
        {
          "matches": "@[clickable=true] > [text^=\"查看全部升级\"]",
          "activityIds": "com.xiaomi.market.ui.UpdateListActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14782814",
          "exampleUrls": "https://m.gkd.li/57941037/8549db1e-17a5-44e3-b657-1d2d712efd2a",
          "key": 1
        },
        {
          "matches": "@[clickable=true] > [text^=\"查看全部升级\" || text^=\"查看全部更新\"]",
          "activityIds": [
            ".ui.UpdateListActivity",
            ".ui.UpdateAppsActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14782814",
            "https://i.gkd.li/i/24461973"
          ],
          "exampleUrls": [
            "https://m.gkd.li/57941037/8549db1e-17a5-44e3-b657-1d2d712efd2a",
            "https://e.gkd.li/e1a4d832-e582-4185-b93e-08ca41f46d92"
          ],
          "key": 2
        },
        {
          "matches": "@[clickable=true] > [text^=\"查看全部升级\"]",
          "key": 3
        }
      ]
    },
    {
      "name": "功能类-移动数据更新弹窗点击继续",
      "key": 6,
      "rules": [
        {
          "matches": "@[text=\"继续\"] <n * - * >4 [text^=\"您在使用数据网络，升级应用可能产生流量费用\"]",
          "activityIds": "com.xiaomi.market.ui.UpdateListActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22927652",
          "key": 0
        },
        {
          "matches": "@[text=\"继续\"] <n * - * >4 [text^=\"您在使用数据网络，升级应用可能产生流量费用\"]",
          "activityIds": ".ui.UpdateListActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22927652",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-[安装新版本需要关闭应用商店]弹窗",
      "desc": "点击[现在安装]",
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text^=\"安装新版本需要关闭应用商店\"]",
            "[text=\"现在安装\"][clickable=true]"
          ],
          "activityIds": ".ui.TranslucentActivityInner",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25607662",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-启动后自动打开更新页面",
      "desc": "仅开屏触发一次",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"我的\"] <<n [vid=\"tab_container_layout\"]",
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/26096077"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"应用升级\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/26096406"
        }
      ]
    },
    {
      "name": "全屏广告-首页悬浮窗广告",
      "desc": "关闭首页的全屏悬浮广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/webview_container\"] >n [text=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-应用升级界面顶部广告横幅",
      "desc": "关闭应用升级页面顶部的广告横幅",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/iv_close_tip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页悬浮窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": [
            "[id=\"com.xiaomi.market:id/webview_container\"]",
            "Button[text.length=2][text=\"关闭\"]"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-应用升级界面-顶部广告横幅",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/iv_close_tip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-忽略升级",
      "desc": "应用升级界面-自动点击忽略",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/fold_text\"][text^=\"查看全部升级\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12674261"
        },
        {
          "matches": "[id=\"com.xiaomi.market:id/expandable_textview\"] + [id=\"com.xiaomi.market:id/expand_button\"][desc=\"更多\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12674264"
        },
        {
          "matches": "@[id=\"com.xiaomi.market:id/ignore_this\"][text=\"忽略本次\"] + [id=\"com.xiaomi.market:id/ignore_permanently\"][text=\"永久忽略\"]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12674269"
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限提示弹窗",
      "desc": "自动点击关闭按钮",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "@[id=\"com.xiaomi.market:id/dialog_cancel\"] - LinearLayout > [id=\"com.xiaomi.market:id/btn_start_push\"]",
          "key": 0,
          "name": "开启推送",
          "snapshotUrls": "https://i.gkd.li/import/12714980"
        },
        {
          "matches": "Button[text=\"立即开启\"] - Button[text=\"不了，谢谢\"]",
          "key": 1,
          "name": "开启通知栏提醒",
          "snapshotUrls": [
            "https://i.gkd.li/import/13197306",
            "https://i.gkd.li/import/13691701"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-个性化推荐弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/close_float_recommend\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页悬浮窗广告",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": [
            "[id=\"com.xiaomi.market:id/webview_container\"]",
            "Button[text.length=2][text=\"关闭\"]"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "应用升级界面-顶部广告横幅",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/iv_close_tip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "忽略升级",
      "desc": "应用升级界面-自动点击忽略",
      "enable": false,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/fold_text\"][text^=\"查看全部升级\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12674261"
        },
        {
          "matches": "[id=\"com.xiaomi.market:id/expandable_textview\"] + [id=\"com.xiaomi.market:id/expand_button\"][desc=\"更多\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12674264"
        },
        {
          "matches": "@[id=\"com.xiaomi.market:id/ignore_this\"][text=\"忽略本次\"] + [id=\"com.xiaomi.market:id/ignore_permanently\"][text=\"永久忽略\"]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12674269"
        }
      ]
    },
    {
      "name": "请求通知权限提示弹窗",
      "desc": "自动点击关闭按钮",
      "enable": false,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "@[id=\"com.xiaomi.market:id/dialog_cancel\"] - LinearLayout > [id=\"com.xiaomi.market:id/btn_start_push\"]",
          "key": 0,
          "name": "开启推送",
          "snapshotUrls": "https://i.gkd.li/import/12714980"
        },
        {
          "matches": "Button[text=\"立即开启\"] - Button[text=\"不了，谢谢\"]",
          "key": 1,
          "name": "开启通知栏提醒",
          "snapshotUrls": [
            "https://i.gkd.li/import/13197306",
            "https://i.gkd.li/import/13691701"
          ]
        }
      ]
    },
    {
      "name": "个性化推荐弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.market:id/close_float_recommend\"]",
          "key": 0
        }
      ]
    }
  ]
});
