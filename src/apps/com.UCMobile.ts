// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "UC浏览器",
  "id": "com.UCMobile",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] > FrameLayout[childCount=4] >3 FrameLayout[childCount=4] > RelativeLayout[childCount=1] > View[childCount=0][text=null][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13197655"
        },
        {
          "matches": "[id=\"com.UCMobile.adn_jingdong_sdk:id/animation_view\"]",
          "position": {
            "left": "width * 0.9",
            "top": "width * 0.1676"
          },
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16494884",
          "exampleUrls": "https://e.gkd.li/92da64ad-5b08-4343-bec2-bb6a7e0bb92d"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13188653"
        },
        {
          "matches": "[id=\"com.UCMobile.adn_jingdong_sdk:id/animation_view\"]",
          "position": {
            "left": "width * 0.9",
            "top": "width * 0.1676"
          },
          "activityIds": "com.uc.browser.InnerUCMobile",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16494884",
          "exampleUrls": "https://e.gkd.li/92da64ad-5b08-4343-bec2-bb6a7e0bb92d"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/import/13188653",
          "key": 4
        },
        {
          "matches": "@View[clickable=true] < RelativeLayout <2 FrameLayout < FrameLayout < FrameLayout <4 FrameLayout < [id=\"android:id/content\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13197655",
          "key": 5
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/13188653"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text=\"广告\"] +n ImageView[desc=\"不感兴趣\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12880737",
            "https://i.gkd.li/i/12881751"
          ]
        },
        {
          "matches": "[text^=\"屏蔽\"][text$=\"广告\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12880772",
            "https://i.gkd.li/i/12881307"
          ]
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
          "matches": "@ImageView - LinearLayout >n [text=\"开启消息通知\"]",
          "activityIds": "com.uc.browser.InnerUCMobile",
          "snapshotUrls": "https://i.gkd.li/i/12880812",
          "key": 0
        },
        {
          "matches": "@ImageView - LinearLayout >n [text=\"开启消息通知\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-请求添加桌面快捷方式弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView + [text^=\"添加\"][text$=\"到桌面\"]",
          "activityIds": "com.uc.browser.InnerUCMobile",
          "snapshotUrls": "https://i.gkd.li/i/12880983",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-请求添加桌面快捷方式权限弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView + [text^=\"添加\"][text$=\"到桌面\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-信息流广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "TextView[text=\"广告\"] +n ImageView[desc=\"不感兴趣\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12880737",
            "https://i.gkd.li/import/12881751"
          ]
        },
        {
          "matches": "[text^=\"屏蔽\"][text$=\"广告\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12880772",
            "https://i.gkd.li/import/12881307"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView - LinearLayout >n [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求添加桌面快捷方式权限弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView + [text^=\"添加\"][text$=\"到桌面\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "TextView[text=\"广告\"] +n ImageView[desc=\"不感兴趣\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12880737",
            "https://i.gkd.li/import/12881751"
          ]
        },
        {
          "matches": "[text^=\"屏蔽\"][text$=\"广告\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12880772",
            "https://i.gkd.li/import/12881307"
          ]
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView - LinearLayout >n [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求添加桌面快捷方式权限弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "@ImageView + [text^=\"添加\"][text$=\"到桌面\"]",
          "key": 0
        }
      ]
    }
  ]
});
