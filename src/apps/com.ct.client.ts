// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国电信",
  "id": "com.ct.client",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15084759",
            "https://i.gkd.li/i/15079224"
          ],
          "key": 0
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15084759",
            "https://i.gkd.li/i/15079224"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.ct.client:id/btSkip\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-软件更新/安装后的用户引导",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.ct.client:id/tvSkip\"]",
          "activityIds": "com.ct.client.activity.UserGuideActivity",
          "snapshotUrls": "https://i.gkd.li/i/12508971",
          "key": 0
        },
        {
          "matches": "[id=\"com.ct.client:id/tvSkip\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"tvSkip\"]",
          "activityIds": ".activity.UserGuideActivity",
          "snapshotUrls": "https://i.gkd.li/i/12508971",
          "key": 2
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
      "key": 2,
      "rules": [
        {
          "matches": "LinearLayout > [text=\"取消升级\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.SplashActivity",
            ".common.ConfirmDialogActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12819594",
            "https://i.gkd.li/i/13316168",
            "https://i.gkd.li/i/13695096"
          ],
          "key": 0
        },
        {
          "matches": "LinearLayout > [text=\"取消升级\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-浮窗广告",
      "desc": "会出现在首页、查询办理页面",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"rlActivity\"] > [vid=\"close\"]",
          "activityIds": [
            "com.ct.client.common.ConfirmDialogActivity",
            "com.ct.client.activity.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12819676",
            "https://i.gkd.li/i/15104434"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"rlActivity\"] > [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12819676",
            "https://i.gkd.li/i/15104434"
          ],
          "key": 1
        },
        {
          "matches": "[vid=\"rlActivity\"] > [vid=\"close\"]",
          "activityIds": [
            ".common.ConfirmDialogActivity",
            ".activity.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12819676",
            "https://i.gkd.li/i/15104434"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "关闭首页和查询办理页面的浮窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "Image[text=\"tishi-close\"]",
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.ct.client:id/close\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12819676",
            "https://i.gkd.li/import/12913735",
            "https://i.gkd.li/i/15104434"
          ]
        },
        {
          "matches": "ImageView[id=\"com.ct.client:id/ivFloatClose\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13043345",
            "https://i.gkd.li/i/15137220"
          ]
        },
        {
          "matches": "Image[text=\"tishi-close\"]",
          "activityIds": [
            "com.ct.client.common.webview.OnlineBusinessWebkitActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/12913804"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "ImageView[id=\"com.ct.client:id/msg_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13043522"
        },
        {
          "matches": "[text^=\"开启消息通知\"] - [vid=\"ivClose\"]",
          "activityIds": "com.ct.client.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15209597"
        },
        {
          "matches": "ImageView[vid=\"msg_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13043522"
        },
        {
          "matches": "[text^=\"开启消息通知\"] - [vid=\"ivClose\"]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15209597"
        }
      ]
    },
    {
      "name": "功能类-右下角客服悬浮窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.ct.client:id/close\"]",
          "activityIds": "com.ct.client.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14133742",
          "exampleUrls": "https://m.gkd.li/57941037/3a14e0ac-ce6a-411d-9f92-e50da5165119",
          "key": 0
        },
        {
          "matches": "[id=\"com.ct.client:id/ivFloatClose\"]",
          "activityIds": "com.ct.client.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13043345",
          "exampleUrls": "https://m.gkd.li/57941037/a97bf7a2-6e35-4922-ad0d-8677fca79f7c",
          "key": 1
        },
        {
          "matches": "[vid=\"close\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14133742",
          "exampleUrls": "https://m.gkd.li/57941037/3a14e0ac-ce6a-411d-9f92-e50da5165119",
          "key": 2
        },
        {
          "matches": "[vid=\"ivFloatClose\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13043345",
          "exampleUrls": "https://m.gkd.li/57941037/a97bf7a2-6e35-4922-ad0d-8677fca79f7c",
          "key": 3
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"ivFloatClose\"]",
          "activityIds": "com.ct.client.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15137220",
          "exampleUrls": "https://m.gkd.li/57941037/5dd9c9e3-f290-4b73-abdd-dc5e97a99772",
          "key": 0
        },
        {
          "matches": "[vid=\"ivFloatClose\"]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15137220",
          "exampleUrls": "https://m.gkd.li/57941037/5dd9c9e3-f290-4b73-abdd-dc5e97a99772",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-英文版未登录时自动一键登录",
      "desc": "仅在使用该卡移动数据时可用",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"Login\"]",
          "activityIds": ".international.homepage.InternationalHomePageActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/22843837",
            "https://i.gkd.li/i/22846926"
          ]
        },
        {
          "matches": "@CheckBox[checked=false] + [text^=\"I agree that I have read and accepted\"]",
          "preKeys": [
            0
          ],
          "activityIds": ".international.login.InternationalLoginActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/22843889",
            "https://i.gkd.li/i/22843896"
          ]
        },
        {
          "matches": "[text=\"Login with Current Number\"]",
          "preKeys": [
            1
          ],
          "activityIds": ".international.login.InternationalLoginActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22843896",
          "key": 2
        }
      ]
    },
    {
      "name": "通知提示-开启消息通知弹窗",
      "desc": "自动点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 9,
      "rules": [
        {
          "matches": "ImageView[id=\"com.ct.client:id/msg_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13043522"
        },
        {
          "matches": "[text^=\"开启消息通知\"] <n * > [vid=\"ivClose\"]",
          "activityIds": "com.ct.client.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15209597"
        }
      ]
    },
    {
      "name": "全屏广告-软件更新/安装后的用户引导",
      "desc": "自动点击更新或安装后的引导页面跳过按钮",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.ct.client:id/tvSkip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-用户引导",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.ct.client:id/tvSkip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-浮窗广告",
      "desc": "会出现在首页、查询办理页面",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "ImageView[id=\"com.ct.client:id/close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12819676",
            "https://i.gkd.li/import/12913735"
          ],
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.ct.client:id/ivFloatClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13043345"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-业务办理-弹窗广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "Image[text=\"tishi-close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-消息-开启消息通知",
      "desc": "自动点击关闭",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "ImageView[id=\"com.ct.client:id/msg_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "用户引导",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.ct.client:id/tvSkip\"]",
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
      "key": 16,
      "rules": [
        {
          "matches": "LinearLayout > [text=\"取消升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "浮窗广告",
      "desc": "会出现在首页、查询办理页面",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "ImageView[id=\"com.ct.client:id/close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12819676",
            "https://i.gkd.li/import/12913735"
          ],
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.ct.client:id/ivFloatClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13043345"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "业务办理-弹窗广告",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "Image[text=\"tishi-close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "消息-开启消息通知",
      "desc": "自动点击关闭",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "ImageView[id=\"com.ct.client:id/msg_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
