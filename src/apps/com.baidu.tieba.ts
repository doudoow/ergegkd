// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百度贴吧",
  "id": "com.baidu.tieba",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text^=\"跳过\"][text.length<=10]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12775906",
            "https://i.gkd.li/i/12566191",
            "https://i.gkd.li/i/12870916",
            "https://i.gkd.li/i/13233500"
          ]
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13322227"
        },
        {
          "matches": "TextView[text=\"广告\"] - @LinearLayout[clickable=true] > [text=\"关闭\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13168386"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "key": 3,
          "name": "【圆圈跳过】型-来自穿山甲SDK",
          "snapshotUrls": "https://i.gkd.li/i/13322227"
        },
        {
          "matches": "TextView[text=\"广告\"] - @LinearLayout[clickable=true] > [text=\"关闭\"]",
          "fastQuery": true,
          "key": 4,
          "name": "【x+关闭】型",
          "snapshotUrls": "https://i.gkd.li/i/13168386"
        },
        {
          "anyMatches": [
            "TextView[text^=\"跳过\" || text=\"关闭\"]",
            "View[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
            "@View <3 FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12775906",
            "https://i.gkd.li/import/12566191",
            "https://i.gkd.li/import/12870916",
            "https://i.gkd.li/import/13233500",
            "https://i.gkd.li/import/13168386",
            "https://i.gkd.li/import/13322227",
            "https://i.gkd.li/i/18730575"
          ],
          "key": 5
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "actionMaximum": 1,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [text^=\"打开通知\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13536170"
        },
        {
          "matches": "TextView[text=\"开启消息推送\"] +2 TextView[text=\"不开启\"]",
          "activityIds": ".immessagecenter.mention.reply.ReplyMeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13675694"
        },
        {
          "matches": "[text=\"开启通知\"] <n * > [text=\"暂不开启\"]",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13804455",
            "https://i.gkd.li/i/20918198"
          ]
        },
        {
          "matches": "@View[clickable=true] < [childCount=2] -2 [text=\"开启互动消息通知\"]",
          "activityIds": ".tblauncher.MainTabActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/34249649",
          "exampleUrls": "https://e.gkd.li/7fa4aebb-42a7-47f7-bb23-e43fbac7e03b"
        },
        {
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [visibleToUser=true][text^=\"打开通知\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13536170"
        },
        {
          "matches": "[text=\"开启通知\"] <n * > [clickable=true][text=\"暂不开启\"]",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13804455",
            "https://i.gkd.li/i/20918198"
          ]
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "关闭广告、直播推广",
      "enable": false,
      "forcedTime": 10000,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] <(1,2) LinearLayout <4 RelativeLayout +2 RelativeLayout >2 [text=\"直播中\"]",
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".forum.ForumActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595137",
            "https://i.gkd.li/i/16596473"
          ],
          "exampleUrls": "https://e.gkd.li/94be671a-4709-4aa5-b114-d4cfabe0ed9c"
        },
        {
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$=\"广告\"]",
          "activityIds": [
            ".forum.ForumActivity",
            ".pb.pb.main.PbActivity",
            ".tblauncher.MainTabActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595127",
            "https://i.gkd.li/i/16595515",
            "https://i.gkd.li/i/16596130"
          ],
          "exampleUrls": "https://e.gkd.li/3b2f0906-f620-4fda-a59f-334a9548836e"
        },
        {
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$=\"广告\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595120",
            "https://i.gkd.li/i/16595133"
          ],
          "exampleUrls": "https://e.gkd.li/683d8e48-909e-4c06-9686-9a9778456e78"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] -3 [text=\"直播中\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16596210",
          "exampleUrls": "https://e.gkd.li/ad2f214b-0e2a-400e-9511-d35d7f14c004"
        },
        {
          "matches": "ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1][visibleToUser=true] <(3,4) RelativeLayout + FrameLayout >9 [text=\"广告\"]",
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/21524232",
            "https://i.gkd.li/i/21529443",
            "https://i.gkd.li/i/21556758",
            "https://i.gkd.li/i/24520138"
          ],
          "exampleUrls": "https://e.gkd.li/0ac82700-02f3-40c6-bf45-b21e365ac84c"
        },
        {
          "matches": "ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1][visibleToUser=true] <2 RelativeLayout + RelativeLayout >3 [text=\"广告\"] ",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/24541094",
          "exampleUrls": "https://e.gkd.li/0d5fea40-44ac-4b47-8b3c-e8388640e37d"
        },
        {
          "matches": "@View[clickable=true][visibleToUser=true] - [text^=\"选择不喜欢\"]",
          "preKeys": [
            0,
            7,
            2,
            3,
            18,
            9
          ],
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity",
            ".forum.ForumActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16595134",
            "https://i.gkd.li/i/16595511",
            "https://i.gkd.li/i/16595113"
          ],
          "exampleUrls": "https://e.gkd.li/67a159e7-59ea-45f6-909c-7a681c4d3838",
          "key": 6
        },
        {
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$=\"广告\"]",
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595127",
            "https://i.gkd.li/i/16595515",
            "https://i.gkd.li/i/16596130"
          ],
          "exampleUrls": "https://e.gkd.li/3b2f0906-f620-4fda-a59f-334a9548836e"
        },
        {
          "matches": "ImageView < @[vid=\"obfuscated\"][clickable=true][childCount=1] -n * < RelativeLayout + FrameLayout >n [text=\"广告\"]",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595301",
            "https://i.gkd.li/i/16596195",
            "https://i.gkd.li/i/16596775",
            "https://i.gkd.li/i/21524232",
            "https://i.gkd.li/i/21529443",
            "https://i.gkd.li/i/21556758",
            "https://i.gkd.li/i/24520138",
            "https://i.gkd.li/i/25710401",
            "https://i.gkd.li/i/29640762"
          ],
          "exampleUrls": [
            "https://e.gkd.li/0ac82700-02f3-40c6-bf45-b21e365ac84c",
            "https://e.gkd.li/511c57bc-e11a-43b3-b4a3-9b49cf79d509"
          ]
        },
        {
          "matches": "@[clickable=true][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text=\"广告\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595124",
            "https://i.gkd.li/i/16596297",
            "https://i.gkd.li/i/24541094"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16632851",
          "exampleUrls": "https://e.gkd.li/0d5fea40-44ac-4b47-8b3c-e8388640e37d"
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] < LinearLayout[childCount=1] <4 RelativeLayout +3 LinearLayout >4 [text=\"小游戏\"]",
          "activityIds": ".tblauncher.MainTabActivity",
          "key": 10,
          "snapshotUrls": [
            "https://i.gkd.li/i/17943902",
            "https://i.gkd.li/i/18217417"
          ]
        },
        {
          "matches": "ImageView < @[clickable=true] <2 FrameLayout[childCount=2] -n ViewGroup > [text=\"广告\"]",
          "activityIds": ".tblauncher.MainTabActivity",
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/28345921",
            "https://i.gkd.li/i/28432320"
          ]
        },
        {
          "matches": "ImageView < @[clickable=true][width<82 && height<82] <5 [childCount=5] + [childCount=1] >4 [text=\"权限\" || text=\"隐私\" || text=\"功能\"] -(1,2,3) [text$=\"有限公司\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 12,
          "snapshotUrls": [
            "https://i.gkd.li/i/28389197",
            "https://i.gkd.li/i/29578950"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][width<78] <2 [childCount=2] >4 [text=\"语音中\"]",
          "activityIds": ".tblauncher.MainTabActivity",
          "key": 13,
          "snapshotUrls": "https://i.gkd.li/i/28432229"
        },
        {
          "matches": "@View[clickable=true][visibleToUser=true] - [text^=\"选择不喜欢\"]",
          "preKeys": [
            0,
            7,
            2,
            3,
            18,
            9,
            10,
            11,
            12,
            13
          ],
          "key": 14,
          "name": "②点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595134",
            "https://i.gkd.li/i/16595511",
            "https://i.gkd.li/i/16595113"
          ],
          "exampleUrls": [
            "https://e.gkd.li/67a159e7-59ea-45f6-909c-7a681c4d3838",
            "https://e.gkd.li/5f9ebe98-dfd1-41a4-bb93-b1a45aa00549"
          ]
        },
        {
          "matches": "[text=\"已经看过\" || text=\"内容质量差\" || text=\"不感兴趣\" || text=\"广告重复\"][clickable=true]",
          "preKeys": [
            0,
            7,
            2,
            3,
            18,
            9,
            10,
            11,
            12,
            13
          ],
          "key": 15,
          "name": "②选一个[理由]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26634661",
            "https://i.gkd.li/i/28432358"
          ]
        },
        {
          "matches": "@[clickable=true] >3 [text=\"不喜欢\"]",
          "preKeys": [
            0,
            7,
            2,
            3,
            18,
            9,
            10,
            11,
            12,
            13
          ],
          "key": 16,
          "name": "②选[不喜欢]该直播",
          "snapshotUrls": [
            "https://i.gkd.li/i/27052244",
            "https://i.gkd.li/i/28432247"
          ]
        },
        {
          "matches": "@[clickable=true] - [text^=\"已选\"][text$=\"理由\"]",
          "preKeys": [
            15,
            16
          ],
          "key": 17,
          "name": "③点击[确定]",
          "snapshotUrls": "https://i.gkd.li/i/26934788"
        },
        {
          "matches": "ImageView[index=parent.childCount.minus(1)] < @[vid=\"obfuscated\"][clickable=true] -n * < RelativeLayout + FrameLayout >n [text=\"广告\"]",
          "key": 18,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595301",
            "https://i.gkd.li/i/16596195",
            "https://i.gkd.li/i/16596775",
            "https://i.gkd.li/i/21524232",
            "https://i.gkd.li/i/21529443",
            "https://i.gkd.li/i/21556758",
            "https://i.gkd.li/i/24520138",
            "https://i.gkd.li/i/25710401",
            "https://i.gkd.li/i/29640762"
          ]
        }
      ]
    },
    {
      "name": "局部广告-首页、推荐列表顶部卡片广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 3,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13060892"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"稍后再说\"]",
          "activityIds": ".UpdateDialog",
          "snapshotUrls": "https://i.gkd.li/i/16908501",
          "key": 0
        },
        {
          "matches": "[text=\"稍后再说\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 5,
      "rules": [
        {
          "matches": "@TextView[id=\"com.baidu.tieba:id/obfuscated\"][clickable=true][childCount=0][visibleToUser=true] - FrameLayout[childCount=2][getChild(1).text=\"广告\"] < RelativeLayout[childCount=2] < [parent=null]",
          "activityIds": [
            ".frs.FrsActivity",
            ".tblauncher.MainTabActivity",
            ".LogoActivity"
          ],
          "key": 0,
          "name": "点击正下方x关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/13168383",
            "https://i.gkd.li/i/13322120",
            "https://i.gkd.li/i/13328246"
          ]
        },
        {
          "matches": "WebView[text!=null] > View[childCount=1] > View[childCount=3] > @[visibleToUser=true][index=2]",
          "activityIds": [
            ".tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13060891",
            "https://i.gkd.li/i/16703244"
          ],
          "exampleUrls": "https://e.gkd.li/ac3d88b7-31a2-441f-a4c8-8a73eaec24b9"
        },
        {
          "matches": "TextView[index=1][width<141 && height<141][visibleToUser=true] - [getChild(0).name$=\"Image\"] < View < View < View < WebView < WebView < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".tblauncher.MainTabActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/33748842"
        },
        {
          "matches": "@TextView[vid=\"obfuscated\"][clickable=true][childCount=0][visibleToUser=true] - FrameLayout[childCount=2][getChild(1).text=\"广告\"] < RelativeLayout[childCount=2] < [parent=null]",
          "activityIds": [
            ".frs.FrsActivity",
            ".tblauncher.MainTabActivity",
            ".LogoActivity"
          ],
          "key": 3,
          "name": "点击正下方x关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/13168383",
            "https://i.gkd.li/i/13322120",
            "https://i.gkd.li/i/13328246"
          ]
        },
        {
          "matches": "WebView[text!=null] > View[childCount=1] > View[childCount=3] > @[visibleToUser=true][index=2][width<150]",
          "activityIds": [
            ".tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity",
            ".forum.ForumActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13060891",
            "https://i.gkd.li/i/16703244",
            "https://i.gkd.li/i/34382812"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29640529",
          "exampleUrls": "https://e.gkd.li/ac3d88b7-31a2-441f-a4c8-8a73eaec24b9"
        }
      ]
    },
    {
      "name": "局部广告-悬浮小广告",
      "desc": "关闭首页右侧和评论区的悬浮广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][vid=\"obfuscated\"] - [text=\"广告\"]",
          "actionMaximum": 1,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity"
          ],
          "matchTime": 10000,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16622395",
            "https://i.gkd.li/i/16632851"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/13327933"
        },
        {
          "matches": "RelativeLayout >2 RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "activityIds": ".tblauncher.MainTabActivity",
          "key": 1,
          "name": "首页右侧悬浮广告-2",
          "snapshotUrls": "https://i.gkd.li/i/14291964"
        },
        {
          "matches": "FrameLayout[getChild(1).getChild(1).text!=null] + @FrameLayout[clickable=true] > LinearLayout[childCount=2] > ImageView + [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 2,
          "name": "评论区左侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13296280",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20361318"
        },
        {
          "matches": "RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "activityIds": [
            ".pb.pb.main.PbActivity",
            ".tblauncher.MainTabActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13625336",
            "https://i.gkd.li/i/13627881"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] - TextView[text=\"广告\"] < RelativeLayout + ImageView",
          "activityIds": "com.baidu.tieba.tblauncher.MainTabActivity",
          "key": 4,
          "name": "首页右侧悬浮广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13115167",
            "https://i.gkd.li/i/13327933"
          ]
        },
        {
          "matches": "LinearLayout[childCount=2] > @ImageView + [text=\"广告\"]",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "fastQuery": true,
          "key": 5,
          "name": "评论区左侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13296280"
        },
        {
          "matches": "RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "activityIds": [
            "com.baidu.tieba.pb.pb.main.PbActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity"
          ],
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13625336",
            "https://i.gkd.li/i/13627881"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<77] - [text=\"广告\"]",
          "fastQuery": true,
          "key": 7,
          "name": "悬浮广告1",
          "snapshotUrls": [
            "https://i.gkd.li/i/16622395",
            "https://i.gkd.li/i/16632851"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/13327933"
        },
        {
          "matches": "RelativeLayout[childCount=2] >2 ImageView[clickable=true][visibleToUser=true][width<77]",
          "key": 8,
          "name": "悬浮广告2",
          "snapshotUrls": [
            "https://i.gkd.li/i/14291964",
            "https://i.gkd.li/i/13625336",
            "https://i.gkd.li/i/13627881"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/28344945"
        }
      ]
    },
    {
      "name": "局部广告-[帖子内/吧内]底部悬浮窗",
      "desc": "关闭帖子内和吧内底部的推荐悬浮窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$=\"热议中\" || text^=\"猜你喜欢\" || text*=\"进吧逛逛\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595234",
            "https://i.gkd.li/i/16619736",
            "https://i.gkd.li/i/16647874"
          ],
          "exampleUrls": "https://e.gkd.li/047ab857-f690-473b-9b18-43369319c5ce"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text^=\"关注本吧\"]",
          "activityIds": ".forum.ForumActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17992981",
          "exampleUrls": "https://e.gkd.li/756c02b5-a72c-4ca4-a05c-a33202e8ecd6"
        }
      ]
    },
    {
      "name": "功能类-贴吧内签到并关闭弹窗",
      "desc": "自动进行贴吧签到并关闭签到成功提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "anyMatches": [
            "@TextView[text=\"签到\"][visibleToUser=true] <3 View < View <2 View < View < WebView < WebView < FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id=\"android:id/content\"]",
            "@TextView[text=\"签到\"][visibleToUser=true] <5 View < View <2 View < WebView < WebView < FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id=\"android:id/content\"]"
          ],
          "activityIds": ".forum.ForumActivity",
          "key": 0,
          "name": "贴吧页签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/15087289",
            "https://i.gkd.li/i/17902156"
          ]
        },
        {
          "matches": "@WebView[text=\"签到弹窗\"][visibleToUser=true] < WebView < FrameLayout < LinearLayout < RelativeLayout < [id=\"android:id/content\"]",
          "action": "back",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 1,
          "name": "关闭签到成功弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/15087327",
            "https://i.gkd.li/i/15881225"
          ]
        },
        {
          "matches": "WebView[text=\"frs\"] > View > View > View > View > TextView[text=\"签到\"][visibleToUser=true]",
          "activityIds": "com.baidu.tieba.forum.ForumActivity",
          "key": 2,
          "name": "贴吧页签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/13776801",
            "https://i.gkd.li/i/15087289"
          ]
        },
        {
          "matches": "WebView[text=\"签到弹窗\"] > View > View > TextView[text=\"\"][index=2][visibleToUser=true]",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 3,
          "name": "关闭签到成功弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/13776424",
            "https://i.gkd.li/i/15087327"
          ]
        },
        {
          "matches": "@TextView[text=\"签到\"][visibleToUser=true] <n View < View <2 View < * < WebView <<(6,7) [id=\"android:id/content\"]",
          "activityIds": ".forum.ForumActivity",
          "key": 4,
          "name": "贴吧页签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/15087289",
            "https://i.gkd.li/i/17902156",
            "https://i.gkd.li/i/27051552"
          ]
        },
        {
          "matches": "WebView[text=\"frs\"] > View > View > View > View > TextView[text=\"签到\"][clickable=true]",
          "activityIds": [
            "com.baidu.tieba.forum.ForumActivity"
          ],
          "key": 5,
          "name": "贴吧页签到",
          "snapshotUrls": [
            "https://i.gkd.li/import/13776801"
          ]
        },
        {
          "matches": "WebView[text=\"签到弹窗\"] > View > View > TextView[text=\"\"][clickable=true]",
          "activityIds": [
            "com.baidu.tbadk.browser.TBWebContainerActivity"
          ],
          "key": 6,
          "name": "签到成功-弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/13776424"
          ]
        }
      ]
    },
    {
      "name": "局部广告-帖子底部话题卡片",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -2 [text=\"进入话题查看更多\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14586847",
          "exampleUrls": "https://m.gkd.li/57941037/2fa193f8-5e0e-4f85-b828-eb3e22cb60a3",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true] -2 [text=\"进入话题查看更多\"]",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14586847",
          "exampleUrls": "https://m.gkd.li/57941037/2fa193f8-5e0e-4f85-b828-eb3e22cb60a3",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-会员弹窗",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 10,
      "rules": [
        {
          "matches": "WebView[text=\"会员弹窗\" || text=\"一键签到\"] >(3,4) TextView + Image[text!=null][childCount=0][visibleToUser=true]",
          "activityIds": [
            ".tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity"
          ],
          "forcedTime": 10000,
          "snapshotUrls": [
            "https://i.gkd.li/i/14630806",
            "https://i.gkd.li/i/15119439",
            "https://i.gkd.li/i/15119451",
            "https://i.gkd.li/i/16426630"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932",
          "key": 0
        },
        {
          "matches": "WebView[text=\"会员弹窗\" || text=\"一键签到\"] >3 TextView + Image[text!=null][childCount=0][visibleToUser=true]",
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity"
          ],
          "forcedTime": 5000,
          "snapshotUrls": [
            "https://i.gkd.li/i/14630806",
            "https://i.gkd.li/i/15119439",
            "https://i.gkd.li/i/15119451"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "enable": false,
      "forcedTime": 10000,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@[clickable=true][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text=\"广告\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595124",
            "https://i.gkd.li/i/16596297",
            "https://i.gkd.li/i/16632851"
          ],
          "exampleUrls": "https://e.gkd.li/337a7e8b-500f-4a0b-ae08-018c5222d4da"
        },
        {
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] <4 RelativeLayout + FrameLayout >7 [text=\"广告\"]",
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity",
            ".forum.ForumActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/16595301",
            "https://i.gkd.li/i/16596195",
            "https://i.gkd.li/i/16596775"
          ],
          "exampleUrls": "https://e.gkd.li/5b53c3be-4972-44aa-a62e-3ca780ae7098"
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] < LinearLayout[childCount=1] <4 RelativeLayout +3 LinearLayout >4 [text=\"小游戏\"]",
          "activityIds": ".tblauncher.MainTabActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/17943902",
            "https://i.gkd.li/i/18217417"
          ]
        },
        {
          "matches": [
            "RelativeLayout > TextView[text$=\"广告\"][clickable=true]",
            "LinearLayout[clickable=true][childCount=1] > @FrameLayout[clickable=true][childCount=1][desc=null] > ImageView"
          ],
          "key": 3,
          "name": "点击广告【x】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775913",
            "https://i.gkd.li/import/13043133",
            "https://i.gkd.li/import/13054256",
            "https://i.gkd.li/import/12775930",
            "https://i.gkd.li/import/12840951",
            "https://i.gkd.li/import/12775916",
            "https://i.gkd.li/import/12775892",
            "https://i.gkd.li/import/13328300",
            "https://i.gkd.li/import/13402610",
            "https://i.gkd.li/import/13459289"
          ]
        },
        {
          "matches": "@View[text=null] - TextView[text=\"选择不喜欢理由\"][index=0]",
          "preKeys": 0,
          "name": "关闭原因-【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/12775914",
          "key": 4
        }
      ]
    },
    {
      "name": "局部广告-感兴趣的吧推广",
      "desc": "关闭首页、吧内其他贴吧的推广",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text=\"你可能感兴趣的吧\" || text^=\"本吧的人都在逛\"]",
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".forum.ForumActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16914357",
            "https://i.gkd.li/i/17944680",
            "https://i.gkd.li/i/18218517"
          ],
          "exampleUrls": "https://e.gkd.li/bfc13aa1-579f-46f4-beff-64b3f8ec693a"
        }
      ]
    },
    {
      "name": "未分类-申请消息提醒弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 13,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [text^=\"打开通知\"]",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13536170"
        },
        {
          "matches": "TextView[text=\"开启消息推送\"] +2 TextView[text=\"不开启\"]",
          "activityIds": "com.baidu.tieba.immessagecenter.mention.reply.ReplyMeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13675694"
        },
        {
          "matches": "[text=\"开启通知\"] - [text=\"暂不开启\"]",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13804455"
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "desc": "推荐帖子列表,评论区列表:像正常内容的广告,关闭时弹窗选原因",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": [
            "RelativeLayout > TextView[text$=\"广告\"][clickable=true]",
            "LinearLayout[clickable=true][childCount=1] > @FrameLayout[clickable=true][childCount=1][desc=null] > ImageView"
          ],
          "key": 0,
          "name": "点击广告【x】",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775913",
            "https://i.gkd.li/i/13043133",
            "https://i.gkd.li/i/13054256",
            "https://i.gkd.li/i/12775930",
            "https://i.gkd.li/i/12840951",
            "https://i.gkd.li/i/12775916",
            "https://i.gkd.li/i/12775892",
            "https://i.gkd.li/i/13328300",
            "https://i.gkd.li/i/13402610",
            "https://i.gkd.li/i/13459289"
          ]
        },
        {
          "matches": "@View[text=null] - TextView[text=\"选择不喜欢理由\"][index=0]",
          "preKeys": 0,
          "name": "关闭原因-【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/i/12775914",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页、推荐列表顶部卡片式广告",
      "desc": "关闭首页顶部的卡片广告和小游戏推广",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 15,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13060892"
        }
      ]
    },
    {
      "name": "未分类-帖子底部内容推荐卡片",
      "desc": "关闭时弹窗选原因",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "LinearLayout > RelativeLayout[id!=null][clickable=false] > ImageView[id=null][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12775882"
        },
        {
          "matches": "@View[text=null] - TextView[text=\"选择不喜欢理由\"][index=0]",
          "preKeys": 0,
          "name": "关闭原因-不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/12775914",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "关闭会员弹窗、签到弹窗等全屏广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 17,
      "rules": [
        {
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1] > Image",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 0,
          "name": "点击右上角x关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/13060891",
            "https://i.gkd.li/i/13222361"
          ]
        },
        {
          "matches": "@TextView[clickable=true && text=null] - FrameLayout TextView[text=\"广告\"]",
          "activityIds": [
            "com.baidu.tieba.frs.FrsActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.LogoActivity"
          ],
          "key": 1,
          "name": "点击正下方x关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/13168383",
            "https://i.gkd.li/i/13322120",
            "https://i.gkd.li/i/13328246"
          ]
        },
        {
          "matches": "@TextView[vid=\"obfuscated\"][clickable=true][childCount=0][visibleToUser=true] - FrameLayout[childCount=2][getChild(1).text=\"广告\"] < RelativeLayout[childCount=2] < [parent=null]",
          "activityIds": [
            ".frs.FrsActivity",
            ".tblauncher.MainTabActivity",
            ".LogoActivity"
          ],
          "key": 2,
          "name": "点击正下方x关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/13168383",
            "https://i.gkd.li/i/13322120",
            "https://i.gkd.li/i/13328246"
          ]
        },
        {
          "matches": "WebView[text!=null] > View[childCount=1] > View[childCount=3] > @[visibleToUser=true][index=2][width<150]",
          "activityIds": [
            ".tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13060891",
            "https://i.gkd.li/i/16703244"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29640529"
        }
      ]
    },
    {
      "name": "局部广告-帖子内 \"进吧逛逛\" 弹窗",
      "enable": false,
      "actionMaximum": 1,
      "key": 18,
      "rules": [
        {
          "matches": "[vid=\"tip_close\"]",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14571741",
          "exampleUrls": "https://m.gkd.li/57941037/e45542c9-cee7-4fa6-874d-0682c53f629b",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-游戏类推广",
      "desc": "首页,游戏公测/上线等推广,点击x掉",
      "enable": false,
      "fastQuery": true,
      "key": 19,
      "rules": [
        {
          "matches": "@ImageView <2 [childCount=2] <4 [index=0][childCount=4] +(1,2) FrameLayout > [text*=\"定档\" || text*=\"预约\" || text*=\"测试\"][text*=\"《\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/30164473",
            "https://i.gkd.li/i/30164474",
            "https://i.gkd.li/i/30164475",
            "https://i.gkd.li/i/30165036",
            "https://i.gkd.li/i/30346796"
          ],
          "exampleUrls": "https://e.gkd.li/45efc73b-e2e4-4c61-af95-607d500b8ac7"
        },
        {
          "matches": "@ImageView <2 [childCount=2] <4 [index=0][childCount=4] +n [childCount>3] > [text=\"权限\" || text=\"隐私\" || text=\"功能\"] -(1,2,3) [text*=\"有限公司\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/30164269",
          "exampleUrls": "https://e.gkd.li/602291ca-dd06-4116-8252-65fe8d4e610d"
        }
      ]
    },
    {
      "name": "通知提示-申请消息提醒弹窗",
      "desc": "关闭消息通知开启提示弹窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [text^=\"打开通知\"]",
          "activityIds": ".pb.pb.main.PbActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13536170"
        },
        {
          "matches": "TextView[text=\"开启消息推送\"] +2 TextView[text=\"不开启\"]",
          "activityIds": ".immessagecenter.mention.reply.ReplyMeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13675694"
        },
        {
          "matches": "[text=\"开启通知\"] <n * > [text=\"暂不开启\"]",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13804455",
            "https://i.gkd.li/i/20918198"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-申请消息提醒弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 21,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [text^=\"打开通知\"]",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13536170"
        },
        {
          "matches": "TextView[text=\"开启消息推送\"] +2 TextView[text=\"不开启\"]",
          "activityIds": "com.baidu.tieba.immessagecenter.mention.reply.ReplyMeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13675694"
        },
        {
          "matches": "[text=\"开启通知\"] - [text=\"暂不开启\"]",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13804455"
        }
      ]
    },
    {
      "name": "局部广告-首页-推荐-列表顶部卡片式广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 22,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13060892"
        }
      ]
    },
    {
      "name": "局部广告-帖子底部内容推荐卡片",
      "desc": "关闭时弹窗选原因",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "LinearLayout > RelativeLayout[id!=null][clickable=false] > ImageView[id=null][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12775882"
        },
        {
          "matches": "@View[text=null] - TextView[text=\"选择不喜欢理由\"][index=0]",
          "preKeys": 0,
          "name": "关闭原因-不感兴趣",
          "snapshotUrls": "https://i.gkd.li/import/12775914",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-吧内-悬浮卡通-进吧逛逛",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 24,
      "rules": [
        {
          "matches": "TextView[text!=null] < LinearLayout + LinearLayout > View + ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "申请消息提醒弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 25,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [text^=\"打开通知\"]",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13536170"
        },
        {
          "matches": "TextView[text=\"开启消息推送\"] +2 TextView[text=\"不开启\"]",
          "activityIds": "com.baidu.tieba.immessagecenter.mention.reply.ReplyMeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13675694"
        },
        {
          "matches": "[text=\"开启通知\"] - [text=\"暂不开启\"]",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13804455"
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "推荐帖子列表,评论区列表:像正常内容的广告,关闭时弹窗选原因",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": [
            "RelativeLayout > TextView[text$=\"广告\"][clickable=true]",
            "LinearLayout[clickable=true][childCount=1] > @FrameLayout[clickable=true][childCount=1][desc=null] > ImageView"
          ],
          "key": 0,
          "name": "点击广告【x】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775913",
            "https://i.gkd.li/import/13043133",
            "https://i.gkd.li/import/13054256",
            "https://i.gkd.li/import/12775930",
            "https://i.gkd.li/import/12840951",
            "https://i.gkd.li/import/12775916",
            "https://i.gkd.li/import/12775892",
            "https://i.gkd.li/import/13328300",
            "https://i.gkd.li/import/13402610",
            "https://i.gkd.li/import/13459289"
          ]
        },
        {
          "matches": "@View[text=null] - TextView[text=\"选择不喜欢理由\"][index=0]",
          "preKeys": 0,
          "name": "关闭原因-【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/12775914",
          "key": 1
        }
      ]
    },
    {
      "name": "首页-推荐-列表顶部卡片式广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 27,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13060892"
        }
      ]
    },
    {
      "name": "升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 28,
      "rules": [
        {
          "matches": "[text=\"稍后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "帖子底部内容推荐卡片",
      "desc": "关闭时弹窗选原因",
      "enable": false,
      "key": 29,
      "rules": [
        {
          "matches": "LinearLayout > RelativeLayout[id!=null][clickable=false] > ImageView[id=null][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12775882"
        },
        {
          "matches": "@View[text=null] - TextView[text=\"选择不喜欢理由\"][index=0]",
          "preKeys": 0,
          "name": "关闭原因-不感兴趣",
          "snapshotUrls": "https://i.gkd.li/import/12775914",
          "key": 1
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 30,
      "rules": [
        {
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1] > Image",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "key": 0,
          "name": "点击右上角x关闭",
          "snapshotUrls": [
            "https://i.gkd.li/import/13060891",
            "https://i.gkd.li/import/13222361"
          ]
        },
        {
          "matches": "@TextView[clickable=true && text=null] - FrameLayout TextView[text=\"广告\"]",
          "activityIds": [
            "com.baidu.tieba.frs.FrsActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.LogoActivity"
          ],
          "key": 1,
          "name": "点击正下方x关闭",
          "snapshotUrls": [
            "https://i.gkd.li/import/13168383",
            "https://i.gkd.li/import/13322120",
            "https://i.gkd.li/import/13328246"
          ]
        }
      ]
    },
    {
      "name": "悬浮小广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 31,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - TextView[text=\"广告\"] < RelativeLayout + ImageView",
          "activityIds": "com.baidu.tieba.tblauncher.MainTabActivity",
          "key": 0,
          "name": "首页右侧悬浮广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13115167",
            "https://i.gkd.li/import/13327933"
          ]
        },
        {
          "matches": "LinearLayout[childCount=2] > @ImageView + [text=\"广告\"]",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "quickFind": true,
          "key": 1,
          "name": "评论区左侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13296280"
        },
        {
          "matches": "RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "activityIds": [
            "com.baidu.tieba.pb.pb.main.PbActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13625336",
            "https://i.gkd.li/import/13627881"
          ]
        }
      ]
    },
    {
      "name": "吧内-悬浮卡通-进吧逛逛",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 32,
      "rules": [
        {
          "matches": "TextView[text!=null] < LinearLayout + LinearLayout > View + ImageView[clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
