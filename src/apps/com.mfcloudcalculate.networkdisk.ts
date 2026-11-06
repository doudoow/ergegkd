// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "123云盘",
  "id": "com.mfcloudcalculate.networkdisk",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tv_ad_free_close\" || vid=\"tv_ad_free_colse\" || vid=\"adgain_interstitial_skip_ll\" || vid=\"adgain_interstitial_close_ll\"][visibleToUser=true]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.mfcloudcalculate.networkdisk.activity.AdFreeActivity",
            ".activity.LauncherActivity",
            "com.adgain.sdk.base.activity.AdActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13546173",
            "https://i.gkd.li/i/14696860",
            "https://i.gkd.li/i/18121213",
            "https://i.gkd.li/i/24675097",
            "https://i.gkd.li/i/24927790"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/4cafd5fd-b5ed-4df1-b9f2-f443f53a7166"
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup <7 ViewGroup + ViewGroup [text=\"广告\"]",
          "activityIds": "com.mfcloudcalculate.networkdisk.activity.EmptyActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16154340",
          "exampleUrls": "https://m.gkd.li/57941037/cf43eaec-45f8-4e1a-bd3b-6a88fd055d29"
        },
        {
          "matches": "[text=\"反馈\"] -4 View[childCount=1] > Image[childCount=0][text=\"\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/17247801",
          "exampleUrls": "https://e.gkd.li/2ec6e71f-93b4-4ac4-a464-26d2a859445f"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/17306992",
            "https://i.gkd.li/i/24472832"
          ],
          "exampleUrls": "https://e.gkd.li/49cef679-3efb-4719-9af9-8f3a4c311191"
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/17456625",
          "exampleUrls": "https://e.gkd.li/af430910-56e0-4b19-b23f-b120ce19fdc0"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/18032004",
          "exampleUrls": "https://e.gkd.li/069fb571-ab57-42a7-a360-79b44efc2790"
        },
        {
          "matches": [
            "[text=\"反馈\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/18121205",
          "exampleUrls": "https://e.gkd.li/1326c88b-81e0-4f78-b301-778d29e10433"
        },
        {
          "matches": "[vid=\"ms_activity_sdk_interstitial_cacel\"][visibleToUser=true]",
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/18095705",
          "exampleUrls": "https://e.gkd.li/e2e7b175-20f6-4e12-a24a-504364a8b765"
        },
        {
          "matches": "[desc=\"开通前请阅读\"] -8 @ImageView[clickable=true][childCount=0][visibleToUser=true] < View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "action": "back",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/21820334"
        },
        {
          "matches": "@[id=\"cj.mobile.wm.allmodules:id/wm_pop_pic_close\"] +n * > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/23253580"
        },
        {
          "matches": "@Image[childCount=0][width<60 && height<60] < View[childCount=1] < View[childCount=1] < View[childCount=1] < View[childCount=1] + View >2 [text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/24119772",
          "exampleUrls": "https://e.gkd.li/34c7741f-0f03-4b0d-b8d2-917ed297e304"
        },
        {
          "matches": "[desc=\"开通前请阅读\"] -n @ImageView[childCount=0][width>800] <(1,2) View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "action": "back",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/24119773",
            "https://i.gkd.li/i/25128678"
          ],
          "exampleUrls": "https://e.gkd.li/ee504d60-ca93-40de-bb0f-292ef1df8c70"
        },
        {
          "matches": "@ImageView[vid=\"channel_insert_close_iv\"][clickable=true] - ImageView[vid=\"iv_ad_icon\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/24325263",
          "exampleUrls": "https://e.gkd.li/fa0391fe-54d4-4db0-930d-2cb9002b3786"
        },
        {
          "matches": "@TextView[clickable=true][childCount=0] <2 FrameLayout[childCount=2] - LinearLayout >4 [text$=\"第三方应用\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 13,
          "snapshotUrls": "https://i.gkd.li/i/24404354",
          "exampleUrls": "https://e.gkd.li/e6486e20-e908-48da-b84a-f3ea5519346b"
        },
        {
          "matches": "@Image[childCount=0][width<60 && height<60] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 14,
          "snapshotUrls": "https://i.gkd.li/i/24473530"
        },
        {
          "matches": "View[childCount=5] > [text^=\"svg\"][index=0][childCount=0]",
          "activityIds": "com.byazt.sr.Stub_Standard_Portrait_Activity",
          "key": 15,
          "snapshotUrls": "https://i.gkd.li/i/25128382"
        },
        {
          "matches": "View[childCount=0] < FrameLayout[childCount=2] - LinearLayout >4 [text$=\"第三方应用\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "key": 16,
          "snapshotUrls": "https://i.gkd.li/i/25128313"
        },
        {
          "matches": "[id=\"ad_area\"] > [id=\"close_btn\"]",
          "activityIds": "com.sigmob.sdk.base.common.PortraitTransparentAdActivity",
          "key": 17,
          "snapshotUrls": "https://i.gkd.li/i/25128394"
        },
        {
          "matches": "[id$=\"iv_ad_free_gif\"] + * > [text=\"关闭\"]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.mfcloudcalculate.networkdisk.activity.AdFreeActivity"
          ],
          "fastQuery": true,
          "key": 18,
          "snapshotUrls": [
            "https://i.gkd.li/i/13546173",
            "https://i.gkd.li/i/14696860"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/4cafd5fd-b5ed-4df1-b9f2-f443f53a7166"
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup <n ViewGroup + ViewGroup [text=\"广告\"]",
          "activityIds": "com.mfcloudcalculate.networkdisk.activity.EmptyActivity",
          "fastQuery": true,
          "key": 19,
          "snapshotUrls": "https://i.gkd.li/i/16154340",
          "exampleUrls": "https://m.gkd.li/57941037/cf43eaec-45f8-4e1a-bd3b-6a88fd055d29"
        },
        {
          "matches": "[vid=\"tv_ad_free_close\" || vid=\"tv_ad_free_colse\"][visibleToUser=true]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.mfcloudcalculate.networkdisk.activity.AdFreeActivity",
            ".activity.LauncherActivity"
          ],
          "fastQuery": true,
          "key": 20,
          "snapshotUrls": [
            "https://i.gkd.li/i/13546173",
            "https://i.gkd.li/i/14696860",
            "https://i.gkd.li/i/18121213"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/4cafd5fd-b5ed-4df1-b9f2-f443f53a7166"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 21,
          "snapshotUrls": "https://i.gkd.li/i/17306992",
          "exampleUrls": "https://e.gkd.li/49cef679-3efb-4719-9af9-8f3a4c311191"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@View[clickable=true] - [desc=\"立即更新\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/17456852",
          "exampleUrls": "https://e.gkd.li/02cf5d37-8808-4abb-abf9-81f7ba8a8375",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-扫码自动确认登录",
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"我已阅读并同意\"] - @View[clickable=true][text=null][visibleToUser=true][width<100 && height<100] <7 View[childCount=11] < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20521452",
          "exampleUrls": "https://e.gkd.li/b84f0579-952b-4c6c-9706-dc300eb4a555"
        },
        {
          "matches": "@View[desc=\"确认登录\"][visibleToUser=true] <5 View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/20521452",
          "exampleUrls": "https://e.gkd.li/b84f0579-952b-4c6c-9706-dc300eb4a555",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-相册自动备份弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true][width<100 && height<100] +2 [desc=\"开启相册自动备份\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/21326468",
          "exampleUrls": "https://e.gkd.li/e86a59e7-9329-4931-9bdd-5f6b4f896294",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告",
      "key": 4,
      "rules": [
        {
          "matches": "@TextView[clickable=true][childCount=0] <2 FrameLayout[childCount=2] < FrameLayout <2 LinearLayout + LinearLayout > [text=\"了解详情\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24404389",
          "exampleUrls": "https://e.gkd.li/64fcf71b-b7a8-4d1e-8fd4-8be4ea4692a2"
        },
        {
          "matches": "@Image[childCount=0][width<60 && height<60][visibleToUser=true] < View[childCount=1] -(1,2,3) View >(2,3) [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/24404390",
            "https://i.gkd.li/i/24979310",
            "https://i.gkd.li/i/25128397"
          ],
          "exampleUrls": "https://e.gkd.li/e6fc2756-928f-48d4-af51-3b6ce9aa557b"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < [desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24404391",
          "exampleUrls": "https://e.gkd.li/54463724-d3c0-42b4-8fac-adf47b31799d"
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=1] -2 ViewGroup >2 [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24589944"
        },
        {
          "matches": "@ImageView[clickable=true][id=null][childCount=0] - [text=\"投诉\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/24979308"
        },
        {
          "matches": "[vid=\"ptgImgClose\" || vid=\"sdm_myoffer_banner_close\" || vid=\"ksad_banner_item_close\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/24979282",
            "https://i.gkd.li/i/25128395",
            "https://i.gkd.li/i/25128396"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true] - [text^=\"立即\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/25128309"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24590419",
          "key": 7
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0] <2 FrameLayout +n LinearLayout > [text^=\"立即\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24675412",
            "https://i.gkd.li/i/24675589"
          ],
          "exampleUrls": "https://e.gkd.li/a49e21d0-7259-4f6a-93e2-add166738a5b"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 6,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14018247",
            "https://i.gkd.li/i/13259303",
            "https://i.gkd.li/i/13695497"
          ]
        },
        {
          "matches": "[text^=\"跳过\"][text.length<=4]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12846434",
            "https://i.gkd.li/i/13059834"
          ]
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/14018247"
        },
        {
          "matches": "[id=\"com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container\"] >n [text^=\"跳过\"][text.length<=4]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/12846434",
            "https://i.gkd.li/import/13059834"
          ]
        },
        {
          "matches": "[id$=\"tt_splash_skip_btn\"] <<n [id=\"com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container\"]",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/13259303",
            "https://i.gkd.li/import/13695497"
          ]
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14018247",
            "https://i.gkd.li/i/13259303",
            "https://i.gkd.li/i/13695497"
          ]
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"tv_ad_free_colse\" || vid=\"tv_ad_free_close\" || vid=\"adgain_interstitial_skip_ll\" || vid=\"adgain_interstitial_close_ll\"][visibleToUser=true]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            ".activity.AdFreeActivity",
            ".activity.LauncherActivity",
            "com.adgain.sdk.base.activity.AdActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13546173",
            "https://i.gkd.li/i/14696860",
            "https://i.gkd.li/i/18121213",
            "https://i.gkd.li/i/24675097",
            "https://i.gkd.li/i/24927790"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/4cafd5fd-b5ed-4df1-b9f2-f443f53a7166"
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup <7 ViewGroup + ViewGroup [text=\"广告\"]",
          "activityIds": ".activity.EmptyActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16154340",
          "exampleUrls": "https://m.gkd.li/57941037/cf43eaec-45f8-4e1a-bd3b-6a88fd055d29"
        },
        {
          "matches": "@ImageView < [width<98 && height<93] < * < ViewGroup - * >2 [text=\"广告\"]",
          "activityIds": "com.byazt.sr.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/26871333"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/17306992",
            "https://i.gkd.li/i/24472832"
          ],
          "exampleUrls": "https://e.gkd.li/49cef679-3efb-4719-9af9-8f3a4c311191"
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/17456625",
          "exampleUrls": "https://e.gkd.li/af430910-56e0-4b19-b23f-b120ce19fdc0"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/18032004",
          "exampleUrls": "https://e.gkd.li/069fb571-ab57-42a7-a360-79b44efc2790"
        },
        {
          "matches": [
            "[text=\"反馈\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/18121205",
          "exampleUrls": "https://e.gkd.li/1326c88b-81e0-4f78-b301-778d29e10433"
        },
        {
          "matches": "[vid=\"ms_activity_sdk_interstitial_cacel\"][visibleToUser=true]",
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/18095705",
          "exampleUrls": "https://e.gkd.li/e2e7b175-20f6-4e12-a24a-504364a8b765"
        },
        {
          "matches": "[desc=\"开通前请阅读\"] -n @ImageView[childCount=0][width>800] <(1,2) View[childCount>8] <<(5,6) [id=\"android:id/content\"]",
          "action": "back",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/21820334",
            "https://i.gkd.li/i/24119773",
            "https://i.gkd.li/i/25128678"
          ],
          "exampleUrls": "https://e.gkd.li/ee504d60-ca93-40de-bb0f-292ef1df8c70"
        },
        {
          "matches": "@[id=\"cj.mobile.wm.allmodules:id/wm_pop_pic_close\"] +n * > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/23253580"
        },
        {
          "matches": "@ImageView[vid=\"channel_insert_close_iv\"][clickable=true] - ImageView[vid=\"iv_ad_icon\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/24325263",
          "exampleUrls": "https://e.gkd.li/fa0391fe-54d4-4db0-930d-2cb9002b3786"
        },
        {
          "matches": "@TextView[clickable=true] <2 FrameLayout[childCount=2] - LinearLayout >4 [text$=\"第三方应用\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 11,
          "snapshotUrls": "https://i.gkd.li/i/24404354",
          "exampleUrls": "https://e.gkd.li/e6486e20-e908-48da-b84a-f3ea5519346b"
        },
        {
          "matches": "[text=\"反馈\"] -4 [childCount=1] > Image[text=\"\"][width<69][height<66]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/17247801",
          "exampleUrls": "https://e.gkd.li/2ec6e71f-93b4-4ac4-a464-26d2a859445f"
        },
        {
          "matches": "@Image[childCount=0][width<60 && height<60] < View[childCount=1] < View[childCount=1] < View[childCount=1] < View[childCount=1] + View >2 [text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 13,
          "snapshotUrls": "https://i.gkd.li/i/24119772",
          "exampleUrls": "https://e.gkd.li/34c7741f-0f03-4b0d-b8d2-917ed297e304"
        },
        {
          "matches": "@Image[childCount=0][width<60 && height<60] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 14,
          "snapshotUrls": "https://i.gkd.li/i/24473530"
        },
        {
          "matches": "View[childCount=5] > [text^=\"svg\"][index=0][childCount=0]",
          "activityIds": "com.byazt.sr.Stub_Standard_Portrait_Activity",
          "key": 15,
          "snapshotUrls": "https://i.gkd.li/i/25128382"
        },
        {
          "matches": "View[childCount=0] < FrameLayout[childCount=2] - LinearLayout >4 [text$=\"第三方应用\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "key": 16,
          "snapshotUrls": "https://i.gkd.li/i/25128313"
        },
        {
          "matches": "[id=\"ad_area\"] > [id=\"close_btn\"]",
          "activityIds": "com.sigmob.sdk.base.common.PortraitTransparentAdActivity",
          "key": 17,
          "snapshotUrls": "https://i.gkd.li/i/25128394"
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "desc": "点击 X 或 关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"关闭\"][id=\"com.mfcloudcalculate.networkdisk:id/tv_ad_free_colse\"]",
          "activityIds": "com.mfcloudcalculate.networkdisk.activity.AdFreeActivity",
          "snapshotUrls": "https://i.gkd.li/import/13546173",
          "key": 0
        },
        {
          "matches": "[text=\"关闭\"][id=\"com.mfcloudcalculate.networkdisk:id/tv_ad_free_close\"]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.meishu.sdk.activity.SdkInterstitialActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/15087252",
            "https://i.gkd.li/import/16611758"
          ],
          "key": 1
        },
        {
          "matches": "@View +4 TextView[text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": "https://i.gkd.li/import/15087275",
          "key": 2
        },
        {
          "matches": "[text*=\"关闭\"][id=\"com.mfcloudcalculate.networkdisk:id/tv_ad_free_colse\"]",
          "key": 3
        }
      ]
    }
  ]
});
