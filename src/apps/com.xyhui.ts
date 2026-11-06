// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "PU口袋校园",
  "id": "com.xyhui",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "关闭各类全屏弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity",
            ".lut.act.LutMainActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/14472097",
            "https://i.gkd.li/i/13695488",
            "https://i.gkd.li/i/23325238"
          ]
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < * <2 * +n * >(1,3) [text=\"广告\"]",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/16837806",
            "https://i.gkd.li/i/13259196",
            "https://i.gkd.li/i/13259198"
          ],
          "exampleUrls": "https://e.gkd.li/1d51a37a-0444-4850-983c-3646b494204a"
        },
        {
          "matches": "View[clickable=true] < FrameLayout +4 * >2 [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 2,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13259183"
        },
        {
          "matches": "[id=\"com.xyhui:id/ms_activity_sdk_interstitial_cacel\"]",
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "fastQuery": true,
          "key": 3,
          "name": "美数广告",
          "snapshotUrls": "https://i.gkd.li/i/13458692"
        },
        {
          "matches": "[text=\"反馈\"] + @View[visibleToUser=true] > Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14560546"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity",
            ".lut.act.LutMainActivity"
          ],
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14472098",
            "https://i.gkd.li/i/14766902",
            "https://i.gkd.li/i/23146070",
            "https://i.gkd.li/i/23304106",
            "https://i.gkd.li/i/24488993"
          ]
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/18245369",
          "exampleUrls": "https://e.gkd.li/240494b6-026f-49f7-a77d-986e70077218"
        },
        {
          "matches": "@Image[childCount=0][text=\"\"] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/22863858"
        },
        {
          "matches": "[vid=\"anythink_myoffer_btn_close_id\" || vid=\"sdm_myoffer_btn_close_id\" || vid=\"beizi_interstitial_ad_close_iv\"]",
          "activityIds": [
            "com.anythink.basead.ui.ATPortraitTranslucentActivity",
            "com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity",
            "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity"
          ],
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/22868736",
            "https://i.gkd.li/i/23293759",
            "https://i.gkd.li/i/23577343"
          ]
        },
        {
          "matches": "@[text=\"关闭\"] < * +n * >(1,2) [text*=\"广告\"]",
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/23125533",
            "https://i.gkd.li/i/23577305"
          ]
        },
        {
          "matches": "@ImageView[width<140 && height<140] - * > [text^=\"请允许\"][text$=\"安装应用\"]",
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/23125594"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "key": 11,
          "name": "京东广告",
          "snapshotUrls": "https://i.gkd.li/i/23325124"
        },
        {
          "matches": "@ImageView[width<100 && height<100] <<4 * + * >4 [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "fastQuery": true,
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/23567050"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "key": 13,
          "snapshotUrls": "https://i.gkd.li/i/23937136"
        },
        {
          "matches": "[id=\"android:id/content\"] >(4,5) @FrameLayout[index=1] > ImageView",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity",
            "com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity"
          ],
          "key": 14,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/14472097",
            "https://i.gkd.li/i/14472098",
            "https://i.gkd.li/i/13695488",
            "https://i.gkd.li/i/14766902"
          ]
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < * <2 * + * >3 [text=\"广告\"]",
          "activityIds": "com.xyhui.start.LoadingActivity",
          "fastQuery": true,
          "key": 15,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13259196",
            "https://i.gkd.li/i/13259198"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".start.PUMainActivity",
            ".start.LoadingActivity",
            ".lut.act.LutMainActivity"
          ],
          "fastQuery": true,
          "key": 16,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/14472097",
            "https://i.gkd.li/i/13695488",
            "https://i.gkd.li/i/23325238"
          ]
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < * <2 * +n * >(1,3) [text=\"广告\"]",
          "activityIds": [
            ".start.PUMainActivity",
            ".start.LoadingActivity"
          ],
          "fastQuery": true,
          "key": 17,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/16837806",
            "https://i.gkd.li/i/13259196",
            "https://i.gkd.li/i/13259198"
          ],
          "exampleUrls": "https://e.gkd.li/1d51a37a-0444-4850-983c-3646b494204a"
        },
        {
          "matches": "[vid=\"ms_activity_sdk_interstitial_cacel\" || vid=\"ms_interstitial_v2_close\"]",
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "fastQuery": true,
          "key": 18,
          "name": "美数广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13458692",
            "https://i.gkd.li/i/34106754"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".start.PUMainActivity",
            ".start.LoadingActivity",
            ".lut.act.LutMainActivity"
          ],
          "fastQuery": true,
          "key": 19,
          "snapshotUrls": [
            "https://i.gkd.li/i/14472098",
            "https://i.gkd.li/i/14766902",
            "https://i.gkd.li/i/23146070",
            "https://i.gkd.li/i/23304106",
            "https://i.gkd.li/i/24488993"
          ]
        },
        {
          "matches": "[vid=\"anythink_myoffer_btn_close_id\" || vid=\"sdm_myoffer_btn_close_id\" || vid=\"beizi_interstitial_ad_close_iv\" || vid=\"closeAdvertLayout\"]",
          "activityIds": [
            "com.anythink.basead.ui.ATPortraitTranslucentActivity",
            "com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity",
            "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity",
            "com.anythink.core.common.inner.ui.ATPortraitTranslucentActivity",
            "cj.mobile.fw.activity.PtgInteractionPortraitActivity"
          ],
          "fastQuery": true,
          "key": 20,
          "snapshotUrls": [
            "https://i.gkd.li/i/22868736",
            "https://i.gkd.li/i/23293759",
            "https://i.gkd.li/i/23577343",
            "https://i.gkd.li/i/30700901",
            "https://i.gkd.li/i/34106741"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "key": 21,
          "name": "京东广告2",
          "snapshotUrls": "https://i.gkd.li/i/27525121"
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true][width<110 && height<110] - [text=\"反馈\"]",
          "activityIds": "com.octopus.ad.AdActivity",
          "fastQuery": true,
          "key": 22,
          "snapshotUrls": "https://i.gkd.li/i/34106756"
        },
        {
          "matches": "@[id=\"cj.mobile.wm.allmodules:id/wm_pop_pic_close\"][visibleToUser=true] +n LinearLayout > [text=\"广告\"]",
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "key": 23,
          "snapshotUrls": "https://i.gkd.li/i/34106749"
        },
        {
          "matches": "@View[clickable=true] < FrameLayout +4 * >2 [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 24,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13259183"
        },
        {
          "matches": "[vid=\"anythink_myoffer_btn_close_id\" || vid=\"sdm_myoffer_btn_close_id\" || vid=\"beizi_interstitial_ad_close_iv\"]",
          "activityIds": [
            "com.anythink.basead.ui.ATPortraitTranslucentActivity",
            "com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity",
            "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity",
            "com.anythink.core.common.inner.ui.ATPortraitTranslucentActivity"
          ],
          "fastQuery": true,
          "key": 25,
          "snapshotUrls": [
            "https://i.gkd.li/i/22868736",
            "https://i.gkd.li/i/23293759",
            "https://i.gkd.li/i/23577343",
            "https://i.gkd.li/i/30700901"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.xyhui.start.PUMainActivity",
          "key": 26,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12643276",
            "https://i.gkd.li/import/12868503",
            "https://i.gkd.li/import/12646420",
            "https://i.gkd.li/import/13259194"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity",
            "com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity"
          ],
          "key": 27,
          "name": "腾讯广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642482",
            "https://i.gkd.li/import/12646519",
            "https://i.gkd.li/import/12868369",
            "https://i.gkd.li/import/12646541",
            "https://i.gkd.li/import/13695488"
          ]
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.xyhui.start.PUMainActivity",
          "key": 28,
          "name": "腾讯广告-3",
          "snapshotUrls": "https://i.gkd.li/import/12793180"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity"
          ],
          "key": 29,
          "name": "腾讯广告-4",
          "snapshotUrls": [
            "https://i.gkd.li/import/12646347",
            "https://i.gkd.li/import/12793157",
            "https://i.gkd.li/import/12793177",
            "https://i.gkd.li/import/12868157",
            "https://i.gkd.li/import/13348807"
          ]
        },
        {
          "matches": "[text=\"广告\"] <n * < * < ViewGroup - ViewGroup >n @ViewGroup > ImageView",
          "activityIds": "com.xyhui.start.LoadingActivity",
          "key": 30,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13259196",
            "https://i.gkd.li/import/13259198"
          ]
        },
        {
          "matches": [
            "[desc^=\"logo-union\"] > [desc^=\"logoad\"] > [text=\"广告\"]",
            "[desc^=\"webview-close\"] > View"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 31,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13259183"
        },
        {
          "matches": [
            "[id=\"com.xyhui:id/ms_activity_sdk_interstitial_cacel\"]"
          ],
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "key": 32,
          "name": "美数广告",
          "snapshotUrls": "https://i.gkd.li/import/13458692"
        }
      ]
    },
    {
      "name": "局部广告-首页-右侧浮窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"com.xyhui:id/deleteIv\"]",
          "activityIds": [
            ".lut.act.LutMainActivity",
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/22863860",
            "https://i.gkd.li/i/12846543",
            "https://i.gkd.li/i/12868119"
          ],
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.xyhui:id/deleteIv\"]",
          "key": 1
        },
        {
          "matches": "ImageView[vid=\"deleteIv\"]",
          "activityIds": [
            ".lut.act.LutMainActivity",
            ".start.PUMainActivity",
            ".start.LoadingActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/22863860",
            "https://i.gkd.li/i/12846543",
            "https://i.gkd.li/i/12868119"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text^=\"打开系统消息通知\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.pu.activity.act.ActivityApplyResult",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23206833",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-打开应用自动进入部落",
      "desc": "点击我的-我的部落-已通过-部落详情（如果有多个则点击第一个，仅开屏时触发一次）",
      "key": 3,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > [text=\"我的\"] <<n [vid=\"mCustomTabView\"]",
          "actionMaximum": 1,
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "name": "点击导航栏[我的]",
          "snapshotUrls": "https://i.gkd.li/i/23303536"
        },
        {
          "matches": "@LinearLayout[vid=\"itemView\"][visibleToUser=true] > [text=\"我的部落\"]",
          "actionMaximum": 1,
          "activityIds": ".lut.act.LutMainActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "name": "点击[我的部落]",
          "snapshotUrls": "https://i.gkd.li/i/23303537"
        },
        {
          "matches": "@RelativeLayout[clickable=true][visibleToUser=true] > [text=\"已通过\"]",
          "actionMaximum": 1,
          "activityIds": "com.lut.tribe.act.MyLutTribeAct",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 2,
          "name": "点击[已通过]",
          "snapshotUrls": "https://i.gkd.li/i/23303538"
        },
        {
          "matches": "@LinearLayout[clickable=true][visibleToUser=true] < [vid=\"mRecyclerView\"]",
          "preKeys": [
            2
          ],
          "activityIds": "com.lut.tribe.act.MyLutTribeAct",
          "fastQuery": true,
          "name": "进入部落详情",
          "snapshotUrls": "https://i.gkd.li/i/23303539",
          "key": 3
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 4,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14560058",
            "https://i.gkd.li/i/14560214"
          ]
        },
        {
          "matches": "[text^=\"跳过\"][text.length<=10]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642486",
            "https://i.gkd.li/i/12846496",
            "https://i.gkd.li/i/12868232"
          ]
        },
        {
          "matches": "[vid=\"ms_skipView\"]",
          "action": "clickCenter",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16486847"
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
      "key": 5,
      "rules": [
        {
          "matches": "ImageView[id=\"com.xyhui:id/closeIv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-报名成功自动返回",
      "key": 6,
      "rules": [
        {
          "matches": [
            "[text$=\"报名成功!\"]",
            "[text=\"完成\"][clickable=true]"
          ],
          "activityIds": "com.pu.activity.act.ActivityApplyResult",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27527412",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-签到成功自动返回",
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text$=\"签到成功！\"]",
            "[text=\"完成\"][clickable=true]"
          ],
          "activityIds": "com.pu.activity.act.ActivityApplyResult",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27527409",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.xyhui.start.PUMainActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12643276",
            "https://i.gkd.li/import/12868503",
            "https://i.gkd.li/import/12646420",
            "https://i.gkd.li/import/13259194"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity",
            "com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity"
          ],
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642482",
            "https://i.gkd.li/import/12646519",
            "https://i.gkd.li/import/12868369",
            "https://i.gkd.li/import/12646541",
            "https://i.gkd.li/import/13695488"
          ]
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.xyhui.start.PUMainActivity",
          "key": 2,
          "name": "腾讯广告-3",
          "snapshotUrls": "https://i.gkd.li/import/12793180"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity"
          ],
          "key": 3,
          "name": "腾讯广告-4",
          "snapshotUrls": [
            "https://i.gkd.li/import/12646347",
            "https://i.gkd.li/import/12793157",
            "https://i.gkd.li/import/12793177",
            "https://i.gkd.li/import/12868157",
            "https://i.gkd.li/import/13348807"
          ]
        },
        {
          "matches": "[text=\"广告\"] <n * < * < ViewGroup - ViewGroup >n @ViewGroup > ImageView",
          "activityIds": "com.xyhui.start.LoadingActivity",
          "key": 4,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13259196",
            "https://i.gkd.li/import/13259198"
          ]
        },
        {
          "matches": [
            "[desc^=\"logo-union\"] > [desc^=\"logoad\"] > [text=\"广告\"]",
            "[desc^=\"webview-close\"] > View"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 5,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13259183"
        },
        {
          "matches": [
            "[id=\"com.xyhui:id/ms_activity_sdk_interstitial_cacel\"]"
          ],
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "key": 6,
          "name": "美数广告",
          "snapshotUrls": "https://i.gkd.li/import/13458692"
        }
      ]
    },
    {
      "name": "首页-右侧浮窗广告",
      "enable": false,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "ImageView[id=\"com.xyhui:id/deleteIv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级提示",
      "enable": false,
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "ImageView[id=\"com.xyhui:id/closeIv\"]",
          "key": 0
        }
      ]
    }
  ]
});
