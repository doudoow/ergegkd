// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "拷貝漫畫",
  "id": "com.copymanga.app",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "actionDelay": 400,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]"
          ],
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13259085"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.kwad.components.ad.interstitial"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625486",
            "https://i.gkd.li/i/12504488",
            "https://i.gkd.li/i/13344156"
          ]
        },
        {
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "@ViewGroup[clickable=true] > [text=\"跳过\"]"
          ],
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13696292"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "key": 3,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12504520",
            "https://i.gkd.li/i/12661019",
            "https://i.gkd.li/i/13193877",
            "https://i.gkd.li/i/12892156",
            "https://i.gkd.li/i/12504501",
            "https://i.gkd.li/i/13259082"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "fastQuery": true,
          "key": 4,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13246786"
        },
        {
          "matches": "[id=\"com.copymanga.app:id/interact_ad_root\"] > [id=\"com.copymanga.app:id/iv_close\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "key": 5,
          "name": "腾讯广告-3",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521801",
            "https://i.gkd.li/i/13332719"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "fastQuery": true,
          "key": 6,
          "name": "腾讯广告-4",
          "snapshotUrls": "https://i.gkd.li/i/13233178"
        },
        {
          "matches": "@View[clickable=true] < FrameLayout[desc*=\"close\"] +4 FrameLayout[desc!=null] >2 [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 7,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13372542"
        },
        {
          "matches": "@[clickable=true] > ImageView[vid=\"beizi_interstitial_ad_close_iv\"]",
          "activityIds": "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/25049918"
        },
        {
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 9,
          "name": "字节广告-3",
          "snapshotUrls": [
            "https://i.gkd.li/i/12925052",
            "https://i.gkd.li/i/12925095"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] - RelativeLayout >2 [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 10,
          "name": "百度广告-1",
          "snapshotUrls": "https://i.gkd.li/i/25189723"
        },
        {
          "matches": "@ImageView[clickable=true][width<78] <n [visibleToUser=true] -2 * >2 [text=\"广告\"]",
          "activityIds": "com.miui.home.launcher.Launcher",
          "key": 11,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13259085"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": [
            ".MainActivity",
            "com.kwad.components.ad.interstitial"
          ],
          "key": 12,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625486",
            "https://i.gkd.li/i/12504488",
            "https://i.gkd.li/i/13344156"
          ]
        },
        {
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "@ViewGroup[clickable=true] > [text=\"跳过\"]"
          ],
          "activityIds": ".MainActivity",
          "key": 13,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13696292"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "actionDelay": 400,
          "activityIds": ".MainActivity",
          "key": 14,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12504520",
            "https://i.gkd.li/i/12661019",
            "https://i.gkd.li/i/13193877",
            "https://i.gkd.li/i/12892156",
            "https://i.gkd.li/i/12504501",
            "https://i.gkd.li/i/13259082"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "actionDelay": 400,
          "key": 15,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13246786"
        },
        {
          "matches": "[vid=\"interact_ad_root\"] > [vid=\"iv_close\"]",
          "activityIds": ".MainActivity",
          "key": 16,
          "name": "腾讯广告-3",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521801",
            "https://i.gkd.li/i/13332719"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "actionDelay": 400,
          "key": 17,
          "name": "腾讯广告-4",
          "snapshotUrls": "https://i.gkd.li/i/13233178"
        },
        {
          "matches": "@View[clickable=true] < FrameLayout[desc*=\"close\"] +4 FrameLayout[desc!=null] >2 [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 18,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13372542"
        },
        {
          "matches": "@[clickable=true] > ImageView[vid=\"beizi_interstitial_ad_close_iv\"]",
          "activityIds": "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity",
          "key": 19,
          "snapshotUrls": "https://i.gkd.li/i/25049918"
        },
        {
          "matches": "@ImageView[clickable=true][width<134 && height<134] <n RelativeLayout >(1,3) [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "key": 20,
          "name": "百度广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/25189723",
            "https://i.gkd.li/i/33947096"
          ]
        },
        {
          "matches": "[vid=\"ad_close\"]",
          "key": 21,
          "snapshotUrls": "https://i.gkd.li/i/30617190"
        },
        {
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 22,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13259085"
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -(2,3) ViewGroup > ViewGroup[clickable=true][visibleToUser=true]",
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.kwad.components.ad.interstitial"
          ],
          "key": 23,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13625486",
            "https://i.gkd.li/import/12504486",
            "https://i.gkd.li/import/12504488",
            "https://i.gkd.li/import/13344156"
          ]
        },
        {
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "@ViewGroup[clickable=true] > [text=\"跳过\"]"
          ],
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 24,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13696292"
        },
        {
          "matches": "ImageView -(1,2) FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 25,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12504520",
            "https://i.gkd.li/import/12661019",
            "https://i.gkd.li/import/13193877",
            "https://i.gkd.li/import/12892156",
            "https://i.gkd.li/import/12504501",
            "https://i.gkd.li/import/13259082"
          ]
        },
        {
          "matches": "ImageView <2 FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "key": 26,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13246786"
        },
        {
          "matches": "[id=\"com.copymanga.app:id/interact_ad_root\"] > [id=\"com.copymanga.app:id/iv_close\"]",
          "key": 27,
          "name": "腾讯广告-3",
          "snapshotUrls": [
            "https://i.gkd.li/import/13521801",
            "https://i.gkd.li/import/13332719"
          ]
        },
        {
          "matches": "ImageView - ImageView - FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView",
          "key": 28,
          "name": "腾讯广告-4",
          "snapshotUrls": "https://i.gkd.li/import/13233178"
        },
        {
          "matches": [
            "[desc^=\"logoad\"] > [text=\"广告\"]",
            "[desc^=\"webview-close\"] > View[clickable=true]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 29,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13372542"
        },
        {
          "matches": "[text=\"反馈\"] -2 @View - Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 30,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/import/12925052"
        },
        {
          "matches": "[text=\"反馈\"] -4 @View < View[childCount=7]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 31,
          "name": "字节广告-3",
          "snapshotUrls": "https://i.gkd.li/import/12925095"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "key": 32,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12504520",
            "https://i.gkd.li/i/12661019",
            "https://i.gkd.li/i/13193877",
            "https://i.gkd.li/i/12892156",
            "https://i.gkd.li/i/12504501",
            "https://i.gkd.li/i/13259082"
          ]
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id^=\"com.copymanga.app:id/ad_flag_source\"] - * > [id=\"com.copymanga.app:id/close\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/12504525"
        },
        {
          "matches": "[id=\"com.copymanga.app:id/close_m_image_left_text_right_no_compliance\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13761154"
        },
        {
          "matches": "FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12851671",
            "https://i.gkd.li/i/12909005"
          ]
        },
        {
          "matches": "[id^=\"com.copymanga.app:id/ad_flag_source\"] - * > [vid=\"close\"]",
          "activityIds": ".MainActivity",
          "key": 3,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/12504525"
        },
        {
          "matches": "[vid=\"close_m_image_left_text_right_no_compliance\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13761154"
        },
        {
          "matches": "FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]",
          "activityIds": ".MainActivity",
          "key": 5,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12851671",
            "https://i.gkd.li/i/12909005"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-关闭赞助提示",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"就这样吧\"] + [desc^=\"赞助免广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12851627",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动确认线路",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"进入拷贝漫画\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13233179",
          "key": 0
        },
        {
          "matches": "[desc=\"进入拷贝漫画\"]",
          "snapshotUrls": "https://i.gkd.li/import/13233179",
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "[desc=\"系统提示\"] +2 [desc=\"确定\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13233180",
          "exampleUrls": "https://m.gkd.li/57941037/7577dafa-9e3e-44de-bd20-c52f8a30e9c6",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "actionDelay": 400,
      "key": 5,
      "rules": [
        {
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13259085"
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -(2,3) ViewGroup > ViewGroup[clickable=true][visibleToUser=true]",
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.kwad.components.ad.interstitial"
          ],
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625486",
            "https://i.gkd.li/i/12504486",
            "https://i.gkd.li/i/12504488",
            "https://i.gkd.li/i/13344156"
          ]
        },
        {
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "@ViewGroup[clickable=true] > [text=\"跳过\"]"
          ],
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 2,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13696292"
        },
        {
          "matches": "ImageView -(1,2) FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 3,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12504520",
            "https://i.gkd.li/i/12661019",
            "https://i.gkd.li/i/13193877",
            "https://i.gkd.li/i/12892156",
            "https://i.gkd.li/i/12504501",
            "https://i.gkd.li/i/13259082"
          ]
        },
        {
          "matches": "ImageView <2 FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "key": 4,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13246786"
        },
        {
          "matches": "[id=\"com.copymanga.app:id/interact_ad_root\"] > [id=\"com.copymanga.app:id/iv_close\"]",
          "key": 5,
          "name": "腾讯广告-3",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521801",
            "https://i.gkd.li/i/13332719"
          ]
        },
        {
          "matches": "ImageView - ImageView - FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView",
          "key": 6,
          "name": "腾讯广告-4",
          "snapshotUrls": "https://i.gkd.li/i/13233178"
        },
        {
          "matches": [
            "[desc^=\"logoad\"] > [text=\"广告\"]",
            "[desc^=\"webview-close\"] > View[clickable=true]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 7,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13372542"
        },
        {
          "matches": "[text=\"反馈\"] -2 @View - Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 8,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/i/12925052"
        },
        {
          "matches": "[text=\"反馈\"] -4 @View < View[childCount=7]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 9,
          "name": "字节广告-3",
          "snapshotUrls": "https://i.gkd.li/i/12925095"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id^=\"com.copymanga.app:id/ad_flag_source\"] - * > [id=\"com.copymanga.app:id/close\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/12504525"
        },
        {
          "matches": "[id=\"com.copymanga.app:id/close_m_image_left_text_right_no_compliance\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13761154"
        },
        {
          "matches": "FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12851671",
            "https://i.gkd.li/i/12909005"
          ]
        }
      ]
    },
    {
      "name": "未分类-关闭赞助提示",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@[desc=\"就这样吧\"] + [desc^=\"赞助免广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12851627",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-自动确认线路",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 8,
      "rules": [
        {
          "matches": "[desc=\"进入拷贝漫画\"]",
          "snapshotUrls": "https://i.gkd.li/i/13233179",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-关闭提示",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 9,
      "rules": [
        {
          "matches": "[desc=\"系统提示\"] +n [desc=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/13233180",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id^=\"com.copymanga.app:id/ad_flag_source\"] - * > [id=\"com.copymanga.app:id/close\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/import/12504525"
        },
        {
          "matches": "[id=\"com.copymanga.app:id/close_m_image_left_text_right_no_compliance\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13761154"
        },
        {
          "matches": "FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12851671",
            "https://i.gkd.li/import/12909005"
          ]
        }
      ]
    },
    {
      "name": "权限提示-关闭提示",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 11,
      "rules": [
        {
          "matches": "[desc=\"系统提示\"] +n [desc=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/import/13233180",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "actionDelay": 400,
      "key": 12,
      "rules": [
        {
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13259085"
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -(2,3) ViewGroup > ViewGroup[clickable=true][visibleToUser=true]",
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.kwad.components.ad.interstitial"
          ],
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13625486",
            "https://i.gkd.li/import/12504486",
            "https://i.gkd.li/import/12504488",
            "https://i.gkd.li/import/13344156"
          ]
        },
        {
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "@ViewGroup[clickable=true] > [text=\"跳过\"]"
          ],
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 2,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13696292"
        },
        {
          "matches": "ImageView -(1,2) FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 3,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12504520",
            "https://i.gkd.li/import/12661019",
            "https://i.gkd.li/import/13193877",
            "https://i.gkd.li/import/12892156",
            "https://i.gkd.li/import/12504501",
            "https://i.gkd.li/import/13259082"
          ]
        },
        {
          "matches": "ImageView <2 FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "key": 4,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13246786"
        },
        {
          "matches": "[id=\"com.copymanga.app:id/interact_ad_root\"] > [id=\"com.copymanga.app:id/iv_close\"]",
          "key": 5,
          "name": "腾讯广告-3",
          "snapshotUrls": [
            "https://i.gkd.li/import/13521801",
            "https://i.gkd.li/import/13332719"
          ]
        },
        {
          "matches": "ImageView - ImageView - FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView",
          "key": 6,
          "name": "腾讯广告-4",
          "snapshotUrls": "https://i.gkd.li/import/13233178"
        },
        {
          "matches": [
            "[desc^=\"logoad\"] > [text=\"广告\"]",
            "[desc^=\"webview-close\"] > View[clickable=true]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 7,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13372542"
        },
        {
          "matches": "[text=\"反馈\"] -2 @View - Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 8,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/import/12925052"
        },
        {
          "matches": "[text=\"反馈\"] -4 @View < View[childCount=7]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 9,
          "name": "字节广告-3",
          "snapshotUrls": "https://i.gkd.li/import/12925095"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id^=\"com.copymanga.app:id/ad_flag_source\"] - * > [id=\"com.copymanga.app:id/close\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/import/12504525"
        },
        {
          "matches": "[id=\"com.copymanga.app:id/close_m_image_left_text_right_no_compliance\"]",
          "activityIds": "com.copymanga.app.MainActivity",
          "quickFind": true,
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13761154"
        },
        {
          "matches": "FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]",
          "activityIds": "com.copymanga.app.MainActivity",
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12851671",
            "https://i.gkd.li/import/12909005"
          ]
        }
      ]
    },
    {
      "name": "关闭赞助提示",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@[desc=\"就这样吧\"] + [desc^=\"赞助免广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/12851627",
          "key": 0
        }
      ]
    },
    {
      "name": "自动确认线路",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 15,
      "rules": [
        {
          "matches": "[desc=\"进入拷贝漫画\"]",
          "snapshotUrls": "https://i.gkd.li/import/13233179",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭提示",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 16,
      "rules": [
        {
          "matches": "[desc=\"系统提示\"] +n [desc=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/import/13233180",
          "key": 0
        }
      ]
    }
  ]
});
