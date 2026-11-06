// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "酷狗音乐",
  "id": "com.kugou.android",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击跳过应用启动时的开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"跳过\"||desc=\"GdtCountDownView\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12775410",
            "https://i.gkd.li/i/13426030",
            "https://i.gkd.li/i/13468987"
          ]
        },
        {
          "matches": "[desc=\"createSkipView\"]",
          "position": {
            "left": "width * 0.6858",
            "top": "width * 0.3906"
          },
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14609953",
          "exampleUrls": "https://m.gkd.li/57941037/fc4a38c9-20aa-4cfc-9a92-c20e9194418b"
        },
        {
          "matches": "[desc=\"createSkipView\"]",
          "position": {
            "left": "width * 0.6794",
            "top": "width * 0.3822"
          },
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14606816"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "关闭播放页面的各种卡片广告",
      "enable": false,
      "matchRoot": true,
      "key": 1,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView <<n [id=\"android:id/list\"]",
          "activityIds": ".app.MediaActivity",
          "forcedTime": 10000,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16434752"
        },
        {
          "matches": "@ImageView[desc=\"关闭\"][visibleToUser=true][clickable=true] <n ViewGroup < LinearLayout <3 [id=\"android:id/list\"]",
          "activityIds": ".app.MediaActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14964889",
            "https://i.gkd.li/i/15024041",
            "https://i.gkd.li/i/15468481",
            "https://i.gkd.li/i/16200618"
          ]
        },
        {
          "matches": "[desc=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "activityIds": ".app.MediaActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15024812"
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "activityIds": ".app.MediaActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15520336"
        },
        {
          "matches": "RelativeLayout > @RelativeLayout[clickable=true] > [desc=\"关闭\"]",
          "activityIds": ".app.MediaActivity",
          "forcedTime": 10000,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16114590"
        },
        {
          "matches": "@ImageButton[clickable=true][childCount=0][visibleToUser=true] - LinearLayout > [text=\"广告\"]",
          "activityIds": ".app.MediaActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/18207953",
          "exampleUrls": "https://e.gkd.li/fcb3e4d2-73bf-49b5-9157-08cac0c11584"
        },
        {
          "matches": "@ImageButton[childCount=0][clickable=true] < RelativeLayout - LinearLayout > [text=\"广告\"]",
          "activityIds": ".app.MediaActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/23687213",
          "exampleUrls": "https://e.gkd.li/13b95c9a-1e6c-4d63-8372-1cff2261253c"
        },
        {
          "matches": "ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView",
          "forcedTime": 5000,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/13558426",
          "exampleUrls": "https://m.gkd.li/87047583/9e150986-2103-4130-a12f-12ed2b07ef90"
        },
        {
          "matches": "TextView[text!=null] <2 ViewGroup[childCount=6] > ImageView[desc=\"关闭\"]",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/14964889",
            "https://i.gkd.li/i/15024041"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/adb9a250-d23d-48ef-b1a5-5e828d56cb97"
        },
        {
          "matches": "[desc=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/15024812",
          "exampleUrls": "https://m.gkd.li/57941037/8bd6dafc-e610-4c0d-a486-02a11535e610"
        },
        {
          "matches": "@ImageView[desc=\"关闭\"][visibleToUser=true][clickable=true] <n ViewGroup < LinearLayout <(2,3) [id=\"android:id/list\"]",
          "activityIds": ".app.MediaActivity",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": [
            "https://i.gkd.li/i/14964889",
            "https://i.gkd.li/i/15024041",
            "https://i.gkd.li/i/15468481",
            "https://i.gkd.li/i/16200618",
            "https://i.gkd.li/i/26493761"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-VIP弹窗",
      "desc": "关闭VIP会员相关弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] + RelativeLayout >2 [text*=\"豪华VIP已过期\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13548005",
          "exampleUrls": "https://e.gkd.li/cab683ac-801d-4089-8b5d-548954761c08"
        },
        {
          "matches": "WebView[text=\"开通会员\"] >7 @TextView[clickable=true][childCount=0] +2 [text=\"当前歌曲支持蝰蛇全景声\"]",
          "activityIds": ".app.MediaActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17177377",
          "exampleUrls": "https://e.gkd.li/86e4a797-5366-4579-81ee-bc5354e95568"
        },
        {
          "matches": "@[clickable=true][childCount=0] < View <(1,2) View <(1,2) View < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < RelativeLayout < FrameLayout[!(id=\"android:id/content\")] < FrameLayout < [parent=null]",
          "activityIds": ".app.MediaActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/18070974",
            "https://i.gkd.li/i/22310624"
          ],
          "exampleUrls": "https://e.gkd.li/f32ed6b7-e396-45a5-9849-f8a8ae99cb99"
        },
        {
          "matches": "RelativeLayout[childCount=2] > View + RelativeLayout[childCount=2] > @ImageView + RelativeLayout",
          "snapshotUrls": "https://i.gkd.li/i/13548005",
          "exampleUrls": "https://m.gkd.li/87047583/84c1379f-5eb1-4982-b27b-35e267594101",
          "key": 3
        },
        {
          "matches": "@[id=null][text=\"退出页面\" || text=\"\"][width<200 && height<200] <(1,3) [childCount>3] >(1,2) [visibleToUser=true][text*=\"会员\" || text*=\"VIP\" || text*=\"支持蝰蛇\"]",
          "activityIds": ".app.MediaActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/17177377",
            "https://i.gkd.li/i/18070974",
            "https://i.gkd.li/i/22310624",
            "https://i.gkd.li/i/29639642"
          ],
          "exampleUrls": "https://e.gkd.li/86e4a797-5366-4579-81ee-bc5354e95568"
        },
        {
          "matches": "@[text=\"退出页面\"][visibleToUser=true] + View > [text=\"你的会员已过期\"]",
          "activityIds": ".app.MediaActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/18070974"
        }
      ]
    },
    {
      "name": "全屏广告-[看广告免费听歌]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"看广告，免费听会员歌\"] +2 [desc=\"关闭\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "snapshotUrls": "https://i.gkd.li/i/14722104",
          "exampleUrls": "https://m.gkd.li/57941037/dfd70c7c-3200-493e-9afa-404de5fcd2ff",
          "key": 0
        },
        {
          "matches": "[desc=\"看广告，免费听会员歌\"] +2 [desc=\"关闭\"]",
          "activityIds": ".app.MediaActivity",
          "snapshotUrls": "https://i.gkd.li/i/14722104",
          "exampleUrls": "https://m.gkd.li/57941037/dfd70c7c-3200-493e-9afa-404de5fcd2ff",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-[开启音乐DJ]弹窗",
      "desc": "勾选[今日不再提醒]-点击[关闭]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[checked=false] + [text=\"今日不再提醒\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14722457",
          "exampleUrls": "https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f"
        },
        {
          "matches": "@ImageView - * > [text=\"今日不再提醒\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14722457",
          "exampleUrls": "https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ViewGroup > FrameLayout >2 FrameLayout[childCount=2] > FrameLayout > FrameLayout[childCount=2] > ImageView[index=1][clickable=true][childCount=0][width<80&&height<80]",
          "actionMaximum": 1,
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "snapshotUrls": [
            "https://i.gkd.li/i/17004903",
            "https://i.gkd.li/i/18057265"
          ],
          "exampleUrls": "https://e.gkd.li/2b240676-4dac-4375-b238-2d570962efd1",
          "key": 0
        },
        {
          "matches": "@[clickable=true][width<113][height<113] <(1,2) [childCount=2] > ImageView[desc=null][focusable=true][visibleToUser=true][width>120 && width<210][height>120 && height<210]",
          "actionMaximum": 1,
          "activityIds": ".app.MediaActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "snapshotUrls": [
            "https://i.gkd.li/i/17004903",
            "https://i.gkd.li/i/18057265",
            "https://i.gkd.li/i/27167415"
          ],
          "exampleUrls": "https://e.gkd.li/2b240676-4dac-4375-b238-2d570962efd1",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-签到弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "@FrameLayout > WebView > WebView[text=\"金币中心\"] > View[id=\"body\"] > TextView[id=\"root\"][childCount=0]",
          "position": {
            "left": "width * 0.9287",
            "top": "width * 0.8935"
          },
          "activityIds": ".app.flexowebview.uploadvideo.ContributeWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/18071067",
          "exampleUrls": "https://e.gkd.li/f2a44161-d0a2-421d-a5e7-26fcf005daf2",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动关闭速听模式",
      "desc": "自动关闭播放界面的速听模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][visibleToUser=true] < RelativeLayout < RelativeLayout + FrameLayout >3 ViewGroup[desc=\"速听卡片\"] >2 [text=\"喜欢\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18164732",
          "exampleUrls": "https://e.gkd.li/e24dda6a-c5fa-4c93-9026-cda7a4d9e205"
        },
        {
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < RelativeLayout - [desc=\"暂停\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/18165065",
          "exampleUrls": "https://e.gkd.li/ffb25ec5-35b0-47ff-9387-54c757c90f29",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-个人页顶部广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + FrameLayout > LinearLayout > ImageView",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "snapshotUrls": "https://i.gkd.li/import/13558426",
          "exampleUrls": "https://m.gkd.li/87047583/9e150986-2103-4130-a12f-12ed2b07ef90",
          "key": 0
        }
      ]
    },
    {
      "name": "个人页顶部广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + FrameLayout > LinearLayout > ImageView",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "snapshotUrls": "https://i.gkd.li/import/13558426",
          "exampleUrls": "https://m.gkd.li/87047583/9e150986-2103-4130-a12f-12ed2b07ef90",
          "key": 0
        }
      ]
    },
    {
      "name": "VIP弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > View + RelativeLayout[childCount=2] > @ImageView + RelativeLayout",
          "snapshotUrls": "https://i.gkd.li/import/13548005",
          "exampleUrls": "https://m.gkd.li/87047583/84c1379f-5eb1-4982-b27b-35e267594101",
          "key": 0
        }
      ]
    }
  ]
});
