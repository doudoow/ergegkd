// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "汽水音乐",
  "id": "com.luna.music",
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
          "snapshotUrls": "https://i.gkd.li/i/14232395"
        },
        {
          "matches": "[text^=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/15087528",
            "https://i.gkd.li/i/15148298"
          ]
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14232395"
        },
        {
          "matches": "[text^=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/15087528",
            "https://i.gkd.li/i/15148298"
          ]
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"稍后再说\"] + [text=\"立即升级\"]",
          "activityIds": [
            "com.luna.biz.ad.AdActivity",
            "com.luna.biz.main.main.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14790279",
            "https://i.gkd.li/i/21427972"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-VIP弹窗",
      "desc": "直接关闭所有底部半屏弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "FlattenUIText[text=\"开会员听整月\" || text=\"购买汽水会员\" || text*=\"免费听\"][visibleToUser=true]",
          "excludeMatches": "FlattenUIText[text=\"立得全天畅听\" || text=\"立即解锁 今日畅听\"][visibleToUser=true]",
          "action": "back",
          "key": 0,
          "name": "底部半屏弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/13533795",
            "https://i.gkd.li/i/13660652",
            "https://i.gkd.li/i/13533797",
            "https://i.gkd.li/i/14767233",
            "https://i.gkd.li/i/16280954",
            "https://i.gkd.li/i/16342691",
            "https://i.gkd.li/i/17580823",
            "https://i.gkd.li/i/18183749"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13613296",
            "https://i.gkd.li/i/14237527",
            "https://i.gkd.li/i/18242457"
          ],
          "exampleUrls": "https://e.gkd.li/43099439-a0ab-4da0-a686-5c960df92607"
        },
        {
          "matches": "@LynxFlattenUI[clickable=true] -2 FlattenUIText[text=\"立即抢购\"]",
          "key": 1,
          "name": "全屏弹窗",
          "snapshotUrls": "https://i.gkd.li/i/16278152"
        },
        {
          "matches": "FlattenUIText[text=\"看视频免费听\"]",
          "action": "back",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13533795",
            "https://i.gkd.li/i/13660652",
            "https://i.gkd.li/i/13533797",
            "https://i.gkd.li/i/13613296"
          ]
        },
        {
          "matches": "FlattenUIText[text=\"当前已享\"]",
          "action": "back",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14767233",
            "https://i.gkd.li/i/13613296"
          ]
        },
        {
          "anyMatches": [
            "@View[childCount=2][index=1] >2 [text$=\"天体验卡\" || text^=\"VIP\"][visibleToUser=true]",
            "@[text$=\"天体验卡\" || text^=\"VIP\" || desc$=\"天体验卡\" || desc^=\"VIP\"][visibleToUser=true] < [index=parent.childCount.minus(1)] <n * <2 [childCount=2] <<5 [id=\"android:id/content\"]"
          ],
          "action": "clickCenter",
          "position": {
            "left": "width * 0.90",
            "top": "width * 0.09"
          },
          "key": 4,
          "name": "0.01开通7天VIP",
          "snapshotUrls": [
            "https://i.gkd.li/i/26757915",
            "https://i.gkd.li/i/28302150"
          ],
          "exampleUrls": "https://e.gkd.li/4cefa02b-b83e-4f68-b861-d377ea427514"
        },
        {
          "matches": "[id=\"com.luna.music:id/design_bottom_sheet\"] [id=\"com.luna.music:id/bullet_container\"]",
          "action": "back",
          "snapshotUrls": [
            "https://i.gkd.li/import/13533795",
            "https://i.gkd.li/import/13533797",
            "https://i.gkd.li/import/13613296",
            "https://i.gkd.li/import/13613498",
            "https://i.gkd.li/import/13613850",
            "https://i.gkd.li/import/13660652"
          ],
          "key": 5
        },
        {
          "matches": "[id=\"com.luna.music:id/fl_pendant_container\"] > [id=\"com.luna.music:id/view_close\"]",
          "name": "右小角小悬浮窗",
          "snapshotUrls": "https://i.gkd.li/import/13674376",
          "key": 6
        }
      ]
    },
    {
      "name": "功能类-全自动看广告获取听歌时长",
      "key": 3,
      "rules": [
        {
          "matches": "@FlattenUIText[text=\"广告\"] + [text$=\"声音\"] + [text=\"反馈\"][visibleToUser=true]",
          "position": {
            "left": "width * 7.45",
            "top": "height * 0.5"
          },
          "actionDelay": 12000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24521423",
            "https://i.gkd.li/i/24521440"
          ]
        },
        {
          "matches": "[visibleToUser=true][text=\"奖励已领取\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24522627"
        },
        {
          "matches": "[text=\"领取奖励\" || text^=\"再看一个\" || text=\"继续观看\"][visibleToUser=true]",
          "actionDelay": 500,
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.ss.android.excitingvideo.ExcitingVideoActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/15140816",
            "https://i.gkd.li/i/24521416",
            "https://i.gkd.li/i/24521446",
            "https://i.gkd.li/i/24521516"
          ],
          "key": 2
        },
        {
          "matches": "@[clickable=true][width<120 && height<120] + LinearLayout > [text=\"当前无新视频\"][visibleToUser=true]",
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24522244"
        }
      ]
    },
    {
      "name": "功能类-关闭广告的声音",
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"开启声音\"][visibleToUser=true]",
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24522999",
          "excludeSnapshotUrls": "https://i.gkd.li/i/24521440",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示-评分弹窗",
      "desc": "使用返回关闭弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"为汽水音乐评分\"]",
          "action": "back",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14720841",
          "exampleUrls": "https://m.gkd.li/57941037/a7e53af0-8b84-4619-b369-69b949ab2ce4",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.luna.music:id/fl_pendant_container\"] > [id=\"com.luna.music:id/view_close\"]",
          "activityIds": "com.luna.biz.main.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13674376",
          "exampleUrls": "https://m.gkd.li/57941037/8a427d5f-680b-4562-9cf3-90b1db82df0f",
          "key": 0
        },
        {
          "matches": "[vid=\"fl_pendant_container\"] > [vid=\"view_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13674376",
          "exampleUrls": "https://m.gkd.li/57941037/8a427d5f-680b-4562-9cf3-90b1db82df0f"
        },
        {
          "matches": "@View[clickable=true][width<126 && height<60] < [childCount=3] <n [childCount>=4] < FrameLayout[childCount>=3] <2 [childCount=2] <2 ViewPager <<3 [vid=\"navigation_container_under_bottom_bar\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/28298866",
            "https://i.gkd.li/i/28436303"
          ],
          "exampleUrls": "https://e.gkd.li/42a3884a-6888-4d5b-aa61-7ff5159a5228"
        }
      ]
    },
    {
      "name": "其他-关闭[更多直播]推荐",
      "desc": "直播间出现[更多直播]时点击右上角关闭",
      "key": 7,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] <n RelativeLayout + FrameLayout >4 [text=\"更多直播\"][visibleToUser=true]",
          "activityIds": "com.luna.biz.live.plugin.LunaDefaultLivePlayerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22922565",
          "exampleUrls": "https://e.gkd.li/148466b5-9769-4b79-b648-f2cf7719e3e7",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-看广告视频拿VIP",
      "desc": "30s广告后点击\"跳过\"",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "WebView > WebView > View TextView[text=\"| 跳过\"]",
          "actionDelay": 30000,
          "key": 0,
          "name": "等待 30s 点击\"跳过\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/13611006",
            "https://i.gkd.li/i/13613085"
          ]
        },
        {
          "matches": "[text=\"坚持退出\"]",
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "key": 1,
          "name": "点击\"坚持退出\"",
          "snapshotUrls": "https://i.gkd.li/i/13613184"
        }
      ]
    },
    {
      "name": "功能类-看广告获取听歌时长",
      "desc": "点击领取成功-点击坚持退出",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@[text*=\"领取成功\"][clickable=true] - [text=\"反馈\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14767236",
            "https://i.gkd.li/i/14391770",
            "https://i.gkd.li/i/15033124"
          ]
        },
        {
          "matches": "[text=\"奖励已领取\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15140802"
        },
        {
          "matches": "[text=\"坚持退出\"]",
          "preKeys": [
            0,
            1
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14767235",
            "https://i.gkd.li/i/15033126",
            "https://i.gkd.li/i/15140816"
          ]
        }
      ]
    },
    {
      "name": "功能类-看视频免费听弹窗",
      "desc": "点击【立得全天畅听】",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"立得全天畅听\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-全自动看广告领VIP",
      "desc": "⚠️二选一,广告一直看下去直到手动干预退出,适合需要领多天vip的用户,与单日规则互斥",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "anyMatches": [
            "[vid=\"ui\"] >3 @[clickable=true] < ViewGroup +3 View > [text=\"今日畅听\"] + [text^=\"第\" || text$=\"个\"]",
            "@[childCount=0][left!=0] < ViewGroup[childCount=1] <n FrameLayout[childCount=5] <<6 FrameLayout <<4 [id=\"android:id/content\"]"
          ],
          "actionMaximum": 1,
          "activityIds": "com.luna.biz.main.main.MainActivity",
          "priorityTime": 5000,
          "resetMatch": "app",
          "key": 0,
          "name": "①开屏自动看视频",
          "snapshotUrls": [
            "https://i.gkd.li/i/26758188",
            "https://i.gkd.li/i/28299711"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/28907374"
          ],
          "exampleUrls": [
            "https://e.gkd.li/194773d6-a9c0-48c4-84bf-e1a57449434b",
            "https://e.gkd.li/9cd0c931-5ae8-4739-8a1a-481d2d5731f4"
          ]
        },
        {
          "matches": "@UIView[clickable=true][width>=prev.width] +(4,5) [text*=\"解锁\"][text$=\"天畅听\"]",
          "activityIds": "com.luna.biz.main.main.MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/30630741",
            "https://i.gkd.li/i/30631201"
          ]
        },
        {
          "matches": "UIView[text=\"领取成功，关闭，按钮\"][clickable=true]",
          "key": 2,
          "name": "②领取成功-点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/30266434"
        },
        {
          "matches": "@TextView[clickable=true] - [text=\"领取成功\"][visibleToUser=true]",
          "activityIds": "com.luna.biz.ad.adns.luna.LunaRewardActivity",
          "key": 3,
          "name": "②领取成功-点击x掉",
          "snapshotUrls": "https://i.gkd.li/i/28300641"
        },
        {
          "anyMatches": [
            "@ImageView[width<56 && height<56][visibleToUser=true] < [childCount=1] <n [childCount>6] <<(6,7) [id=\"android:id/content\"]",
            "@[desc=\"领取成功，关闭，按钮\"] <<3 [index=parent.childCount.minus(1)] <n ViewGroup < ViewGroup <3 FrameLayout <<5 [id=\"android:id/content\"]"
          ],
          "actionDelay": 1200,
          "actionCd": 8000,
          "matchRoot": true,
          "key": 4,
          "name": "②领取成功-x掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/27359402",
            "https://i.gkd.li/i/27363266",
            "https://i.gkd.li/i/28018493"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/27272574"
        },
        {
          "matches": "ImageView[width<76] < @[clickable=true] < LinearLayout <2 [childCount=2] >2 TextView[text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/30631357",
          "excludeSnapshotUrls": "https://i.gkd.li/i/30631469"
        },
        {
          "matches": "@[text*=\"跳过\"] - [visibleToUser=true][text=\"奖励已领取\"]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 6,
          "name": "②点击[跳过]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24522627",
            "https://i.gkd.li/i/30630678"
          ]
        },
        {
          "matches": "FlattenUIText[text=\"广告\"] + [text$=\"声音\"] + [text=\"反馈\"][visibleToUser=true]",
          "position": {
            "left": "width * 3.28",
            "top": "width * 0.2"
          },
          "actionDelay": 8000,
          "key": 7,
          "name": "③每8秒点击1次[x]掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/24521440",
            "https://i.gkd.li/i/26401083",
            "https://i.gkd.li/i/24521423",
            "https://i.gkd.li/i/26401058",
            "https://i.gkd.li/i/26401097",
            "https://i.gkd.li/i/30266460"
          ],
          "exampleUrls": "https://e.gkd.li/87c7201a-f413-4d82-9198-2dc9455c4f23"
        },
        {
          "matches": "[text=\"领取奖励\" || text^=\"再看一个\" || text=\"继续观看\"][visibleToUser=true]",
          "actionDelay": 100,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.ss.android.excitingvideo.ExcitingVideoActivity"
          ],
          "key": 8,
          "name": "④弹窗-选择[继续观看]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15140816",
            "https://i.gkd.li/i/24521446",
            "https://i.gkd.li/i/24521416",
            "https://i.gkd.li/i/24521516"
          ],
          "exampleUrls": "https://e.gkd.li/3b2a0948-3b77-419b-8acf-2166e1cd445c"
        },
        {
          "matches": "[visibleToUser=true][desc=\"领取奖励\" || desc^=\"再看一个\" || desc=\"继续观看\"]",
          "key": 9,
          "name": "④弹窗2-选择[继续观看]",
          "snapshotUrls": "https://i.gkd.li/i/28021222"
        },
        {
          "matches": "@[childCount=2] + ImageView[index=parent.childCount.minus(1)] <n [childCount=5] <<5 [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.50",
            "top": "width * 0.85"
          },
          "actionMaximum": 13,
          "preKeys": [
            4
          ],
          "key": 10,
          "name": "④弹窗-坐标点击[领取奖励]",
          "snapshotUrls": "https://i.gkd.li/i/27359717"
        },
        {
          "matches": "@[childCount=2] + ImageView[index=parent.childCount.minus(1)] <n [childCount=5] <<5 [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.50",
            "top": "width * 1.00"
          },
          "preKeys": [
            4
          ],
          "order": 1,
          "key": 11,
          "name": "④弹窗-坐标点击[退出]",
          "snapshotUrls": "https://i.gkd.li/i/27359717"
        },
        {
          "matches": "@ImageView[visibleToUser=true][width>500][height<400][top>getPrev(3).height.div(3)][bottom<getPrev(3).height.div(3).times(2)] - ScrollView <<(10-n) [childCount=1] <2 [childCount=3] <<5 [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.5000",
            "top": "width * 0.6117"
          },
          "preKeys": [
            4
          ],
          "key": 12,
          "name": "④弹窗-坐标点击[领取奖励]2",
          "snapshotUrls": "https://i.gkd.li/i/31580853"
        },
        {
          "matches": "ViewGroup[index=parent.childCount.minus(1)][width<60 && height<60][text=null][id=null][desc=null][visibleToUser=true][childCount=0]",
          "excludeMatches": "[desc$=\"日免费听\" || desc=\"领取奖励\" || desc^=\"再看一个\" || desc=\"继续观看\"][visibleToUser=true]",
          "key": 13,
          "name": "⑤视频中的弹窗-x掉",
          "snapshotUrls": "https://i.gkd.li/i/28302996",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28021222",
          "exampleUrls": "https://e.gkd.li/e55793b3-e443-4cd1-80b5-aaa6cd7f88aa"
        },
        {
          "matches": "@[clickable=true][width<120 && height<120] + LinearLayout > [text=\"当前无新视频\"][visibleToUser=true]",
          "key": 14,
          "name": "⑤当前无新视频-退出",
          "snapshotUrls": "https://i.gkd.li/i/24522244"
        }
      ]
    },
    {
      "name": "功能类-看广告自动[静音]",
      "desc": "点击1次, activity刷新后会重置",
      "actionDelay": 300,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"开启声音\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24522999",
          "excludeSnapshotUrls": "https://i.gkd.li/i/24521440"
        },
        {
          "matches": "@ImageView[visibleToUser=true][width<57 && height<78] -2 [text=\"广告\"]",
          "actionMaximum": 1,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/28300641"
        },
        {
          "matches": "@ImageView[width<57 && height<78][visibleToUser=true] - ScrollView <n [childCount>6] <<(6,7) [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "actionMaximumKey": 1,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/27365536",
          "exampleUrls": "https://e.gkd.li/7d86c22c-bbf3-419e-bd6f-eecdaf357872"
        },
        {
          "matches": "@Image[width<90 && height<90][visibleToUser=true][parent.parent.childCount>2][bottom<prev.height.div(10)] <<n [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/30631469",
            "https://i.gkd.li/i/30632784"
          ]
        },
        {
          "matches": "@Image[width<90 && height<90][visibleToUser=true][bottom<prev.height.div(8)] <<n [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/24522627"
        },
        {
          "matches": "@ImageView[width>20 && width<93 && height<0][right<prev.width.div(3)][bottom<prev.height.div(10)] <<n [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.5",
            "top": "width * 0.8889"
          },
          "actionMaximum": 1,
          "actionMaximumKey": 1,
          "key": 5,
          "name": "坐标点击[静音]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28018493",
            "https://i.gkd.li/i/28557156"
          ]
        }
      ]
    },
    {
      "name": "功能类-全自动看广告领VIP_单日",
      "desc": "⚠️二选一,领到今天vip收手退出,适合只想领一天vip的用户,与多日规则互斥",
      "key": 13,
      "rules": [
        {
          "anyMatches": [
            "[vid=\"ui\"] >3 @[clickable=true] < ViewGroup +3 View > [text=\"今日畅听\"] + [text^=\"第\" || text$=\"个\"]",
            "@[childCount=0][left!=0] < ViewGroup[childCount=1] <n FrameLayout[childCount=5] <<6 FrameLayout <<4 [id=\"android:id/content\"]"
          ],
          "excludeMatches": "FrameLayout > ViewGroup[text=null][text.length=null][desc$=\"畅听\"]",
          "actionMaximum": 1,
          "activityIds": "com.luna.biz.main.main.MainActivity",
          "priorityTime": 5000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "name": "开屏自动看视频",
          "snapshotUrls": [
            "https://i.gkd.li/i/26758188",
            "https://i.gkd.li/i/28299711"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/28378061",
            "https://i.gkd.li/i/28907374"
          ],
          "exampleUrls": [
            "https://e.gkd.li/194773d6-a9c0-48c4-84bf-e1a57449434b",
            "https://e.gkd.li/9cd0c931-5ae8-4739-8a1a-481d2d5731f4"
          ]
        },
        {
          "matches": "FlattenUIText[text=\"广告\"] + [text$=\"声音\"] + [text=\"反馈\"][visibleToUser=true]",
          "position": {
            "left": "width * 3.28",
            "top": "width * 0.2"
          },
          "actionDelay": 8000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "key": 1,
          "name": "①x掉-坐标轮询点击",
          "snapshotUrls": [
            "https://i.gkd.li/i/24521440",
            "https://i.gkd.li/i/26401083",
            "https://i.gkd.li/i/24521423",
            "https://i.gkd.li/i/26401058",
            "https://i.gkd.li/i/26401097"
          ],
          "exampleUrls": "https://e.gkd.li/87c7201a-f413-4d82-9198-2dc9455c4f23"
        },
        {
          "matches": "[visibleToUser=true][text=\"奖励已领取\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
          "key": 2,
          "name": "①跳过",
          "snapshotUrls": "https://i.gkd.li/i/24522627"
        },
        {
          "matches": "[text=\"领取奖励\" || text^=\"再看一个\" || text=\"继续观看\"][visibleToUser=true]",
          "excludeMatches": "[text$=\"提前得\"]",
          "actionDelay": 500,
          "preKeys": [
            1,
            2
          ],
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.ss.android.excitingvideo.ExcitingVideoActivity"
          ],
          "fastQuery": true,
          "name": "②没结束?继续轮询",
          "snapshotUrls": [
            "https://i.gkd.li/i/15140816",
            "https://i.gkd.li/i/24521416",
            "https://i.gkd.li/i/24521446",
            "https://i.gkd.li/i/24521516"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24521416",
          "exampleUrls": "https://e.gkd.li/3b2a0948-3b77-419b-8acf-2166e1cd445c",
          "key": 3
        },
        {
          "matches": "[text$=\"提前得\"] +n [text=\"坚持退出\"][visibleToUser=true]",
          "actionDelay": 500,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.ss.android.excitingvideo.ExcitingVideoActivity"
          ],
          "fastQuery": true,
          "key": 4,
          "name": "③今日结束退出",
          "snapshotUrls": "https://i.gkd.li/i/24521416",
          "exampleUrls": "https://e.gkd.li/8cc22cd9-f48e-4aaa-8c5c-a04a752e6df6"
        },
        {
          "anyMatches": [
            "@ImageView[width<56 && height<56][visibleToUser=true] < [childCount=1] <n [childCount>6] <<(6,7) [id=\"android:id/content\"]",
            "@[desc=\"领取成功，关闭，按钮\"] <<3 [index=parent.childCount.minus(1)] <n ViewGroup < ViewGroup <3 FrameLayout <<5 [id=\"android:id/content\"]",
            "@TextView[clickable=true] - [text=\"领取成功\"][visibleToUser=true]"
          ],
          "actionDelay": 1200,
          "actionCd": 8000,
          "activityIds": [
            "com.ss.android.excitingvideo.ExcitingVideoActivity",
            "com.luna.biz.ad.adns.luna.LunaRewardActivity"
          ],
          "matchRoot": true,
          "fastQuery": true,
          "key": 5,
          "name": "①x掉-领取成功_2",
          "snapshotUrls": [
            "https://i.gkd.li/i/27359402",
            "https://i.gkd.li/i/27363266",
            "https://i.gkd.li/i/28018493",
            "https://i.gkd.li/i/28300641"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/27272574"
        },
        {
          "matches": "[desc=\"领取奖励\" || desc^=\"再看一个\" || desc=\"继续观看\"][visibleToUser=true]",
          "excludeMatches": [
            "[desc^=\"第\" && desc$=\"日免费听\"][visibleToUser=true]",
            "[desc=\"明日免费听\" || desc=\"后日免费听\"][visibleToUser=true]"
          ],
          "preKeys": [
            5
          ],
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "key": 6,
          "name": "②领取奖励_2",
          "snapshotUrls": "https://i.gkd.li/i/28377268",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/28301078",
            "https://i.gkd.li/i/28021222"
          ]
        },
        {
          "matches": [
            "[desc$=\"提前得\"][visibleToUser=true]",
            "[desc$=\"日免费听\"]",
            "[desc=\"坚持退出\"][visibleToUser=true]"
          ],
          "preKeys": [
            5,
            6
          ],
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "key": 7,
          "name": "③今日结束结束^_^_2",
          "snapshotUrls": "https://i.gkd.li/i/28020902"
        },
        {
          "matches": "@[childCount=2] + ImageView[index=parent.childCount.minus(1)] <n [childCount=5] <<5 [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.50",
            "top": "width * 0.85"
          },
          "actionMaximum": 1,
          "preKeys": [
            5
          ],
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "order": 0,
          "name": "②领取奖励",
          "snapshotUrls": "https://i.gkd.li/i/27359717",
          "key": 8
        },
        {
          "matches": "@[childCount=2] + ImageView[index=parent.childCount.minus(1)] <n [childCount=5] <<5 [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.50",
            "top": "width * 1.00"
          },
          "preKeys": [
            5
          ],
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "order": 1,
          "name": "③今日结束结束^_^",
          "snapshotUrls": "https://i.gkd.li/i/27359717",
          "key": 9
        },
        {
          "anyMatches": [
            "[text^=\"再看\" || desc^=\"再看\"][text$=\"个提前领\" || desc$=\"个提前领\"]",
            "@ViewGroup[childCount=0] <<2 [childCount=4] <<6 FrameLayout <<4 [id=\"android:id/content\"]"
          ],
          "action": "back",
          "preKeys": [
            4,
            7
          ],
          "activityIds": "com.luna.biz.main.main.MainActivity",
          "fastQuery": true,
          "name": "④再看视频?-返回操作",
          "snapshotUrls": [
            "https://i.gkd.li/i/26411131",
            "https://i.gkd.li/i/26905455",
            "https://i.gkd.li/i/28299305"
          ],
          "exampleUrls": "https://e.gkd.li/6fedf579-d3bc-46eb-b29f-679f469dcfea",
          "key": 10
        },
        {
          "matches": "ViewGroup[index=parent.childCount.minus(1)][width<60 && height<60][text=null][id=null][desc=null][visibleToUser=true][childCount=0]",
          "excludeMatches": [
            "[desc$=\"日免费听\"][visibleToUser=true]",
            "[desc=\"领取奖励\" || desc^=\"再看一个\" || desc=\"继续观看\"][visibleToUser=true]"
          ],
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "key": 11,
          "name": "视频内二级全屏Ad",
          "snapshotUrls": "https://i.gkd.li/i/28302996",
          "exampleUrls": "https://e.gkd.li/e55793b3-e443-4cd1-80b5-aaa6cd7f88aa"
        },
        {
          "matches": "@[clickable=true][width<120 && height<120] + LinearLayout > [text=\"当前无新视频\"][visibleToUser=true]",
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "fastQuery": true,
          "key": 12,
          "name": "无视频",
          "snapshotUrls": "https://i.gkd.li/i/24522244"
        }
      ]
    },
    {
      "name": "局部广告-抖音看过视频提示浮窗",
      "desc": "播放器右侧浮窗[xx视频已看: Int %]=> x掉",
      "key": 14,
      "rules": [
        {
          "matches": "[text^=\"抖音看过\"][visibleToUser=true] <2 LinearLayout + TextView[text=\"\"][clickable=true]",
          "activityIds": "com.luna.biz.main.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28436303",
          "exampleUrls": "https://e.gkd.li/43510c30-15f5-4368-a7e6-f7e57587b51d",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-误入直播后自动[退出]",
      "desc": "配合 全自动看广告领VIP 使用",
      "key": 15,
      "rules": [
        {
          "matches": "@Button[desc=\"关闭\"] -n [visibleToUser=true] >(4,5) [vid=\"name_layout\"][childCount=2]",
          "actionDelay": 500,
          "activityIds": "com.luna.biz.live.plugin.LunaDefaultLivePlayerActivity",
          "fastQuery": true,
          "name": "点击[右上角x]掉直播间",
          "snapshotUrls": [
            "https://i.gkd.li/i/30159254",
            "https://i.gkd.li/i/30266403"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-看广告视频拿VIP",
      "desc": "30s广告后点击【跳过】",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "WebView > WebView > View TextView[text=\"| 跳过\"]",
          "actionDelay": 30000,
          "key": 0,
          "name": "等待30s点击【跳过】",
          "snapshotUrls": [
            "https://i.gkd.li/import/13611006",
            "https://i.gkd.li/import/13613085"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_negtive\"][text=\"坚持退出\"]",
          "preKeys": 0,
          "fastQuery": true,
          "name": "点击【坚持退出】",
          "snapshotUrls": "https://i.gkd.li/import/13613184",
          "key": 1
        }
      ]
    },
    {
      "name": "VIP弹窗",
      "desc": "直接关闭所有底部半屏弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.luna.music:id/design_bottom_sheet\"] [id=\"com.luna.music:id/bullet_container\"]",
          "action": "back",
          "snapshotUrls": [
            "https://i.gkd.li/import/13533795",
            "https://i.gkd.li/import/13533797",
            "https://i.gkd.li/import/13613296",
            "https://i.gkd.li/import/13613498",
            "https://i.gkd.li/import/13613850",
            "https://i.gkd.li/import/13660652"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.luna.music:id/fl_pendant_container\"] > [id=\"com.luna.music:id/view_close\"]",
          "name": "右小角小悬浮窗",
          "snapshotUrls": "https://i.gkd.li/import/13674376",
          "key": 1
        }
      ]
    },
    {
      "name": "看广告视频拿VIP",
      "desc": "30s广告后点击【跳过】",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "WebView > WebView > View TextView[text=\"| 跳过\"]",
          "actionDelay": 30000,
          "key": 0,
          "name": "等待30s点击【跳过】",
          "snapshotUrls": [
            "https://i.gkd.li/import/13611006",
            "https://i.gkd.li/import/13613085"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_negtive\"][text=\"坚持退出\"]",
          "preKeys": 0,
          "quickFind": true,
          "name": "点击【坚持退出】",
          "snapshotUrls": "https://i.gkd.li/import/13613184",
          "key": 1
        }
      ]
    }
  ]
});
