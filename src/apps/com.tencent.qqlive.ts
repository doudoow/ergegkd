// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "腾讯视频",
  "id": "com.tencent.qqlive",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text*=\"跳过\"][text.length<=10]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14049316"
        },
        {
          "matches": "TextView[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700227",
            "https://i.gkd.li/import/12700122",
            "https://i.gkd.li/import/12700541",
            "https://i.gkd.li/import/12910953"
          ],
          "key": 1
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
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"暂不升级\"][visibleToUser=true]",
          "activityIds": ".ona.update.trunk.client.TrunkUpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/19666787",
          "key": 0
        },
        {
          "matches": "[text^=\"有新版本\"] + FrameLayout + LinearLayout + [text=\"暂不升级\"]",
          "key": 1
        },
        {
          "matches": "[text^=\"有新版本\"] + FrameLayout + LinearLayout + [text=\"暂不升级\"]",
          "activityIds": ".ona.update.trunk.client.TrunkUpdateActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700486",
            "https://i.gkd.li/i/13799951"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] - FrameLayout >4 ViewGroup > [vid=\"player_sub_title_view\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/19666783",
          "exampleUrls": "https://e.gkd.li/d0fb9740-defa-437a-882e-b3c5d6a2d231"
        },
        {
          "matches": "[desc=\"the ad tag\"] < @FrameLayout[clickable=true] < RelativeLayout < RelativeLayout +(1,2) * >(4,5) [text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\"][text.length<6][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/19667010",
            "https://i.gkd.li/i/19667126",
            "https://i.gkd.li/i/19667028",
            "https://i.gkd.li/i/19667404",
            "https://i.gkd.li/i/19667413",
            "https://i.gkd.li/i/19667494",
            "https://i.gkd.li/i/19667496",
            "https://i.gkd.li/i/19667620",
            "https://i.gkd.li/i/19667647",
            "https://i.gkd.li/i/21139117",
            "https://i.gkd.li/i/21152861"
          ]
        },
        {
          "matches": "@ImageView[text=null][desc=null][childCount=0][clickable=true][visibleToUser=true][width<250 && height<150] - * >(1,2) [text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/19666328",
            "https://i.gkd.li/i/19693394"
          ]
        },
        {
          "matches": "[desc=\"poster_inner_round_cell\"] >5 RelativeLayout[childCount=5] > ImageView[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)][width<180 && height<80]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/21139064",
          "exampleUrls": "https://e.gkd.li/18c89ee9-fcd5-43eb-805a-ac9e223e3cdc"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true][width<60 && height<60] -(4,5) [text=\"广告\"]",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/21139431",
            "https://i.gkd.li/i/21152859"
          ],
          "exampleUrls": "https://e.gkd.li/1d81db1b-a722-4800-b6b7-4e5edb470984"
        },
        {
          "matches": "View[childCount=0][width<180 && height<80] < @View[clickable=true][childCount=1][visibleToUser=true] +2 [text*=\"广告\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/21152960"
        },
        {
          "matches": "DetachableComposeView >2 ScrollView > View[childCount=4][visibleToUser=true] > View + TextView[childCount=1][text!=null][getChild(0).width<120][getChild(0).height<80] + View[childCount=1][getChild(0).text!=null] + View[clickable=true][childCount=0]",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/21379340",
            "https://i.gkd.li/i/21410460",
            "https://i.gkd.li/i/21410716"
          ],
          "exampleUrls": "https://e.gkd.li/e4e6aca1-e7cb-4346-980b-638f26f61864"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] <(1,2,3) View[checkable=true] <<4 [name*=\"KMMChannelNormalFragment\"] < FrameLayout <(2,3,4) ViewPager <<4 FrameLayout <(1,2) FrameLayout <(2,3,5) [id=\"android:id/content\"]",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/23431044",
            "https://i.gkd.li/i/24339351",
            "https://i.gkd.li/i/24588850",
            "https://i.gkd.li/i/24693451",
            "https://i.gkd.li/i/24693465"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<250 && height<150] <n RelativeLayout < RelativeLayout < RecyclerView < RelativeLayout < RelativeLayout < LinearLayout[desc=\"poster_inner_round_cell\"] < RecyclerView <2 ViewGroup <2 FrameLayout <2 ScrollView <(2,3) RelativeLayout < ViewPager < FrameLayout < FrameLayout < FrameLayout < FrameLayout <(1,2) FrameLayout <2 [id=\"android:id/content\"]",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/23625987",
            "https://i.gkd.li/i/23625990",
            "https://i.gkd.li/i/24077457"
          ]
        },
        {
          "matches": "DetachableComposeView >2 ScrollView > View[childCount=1][getChild(0).text.length>0] + View[clickable=true][childCount=0][visibleToUser=true][width=height]",
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/23599723",
            "https://i.gkd.li/i/23625826"
          ]
        },
        {
          "matches": "@View[clickable=true][childCount=0][width<90 && height<90] <n View + [text=\"广告\"][visibleToUser=true]",
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/24715171"
        },
        {
          "anyMatches": [
            "[text=\"直接关闭\"][visibleToUser=true]",
            "@View[clickable=true] > [visibleToUser=true][text=\"直接关闭\"]"
          ],
          "preKeys": [
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            17,
            18,
            9,
            19
          ],
          "fastQuery": true,
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/19667198",
            "https://i.gkd.li/i/19667244",
            "https://i.gkd.li/i/21139034",
            "https://i.gkd.li/i/24715184"
          ]
        },
        {
          "anyMatches": [
            "[text=\"确认\"][visibleToUser=true]",
            "@View[clickable=true] > [visibleToUser=true][text=\"确认\"]"
          ],
          "preKeys": [
            21
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19667102",
            "https://i.gkd.li/i/19666759",
            "https://i.gkd.li/i/21152903",
            "https://i.gkd.li/i/24715184"
          ],
          "key": 12
        },
        {
          "matches": "@ImageView[height<74][clickable=true][visibleToUser=true] - FrameLayout >5 [vid=\"player_sub_title_view\"]",
          "key": 13,
          "snapshotUrls": "https://i.gkd.li/i/19666783",
          "exampleUrls": "https://e.gkd.li/d0fb9740-defa-437a-882e-b3c5d6a2d231"
        },
        {
          "matches": "[desc=\"the ad tag\"] < @FrameLayout[clickable=true] < RelativeLayout < RelativeLayout +(1,2) * >(4,5) [text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\"][text.length<6][visibleToUser=true]",
          "key": 14,
          "snapshotUrls": [
            "https://i.gkd.li/i/19667010",
            "https://i.gkd.li/i/19667126",
            "https://i.gkd.li/i/19667028",
            "https://i.gkd.li/i/19667404",
            "https://i.gkd.li/i/19667413",
            "https://i.gkd.li/i/19667496",
            "https://i.gkd.li/i/19667620",
            "https://i.gkd.li/i/19667647"
          ]
        },
        {
          "matches": "@ImageView[text=null][desc=null][clickable=true][width<250 && height<150] - * >(1,2) [text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\"][text.length<6][visibleToUser=true]",
          "key": 15,
          "snapshotUrls": [
            "https://i.gkd.li/i/19666328",
            "https://i.gkd.li/i/19693394",
            "https://i.gkd.li/i/21139117"
          ]
        },
        {
          "matches": "[text*=\"广告\"] -2 @View[clickable=true][getChild(0).height<90] < View[childCount>2] < * < * < * < ViewFactoryHolder <n View < View[index=parent.childCount.minus(1)] <n [childCount>6] < DetachableComposeView <2 FrameLayout <2 [id=\"android:id/content\"]",
          "activityIds": ".kmm.VideoDetailKmmActivityBk",
          "matchRoot": true,
          "key": 16,
          "snapshotUrls": "https://i.gkd.li/i/21152960"
        },
        {
          "matches": "@View[clickable=true][visibleToUser=true][width<174 && height<174] <(1,2,3) View[checkable=true] <<4 [name*=\"KMMChannelNormalFragment\"] < FrameLayout <(2,3,4) ViewPager <<4 FrameLayout <(1,2) FrameLayout <(2,3,5) [id=\"android:id/content\"]",
          "matchRoot": true,
          "key": 17,
          "snapshotUrls": [
            "https://i.gkd.li/i/23431044",
            "https://i.gkd.li/i/24339351",
            "https://i.gkd.li/i/24588850",
            "https://i.gkd.li/i/24693451",
            "https://i.gkd.li/i/24693465"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<250 && height<150] <n RelativeLayout <<6 RecyclerView <(1,2) ViewGroup <2 FrameLayout <2 ScrollView <(2,3) [desc*=\"page_home_channel\"] <<(6,7) FrameLayout <(2,4) [id=\"android:id/content\"]",
          "matchRoot": true,
          "key": 18,
          "snapshotUrls": [
            "https://i.gkd.li/i/23625987",
            "https://i.gkd.li/i/23625990",
            "https://i.gkd.li/i/24077457",
            "https://i.gkd.li/i/21139064"
          ],
          "exampleUrls": "https://e.gkd.li/18c89ee9-fcd5-43eb-805a-ac9e223e3cdc"
        },
        {
          "matches": "@View[clickable=true] <4 View[childCount>4] + [visibleToUser=true][text=\"广告\"]",
          "key": 19,
          "snapshotUrls": [
            "https://i.gkd.li/i/24715171",
            "https://i.gkd.li/i/26660624"
          ]
        },
        {
          "matches": "@View[clickable=true][width<174][height<174] -2 TextView[text.length>5] + [childCount=1] > [text.length<7][text^=\"去浏览\" || text^=\"去微信\" || text^=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\"]",
          "matchRoot": true,
          "key": 20,
          "snapshotUrls": [
            "https://i.gkd.li/i/21139431",
            "https://i.gkd.li/i/23625826",
            "https://i.gkd.li/i/21410460",
            "https://i.gkd.li/i/21410716",
            "https://i.gkd.li/i/33306617"
          ],
          "exampleUrls": "https://e.gkd.li/1d81db1b-a722-4800-b6b7-4e5edb470984"
        },
        {
          "matches": "[text=\"直接关闭\"][visibleToUser=true]",
          "preKeys": [
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            17,
            18,
            9,
            19,
            20
          ],
          "key": 21,
          "snapshotUrls": [
            "https://i.gkd.li/i/19667198",
            "https://i.gkd.li/i/19667244",
            "https://i.gkd.li/i/21139034"
          ]
        },
        {
          "matches": "[text=\"直接关闭\"] < @View[clickable=true] <n View < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "preKeys": [
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            17,
            18,
            9,
            19,
            20
          ],
          "matchRoot": true,
          "key": 22,
          "snapshotUrls": "https://i.gkd.li/i/24715184"
        },
        {
          "matches": "[text=\"确认\"][visibleToUser=true]",
          "preKeys": [
            21,
            22
          ],
          "key": 23,
          "snapshotUrls": [
            "https://i.gkd.li/i/19667102",
            "https://i.gkd.li/i/19666759",
            "https://i.gkd.li/i/21152903"
          ]
        },
        {
          "matches": "[text=\"确认\"] < @View[clickable=true] <n View < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "preKeys": [
            21,
            22
          ],
          "matchRoot": true,
          "key": 24,
          "snapshotUrls": "https://i.gkd.li/i/24715184"
        },
        {
          "matches": "FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 25,
          "name": "首页顶部卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700299",
            "https://i.gkd.li/i/12700302",
            "https://i.gkd.li/i/13685929"
          ]
        },
        {
          "matches": "[text=\"关闭广告\"][clickable=true]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 26,
          "name": "首页顶部背景广告",
          "snapshotUrls": "https://i.gkd.li/i/12700518"
        },
        {
          "matches": "ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "key": 27,
          "name": "个人中心页卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700175",
            "https://i.gkd.li/i/13759380"
          ]
        },
        {
          "matches": "RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 28,
          "name": "个人中心页顶部背景广告",
          "snapshotUrls": "https://i.gkd.li/i/12777344"
        },
        {
          "matches": "RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc=\"the ad tag\"]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity"
          ],
          "key": 29,
          "name": "点击右上角[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12737313",
            "https://i.gkd.li/i/13685842"
          ]
        },
        {
          "matches": "ImageView[childCount=0] < * < RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView",
          "key": 30,
          "name": "点击右下角关闭",
          "snapshotUrls": "https://i.gkd.li/i/13426421"
        },
        {
          "matches": "[id=\"com.tencent.qqlive:id/feed_icon\"][clickable=true]",
          "fastQuery": true,
          "key": 31,
          "snapshotUrls": "https://i.gkd.li/i/14318802",
          "exampleUrls": "https://m.gkd.li/57941037/42013a93-fb12-4747-92e0-95f5028eb8e5"
        },
        {
          "matches": "[id=\"com.tencent.qqlive:id/ad_feed_back_dislike\"][clickable=true]",
          "preKeys": [
            31
          ],
          "fastQuery": true,
          "key": 32,
          "snapshotUrls": "https://i.gkd.li/i/14318811",
          "exampleUrls": "https://m.gkd.li/57941037/8746fdc8-828e-42bb-9160-8e67b7af2dc7"
        },
        {
          "matches": "@FrameLayout[clickable=true] >3 [text=\"不感兴趣\"]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 33,
          "name": "广告反馈卡片-点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/13695084"
        },
        {
          "matches": "[text=\"关闭这条广告的原因\"] +(2) RecyclerView > [text=\"不感兴趣\"]",
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "fastQuery": true,
          "key": 34,
          "name": "广告反馈卡片-选择原因",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700303",
            "https://i.gkd.li/i/12829866",
            "https://i.gkd.li/i/13685871",
            "https://i.gkd.li/i/13703219"
          ]
        },
        {
          "matches": "[text=\"关闭这条广告的原因\"] + [text=\"确认\"][clickable=true]",
          "preKeys": [
            34
          ],
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "fastQuery": true,
          "key": 35,
          "name": "广告反馈卡片-确认原因",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700210",
            "https://i.gkd.li/i/13685877",
            "https://i.gkd.li/i/13703298"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-视频播放时的广告",
      "desc": "自动点击 跳过/关闭广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text$=\"关闭广告\" || text=\"关闭VIP热剧推荐\"][clickable=true]",
          "fastQuery": true,
          "key": 0,
          "name": "全屏广告2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13526547",
            "https://i.gkd.li/i/20691266",
            "https://i.gkd.li/i/21152927"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][width<150&&height<150] - * >(3,4) [text^=\"摇动或点击\" || text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "name": "居中广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/18476380",
            "https://i.gkd.li/i/18476384",
            "https://i.gkd.li/i/19667827"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0] +2 [text^=\"摇动或点击\" || text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\" || text*=\"小程序\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 2,
          "name": "居中广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13946107",
            "https://i.gkd.li/i/14318385",
            "https://i.gkd.li/i/18476383",
            "https://i.gkd.li/i/20038310",
            "https://i.gkd.li/i/24689566"
          ],
          "exampleUrls": "https://e.gkd.li/4bf0ff94-239d-4b43-900f-a375b44922e0"
        },
        {
          "matches": "@View[clickable=true][childCount=0][width<100 && height<100] <8 View < DetachableComposeView < FrameLayout <2 [id=\"android:id/content\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/21175698",
          "exampleUrls": "https://e.gkd.li/b0f4982a-ac12-481c-bccb-f8b7a8b14c46"
        },
        {
          "matches": "@[text$=\"跳过广告\"][clickable=true] < LinearLayout > [text=\"VIP可关闭该广告\"]",
          "fastQuery": true,
          "key": 4,
          "name": "全屏广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700407",
            "https://i.gkd.li/import/12700433"
          ]
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout > RelativeLayout > View[id!=null][clickable=true]",
          "key": 5,
          "name": "左下角悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13043079"
        },
        {
          "matches": "@[text$=\"关闭广告\"][clickable=true]",
          "fastQuery": true,
          "key": 6,
          "name": "全屏广告2",
          "snapshotUrls": "https://i.gkd.li/import/13526547"
        },
        {
          "matches": "FrameLayout[childCount=4] > ImageView + FrameLayout + FrameLayout + ImageView[clickable=true]",
          "key": 7,
          "name": "居中广告",
          "snapshotUrls": "https://i.gkd.li/import/13695067"
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0] - * >(3,4) [text^=\"摇动或点击\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 8,
          "name": "居中广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/18476380",
            "https://i.gkd.li/i/18476384"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0] +2 [text=\"下载应用\" || text=\"了解详情\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 9,
          "name": "居中广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13946107",
            "https://i.gkd.li/i/14318385",
            "https://i.gkd.li/i/18476383"
          ],
          "exampleUrls": "https://e.gkd.li/4bf0ff94-239d-4b43-900f-a375b44922e0"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] < ViewGroup[childCount=5] < [id=\"android:id/content\"]",
          "activityIds": "com.tencent.qqlive.redpacket.rain.OpenRedPacketActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13842643",
          "exampleUrls": "https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d"
        },
        {
          "matches": "@RelativeLayout[clickable=true] + * >3 [text=\"立即预约\"]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14567294",
          "exampleUrls": "https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text=\"立即免费领取\"]",
          "activityIds": ".ona.activity.SplashHomeActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/17088095",
          "exampleUrls": "https://e.gkd.li/8b128ebc-ce9c-4345-8094-769f9afa8cd6"
        },
        {
          "matches": "[text=\"暂不需要，稍后领取\"][visibleToUser=true]",
          "activityIds": ".ona.activity.SplashHomeActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17542869",
          "exampleUrls": "https://e.gkd.li/3256ed8e-752c-426d-9d64-26c9fdea9b09"
        },
        {
          "matches": "[text=\"放弃权益\"][visibleToUser=true]",
          "activityIds": ".ona.activity.VideoDetailActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/19666924",
          "exampleUrls": "https://e.gkd.li/37d3d077-1d3b-4b4d-87c2-4e0fa00d423e"
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] <2 RelativeLayout < RelativeLayout < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": ".ona.activity.SplashHomeActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/19666714",
          "exampleUrls": "https://e.gkd.li/afb17212-1dcb-4d07-a9ce-b4f775ccd6fc"
        },
        {
          "matches": "TextView[text^=\"暂不需要\"] < @View[clickable=true] <6 View < ComposeView < FrameLayout <2 FrameLayout < FrameLayout <2 FrameLayout <2 [id=\"android:id/content\"]",
          "activityIds": ".ona.activity.SplashHomeActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/20148077",
          "exampleUrls": "https://e.gkd.li/4f48767f-9cfa-4507-89ab-eb24f483d05e"
        },
        {
          "matches": "@TextView[text=\"x\"][clickable=true][childCount=0] + View >2 [text^=\"下载并领取\"][visibleToUser=true]",
          "activityIds": ".ona.activity.origin.OriginIconHomeActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/23763930",
          "exampleUrls": "https://e.gkd.li/3a524370-1dbc-4017-a357-6728f809bd9c"
        },
        {
          "matches": "@ImageView[clickable=true] < ViewGroup[childCount=5] < [id=\"android:id/content\"]",
          "activityIds": ".redpacket.rain.OpenRedPacketActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/13842643",
          "exampleUrls": "https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d"
        },
        {
          "matches": "@RelativeLayout[clickable=true] + * >3 [text=\"立即预约\"]",
          "activityIds": ".ona.activity.SplashHomeActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/14567294",
          "exampleUrls": "https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "@[clickable=true] - [text*=\"开启通知\"]",
          "activityIds": ".ona.activity.SplashHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20368590",
          "exampleUrls": "https://e.gkd.li/d16d04cb-8838-455c-9bc5-acebc936637b",
          "key": 0
        },
        {
          "matches": "LinearLayout > @[text=\"以后再说\"] + [text=\"好的\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12700139"
        },
        {
          "matches": "@ImageView + * > [text^=\"开启通知\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13670465"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@[clickable=true] - [text=\"广告\"]",
          "activityIds": "com.tencent.qqlive.ona.activity.VideoDetailActivity",
          "fastQuery": true,
          "key": 0,
          "name": "投屏页面广告",
          "snapshotUrls": "https://i.gkd.li/i/14358913",
          "exampleUrls": "https://m.gkd.li/57941037/1b7518c9-4ca7-4905-8929-6f0130abf19f"
        },
        {
          "matches": "@[name$=\"ImageView\" || name$=\"FrameLayout\" ][childCount<2][clickable=true][visibleToUser=true][width<250 && height<150] <3 RelativeLayout < FrameLayout <2 FrameLayout < FrameLayout <2 ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <n [id=\"android:id/content\"]",
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.origin.OriginIconHomeActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/19667104",
            "https://i.gkd.li/i/21327634",
            "https://i.gkd.li/i/23121852",
            "https://i.gkd.li/i/23764004"
          ],
          "exampleUrls": "https://e.gkd.li/0ea465ad-e4e4-4af5-92a4-2d71e44845f4"
        },
        {
          "matches": "RelativeLayout > ComposeView > View > View[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)]",
          "activityIds": [
            ".ona.activity.VideoDetailActivity",
            ".kmm.VideoDetailKmmActivityBk"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/22870972",
            "https://i.gkd.li/i/22894605"
          ],
          "exampleUrls": "https://e.gkd.li/23606b5d-a8e9-4848-9b5a-059e7ecb08af"
        },
        {
          "matches": "[text=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "activityIds": ".ona.activity.origin.OriginIconHomeActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/23619869",
          "exampleUrls": "https://e.gkd.li/17ea1473-f4b9-4622-b6ed-60486d6208f1"
        },
        {
          "matches": "@[clickable=true] - [text=\"广告\"]",
          "activityIds": ".ona.activity.VideoDetailActivity",
          "fastQuery": true,
          "key": 4,
          "name": "投屏页面广告",
          "snapshotUrls": "https://i.gkd.li/i/14358913",
          "exampleUrls": "https://m.gkd.li/57941037/1b7518c9-4ca7-4905-8929-6f0130abf19f"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] + [text^=\"免费看\"][visibleToUser=true]",
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/17542913",
            "https://i.gkd.li/i/19667010"
          ],
          "exampleUrls": "https://e.gkd.li/5f6447c1-39f6-4711-a907-fdf36f502ec6"
        },
        {
          "matches": "@ImageView[id=null][text=null][desc=null][clickable=true][visibleToUser=true][width<150&&height<150] <2 FrameLayout[desc=\"float_widget_activity\"] < FrameLayout <3 FrameLayout <3 [id=\"android:id/content\"]",
          "activityIds": ".ona.activity.VideoDetailActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/19667028",
          "exampleUrls": "https://e.gkd.li/8cac3233-7ead-4f5e-9126-51a195788276"
        },
        {
          "matches": "@RelativeLayout[clickable=true][childCount=2] < [desc=\"float_attent_banner_float_view_id\"]",
          "activityIds": ".ona.activity.origin.OriginIconHomeActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/21139028",
          "exampleUrls": "https://e.gkd.li/ad4ea4f1-22e7-4e9b-b194-8cdddda5c069"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] + [text=\"免费看\"]",
          "actionMaximum": 1,
          "activityIds": ".ona.activity.SplashHomeActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/17542913",
          "exampleUrls": "https://e.gkd.li/5f6447c1-39f6-4711-a907-fdf36f502ec6",
          "key": 3
        }
      ]
    },
    {
      "name": "其他-视频播放时的评价悬浮窗",
      "desc": "点击关闭",
      "key": 8,
      "rules": [
        {
          "matches": "@View[clickable=true] + RecyclerView[childCount=5] > ViewGroup[childCount=2] > TextView[text=\"不推荐\"][visibleToUser=true]",
          "actionDelay": 1000,
          "activityIds": ".ona.activity.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20271517",
          "exampleUrls": "https://e.gkd.li/b10125fa-5b1f-4a64-b258-392c57f4a1d8",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 0,
          "name": "首页顶部卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700299",
            "https://i.gkd.li/i/12700302",
            "https://i.gkd.li/i/13685929"
          ]
        },
        {
          "matches": "[text=\"关闭广告\"][clickable=true]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 1,
          "name": "首页顶部背景广告",
          "snapshotUrls": "https://i.gkd.li/i/12700518"
        },
        {
          "matches": "ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "key": 2,
          "name": "个人中心页卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700175",
            "https://i.gkd.li/i/13759380"
          ]
        },
        {
          "matches": "RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 3,
          "name": "个人中心页顶部背景广告",
          "snapshotUrls": "https://i.gkd.li/i/12777344"
        },
        {
          "matches": "RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc=\"the ad tag\"]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity"
          ],
          "key": 4,
          "name": "点击右上角[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12737313",
            "https://i.gkd.li/i/13685842"
          ]
        },
        {
          "matches": "ImageView[childCount=0] <<2 RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView",
          "key": 5,
          "name": "点击右下角关闭",
          "snapshotUrls": "https://i.gkd.li/i/13426421"
        },
        {
          "matches": "[id=\"com.tencent.qqlive:id/feed_icon\"][clickable=true]",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/14318802",
          "exampleUrls": "https://m.gkd.li/57941037/42013a93-fb12-4747-92e0-95f5028eb8e5"
        },
        {
          "matches": "[id=\"com.tencent.qqlive:id/ad_feed_back_dislike\"][clickable=true]",
          "preKeys": 6,
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/14318811",
          "exampleUrls": "https://m.gkd.li/57941037/8746fdc8-828e-42bb-9160-8e67b7af2dc7"
        },
        {
          "matches": "@FrameLayout[clickable=true] >3 [text=\"不感兴趣\"]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 8,
          "name": "广告反馈卡片-点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/13695084"
        },
        {
          "matches": "[text=\"关闭这条广告的原因\"] +(2) RecyclerView > [text=\"不感兴趣\"]",
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "name": "广告反馈卡片-选择原因",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700303",
            "https://i.gkd.li/i/12829866",
            "https://i.gkd.li/i/13685871",
            "https://i.gkd.li/i/13703219"
          ]
        },
        {
          "matches": "[text=\"关闭这条广告的原因\"] + [text=\"确认\"][clickable=true]",
          "preKeys": [
            9
          ],
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "fastQuery": true,
          "key": 10,
          "name": "广告反馈卡片-确认原因",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700210",
            "https://i.gkd.li/i/13685877",
            "https://i.gkd.li/i/13703298"
          ]
        }
      ]
    },
    {
      "name": "未分类-视频播放时的广告",
      "desc": "自动点击 跳过广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "@[text$=\"跳过广告\"][clickable=true] < LinearLayout > [text=\"VIP可关闭该广告\"]",
          "fastQuery": true,
          "key": 0,
          "name": "全屏广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700407",
            "https://i.gkd.li/i/12700433"
          ]
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout > RelativeLayout > View[id!=null][clickable=true]",
          "key": 1,
          "name": "左下角悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13043079"
        },
        {
          "matches": "@[text$=\"关闭广告\"][clickable=true]",
          "fastQuery": true,
          "key": 2,
          "name": "全屏广告2",
          "snapshotUrls": "https://i.gkd.li/i/13526547"
        },
        {
          "matches": "FrameLayout[childCount=4] > ImageView + FrameLayout + FrameLayout + ImageView[clickable=true]",
          "key": 3,
          "name": "居中广告",
          "snapshotUrls": "https://i.gkd.li/i/13695067"
        }
      ]
    },
    {
      "name": "全屏广告-首页-广告弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] < ViewGroup[childCount=5] < [id=\"android:id/content\"]",
          "activityIds": "com.tencent.qqlive.redpacket.rain.OpenRedPacketActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13842643",
          "exampleUrls": "https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d"
        },
        {
          "matches": "@RelativeLayout[clickable=true] + * >3 [text=\"立即预约\"]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14567294",
          "exampleUrls": "https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334"
        },
        {
          "matches": "@ImageView[clickable=true] < ViewGroup[childCount=5] < [id=\"android:id/content\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "resetMatch": "app",
      "key": 12,
      "rules": [
        {
          "matches": "LinearLayout > @[text=\"以后再说\"] + [text=\"好的\"]",
          "actionMaximum": 1,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12700139"
        },
        {
          "matches": "@ImageView + * > [text^=\"开启通知\"]",
          "actionMaximumKey": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13670465"
        }
      ]
    },
    {
      "name": "评价提示-视频播放界面的评价悬浮窗",
      "desc": "点击关闭",
      "key": 13,
      "rules": [
        {
          "matches": "@View[clickable=true] + RecyclerView[childCount=5] > ViewGroup[childCount=2] > TextView[text=\"不推荐\"][visibleToUser=true]",
          "actionDelay": 1000,
          "activityIds": ".ona.activity.VideoDetailActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20271517",
          "exampleUrls": "https://e.gkd.li/b10125fa-5b1f-4a64-b258-392c57f4a1d8"
        },
        {
          "matches": "@View[clickable=true][width<80 && height<80] + [text^=\"我认为\"]",
          "activityIds": ".kmm.VideoDetailKmmActivityBk",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/26016085"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "TextView[text*=\"青少年模式\"] +n TextView[text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 0,
          "name": "首页顶部卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700299",
            "https://i.gkd.li/import/12700302",
            "https://i.gkd.li/import/13685929"
          ]
        },
        {
          "matches": "[text=\"关闭广告\"][clickable=true]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 1,
          "name": "首页顶部背景广告",
          "snapshotUrls": "https://i.gkd.li/import/12700518"
        },
        {
          "matches": "ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "key": 2,
          "name": "个人中心页卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700175",
            "https://i.gkd.li/import/13759380"
          ]
        },
        {
          "matches": "RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 3,
          "name": "个人中心页顶部背景广告",
          "snapshotUrls": "https://i.gkd.li/import/12777344"
        },
        {
          "matches": "RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc=\"the ad tag\"]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity"
          ],
          "key": 4,
          "name": "点击右上角[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12737313",
            "https://i.gkd.li/import/13685842"
          ]
        },
        {
          "matches": "ImageView[childCount=0] <<2 RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView",
          "key": 5,
          "name": "点击右下角关闭",
          "snapshotUrls": "https://i.gkd.li/import/13426421"
        },
        {
          "matches": "LinearLayout > [text=\"不感兴趣\"]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 6,
          "name": "广告反馈卡片-点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/import/13695084"
        },
        {
          "matches": "[text=\"关闭这条广告的原因\"] +(2) RecyclerView > [text=\"不感兴趣\"]",
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "fastQuery": true,
          "key": 7,
          "name": "广告反馈卡片-选择原因",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700303",
            "https://i.gkd.li/import/12829866",
            "https://i.gkd.li/import/13685871",
            "https://i.gkd.li/import/13703219"
          ]
        },
        {
          "matches": "[text=\"关闭这条广告的原因\"] + [text=\"确认\"][clickable=true]",
          "preKeys": [
            7
          ],
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "fastQuery": true,
          "key": 8,
          "name": "广告反馈卡片-确认原因",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700210",
            "https://i.gkd.li/import/13685877",
            "https://i.gkd.li/import/13703298"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "resetMatch": "app",
      "key": 16,
      "rules": [
        {
          "matches": "LinearLayout > @[text=\"以后再说\"] + [text=\"好的\"]",
          "actionMaximum": 1,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12700139"
        },
        {
          "matches": "@ImageView + * > [text^=\"开启通知\"]",
          "actionMaximumKey": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13670465"
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] < ViewGroup[childCount=5] < [id=\"android:id/content\"]",
          "activityIds": "com.tencent.qqlive.redpacket.rain.OpenRedPacketActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13842643",
          "exampleUrls": "https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d"
        },
        {
          "matches": "@RelativeLayout[clickable=true] + * >3 [text=\"立即预约\"]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14567294",
          "exampleUrls": "https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text=\"立即免费领取\"]",
          "activityIds": ".ona.activity.SplashHomeActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/17088095",
          "exampleUrls": "https://e.gkd.li/8b128ebc-ce9c-4345-8094-769f9afa8cd6"
        },
        {
          "matches": "[text=\"暂不需要，稍后领取\"][visibleToUser=true]",
          "activityIds": ".ona.activity.SplashHomeActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17542869",
          "exampleUrls": "https://e.gkd.li/3256ed8e-752c-426d-9d64-26c9fdea9b09"
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "TextView[text*=\"青少年模式\"] +n TextView[text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 19,
      "rules": [
        {
          "matches": "[text^=\"有新版本\"] + FrameLayout + LinearLayout + [text=\"暂不升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 0,
          "name": "首页顶部卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700299",
            "https://i.gkd.li/import/12700302",
            "https://i.gkd.li/import/13685929"
          ]
        },
        {
          "matches": "[text=\"关闭广告\"][clickable=true]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 1,
          "name": "首页顶部背景广告",
          "snapshotUrls": "https://i.gkd.li/import/12700518"
        },
        {
          "matches": "ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "key": 2,
          "name": "个人中心页卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700175",
            "https://i.gkd.li/import/13759380"
          ]
        },
        {
          "matches": "RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 3,
          "name": "个人中心页顶部背景广告",
          "snapshotUrls": "https://i.gkd.li/import/12777344"
        },
        {
          "matches": "RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc=\"the ad tag\"]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity"
          ],
          "key": 4,
          "name": "点击右上角[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12737313",
            "https://i.gkd.li/import/13685842"
          ]
        },
        {
          "matches": "ImageView[childCount=0] <<2 RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView",
          "key": 5,
          "name": "点击右下角关闭",
          "snapshotUrls": "https://i.gkd.li/import/13426421"
        },
        {
          "matches": "LinearLayout > [text=\"不感兴趣\"]",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "key": 6,
          "name": "广告反馈卡片-点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/import/13695084"
        },
        {
          "matches": "[text=\"关闭这条广告的原因\"] +(2) RecyclerView > [text=\"不感兴趣\"]",
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "quickFind": true,
          "key": 7,
          "name": "广告反馈卡片-选择原因",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700303",
            "https://i.gkd.li/import/12829866",
            "https://i.gkd.li/import/13685871",
            "https://i.gkd.li/import/13703219"
          ]
        },
        {
          "matches": "[text=\"关闭这条广告的原因\"] + [text=\"确认\"][clickable=true]",
          "preKeys": [
            7
          ],
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "quickFind": true,
          "key": 8,
          "name": "广告反馈卡片-确认原因",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700210",
            "https://i.gkd.li/import/13685877",
            "https://i.gkd.li/import/13703298"
          ]
        }
      ]
    },
    {
      "name": "视频播放时的广告",
      "desc": "自动点击 跳过广告",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "@[text$=\"跳过广告\"][clickable=true] < LinearLayout > [text=\"VIP可关闭该广告\"]",
          "quickFind": true,
          "key": 0,
          "name": "全屏广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700407",
            "https://i.gkd.li/import/12700433"
          ]
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout > RelativeLayout > View[id!=null][clickable=true]",
          "key": 1,
          "name": "左下角悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13043079"
        },
        {
          "matches": "@[text$=\"关闭广告\"][clickable=true]",
          "quickFind": true,
          "key": 2,
          "name": "全屏广告2",
          "snapshotUrls": "https://i.gkd.li/import/13526547"
        },
        {
          "matches": "FrameLayout[childCount=4] > ImageView + FrameLayout + FrameLayout + ImageView[clickable=true]",
          "key": 3,
          "name": "居中广告",
          "snapshotUrls": "https://i.gkd.li/import/13695067"
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "resetMatch": "app",
      "key": 22,
      "rules": [
        {
          "matches": "LinearLayout > @[text=\"以后再说\"] + [text=\"好的\"]",
          "actionMaximum": 1,
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12700139"
        },
        {
          "matches": "@ImageView + * > [text^=\"开启通知\"]",
          "actionMaximumKey": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13670465"
        }
      ]
    }
  ]
});
