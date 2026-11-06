// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "AppShare",
  "id": "info.muge.appshare",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
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
            "https://i.gkd.li/i/13842826",
            "https://i.gkd.li/i/13939089",
            "https://i.gkd.li/i/14260635"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][visibleToUser=true][text.length<=10]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14553551"
        },
        {
          "matches": "@ViewGroup > [text=\"跳过\"][visibleToUser=true]",
          "position": {
            "left": "width * 0.5",
            "top": "width * 0.6984"
          },
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/15269380",
            "https://i.gkd.li/i/15285908",
            "https://i.gkd.li/i/15520277"
          ]
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12683145",
            "https://i.gkd.li/i/12683173",
            "https://i.gkd.li/i/13702708",
            "https://i.gkd.li/i/13842826",
            "https://i.gkd.li/i/13939089",
            "https://i.gkd.li/i/14260635"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][visibleToUser=true][text.length<=10]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14553551"
        },
        {
          "matches": "[vid=\"splash_full_tk_play_card_view\"]",
          "position": {
            "left": "width * 0.0826",
            "top": "width * 0.1"
          },
          "order": -1,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/15269380",
            "https://i.gkd.li/i/15285908"
          ]
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13842826",
            "https://i.gkd.li/i/13939089",
            "https://i.gkd.li/i/14260635"
          ]
        },
        {
          "matches": "@[clickable=true][height<100] - [text*=\"跳过\"][text.length<10]",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/14553551"
        },
        {
          "matches": "@[clickable=true][width<130 && height<130] <(1,2) [childCount=2] >2 [text=\"跳过\"][visibleToUser=true]",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/15269380",
            "https://i.gkd.li/i/15285908",
            "https://i.gkd.li/i/15520277",
            "https://i.gkd.li/i/28050329"
          ]
        },
        {
          "matches": "@ImageView[width<138 && height<138] < * < ViewGroup +(2,3) [childCount=1] >2 [text=\"广告\"][visibleToUser=true]",
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/28050314",
            "https://i.gkd.li/i/28050323"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "key": 10,
          "snapshotUrls": [
            "https://i.gkd.li/import/12683168",
            "https://i.gkd.li/import/12683211",
            "https://i.gkd.li/import/12748893"
          ]
        },
        {
          "matches": "[id$=\"tt_splash_skip_btn\"] <<n [vid=\"rlAdView\"]",
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/import/12683145",
            "https://i.gkd.li/import/12683173",
            "https://i.gkd.li/import/13702708"
          ]
        },
        {
          "matches": "@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid=\"rlAdView\"]",
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/import/13842826"
        },
        {
          "matches": "@View[clickable=true] <<n [vid=\"tp_splash_container_id\"]",
          "key": 13,
          "name": "穿山甲SDK",
          "snapshotUrls": "https://i.gkd.li/import/13939089"
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 14,
          "snapshotUrls": [
            "https://i.gkd.li/i/13842826",
            "https://i.gkd.li/i/13939089",
            "https://i.gkd.li/i/14260635"
          ]
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout[childCount=5] > @FrameLayout[childCount=1][visibleToUser=true][width<50 && height<50] > ImageView[childCount=0] <<n [vid=\"adContainer\" || vid=\"adView\" || vid=\"cardAd\"]",
          "activityIds": [
            "info.muge.appshare.view.app.detail.AppDetailActivity",
            "info.muge.appshare.view.app.detail.v4.AppDetailV4Activity",
            "info.muge.appshare.view.search.v4.SearchActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14382413",
            "https://i.gkd.li/i/25124086",
            "https://i.gkd.li/i/25124059"
          ]
        },
        {
          "matches": "FrameLayout[childCount=5] > @FrameLayout[visibleToUser=true] > ImageView <<n [vid=\"adContainer\"]",
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity",
          "fastQuery": true,
          "key": 1,
          "name": "软件详情页卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/14382413"
        },
        {
          "matches": "FrameLayout[childCount=5] > @FrameLayout[visibleToUser=true] > ImageView <<n [vid=\"adView\"]",
          "activityIds": "info.muge.appshare.view.search.app.SearchAppActivity",
          "fastQuery": true,
          "key": 2,
          "name": "搜索页卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/14368946"
        },
        {
          "matches": "FrameLayout[childCount=5] > @FrameLayout[childCount=1][visibleToUser=true][width<50 && height<50] > ImageView[childCount=0] <<n [vid=\"adContainer\" || vid=\"adView\" || vid=\"cardAd\"]",
          "activityIds": [
            ".view.app.detail.AppDetailActivity",
            ".view.app.detail.v4.AppDetailV4Activity",
            ".view.search.v4.SearchActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14382413",
            "https://i.gkd.li/i/25124086",
            "https://i.gkd.li/i/25124059"
          ]
        },
        {
          "matches": "@[clickable=true][width<90] < FrameLayout -2 * >3 [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/26870176"
        },
        {
          "matches": "@[name$=\"ImageView\" || clickable=true][width<90 && height<78] < FrameLayout[childCount=1] <3 FrameLayout[childCount>2] <<(9,11) ViewFactoryHolder <4 View[childCount>2] <<5 [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/26870429"
        }
      ]
    },
    {
      "name": "功能类-自动签到",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"签到\"][vid=\"tvSign\"]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13931265",
          "excludeSnapshotUrls": "https://i.gkd.li/i/22319703"
        },
        {
          "matches": "[desc=\"头像\"] +3 @View[clickable=true] > [text=\"签到\"]",
          "activityIds": ".MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24376300",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/22319703",
            "https://i.gkd.li/i/24563260"
          ]
        },
        {
          "anyMatches": [
            "[text=\"确定\"]",
            "@[clickable=true] > [childCount=0][text=\"我知道了\"]",
            "[vid=\"tvClose\"][text=\"我知道了\"][clickable=true][visibleToUser=true]"
          ],
          "preKeys": [
            3,
            1
          ],
          "activityIds": [
            ".view.main.MainActivity",
            ".MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13931279",
            "https://i.gkd.li/i/20259829",
            "https://i.gkd.li/i/24376307",
            "https://i.gkd.li/i/25125005"
          ],
          "key": 2
        },
        {
          "matches": "[id=\"info.muge.appshare:id/tvSign\"][text=\"签到\"]",
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13931265"
        },
        {
          "matches": "[id=\"info.muge.appshare:id/tvClose\"][text=\"确定\"]",
          "preKeys": 0,
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13931279",
          "key": 4
        },
        {
          "matches": "[id=\"info.muge.appshare:id/tvClose\"][text=\"确定\"]",
          "preKeys": [
            3
          ],
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13931279",
          "key": 5
        }
      ]
    },
    {
      "name": "分段广告",
      "desc": "点击关闭-点击不感兴趣",
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout[childCount=3] >3 [desc^=\"dislike\"] > @View[clickable=true] <<n [id=\"info.muge.appshare:id/adContainer\"]",
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13758909",
          "exampleUrls": "https://m.gkd.li/57941037/3bc12aa2-7673-4261-9e3d-7e1605b22847"
        },
        {
          "matches": "FrameLayout[childCount=3] >2 WebView >6 @View[visibleToUser=true] > Image <<n [vid=\"adContainer\"]",
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14160959",
          "exampleUrls": "https://m.gkd.li/57941037/fefece63-2ec2-413c-a292-4583d58478fe"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] <n * > FrameLayout >n [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/24541497",
            "https://i.gkd.li/i/24551719",
            "https://i.gkd.li/i/24612011",
            "https://i.gkd.li/i/24612129"
          ],
          "exampleUrls": "https://e.gkd.li/00bf6a60-c461-4970-bb73-b063376cbafd"
        },
        {
          "matches": "ViewFactoryHolder FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView[childCount=0][id=null][desc=null][width<60 && height<60]",
          "excludeMatches": "[text=\"热门搜索\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24541525",
          "excludeSnapshotUrls": "https://i.gkd.li/i/24612044",
          "exampleUrls": "https://e.gkd.li/1dfab1f2-f3d3-4f42-b421-d504083337c0"
        },
        {
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "preKeys": [
            5,
            6,
            2,
            3
          ],
          "activityIds": [
            "info.muge.appshare.view.app.detail.AppDetailActivity",
            ".MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14161009",
            "https://i.gkd.li/i/24612850"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/27a5eebc-a55a-466e-85f3-7642c23b4b3d",
          "key": 4
        },
        {
          "matches": "@[clickable=true][width<100] < [desc^=\"dislike\"] -2 * >3 [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".view.app.detail.AppDetailActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13758909",
          "exampleUrls": "https://m.gkd.li/57941037/3bc12aa2-7673-4261-9e3d-7e1605b22847"
        },
        {
          "matches": "FrameLayout[childCount=3] >2 WebView >6 @View[visibleToUser=true] > Image <<n [vid=\"adContainer\"]",
          "activityIds": ".view.app.detail.AppDetailActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/14160959",
          "exampleUrls": "https://m.gkd.li/57941037/fefece63-2ec2-413c-a292-4583d58478fe"
        },
        {
          "matches": "@Image[id=null][desc=null][width<60][visibleToUser=true] < View -2 View >3 [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/25484564"
        },
        {
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "preKeys": [
            5,
            6,
            2,
            3
          ],
          "activityIds": [
            ".view.app.detail.AppDetailActivity",
            ".MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14161009",
            "https://i.gkd.li/i/24612850"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/27a5eebc-a55a-466e-85f3-7642c23b4b3d",
          "key": 8
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "广告展示率低于20%时出现的广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "View[vid=\"v_jump\"][clickable=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14181146",
          "exampleUrls": "https://m.gkd.li/57941037/6b1d7b37-edd7-499f-a8b0-ecba24ef2c44"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15209619",
          "exampleUrls": "https://e.gkd.li/f89eea71-55f0-4c27-a4b0-79ac5296becd"
        },
        {
          "matches": "[text=\"反馈\"] <n * > @View[childCount=1][index=0 || index=1] > Image[text=\"\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/15209618",
            "https://i.gkd.li/i/15282994"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/155fdf95-1f5a-4bf3-a8e7-161e6bfe7bbf"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15211765",
          "exampleUrls": "https://e.gkd.li/b4d9d653-a4ad-4e4f-a8f5-30b1485547b5"
        },
        {
          "matches": "RelativeLayout[childCount=2] > RelativeLayout > View[clickable=true]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14181146",
          "exampleUrls": "https://m.gkd.li/57941037/6b1d7b37-edd7-499f-a8b0-ecba24ef2c44"
        },
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView",
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/15209619",
            "https://i.gkd.li/i/15211765"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/13a69193-a276-4115-97dd-bd7a4b49fbee"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/15209619",
          "exampleUrls": "https://e.gkd.li/f89eea71-55f0-4c27-a4b0-79ac5296becd"
        },
        {
          "matches": "@ImageView < FrameLayout - * >2 [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/26151106",
          "exampleUrls": "https://e.gkd.li/2fc699c4-e377-4a54-b798-17f831f5a9f7"
        },
        {
          "matches": "@ImageView[text=null][clickable=true] + [text=\"应用详情\"][visibleToUser=true]",
          "activityIds": "com.byazt.fl.Stub_Standard_Activity_T",
          "fastQuery": true,
          "key": 8,
          "name": "应用详情弹窗-x掉",
          "snapshotUrls": "https://i.gkd.li/i/26277526"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/15209619",
          "exampleUrls": "https://e.gkd.li/f89eea71-55f0-4c27-a4b0-79ac5296becd"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/15211765",
          "exampleUrls": "https://e.gkd.li/b4d9d653-a4ad-4e4f-a8f5-30b1485547b5"
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[收到]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"tvSure\"][clickable=true]",
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14345476",
          "exampleUrls": "https://m.gkd.li/57941037/8b782da0-1501-4839-a19b-92209b4d2723",
          "key": 0
        },
        {
          "matches": "[vid=\"tvSure\"][clickable=true]",
          "activityIds": ".view.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14345476",
          "exampleUrls": "https://m.gkd.li/57941037/8b782da0-1501-4839-a19b-92209b4d2723",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动点击[使用浏览器打开]",
      "desc": "下载文件页面",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"浏览器打开\"]",
          "activityIds": "info.muge.appshare.view.browser.DownloadBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14792822",
          "exampleUrls": "https://m.gkd.li/57941037/aae3c59c-8eac-452c-984e-84ee9b97e986",
          "key": 0
        },
        {
          "matches": "[text=\"浏览器打开\"]",
          "activityIds": ".view.browser.DownloadBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14792822",
          "exampleUrls": "https://m.gkd.li/57941037/aae3c59c-8eac-452c-984e-84ee9b97e986",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "@[vid=\"tvCancel\"] + [vid=\"tvUpdate\"][visibleToUser=true]",
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25123777",
          "key": 0
        },
        {
          "matches": "@[vid=\"tvCancel\"] + [vid=\"tvUpdate\"][visibleToUser=true]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25123777",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-软件详情页广告",
      "desc": "点击关闭-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "FrameLayout[childCount=3] >3 [desc^=\"dislike\"] > @View[clickable=true] <<n [id=\"info.muge.appshare:id/adContainer\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13758909",
          "exampleUrls": "https://m.gkd.li/57941037/3bc12aa2-7673-4261-9e3d-7e1605b22847"
        },
        {
          "matches": "FrameLayout[childCount=3] >2 WebView >6 @View[visibleToUser=true] > Image <<n [vid=\"adContainer\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14160959",
          "exampleUrls": "https://m.gkd.li/57941037/fefece63-2ec2-413c-a292-4583d58478fe"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14161009",
          "exampleUrls": "https://m.gkd.li/57941037/27a5eebc-a55a-466e-85f3-7642c23b4b3d"
        }
      ]
    },
    {
      "name": "功能类-自动进入应用更新界面",
      "desc": "点击[右下角火箭图标]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 9,
      "rules": [
        {
          "matches": "Button - [desc=\"应用更新\"] < @View[clickable=true] <5 View < View < View < View < ComposeView < [id=\"android:id/content\"]",
          "activityIds": "info.muge.appshare.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/32435116",
          "exampleUrls": "https://e.gkd.li/362e7d1e-d4a4-4a27-90ca-b53af995d9f8",
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
          "matches": [
            "[id=\"info.muge.appshare:id/adContainer\"] >n FrameLayout > ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]",
            "[id=\"info.muge.appshare:id/adContainer\"] >n FrameLayout[desc*=\"dislike\"]"
          ],
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13761259",
            "https://i.gkd.li/import/13712716",
            "https://i.gkd.li/import/13758909"
          ]
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": [
            "[id=\"info.muge.appshare:id/adContainer\"] >n FrameLayout > ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]",
            "[id=\"info.muge.appshare:id/adContainer\"] >n FrameLayout[desc*=\"dislike\"]"
          ],
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13761259",
            "https://i.gkd.li/import/13712716",
            "https://i.gkd.li/import/13758909"
          ]
        }
      ]
    }
  ]
});
