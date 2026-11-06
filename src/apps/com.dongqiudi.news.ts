// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "懂球帝",
  "id": "com.dongqiudi.news",
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
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20218520",
          "exampleUrls": "https://e.gkd.li/74db13f0-d87d-41a3-bbbb-1b075d8ae7d6"
        },
        {
          "matches": "@View[clickable=true] - [text=\"互动广告\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20262129",
          "exampleUrls": "https://e.gkd.li/3b636c88-23de-4e2a-86fd-2846a0f0274b"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/20262130",
          "exampleUrls": "https://e.gkd.li/940ce4e2-da5f-4a43-b319-4131a22cb1e0"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"||text^=\"跳过\"&&id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12620568",
            "https://i.gkd.li/i/12620577",
            "https://i.gkd.li/i/12621997"
          ],
          "key": 3
        },
        {
          "matches": "[id=\"com.dongqiudi.news:id/ad_skip_time\"] + [id=\"com.dongqiudi.news:id/scale_iv\"]",
          "fastQuery": true,
          "name": "另一种倒计时广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12620583",
            "https://i.gkd.li/i/12621953"
          ],
          "key": 4
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/20218520",
            "https://i.gkd.li/i/29968669"
          ]
        },
        {
          "matches": "@View[clickable=true] - [text=\"互动广告\"][visibleToUser=true]",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/20262129"
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"]",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/20262130"
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
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text*=\"新版本\"] +3 TextView[text=\"下次提醒\"]",
          "activityIds": ".DownloadActivity",
          "snapshotUrls": "https://i.gkd.li/i/12620586",
          "key": 0
        },
        {
          "matches": "TextView[text*=\"新版本\"] +3 TextView[text=\"下次提醒\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-首页信息流广告",
      "desc": "点击卡片广告x关闭按钮-关闭反馈理由弹窗",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text=\"诱导点击\"][id=\"com.dongqiudi.news:id/text_item\"]",
          "preKeys": [
            3,
            4
          ],
          "name": "首页信息流广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/i/12620656",
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_label\"] +(n) ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12620654"
        },
        {
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_title\"] +(2) RelativeLayout > ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12620788"
        },
        {
          "matches": "[vid=\"feedback_close\" || vid=\"ads_download_close\"][visibleToUser=true]",
          "key": 3,
          "name": "①点击x掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/29957609",
            "https://i.gkd.li/i/29957589",
            "https://i.gkd.li/i/29958236",
            "https://i.gkd.li/i/29961281",
            "https://i.gkd.li/i/29965220"
          ]
        },
        {
          "matches": "@ImageView < [visibleToUser=true] - LinearLayout > [text^=\"立即\" || text^=\"了解\" || text*=\"查看\" || text*=\"下载\" || text*=\"领取\" || text$=\"应用\" || text$=\"详情\" || text$=\"小程序\"][text.length<6]",
          "activityIds": ".NewsDetailActivity",
          "key": 4,
          "name": "①x掉",
          "snapshotUrls": "https://i.gkd.li/i/29961284"
        },
        {
          "matches": "[text=\"诱导点击\" || text=\"不感兴趣\"][clickable=true]",
          "preKeys": [
            3,
            4
          ],
          "name": "②选一个反馈理由",
          "snapshotUrls": [
            "https://i.gkd.li/i/29958238",
            "https://i.gkd.li/i/29965222"
          ],
          "key": 5
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.dongqiudi.news:id/iv_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.dongqiudi.news.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13260467"
        },
        {
          "matches": "[text=\"反馈\"] +(1,2) View[childCount=1] > Image[childCount=0][text=\"\"][width<60 && height<60]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20403710",
          "exampleUrls": "https://e.gkd.li/87e47cae-fa83-4d25-879c-728a1519ee55"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13260467"
        }
      ]
    },
    {
      "name": "全屏广告-数据页弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13626900"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告磁力智投SDK",
          "snapshotUrls": "https://i.gkd.li/i/13627105"
        },
        {
          "matches": "View[text=\"反馈\"] -2 @View > Image",
          "key": 2,
          "name": "字节广告穿山甲SDK-1",
          "snapshotUrls": "https://i.gkd.li/i/13627106"
        },
        {
          "matches": "FrameLayout[desc^=\"webview-close\"] > View[clickable=true]",
          "key": 3,
          "name": "字节广告穿山甲SDK-2",
          "snapshotUrls": "https://i.gkd.li/i/12620588"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13626900",
          "key": 4
        },
        {
          "matches": "ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView",
          "name": "快手广告磁力智投SDK",
          "snapshotUrls": "https://i.gkd.li/import/13627105",
          "key": 5
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"notification_button_close\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19666282",
          "exampleUrls": "https://e.gkd.li/81cea4de-9288-4ec8-97ea-7c4a9b19fd08",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页信息流广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "TextView[text=\"诱导点击\"][id=\"com.dongqiudi.news:id/text_item\"]",
          "preKeys": [
            1,
            2
          ],
          "name": "首页信息流广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/i/12620656",
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_label\"] +(n) ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12620654"
        },
        {
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_title\"] +(2) RelativeLayout > ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12620788"
        }
      ]
    },
    {
      "name": "未分类-首页-广告弹窗",
      "desc": "点击底部【x】关闭",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.dongqiudi.news:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-数据页弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 8,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13626900",
          "key": 0
        },
        {
          "matches": "ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView",
          "name": "快手广告磁力智投SDK",
          "snapshotUrls": "https://i.gkd.li/i/13627105",
          "key": 1
        },
        {
          "matches": "View[text=\"反馈\"] -2 @View > Image",
          "name": "字节广告穿山甲SDK-1",
          "snapshotUrls": "https://i.gkd.li/i/13627106",
          "key": 2
        },
        {
          "matches": "FrameLayout[desc^=\"webview-close\"] > View[clickable=true]",
          "name": "字节广告穿山甲SDK-2",
          "snapshotUrls": "https://i.gkd.li/i/12620588",
          "key": 3
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] + [id=\"com.dongqiudi.news:id/tv_know\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页信息流广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "TextView[text=\"诱导点击\"][id=\"com.dongqiudi.news:id/text_item\"]",
          "preKeys": [
            1,
            2
          ],
          "name": "首页信息流广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/import/12620656",
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_label\"] +(n) ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12620654"
        },
        {
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_title\"] +(2) RelativeLayout > ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12620788"
        }
      ]
    },
    {
      "name": "全屏广告-首页-广告弹窗",
      "desc": "点击底部【x】关闭",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.dongqiudi.news:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] + [id=\"com.dongqiudi.news:id/tv_know\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 13,
      "rules": [
        {
          "matches": "TextView[text*=\"新版本\"] +3 TextView[text=\"下次提醒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页信息流广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "enable": false,
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "TextView[text=\"诱导点击\"][id=\"com.dongqiudi.news:id/text_item\"]",
          "preKeys": [
            1,
            2
          ],
          "name": "首页信息流广告-反馈理由",
          "snapshotUrls": "https://i.gkd.li/import/12620656",
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_label\"] +(n) ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12620654"
        },
        {
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_title\"] +(2) RelativeLayout > ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12620788"
        }
      ]
    },
    {
      "name": "首页-广告弹窗",
      "desc": "点击底部【x】关闭",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.dongqiudi.news:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "数据页弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 16,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13626900",
          "key": 0
        },
        {
          "matches": "ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView",
          "name": "快手广告磁力智投SDK",
          "snapshotUrls": "https://i.gkd.li/import/13627105",
          "key": 1
        },
        {
          "matches": "View[text=\"反馈\"] -2 @View > Image",
          "name": "字节广告穿山甲SDK-1",
          "snapshotUrls": "https://i.gkd.li/import/13627106",
          "key": 2
        },
        {
          "matches": "FrameLayout[desc^=\"webview-close\"] > View[clickable=true]",
          "name": "字节广告穿山甲SDK-2",
          "snapshotUrls": "https://i.gkd.li/import/12620588",
          "key": 3
        }
      ]
    }
  ]
});
