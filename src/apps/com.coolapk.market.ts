// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "酷安",
  "id": "com.coolapk.market",
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
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12503773",
            "https://i.gkd.li/i/13247610",
            "https://i.gkd.li/i/13264779",
            "https://i.gkd.li/i/13826359",
            "https://i.gkd.li/i/13827095"
          ]
        },
        {
          "matches": "[!(id=\"com.coolapk.market:id/item_view\") && !(vid=\"card_view\")] > [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12917990",
            "https://i.gkd.li/i/13211392",
            "https://i.gkd.li/i/23097140"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13247733",
            "https://i.gkd.li/i/13296816",
            "https://i.gkd.li/i/18245546"
          ]
        },
        {
          "matches": "[id$=\"tt_splash_skip_btn\"] <<n [id=\"com.coolapk.market:id/ad_container\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12503773",
            "https://i.gkd.li/i/13247610",
            "https://i.gkd.li/i/13264779"
          ]
        },
        {
          "matches": "[text^=\"跳过\"][text.length<=4]",
          "excludeMatches": "[id=\"com.coolapk.market:id/item_view\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12917990",
            "https://i.gkd.li/i/13211392",
            "https://i.gkd.li/i/13247733",
            "https://i.gkd.li/i/13247782",
            "https://i.gkd.li/i/13296816"
          ]
        },
        {
          "matches": "@View[clickable=true] <(2,3) FrameLayout <2 FrameLayout <<n FrameLayout[id=\"com.coolapk.market:id/ad_container\"]",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13826359",
            "https://i.gkd.li/i/13827095"
          ]
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\" || text*=\"Shake\"]",
          "actionMaximum": 1,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13247610",
            "https://i.gkd.li/i/13264779",
            "https://i.gkd.li/i/13826359",
            "https://i.gkd.li/i/13827095",
            "https://i.gkd.li/i/32639518"
          ]
        },
        {
          "matches": "TextView - @View[clickable=true][width<200] <(2,3) FrameLayout <2 FrameLayout < FrameLayout < [vid=\"ad_container\"]",
          "actionMaximum": 1,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/30529874"
        },
        {
          "matches": "[text*=\"跳过\" || text*=\"Skip\"][!(vid=\"text_view\" || vid=\"title_view\")][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeMatches": "[text*=\"搜索\"]",
          "actionCd": 300,
          "actionMaximum": 5,
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/12917990",
            "https://i.gkd.li/i/13211392",
            "https://i.gkd.li/i/23097140",
            "https://i.gkd.li/i/25498455",
            "https://i.gkd.li/i/26328668"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13247733",
            "https://i.gkd.li/i/13296816",
            "https://i.gkd.li/i/18245546",
            "https://i.gkd.li/i/33674023"
          ]
        },
        {
          "matches": "@ImageView[childCount=0] < ViewGroup < ViewGroup +(2,3) ViewGroup >2 [text=\"广告\"][visibleToUser=true]",
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/27078867",
            "https://i.gkd.li/i/27380329"
          ]
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"close_view\"] <<n [vid=\"coolapk_card_view\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/19004644",
            "https://i.gkd.li/i/19004652",
            "https://i.gkd.li/i/19004663",
            "https://i.gkd.li/i/19005176",
            "https://i.gkd.li/i/20776874",
            "https://i.gkd.li/i/21693917"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14996359",
            "https://i.gkd.li/i/15159886",
            "https://i.gkd.li/i/15587119",
            "https://i.gkd.li/i/20768037"
          ]
        },
        {
          "anyMatches": [
            "@[clickable=true] >(1,2) [text=\"不感兴趣\"][visibleToUser=true]",
            "[text=\"不感兴趣\"][clickable=true][visibleToUser=true]"
          ],
          "preKeys": [
            0,
            2
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/19004649",
            "https://i.gkd.li/i/19643258",
            "https://i.gkd.li/i/19643262",
            "https://i.gkd.li/i/19534649",
            "https://i.gkd.li/i/20776872",
            "https://i.gkd.li/i/21693916",
            "https://i.gkd.li/i/23046625"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        },
        {
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/21036817",
          "anyMatches": [
            "@[clickable=true] >(1,2) [text=\"不感兴趣\"][visibleToUser=true]",
            "[text=\"不感兴趣\"][clickable=true][visibleToUser=true]",
            "[text=\"不感兴趣\"][visibleToUser=true]"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"立即更新\"][visibleToUser=true]",
          "action": "back",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15511206"
        },
        {
          "matches": "[text=\"立即更新\"]",
          "activityIds": ".view.main.MainActivity",
          "matchTime": 10000,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23096630",
          "exampleUrls": "https://e.gkd.li/19b5d743-3632-4c64-8e51-b55c85070512"
        },
        {
          "matches": "[text=`立即更新`] - [text=`取消`]",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"去开启\"] - [text=\"以后再说\"]",
          "activityIds": [
            ".view.main.MainActivity",
            ".view.splash.SplashActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13296465",
            "https://i.gkd.li/i/20708984"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-[大家还下载了]应用推荐",
      "desc": "点击关闭",
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"大家还下载了\"] + [vid=\"close_view\"]",
          "activityIds": [
            ".view.search.SuperSearchResultActivity",
            ".view.node.DynamicNodePageActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16448265",
            "https://i.gkd.li/i/16448385"
          ],
          "exampleUrls": "https://e.gkd.li/0cfa8038-dc74-46c3-9e06-998965d73711",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "key": 5,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] <<n [vid=\"item_view\"] <<n [vid=\"to_native_ad_view\"][visibleToUser=true]",
          "activityIds": ".view.search.SuperSearchResultActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19643150",
          "exampleUrls": "https://e.gkd.li/efd366d9-1c66-4c35-b164-6f91a623e2f2",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "desc": "点击卡片右上角按钮->免广告-点击关闭->选择关闭原因-点击不感兴趣",
      "enable": false,
      "matchRoot": true,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.coolapk.market:id/close_view\"]",
          "excludeMatches": [
            "[text=\"回复\"] + [text=\"发布\"]",
            "[text=\"创建收藏单\"][visibleToUser=true]"
          ],
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12707506",
            "https://i.gkd.li/i/12642094",
            "https://i.gkd.li/i/12642148",
            "https://i.gkd.li/i/12774771",
            "https://i.gkd.li/i/13257987",
            "https://i.gkd.li/i/14996359",
            "https://i.gkd.li/i/15159886"
          ]
        },
        {
          "matches": "@[text=\"不感兴趣\" || text=\"关闭\"] <n * > [text*=\"广告\"]",
          "preKeys": [
            3
          ],
          "key": 1,
          "name": "点击[不感兴趣]/[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14959519",
            "https://i.gkd.li/i/14964859"
          ]
        },
        {
          "matches": "@LinearLayout > TextView[text=\"不感兴趣\"]",
          "preKeys": [
            3,
            4
          ],
          "key": 2,
          "name": "选择关闭原因-点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12472633",
            "https://i.gkd.li/i/12655713",
            "https://i.gkd.li/i/12660759",
            "https://i.gkd.li/i/12706437"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        },
        {
          "matches": "TextView[text!=\"编辑\"] + [vid=\"close_view\"][childCount=0]",
          "key": 3,
          "name": "点击右上角x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12707506",
            "https://i.gkd.li/import/12642094",
            "https://i.gkd.li/import/12642148",
            "https://i.gkd.li/import/12774771",
            "https://i.gkd.li/import/13257987",
            "https://i.gkd.li/i/19004644",
            "https://i.gkd.li/i/19004652",
            "https://i.gkd.li/i/19004663",
            "https://i.gkd.li/i/19005176",
            "https://i.gkd.li/i/20776874",
            "https://i.gkd.li/i/21693917"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14996359",
            "https://i.gkd.li/i/15259305",
            "https://i.gkd.li/i/15159886",
            "https://i.gkd.li/i/15587119",
            "https://i.gkd.li/i/20768037"
          ]
        },
        {
          "anyMatches": [
            "@[text=\"不感兴趣\" || text=\"关闭\"] <n * > [text*=\"广告\"]",
            "@[clickable=true] >(1,2) [text=\"不感兴趣\"][visibleToUser=true]"
          ],
          "preKeys": [
            3
          ],
          "key": 4,
          "name": "点击[不感兴趣]/[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12707509",
            "https://i.gkd.li/import/12642132",
            "https://i.gkd.li/import/12642155",
            "https://i.gkd.li/import/12774753",
            "https://i.gkd.li/i/14959519",
            "https://i.gkd.li/i/14964859",
            "https://i.gkd.li/i/14549551",
            "https://i.gkd.li/i/21693916",
            "https://i.gkd.li/i/23046625"
          ]
        },
        {
          "anyMatches": [
            "@[clickable=true] > [text=\"不感兴趣\"][visibleToUser=true]",
            "[text=\"不感兴趣\"][clickable=true][visibleToUser=true]"
          ],
          "preKeys": [
            3,
            4
          ],
          "key": 5,
          "name": "选择关闭原因-点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12472633",
            "https://i.gkd.li/import/12655713",
            "https://i.gkd.li/import/12660759",
            "https://i.gkd.li/import/12706437",
            "https://i.gkd.li/import/13786886",
            "https://i.gkd.li/i/19004649",
            "https://i.gkd.li/i/19004661",
            "https://i.gkd.li/i/19643258",
            "https://i.gkd.li/i/19643262",
            "https://i.gkd.li/i/19534649",
            "https://i.gkd.li/i/20776872"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        }
      ]
    },
    {
      "name": "权限提示-通知提示",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"去开启\"] - [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动查看原图",
      "desc": "查看图片时自动点击原图",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[vid=\"load_source_button\"][checked=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动保存原图",
      "desc": "长按图片->点击[保存原图]",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"保存原图\"]",
          "activityIds": [
            ".view.photo.PhotoViewActivity",
            ".view.wallpaper.coolpic.CoolPicDetailActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25621281",
            "https://i.gkd.li/i/25621360"
          ],
          "exampleUrls": "https://e.gkd.li/d62f40f9-51ca-4059-9217-6d93e080db8b"
        },
        {
          "matches": "[text=\"保存原图\"] < @[clickable=true] <n View[childCount>2] < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "activityIds": ".view.photo.PhotoViewV16Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/28377623"
        }
      ]
    },
    {
      "name": "功能类-消息已读自动[确定]",
      "desc": "点击[确定]",
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"确定\"] < @[clickable=true] <6 View[getChild(0).text$=\"已读\"] < View < ComposeView < [id=\"android:id/content\"]",
          "activityIds": ".view.notification.v18.NotificationV18Activity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30532352",
          "exampleUrls": "https://e.gkd.li/dbf91283-a342-416e-a009-5b7e67301c77",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-应用推荐",
      "desc": "关闭搜索结果页面的应用推荐广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[text=\"大家还下载了\"] + [vid=\"close_view\"]",
          "activityIds": [
            ".view.search.SuperSearchResultActivity",
            ".view.node.DynamicNodePageActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16448265",
            "https://i.gkd.li/i/16448385"
          ]
        },
        {
          "matches": "@[desc=\"关闭\"] <<n [vid=\"item_view\"] <<n [vid=\"to_native_ad_view\"][visibleToUser=true]",
          "activityIds": [
            ".view.search.SuperSearchResultActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/19643150"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击卡片右上角按钮->免广告-点击不感兴趣->选择关闭原因-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.coolapk.market:id/ad_time_view\"||id=\"com.coolapk.market:id/top_text_view\"||id=\"com.coolapk.market:id/ad_text_view\"] +n [id=\"com.coolapk.market:id/close_view\"]",
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12707506",
            "https://i.gkd.li/import/12642094",
            "https://i.gkd.li/import/12642148",
            "https://i.gkd.li/import/12774771",
            "https://i.gkd.li/import/13257987"
          ]
        },
        {
          "matches": "Button[text$=\"广告\"] <n LinearLayout[childCount=2] > Button[text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "去广告/免广告-点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12707509",
            "https://i.gkd.li/import/12642132",
            "https://i.gkd.li/import/12642155",
            "https://i.gkd.li/import/12774753"
          ]
        },
        {
          "matches": [
            "@LinearLayout > TextView[text=\"不感兴趣\"]"
          ],
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "选择关闭原因-点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12472633",
            "https://i.gkd.li/import/12655713",
            "https://i.gkd.li/import/12660759",
            "https://i.gkd.li/import/12706437",
            "https://i.gkd.li/import/13786886"
          ]
        }
      ]
    },
    {
      "name": "权限提示-关闭推送通知",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[text=\"去开启\"] - [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "卡片广告",
      "desc": "点击卡片右上角按钮->免广告-点击不感兴趣->选择关闭原因-点击不感兴趣",
      "enable": false,
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.coolapk.market:id/ad_time_view\"||id=\"com.coolapk.market:id/top_text_view\"||id=\"com.coolapk.market:id/ad_text_view\"] +n [id=\"com.coolapk.market:id/close_view\"]",
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12707506",
            "https://i.gkd.li/import/12642094",
            "https://i.gkd.li/import/12642148",
            "https://i.gkd.li/import/12774771",
            "https://i.gkd.li/import/13257987"
          ]
        },
        {
          "matches": "Button[text$=\"广告\"] <n LinearLayout[childCount=2] > Button[text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "去广告/免广告-点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12707509",
            "https://i.gkd.li/import/12642132",
            "https://i.gkd.li/import/12642155",
            "https://i.gkd.li/import/12774753"
          ]
        },
        {
          "matches": [
            "@LinearLayout > TextView[text=\"不感兴趣\"]"
          ],
          "key": 2,
          "name": "选择关闭原因-点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12472633",
            "https://i.gkd.li/import/12655713",
            "https://i.gkd.li/import/12660759",
            "https://i.gkd.li/import/12706437",
            "https://i.gkd.li/import/13786886"
          ],
          "action": "clickCenter",
          "actionDelay": 300
        }
      ]
    },
    {
      "name": "关闭升级弹窗",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[text=`立即更新`] - [text=`取消`]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭推送通知",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"去开启\"] - [text=\"以后再说\"]",
          "key": 0
        }
      ]
    }
  ]
});
