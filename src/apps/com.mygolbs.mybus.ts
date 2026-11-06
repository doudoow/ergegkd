// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "掌上公交",
  "id": "com.mygolbs.mybus",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] RelativeLayout[childCount=4] > TextView[text.length>0] + ImageView + ImageView[clickable=true][id=null]",
          "key": 0,
          "name": "点击底部中间x关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790521",
            "https://i.gkd.li/i/12790706",
            "https://i.gkd.li/i/12790841",
            "https://i.gkd.li/i/12790887"
          ]
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=\"\"]",
          "key": 1,
          "name": "点击右上/下角x关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790656",
            "https://i.gkd.li/i/12790903"
          ]
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=\"\"]",
          "key": 2,
          "name": "点击右上角x关闭图标-2",
          "snapshotUrls": "https://i.gkd.li/i/12790610"
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=\"\"]",
          "key": 3,
          "name": "点击右上角x关闭图标-3",
          "snapshotUrls": "https://i.gkd.li/i/12790941"
        },
        {
          "matches": "[text=\"广告\"] <3 View + @View[clickable=true] >2 [text=\"×\"][visibleToUser=true]",
          "key": 4,
          "name": "点击右下角x关闭按钮",
          "snapshotUrls": "https://i.gkd.li/i/12791122"
        },
        {
          "matches": "@LinearLayout[clickable=true][childCount<=2] > [text=\"不感兴趣\"]",
          "preKeys": [
            6,
            7,
            8,
            9,
            4
          ],
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790671",
            "https://i.gkd.li/i/12790551",
            "https://i.gkd.li/i/12790616",
            "https://i.gkd.li/i/12790707",
            "https://i.gkd.li/i/12790717"
          ],
          "key": 5
        },
        {
          "matches": "[vid=\"ad_frameLayout\"] RelativeLayout[childCount=4] > TextView[text.length>0] + ImageView + ImageView[clickable=true][id=null]",
          "key": 6,
          "name": "点击底部中间x关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790521",
            "https://i.gkd.li/i/12790706",
            "https://i.gkd.li/i/12790841",
            "https://i.gkd.li/i/12790887"
          ]
        },
        {
          "matches": "[vid=\"ad_frameLayout\"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=\"\"]",
          "key": 7,
          "name": "点击右上/下角x关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790656",
            "https://i.gkd.li/i/12790903"
          ]
        },
        {
          "matches": "[vid=\"ad_frameLayout\"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=\"\"]",
          "key": 8,
          "name": "点击右上角x关闭图标-2",
          "snapshotUrls": "https://i.gkd.li/i/12790610"
        },
        {
          "matches": "[vid=\"ad_frameLayout\"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=\"\"]",
          "key": 9,
          "name": "点击右上角x关闭图标-3",
          "snapshotUrls": "https://i.gkd.li/i/12790941"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity",
            "com.mygolbs.mybus.LoginActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12790762",
            "https://i.gkd.li/i/14587392"
          ]
        },
        {
          "matches": "ImageView[childCount=0] < LinearLayout < @LinearLayout[clickable=true] - * > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14546373",
          "exampleUrls": "https://m.gkd.li/57941037/ec768f05-5431-4684-af40-a7987dff2ec6"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - [text=\"国货大牌 新年必囤\"]",
          "activityIds": "com.qq.e.ads.ADActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14587397",
          "exampleUrls": "https://m.gkd.li/57941037/f7dc0b47-b37f-409a-aebe-4aaa844aa897"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.RTimeActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14219270",
            "https://i.gkd.li/i/14572506"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".mapsearch.poisearch.PoiSearchActivity",
            ".LoginActivity"
          ],
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12790762",
            "https://i.gkd.li/i/14587392"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".NewHomePageActivity",
            ".RTimeActivity"
          ],
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14219270",
            "https://i.gkd.li/i/14572506"
          ]
        }
      ]
    },
    {
      "name": "局部广告-顶栏小广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_close2\"]",
          "name": "点击右侧x关闭按钮",
          "snapshotUrls": "https://i.gkd.li/i/12790841",
          "key": 0
        },
        {
          "matches": "[vid=\"ad_close2\"]",
          "name": "点击右侧x关闭按钮",
          "snapshotUrls": "https://i.gkd.li/i/12790841",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击\"取消\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text$=\"请开启通知权限\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".defines.CustomDialog",
          "snapshotUrls": "https://i.gkd.li/i/12715980",
          "key": 0
        },
        {
          "matches": [
            "[id=\"com.mygolbs.mybus:id/message\"][text$=\"请开启通知权限\"]",
            "[id=\"com.mygolbs.mybus:id/view_neg\"] > [id=\"com.mygolbs.mybus:id/negativeButton\"][text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12715980",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-签到成功弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.mygolbs.mybus:id/iv_close\"] < RelativeLayout - LinearLayout >n [text=\"签到成功\"]",
          "activityIds": "com.mygolbs.mybus.guligold.SignSuccessActivity",
          "snapshotUrls": "https://i.gkd.li/i/12716035",
          "key": 0
        },
        {
          "matches": "@[id=\"com.mygolbs.mybus:id/iv_close\"] < RelativeLayout - LinearLayout >n [text=\"签到成功\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"iv_close\"] < RelativeLayout - LinearLayout >n [text=\"签到成功\"]",
          "activityIds": ".guligold.SignSuccessActivity",
          "snapshotUrls": "https://i.gkd.li/i/12716035",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "order": -10,
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 0
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "key": 1
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14546388",
          "exampleUrls": "https://m.gkd.li/57941037/8b0c3f96-ae36-4799-87c2-1ea37c3d2d4c"
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] RelativeLayout[childCount=4] > TextView[text.length>0] + ImageView + ImageView[clickable=true][id=null]",
          "name": "点击底部中间x关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790521",
            "https://i.gkd.li/i/12790706",
            "https://i.gkd.li/i/12790841",
            "https://i.gkd.li/i/12790887"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=\"\"]",
          "name": "点击右上/下角x关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790656",
            "https://i.gkd.li/i/12790903"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=\"\"]",
          "name": "点击右上角x关闭图标-2",
          "snapshotUrls": "https://i.gkd.li/i/12790610",
          "key": 2
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=\"\"]",
          "name": "点击右上角x关闭图标-3",
          "snapshotUrls": "https://i.gkd.li/i/12790941",
          "key": 3
        },
        {
          "matches": "[text=\"广告\"] <3 View + @View[clickable=true] >2 [text=\"×\"][visibleToUser=true]",
          "name": "点击右下角x关闭按钮",
          "snapshotUrls": "https://i.gkd.li/i/12791122",
          "key": 4
        },
        {
          "matches": "@LinearLayout[clickable=true][childCount<=2] > [text=\"不感兴趣\"]",
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790671",
            "https://i.gkd.li/i/12790551",
            "https://i.gkd.li/i/12790616",
            "https://i.gkd.li/i/12790707",
            "https://i.gkd.li/i/12790717"
          ],
          "key": 5
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ll_ad\"] [id=\"com.mygolbs.mybus:id/btn_cancel\"]",
          "name": "点击暂不领取",
          "snapshotUrls": "https://i.gkd.li/i/12791579",
          "key": 6
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout[childCount>4] > FrameLayout[index=1][visibleToUser=true]",
          "activityIds": [
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.LoginActivity"
          ],
          "key": 0,
          "name": "点击右上角 x 关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790762",
            "https://i.gkd.li/i/14219270",
            "https://i.gkd.li/i/14572506",
            "https://i.gkd.li/i/14587392"
          ]
        },
        {
          "matches": "ImageView[childCount=0] < LinearLayout < @LinearLayout[clickable=true] - * > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14546373",
          "exampleUrls": "https://m.gkd.li/57941037/ec768f05-5431-4684-af40-a7987dff2ec6"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - [text=\"国货大牌 新年必囤\"]",
          "activityIds": "com.qq.e.ads.ADActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14587397",
          "exampleUrls": "https://m.gkd.li/57941037/f7dc0b47-b37f-409a-aebe-4aaa844aa897"
        },
        {
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount=6][index=0] > FrameLayout[childCount=1][index=1] > ImageView[id=null]",
          "name": "点击右上角x关闭图标",
          "snapshotUrls": "https://i.gkd.li/import/12790762",
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "desc": "自动点击【取消】",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": [
            "[id=\"com.mygolbs.mybus:id/message\"][text$=\"请开启通知权限\"]",
            "[id=\"com.mygolbs.mybus:id/view_neg\"] > [id=\"com.mygolbs.mybus:id/negativeButton\"][text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/12715980",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-签到成功弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@[id=\"com.mygolbs.mybus:id/iv_close\"] < RelativeLayout - LinearLayout >n [text=\"签到成功\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告卡片",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] RelativeLayout[childCount=4] > TextView[text.length>0] + ImageView + ImageView[clickable=true][id=null]",
          "name": "点击底部中间x关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/import/12790521",
            "https://i.gkd.li/import/12790706",
            "https://i.gkd.li/import/12790841",
            "https://i.gkd.li/import/12790887"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=\"\"]",
          "name": "点击右上/下角x关闭图标",
          "snapshotUrls": [
            "https://i.gkd.li/import/12790656",
            "https://i.gkd.li/import/12790903"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=\"\"]",
          "name": "点击右上角x关闭图标-2",
          "snapshotUrls": "https://i.gkd.li/import/12790610",
          "key": 2
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=\"\"]",
          "name": "点击右上角x关闭图标-3",
          "snapshotUrls": "https://i.gkd.li/import/12790941",
          "key": 3
        },
        {
          "matches": "[text=\"广告\"] <3 View + @View[clickable=true] >2 [text=\"×\"][visibleToUser=true]",
          "name": "点击右下角x关闭按钮",
          "snapshotUrls": "https://i.gkd.li/import/12791122",
          "key": 4
        },
        {
          "matches": "@LinearLayout[clickable=true][childCount<=2] > [text=\"不感兴趣\"]",
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12790671",
            "https://i.gkd.li/import/12790551",
            "https://i.gkd.li/import/12790616",
            "https://i.gkd.li/import/12790707",
            "https://i.gkd.li/import/12790717"
          ],
          "key": 5
        },
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ll_ad\"] [id=\"com.mygolbs.mybus:id/btn_cancel\"]",
          "name": "点击暂不领取",
          "snapshotUrls": "https://i.gkd.li/import/12791579",
          "key": 6
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount=6][index=0] > FrameLayout[childCount=1][index=1] > ImageView[id=null]",
          "name": "点击右上角x关闭图标",
          "snapshotUrls": "https://i.gkd.li/import/12790762",
          "key": 0
        }
      ]
    },
    {
      "name": "顶栏小广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.mygolbs.mybus:id/ad_close2\"]",
          "name": "点击右侧x关闭按钮",
          "snapshotUrls": "https://i.gkd.li/import/12790841",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "desc": "自动点击【取消】",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": [
            "[id=\"com.mygolbs.mybus:id/message\"][text$=\"请开启通知权限\"]",
            "[id=\"com.mygolbs.mybus:id/view_neg\"] > [id=\"com.mygolbs.mybus:id/negativeButton\"][text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/12715980",
          "key": 0
        }
      ]
    },
    {
      "name": "签到成功弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@[id=\"com.mygolbs.mybus:id/iv_close\"] < RelativeLayout - LinearLayout >n [text=\"签到成功\"]",
          "key": 0
        }
      ]
    }
  ]
});
