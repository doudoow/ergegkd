// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QQ音乐",
  "id": "com.tencent.qqmusic",
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
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17056504",
          "exampleUrls": "https://e.gkd.li/bde5c1a5-3259-45d3-a6b8-8482f7818c6f"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17068758",
          "exampleUrls": "https://e.gkd.li/6537da92-f5f6-4ee8-9219-5f39f7c5e8a2"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "关闭播放界面、歌单页、我的页等位置的各类卡片广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"广告\"] + [text=\"跳过\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.tencent.qqmusic.business.playernew.view.NewPlayerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13985169"
        },
        {
          "matches": "@[desc=\"关闭\"][clickable=true] -(1,2) [text=\"广告\"][visibleToUser=true]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13206534",
            "https://i.gkd.li/i/13797001"
          ]
        },
        {
          "matches": "@ImageView - ImageView - RelativeLayout >n [text=\"听歌入会赢绿钻\"||text=\"摇动点击广告跳转\"][visibleToUser=true]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13206982",
            "https://i.gkd.li/i/13218134"
          ]
        },
        {
          "matches": "@[clickable=true][visibleToUser=true] > [text=\"广告\"][visibleToUser=true]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/15041019",
            "https://i.gkd.li/i/18227243"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18219557"
        },
        {
          "matches": "RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/15756931"
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".activity.AppStarterActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/17450309"
        },
        {
          "matches": "[text=\"广告 | 关闭\"][visibleToUser=true]",
          "activityIds": ".activity.AppStarterActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/18227204"
        },
        {
          "matches": "RecyclerView > FrameLayout[desc!=null] >3 LinearLayout[id!=null] > ViewPager > FrameLayout[visibleToUser=true] > ImageView[childCount=0][clickable=true][width<150 && height<100][index=parent.childCount.minus(1)]",
          "activityIds": ".activity.AppStarterActivity",
          "matchTime": 10000,
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/23623581",
            "https://i.gkd.li/i/23623677"
          ],
          "exampleUrls": "https://e.gkd.li/c7b25408-26ed-4010-8506-88f614dccd26"
        },
        {
          "matches": "ImageView[width<80 && height<80] <<2 @ViewGroup[clickable=true] - [text^=\"hi~\"]",
          "activityIds": ".activity.AppStarterActivity",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/23930716"
        },
        {
          "matches": "[text^=\"广告\"] + [text=\"跳过\"][clickable=true][visibleToUser=true]",
          "activityIds": ".business.playernew.view.NewPlayerActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/13985169"
        },
        {
          "matches": "@[desc=\"关闭\"][clickable=true] -(1,2) [text=\"广告\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": [
            "https://i.gkd.li/i/13206534",
            "https://i.gkd.li/i/13797001"
          ]
        },
        {
          "matches": "@ImageView - ImageView - RelativeLayout >3 [text=\"听歌入会赢绿钻\" || text=\"摇动点击广告跳转\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/13206982",
            "https://i.gkd.li/i/13218134"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"广告\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 12,
          "snapshotUrls": [
            "https://i.gkd.li/i/15041019",
            "https://i.gkd.li/i/18227243"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18219557"
        },
        {
          "matches": "@ImageView[clickable=true][height<87] <2 RelativeLayout - * > [text=\"广告\"]",
          "fastQuery": true,
          "key": 13,
          "snapshotUrls": "https://i.gkd.li/i/26806364"
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"广告\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 14,
          "snapshotUrls": "https://i.gkd.li/i/17450309"
        },
        {
          "matches": "[text=\"广告 | 关闭\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 15,
          "snapshotUrls": "https://i.gkd.li/i/18227204"
        },
        {
          "matches": "RecyclerView > FrameLayout[desc!=null] >3 LinearLayout[id!=null] > ViewPager > FrameLayout[visibleToUser=true] > ImageView[childCount=0][clickable=true][width<150 && height<100][index=parent.childCount.minus(1)]",
          "matchTime": 10000,
          "key": 16,
          "snapshotUrls": [
            "https://i.gkd.li/i/23623581",
            "https://i.gkd.li/i/23623677"
          ],
          "exampleUrls": "https://e.gkd.li/c7b25408-26ed-4010-8506-88f614dccd26"
        },
        {
          "matches": "ImageView[width<80 && height<80] <<2 @ViewGroup[clickable=true] - [text^=\"hi~\"]",
          "key": 17,
          "snapshotUrls": "https://i.gkd.li/i/23930716"
        },
        {
          "matches": "RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]",
          "key": 18,
          "snapshotUrls": "https://i.gkd.li/i/15756931"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"关闭\"][visibleToUser=true]",
          "activityIds": [
            ".activity.TranslucentWebViewActivity",
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13115121",
            "https://i.gkd.li/i/14549936",
            "https://i.gkd.li/i/14798904",
            "https://i.gkd.li/i/15209764",
            "https://i.gkd.li/i/15261116",
            "https://i.gkd.li/i/17459008",
            "https://i.gkd.li/i/23930628",
            "https://i.gkd.li/i/23930853"
          ]
        },
        {
          "matches": "[desc^=\"关闭弹窗\"][clickable=true][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": [
            ".activity.AppStarterActivity",
            "com.tencent.qqmusiccommon.hybrid.HybridViewActivity"
          ],
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/17057551",
            "https://i.gkd.li/i/23495699"
          ],
          "exampleUrls": "https://e.gkd.li/47107dd3-b19a-4486-a0d1-6d9aa62ee722"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true][width<130 && height<130] <n FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": [
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity"
          ],
          "matchTime": 10000,
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/18439138",
            "https://i.gkd.li/i/22924866"
          ],
          "exampleUrls": "https://e.gkd.li/881cddd2-e4ec-472e-8bf8-00f26f61cbc4"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true][width<120 && height<120] < FrameLayout < FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.AppStarterActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/20745872"
        },
        {
          "matches": "@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.AppStarterActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/22699207",
          "exampleUrls": "https://e.gkd.li/f1c596e5-36b6-485b-aa55-a235d57bddf9"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true][width<150 && height<150] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".activity.AppStarterActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/22699223",
          "exampleUrls": "https://e.gkd.li/eb920de7-7f15-4398-b9a9-99ece0ab4ed6"
        },
        {
          "matches": "[text=\"流量够用\"]",
          "activityIds": [
            "com.tencent.qqmusic.activity.AppStarterActivity",
            "com.tencent.qqmusic.business.playernew.view.NewPlayerActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "name": "免流弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/13197868",
            "https://i.gkd.li/i/15285647"
          ]
        },
        {
          "matches": "@ViewGroup[desc=\"关闭按钮\"] - [desc^=\"看广告\"] <2 ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
          "fastQuery": true,
          "key": 7,
          "name": "看广告免费听歌弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13806773"
        },
        {
          "matches": "@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/13806782"
        },
        {
          "matches": "[desc$=\"不再提示\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".activity.AppStarterActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/18428240",
          "exampleUrls": "https://e.gkd.li/e3d904e1-dfe5-4d12-b8c8-b1eead8459c9"
        },
        {
          "matches": "View[id=\"js_close_btn\"][desc=\"关闭\"]",
          "forcedTime": 5000,
          "snapshotUrls": [
            "https://i.gkd.li/i/13115121",
            "https://i.gkd.li/i/14798904"
          ],
          "key": 10
        },
        {
          "matches": "@[desc^=\"关闭\"][desc.length<10][visibleToUser=true][width>50 && width<177] <<(25-n) [id=\"android:id/content\"]",
          "activityIds": [
            ".activity.TranslucentWebViewActivity",
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity",
            "com.tencent.qqmusiccommon.hybrid.HybridViewActivity"
          ],
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/13115121",
            "https://i.gkd.li/i/14549936",
            "https://i.gkd.li/i/14798904",
            "https://i.gkd.li/i/15209764",
            "https://i.gkd.li/i/15261116",
            "https://i.gkd.li/i/17459008",
            "https://i.gkd.li/i/23930628",
            "https://i.gkd.li/i/23930853",
            "https://i.gkd.li/i/17057551",
            "https://i.gkd.li/i/23495699",
            "https://i.gkd.li/i/13806773"
          ],
          "exampleUrls": "https://e.gkd.li/47107dd3-b19a-4486-a0d1-6d9aa62ee722"
        },
        {
          "matches": "@ImageView[id=null][text=null][desc=null][childCount=0][visibleToUser=true][width<130 && height<130] <<(7,8,9) [id=\"android:id/content\"]",
          "activityIds": [
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity"
          ],
          "key": 12,
          "snapshotUrls": [
            "https://i.gkd.li/i/18439138",
            "https://i.gkd.li/i/22924866",
            "https://i.gkd.li/i/20745872",
            "https://i.gkd.li/i/22699223",
            "https://i.gkd.li/i/30530361"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/34188274",
            "https://i.gkd.li/i/34188273"
          ],
          "exampleUrls": "https://e.gkd.li/881cddd2-e4ec-472e-8bf8-00f26f61cbc4"
        },
        {
          "matches": "@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.AppStarterActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 13,
          "snapshotUrls": "https://i.gkd.li/i/22699207",
          "exampleUrls": "https://e.gkd.li/f1c596e5-36b6-485b-aa55-a235d57bddf9"
        },
        {
          "matches": "[text=\"流量够用\"]",
          "activityIds": [
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity"
          ],
          "key": 14,
          "name": "免流弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/13197868",
            "https://i.gkd.li/i/15285647"
          ]
        },
        {
          "matches": "@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".activity.AppStarterActivity",
          "key": 15,
          "snapshotUrls": "https://i.gkd.li/i/13806782"
        },
        {
          "matches": "[visibleToUser=true][desc$=\"不再提示\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.AppStarterActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 16,
          "snapshotUrls": "https://i.gkd.li/i/18428240",
          "exampleUrls": "https://e.gkd.li/e3d904e1-dfe5-4d12-b8c8-b1eead8459c9"
        }
      ]
    },
    {
      "name": "更新提示-内测体验弹窗",
      "desc": "点击[不再提醒]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"抢先体验\"] -2 [text=\"不再提醒\"]",
          "activityIds": ".activity.AppStarterActivity",
          "snapshotUrls": "https://i.gkd.li/i/13178485",
          "key": 0
        },
        {
          "matches": "[text=\"抢先体验\"] -2 [text=\"不再提醒\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示-好评弹窗",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[vid=\"close_btn\"] - * > [text*=\"好评\"]",
          "activityIds": ".activity.AppStarterActivity",
          "snapshotUrls": "https://i.gkd.li/i/14881903",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-评论区广告",
      "desc": "点击右下角展开-点击[不感兴趣]",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15010210"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15010226"
        }
      ]
    },
    {
      "name": "其他-播放页[猜你也会喜欢]推荐",
      "desc": "点击关闭",
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][clickable=true] -2 [text=\"猜你也会喜欢\"][visibleToUser=true]",
          "activityIds": ".business.playernew.view.NewPlayerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18410610",
          "exampleUrls": "https://e.gkd.li/40846baf-4638-4740-970a-30924cbd9414",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text^=\"广告\"] + [text=\"跳过\"][clickable=true]",
          "activityIds": "com.tencent.qqmusic.business.playernew.view.NewPlayerActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13985169"
        },
        {
          "matches": "@[desc=\"关闭\"] -(1,2) [text=\"广告\"]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13206534",
            "https://i.gkd.li/i/13797001"
          ]
        },
        {
          "matches": "@ImageView - ImageView - RelativeLayout >3 [text=\"听歌入会赢绿钻\"||text=\"摇动点击广告跳转\"]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13206982",
            "https://i.gkd.li/i/13218134"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"广告\"]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15041019"
        },
        {
          "matches": "[text=\"广告\"] +n [desc=\"关闭\"]",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/13206534",
            "https://i.gkd.li/import/13797001"
          ]
        },
        {
          "matches": "@ImageView - ImageView - RelativeLayout >n [text=\"听歌入会赢绿钻\"||text=\"摇动点击广告跳转\"]",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/import/13206982",
            "https://i.gkd.li/import/13218134"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-免流弹窗",
      "desc": "点击[流量够用]",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"流量够用\"]",
          "activityIds": [
            "com.tencent.qqmusic.activity.AppStarterActivity",
            "com.tencent.qqmusic.business.playernew.view.NewPlayerActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13197868",
            "https://i.gkd.li/i/15285647"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"流量够用\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-播放页-推荐开启高音质弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text^=\"推荐您开启\"] -3 [desc=\"关闭\"][clickable=true][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14550144"
        }
      ]
    },
    {
      "name": "评价提示",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text*=\"好评\"] <4 ViewGroup + [vid=\"close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-看广告免费听歌弹窗",
      "desc": "点击X",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "@[desc=\"关闭按钮\"] <n * > [desc^=\"看广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-VIP弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >4 ViewGroup[childCount=0]",
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13806782"
        },
        {
          "matches": "@View[clickable=true][desc=\"关闭\"] +2 * >2 [desc$=\"确认协议并开通\" || desc=\"立即开通会员\"]",
          "activityIds": "com.tencent.qqmusic.activity.TranslucentWebViewActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/15209764",
            "https://i.gkd.li/i/15261116"
          ]
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "关闭各类全屏广告弹窗，包括网页广告、免流弹窗和签到弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "@[desc^=\"关闭\"][desc.length<10][visibleToUser=true][width>50 && width<177] <<(25-n) [id=\"android:id/content\"]",
          "activityIds": [
            ".activity.TranslucentWebViewActivity",
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity",
            "com.tencent.qqmusiccommon.hybrid.HybridViewActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13115121",
            "https://i.gkd.li/i/14549936",
            "https://i.gkd.li/i/14798904",
            "https://i.gkd.li/i/15209764",
            "https://i.gkd.li/i/15261116",
            "https://i.gkd.li/i/17459008",
            "https://i.gkd.li/i/23930628",
            "https://i.gkd.li/i/23930853",
            "https://i.gkd.li/i/17057551",
            "https://i.gkd.li/i/23495699",
            "https://i.gkd.li/i/13806773"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true][width<130 && height<130] <<(7,8,9) [id=\"android:id/content\"]",
          "activityIds": [
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/18439138",
            "https://i.gkd.li/i/22924866",
            "https://i.gkd.li/i/20745872",
            "https://i.gkd.li/i/22699223",
            "https://i.gkd.li/i/30530361"
          ]
        },
        {
          "matches": "@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.AppStarterActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/22699207"
        },
        {
          "matches": "[text=\"流量够用\"]",
          "activityIds": [
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity"
          ],
          "key": 3,
          "name": "免流弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/13197868",
            "https://i.gkd.li/i/15285647"
          ]
        },
        {
          "matches": "@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".activity.AppStarterActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13806782"
        },
        {
          "matches": "[visibleToUser=true][desc$=\"不再提示\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.AppStarterActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/18428240"
        }
      ]
    },
    {
      "name": "局部广告-首页-底部广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "View[id=\"js_close_btn\"][desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-内测体验弹窗",
      "desc": "点击[不再提醒]",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[text=\"抢先体验\"] -2 [text=\"不再提醒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告卡片",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"广告\"] +n [desc=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13206534",
            "https://i.gkd.li/import/13797001"
          ]
        },
        {
          "matches": "@ImageView - ImageView - RelativeLayout >n [text=\"听歌入会赢绿钻\"||text=\"摇动点击广告跳转\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13206982",
            "https://i.gkd.li/import/13218134"
          ]
        }
      ]
    },
    {
      "name": "首页-底部广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "View[id=\"js_close_btn\"][desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "内测体验弹窗",
      "desc": "点击[不再提醒]",
      "enable": false,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[text=\"抢先体验\"] -2 [text=\"不再提醒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "免流弹窗",
      "desc": "点击[流量够用]",
      "enable": false,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "[text=\"流量够用\"]",
          "key": 0
        }
      ]
    }
  ]
});
