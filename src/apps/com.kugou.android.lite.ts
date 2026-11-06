// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "酷狗概念版",
  "id": "com.kugou.android.lite",
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
          "snapshotUrls": "https://i.gkd.li/i/21451911",
          "exampleUrls": "https://e.gkd.li/94c7fc27-891f-4206-b933-f26661041b99"
        },
        {
          "matches": "[desc*=\"跳过\"][desc.length<10][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/21750055",
          "exampleUrls": "https://e.gkd.li/7aa8bc5b-e14c-4cef-9eae-b89aac8ef459"
        }
      ]
    },
    {
      "name": "全屏广告-VIP弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"新人限时开通\"] +3 [text=\"放弃优惠\"]",
          "activityIds": "com.kugou.android.app.setting.YoungModeTipsActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14321698"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 ViewGroup[childCount=3] < [id=\"android:id/content\"]",
          "activityIds": [
            "com.kugou.android.app.setting.YoungModeTipsActivity",
            "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14321700",
            "https://i.gkd.li/i/25018524"
          ]
        },
        {
          "matches": [
            "[text*=\"已过期\"][visibleToUser=true]",
            "[text=\"狠心拒绝\"][visibleToUser=true]"
          ],
          "activityIds": "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/25020137"
        },
        {
          "matches": "WebView > [id=\"body\"] > [id=\"root\"] >2 View > Image[index=0][clickable=true][visibleToUser=true][width<70 && width<70]",
          "activityIds": "com.kugou.framework.musicfees.ui.feeintercept.FeeInterceptWebActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/25022292"
        },
        {
          "matches": "[id=\"android:id/content\"] > ViewGroup[childCount=3] > ImageView + ImageView + ImageView[clickable=true][visibleToUser=true]",
          "activityIds": "com.kugou.android.app.setting.YoungModeTipsActivity",
          "key": 4,
          "name": "组队抽奖弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14321700"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 ViewGroup[childCount=3] < [id=\"android:id/content\"]",
          "activityIds": "com.kugou.android.app.setting.YoungModeTipsActivity",
          "fastQuery": true,
          "key": 5,
          "name": "组队抽奖弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14321700"
        }
      ]
    },
    {
      "name": "分段广告-我的页面-右侧悬浮反馈图标",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[vid!=null][clickable=true][visibleToUser=true] +(2,3) ImageView[vid!=null]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14321713",
            "https://i.gkd.li/i/14321718"
          ]
        },
        {
          "matches": "[text=\"是否取消？\"] +4 * > [text=\"确认\"]",
          "preKeys": 0,
          "activityIds": "com.kugou.android.app.MediaActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14321724"
        },
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[vid!=null][clickable=true][visibleToUser=true] +(2,3) ImageView[vid!=null]",
          "excludeMatches": "[text=\"空间音效\" || text=\"蝰蛇\"][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14321713",
            "https://i.gkd.li/i/14321718"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/26030255"
        },
        {
          "matches": "[text=\"是否取消？\"] +4 * > [text=\"确认\"]",
          "preKeys": 0,
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14321724"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView - * > [text=\"立即升级\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "snapshotUrls": "https://i.gkd.li/i/14622566",
          "key": 0
        },
        {
          "matches": "@ImageView - * > [text=\"立即升级\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[text*=\"跳过\"] + [text*=\"广告\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16407631",
          "exampleUrls": "https://e.gkd.li/64dd159b-bff5-4dff-a4b9-d63f5b34acb7"
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true][width<160 && height<160] <2 ViewGroup[childCount=3] < FrameLayout < LinearLayout < LinearLayout <2 LinearLayout < FrameLayout < FrameLayout <2 FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23619626",
          "exampleUrls": "https://e.gkd.li/0776da1e-3ff6-4fba-a7e9-de8fa1fe5344"
        }
      ]
    },
    {
      "name": "功能类-播放页听歌领VIP",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"听歌领VIP\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16554695",
          "exampleUrls": "https://e.gkd.li/df927124-4e7a-43bd-8d42-3eb428eecf78"
        },
        {
          "matches": "@ImageView[clickable=true] - FrameLayout >2 [text=\"立即领取福利\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16594001",
          "exampleUrls": "https://e.gkd.li/51fbe6aa-d0da-4f08-aae0-2eed4e6c0ad1"
        },
        {
          "matches": "[text=\"签到领会员\" || text=\"听歌领VIP\"] < @LinearLayout[clickable=true] +(7,8) LinearLayout > [text=\"评论\"][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16554695",
            "https://i.gkd.li/i/26031429"
          ],
          "exampleUrls": [
            "https://e.gkd.li/df927124-4e7a-43bd-8d42-3eb428eecf78",
            "https://e.gkd.li/bda1a85c-0fab-48e6-bb3f-35fd8bd01464"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] - FrameLayout >2 [text=\"立即领取福利\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16594001",
          "exampleUrls": "https://e.gkd.li/51fbe6aa-d0da-4f08-aae0-2eed4e6c0ad1"
        },
        {
          "matches": "@Button[text^=\"点击浏览10秒广告\"] < * <4 View <2 * < * < * < WebView < WebView",
          "preKeys": [
            2
          ],
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/26031660",
          "exampleUrls": "https://e.gkd.li/3b87b4b5-c144-4125-9218-ee78ce2a6399"
        },
        {
          "matches": "[text=\"看1条广告领取明天\"][visibleToUser=true]",
          "action": "back",
          "preKeys": [
            4
          ],
          "snapshotUrls": "https://i.gkd.li/i/26031715",
          "exampleUrls": "https://e.gkd.li/59a14c6a-0e22-4a9e-9b9c-2f7eb462c69e",
          "key": 5
        },
        {
          "matches": "[text$=\"升级为概念版VIP\"]",
          "action": "back",
          "preKeys": [
            4
          ],
          "snapshotUrls": "https://i.gkd.li/i/26151202",
          "exampleUrls": "https://e.gkd.li/8cecdfc9-1603-4be6-b362-83f802ab3548",
          "key": 6
        }
      ]
    },
    {
      "name": "评价提示",
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0] - LinearLayout > [text*=\"求五星鼓励\"][visibleToUser=true]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25002911"
        }
      ]
    },
    {
      "name": "分段广告-评论区广告",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25020531"
        },
        {
          "matches": "[text=\"关闭这条广告\"][clickable=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/25020623",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@[text*=\"跳过\"] + [text*=\"广告\"][visibleToUser=true]",
          "activityIds": "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25021020"
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][parent.childCount<4][index=parent.childCount.minus(1)][width<60 && height<60] - [!(text=null)]",
          "activityIds": "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/25021318",
            "https://i.gkd.li/i/25021659"
          ]
        },
        {
          "matches": "@[text*=\"跳过\"] + [text*=\"广告\"][visibleToUser=true]",
          "key": 2,
          "name": "播放器背景",
          "snapshotUrls": "https://i.gkd.li/i/25021020",
          "exampleUrls": "https://e.gkd.li/4d41ba0c-d2b0-41cf-9153-b602d66a2570"
        },
        {
          "matches": "@ImageView[clickable=true][parent.childCount<4][index=parent.childCount.minus(1)] <3 LinearLayout +(6,7) LinearLayout > [text=\"评论\"][visibleToUser=true]",
          "key": 3,
          "name": "[左下角Ad]Toast",
          "snapshotUrls": "https://i.gkd.li/i/25021318",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25021659"
        },
        {
          "matches": "@[desc=\"关闭\"] - [text^=\"喜欢就设为铃声\"][visibleToUser=true]",
          "key": 4,
          "name": "[设为铃声]Toast",
          "snapshotUrls": "https://i.gkd.li/i/27210121"
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击[x掉/狠心拒绝/放弃优惠]",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "anyMatches": [
            "[text*=\"已过期\"] +n [text=\"放弃优惠\" || text=\"狠心拒绝\"]",
            "@[text=\"狠心拒绝\"] -n FrameLayout >3 [text*=\"已过期\"]"
          ],
          "key": 0,
          "name": "VIP已过期",
          "snapshotUrls": [
            "https://i.gkd.li/i/14321698",
            "https://i.gkd.li/i/25020137",
            "https://i.gkd.li/i/26031222",
            "https://i.gkd.li/i/25640086"
          ],
          "exampleUrls": "https://e.gkd.li/1a5e5107-8e05-4031-873c-d3feed467cd7"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 ViewGroup[childCount=3] < [id=\"android:id/content\"]",
          "key": 1,
          "name": "弹窗-点击x掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/14321700",
            "https://i.gkd.li/i/25018524",
            "https://i.gkd.li/i/27670397"
          ]
        },
        {
          "matches": "@[text*=\"跳过\"] + [text*=\"广告\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16407631",
          "exampleUrls": "https://e.gkd.li/64dd159b-bff5-4dff-a4b9-d63f5b34acb7"
        },
        {
          "matches": "@ImageView[clickable=true][width<170 && height<170] +n [text=\"领奖通知\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/27670451"
        },
        {
          "matches": "@ImageView[clickable=true][width<160 && height<160] <2 [childCount=3] < FrameLayout < LinearLayout < LinearLayout <2 LinearLayout < FrameLayout < FrameLayout <2 FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/23619626",
          "exampleUrls": "https://e.gkd.li/0776da1e-3ff6-4fba-a7e9-de8fa1fe5344"
        },
        {
          "matches": "WebView > [id=\"body\"] > [id=\"root\"] >(2,3) [name$=\"TextView\" || name$=\"Image\"][index=0][width<131 && height<131][visibleToUser=true]",
          "activityIds": "com.kugou.framework.musicfees.ui.feeintercept.FeeInterceptWebActivity",
          "fastQuery": false,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/25022292",
            "https://i.gkd.li/i/27398903"
          ]
        }
      ]
    }
  ]
});
