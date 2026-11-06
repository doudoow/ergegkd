// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀应用市场",
  "id": "com.hihonor.appmarket",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击 跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tv_operation_skip\"]",
          "snapshotUrls": "https://i.gkd.li/i/16406381",
          "exampleUrls": "https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_operation_skip\" || vid=\"btn_skip\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16406381",
            "https://i.gkd.li/i/29175881"
          ],
          "exampleUrls": "https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6",
          "key": 1
        },
        {
          "matches": "[id=\"com.hihonor.appmarket:id/tv_operation_skip\"]",
          "snapshotUrls": "https://i.gkd.li/import/15087199",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_dialog_operation_close\"]",
          "activityIds": [
            "com.hihonor.android.launcher.unihome.UniHomeLauncher",
            "com.hihonor.appmarket.module.main.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13063815",
            "https://i.gkd.li/i/13168440"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"iv_dialog_operation_close\"]",
          "activityIds": [
            "com.hihonor.android.launcher.unihome.UniHomeLauncher",
            ".module.main.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13063815",
            "https://i.gkd.li/i/13168440"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-悬浮窗小广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_floating_close\"]",
          "activityIds": ".module.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13063928",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_floating_close\"]",
          "activityIds": ".module.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13063928",
          "key": 1
        },
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_floating_close\"]",
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
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "TextView[text=\"接收通知\"] < LinearLayout < LinearLayout +n [id=\"android:id/buttonPanel\"] Button[text=\"否\"]",
          "activityIds": ".module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13073319",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-个性化内容推荐提示",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text*=\"个性化的内容推荐\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": ".module.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/21884571",
          "exampleUrls": "https://e.gkd.li/12825cd1-cd11-40eb-80e3-45d93c9ad058",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_dialog_operation_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-悬浮窗小广告",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_floating_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-推送通知",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "TextView[text=\"接收通知\"] < LinearLayout < LinearLayout +n [id=\"android:id/buttonPanel\"] Button[text=\"否\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[查看更多]应用更新",
      "desc": "点击[查看更多]",
      "key": 8,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"查看更多\"]",
          "actionMaximum": 3,
          "activityIds": ".appupdate.UpdateManagerActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/34304183",
          "exampleUrls": "https://e.gkd.li/f7626132-4702-4cd4-b036-88935f45734d",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告提示",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_dialog_operation_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-推送通知",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "TextView[text=\"接收通知\"] < LinearLayout < LinearLayout +n [id=\"android:id/buttonPanel\"] Button[text=\"否\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-为您专属推荐",
      "desc": "【取消】",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "Button[id=\"com.hihonor.appmarket:id/app_recommendation_cancel_btn\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/19222443",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用推荐卡片添加至桌面",
      "desc": "【我再想想】",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "Button[id=\"com.hihonor.appmarket:id/app_cancel_btn\"][text=\"我再想想\"]",
          "snapshotUrls": "https://i.gkd.li/i/19222473",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-个性化内容推荐",
      "desc": "【取消】",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "Button[id=\"android:id/button2\"][text=\"取消\"] + Button[id=\"android:id/button1\"][text=\"同意\"]",
          "snapshotUrls": "https://i.gkd.li/i/19222508",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示",
      "desc": "【取消】",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "@Button[id=\"android:id/button2\"][text=\"取消\"] + Button[id=\"android:id/button1\"][text=\"立即开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/19222532",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_dialog_operation_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "悬浮窗小广告",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_floating_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "推送通知",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "TextView[text=\"接收通知\"] < LinearLayout < LinearLayout +n [id=\"android:id/buttonPanel\"] Button[text=\"否\"]",
          "key": 0
        }
      ]
    }
  ]
});
