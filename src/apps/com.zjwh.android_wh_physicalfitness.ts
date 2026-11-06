// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "运动世界",
  "id": "com.zjwh.android_wh_physicalfitness",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\" || vid=\"ad_close\"][clickable=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673231",
            "https://i.gkd.li/i/12673523",
            "https://i.gkd.li/i/13166472",
            "https://i.gkd.li/i/22437128",
            "https://i.gkd.li/i/22449070",
            "https://i.gkd.li/i/22495266",
            "https://i.gkd.li/i/22495298",
            "https://i.gkd.li/i/22495361",
            "https://i.gkd.li/i/22508959"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".activity.HomeActivity",
            ".mvi.home.HomeActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17355585",
          "exampleUrls": "https://e.gkd.li/a7753ec9-5382-42ee-9a41-b4e2b61b9050"
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1][visibleToUser=true] < ViewGroup <n ViewGroup <n ViewGroup  >n [text=\"广告\"]",
          "activityIds": [
            ".activity.HomeActivity",
            ".ui.AdActivity",
            ".mvi.home.HomeActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12826124",
            "https://i.gkd.li/i/13228216",
            "https://i.gkd.li/i/13601132",
            "https://i.gkd.li/i/22427117"
          ],
          "exampleUrls": "https://e.gkd.li/cb21dc41-bcca-47ec-ae0a-df9aedde48b5"
        },
        {
          "matches": "@ImageView[clickable=true][width<110 && height<110] - RelativeLayout >(1,2) [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13554229",
            "https://i.gkd.li/i/22960459"
          ],
          "exampleUrls": "https://e.gkd.li/6882bcf4-1aa1-47e1-b7ad-299d4aa7bfd9"
        },
        {
          "matches": "@[text=\"跳过\"][clickable=true] +3 RelativeLayout >2 [text=\"点击跳转至第三方页面\"]",
          "activityIds": "com.zjwh.android_wh_physicalfitness.activity.SplashActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12673349"
        },
        {
          "matches": "@ImageView[childCount=0] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": [
            ".activity.HomeActivity",
            ".mvi.home.HomeActivity"
          ],
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/17378546",
            "https://i.gkd.li/i/23145860"
          ],
          "exampleUrls": "https://e.gkd.li/2debed48-37f2-43ec-8b0f-3a5e06c23ed1"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".activity.HomeActivity",
            ".mvi.home.HomeActivity",
            ".mvi.notice.NoticeListActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/17358027",
            "https://i.gkd.li/i/23206013",
            "https://i.gkd.li/i/23455815"
          ],
          "exampleUrls": "https://e.gkd.li/f640d0c2-197d-45ef-98ff-58a04920bd2d"
        },
        {
          "matches": "@Image[childCount=0][width<80 && height<80] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/22946236"
        },
        {
          "matches": "@ImageView[clickable=true][width<100 && height<100] <2 RelativeLayout < RelativeLayout < RelativeLayout < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/22946242"
        },
        {
          "matches": "@Image[text=\"\"][childCount=0][width<70 && height<70] < View[childCount=1] + * >2 [childCount=0][text=\"淘宝精选广告\"] <<n [vid=\"fl_native\"]",
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/23254520"
        },
        {
          "matches": "@[desc=\"top_close_button\"][clickable=true] < * + * > [text=\"广告\"]",
          "activityIds": ".mvi.me.VipPayActivity",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/23255102"
        },
        {
          "matches": "[vid=\"iv_close\" || vid=\"ad_close\"][clickable=true]",
          "fastQuery": true,
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673231",
            "https://i.gkd.li/i/12673523",
            "https://i.gkd.li/i/13166472",
            "https://i.gkd.li/i/22437128",
            "https://i.gkd.li/i/22449070",
            "https://i.gkd.li/i/22495266",
            "https://i.gkd.li/i/22495298",
            "https://i.gkd.li/i/22495361",
            "https://i.gkd.li/i/22508959"
          ]
        },
        {
          "matches": "@[text=\"跳过\"][clickable=true] +3 RelativeLayout >2 [text=\"点击跳转至第三方页面\"]",
          "activityIds": ".activity.SplashActivity",
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/12673349"
        },
        {
          "matches": "@ImageView[childCount=0] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": [
            ".activity.HomeActivity",
            ".mvi.home.HomeActivity",
            ".mvi.run.RunHistoryDetailActivity"
          ],
          "fastQuery": true,
          "key": 13,
          "snapshotUrls": [
            "https://i.gkd.li/i/17378546",
            "https://i.gkd.li/i/23145860",
            "https://i.gkd.li/i/25904078"
          ],
          "exampleUrls": "https://e.gkd.li/2debed48-37f2-43ec-8b0f-3a5e06c23ed1"
        },
        {
          "matches": "@Image[childCount=0][width<80 && height<80] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [visibleToUser=true][text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 14,
          "snapshotUrls": "https://i.gkd.li/i/22946236"
        },
        {
          "matches": "@[desc=\"top_close_button\"][clickable=true] <<n * + * >(1,3) [text=\"广告\"]",
          "fastQuery": true,
          "key": 15,
          "snapshotUrls": [
            "https://i.gkd.li/i/23255102",
            "https://i.gkd.li/i/32145596"
          ]
        },
        {
          "matches": "@ImageView[visibleToUser=true][width<100 && height<100] < * < [childCount=1] < ViewGroup <2 [childCount=2] >6 [text*=\"落地页\" || text*=\"三方APP\"]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
            "com.byazt.qde.Stub_Standard_Portrait_Activity",
            "com.byazt.cef.Stub_Standard_Portrait_Activity"
          ],
          "fastQuery": true,
          "key": 16,
          "name": "字节-关闭悬浮球可继续浏览应用",
          "snapshotUrls": [
            "https://i.gkd.li/i/28790670",
            "https://i.gkd.li/i/28834493",
            "https://i.gkd.li/i/33345377"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n * +n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text*=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 17,
          "snapshotUrls": "https://i.gkd.li/i/32145803"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<110 && height<110] + RelativeLayout >(2,3) [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 18,
          "snapshotUrls": [
            "https://i.gkd.li/i/33430048",
            "https://i.gkd.li/i/33430738",
            "https://i.gkd.li/i/34107321"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] + ImageView[clickable=true] + [text=\"点击或滑动查看奖励\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 19,
          "snapshotUrls": "https://i.gkd.li/i/33430738"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<110 && height<110] - [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 20,
          "snapshotUrls": "https://i.gkd.li/i/33430746"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] <<n * >4 [text=\"广告\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/22387192",
            "https://i.gkd.li/i/22656913",
            "https://i.gkd.li/i/22863607",
            "https://i.gkd.li/i/23087561"
          ],
          "exampleUrls": "https://e.gkd.li/ca109fa3-5a7a-400d-911b-36dd8ac42656"
        },
        {
          "matches": "@Image[childCount=0] < [childCount=1] <n * - * >3 [childCount=0][text=\"广告\"] <<n [vid=\"fl_native\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22585927"
        },
        {
          "matches": "[vid=\"ksad_ad_dislike\"]",
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23054142"
        },
        {
          "matches": "@ImageView[width<70 && height<70][childCount=0] < FrameLayout[childCount=1] - * > TextView[childCount=0][text.length>0] <<n [vid=\"fl_native\"]",
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/23289399",
            "https://i.gkd.li/i/23289402"
          ]
        },
        {
          "matches": "@[id=\"com.kwad.dy.sdk:id/ksad_ad_dislike\"][clickable=true] - * >2 [text=\"广告\"]",
          "activityIds": "com.zjwh.android_wh_physicalfitness.mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/23773011"
        },
        {
          "matches": "[vid=\"ksad_ad_dislike\" || vid=\"tianmu_suspend_iv_close\"]",
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/23054142",
            "https://i.gkd.li/i/26307793"
          ]
        },
        {
          "matches": "@[id=\"com.kwad.dy.sdk:id/ksad_ad_dislike\"][clickable=true] - * >2 [text=\"广告\"]",
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/23773011"
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "desc": "点击关闭-不感兴趣",
      "key": 2,
      "rules": [
        {
          "matches": "@Image[childCount=0][width<70&&height<70][id=null][text=\"\"][desc=null] < View[childCount=1][parent.childCount!=2] <n View <n View >n [childCount=0][text=\"广告\"] <<n [vid=\"fl_native\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/22514469",
            "https://i.gkd.li/i/22691578",
            "https://i.gkd.li/i/22798099"
          ]
        },
        {
          "matches": "@TextView[text=\"···\"][visibleToUser=true] <n * >3 [childCount=0][text=\"广告\"] <<n [vid=\"fl_native\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/22861405",
            "https://i.gkd.li/i/23451517"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": [
            0,
            1
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22514499",
            "https://i.gkd.li/i/22691590"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "通知提示-公告",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[vid=\"dialog_close\"] +n [text*=\"公告\"]",
          "activityIds": [
            ".mvi.home.HomeActivity",
            ".mvi.splash.AdActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/22526467",
            "https://i.gkd.li/i/23883452"
          ]
        },
        {
          "matches": "[vid=\"iv\"] + [vid=\"iv_cancel\"]",
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23205159"
        }
      ]
    },
    {
      "name": "权限提示-不开启可选权限",
      "desc": "点击[暂不开启，继续跑步]",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"必要权限未开启！\" || text^=\"当前必要权限不完整\"]",
            "[text^=\"暂不开启\"]"
          ],
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/23054372",
            "https://i.gkd.li/i/23054373"
          ]
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text=\"定位服务未开启\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": ".mvi.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23096707",
          "exampleUrls": "https://e.gkd.li/3be509e1-0663-4989-b763-6d68d88979fe",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-优量汇广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "ImageView - RelativeLayout >(3-n) [id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673231",
            "https://i.gkd.li/i/12673523",
            "https://i.gkd.li/i/13166472"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-百青藤广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@[text=\"跳过\"][clickable=true] +(3) RelativeLayout >(2) [text=\"点击跳转至第三方页面\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673349"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-快手广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_splash_root_container\"] >n ViewGroup > [text=\"跳过\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12673495"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] >n ViewGroup > @ViewGroup[clickable=true] > ImageView",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12826112",
            "https://i.gkd.li/i/12826124"
          ]
        },
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/ksad_tk_view\"] >n ViewGroup > @ViewGroup[childCount=1] > ImageView",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13228216",
            "https://i.gkd.li/i/13601132"
          ]
        }
      ]
    },
    {
      "name": "未分类-百度广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView - RelativeLayout[childCount=9]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-第三方SDK广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/ad_flag_source_layout\"] + [id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673476"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-运动页面自动切换至校园跑",
      "key": 11,
      "rules": [
        {
          "matches": [
            "[text=\"学校要求\"][visibleToUser=false]",
            "[text=\"校园跑\"][visibleToUser=true][clickable=true]"
          ],
          "activityIds": "com.zjwh.android_wh_physicalfitness.mvi.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28789636",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28789633",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-优量汇广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "ImageView - RelativeLayout >(3-n) [id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673231",
            "https://i.gkd.li/import/12673523",
            "https://i.gkd.li/import/13166472"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-百青藤广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "@[text=\"跳过\"][clickable=true] +(3) RelativeLayout >(2) [text=\"点击跳转至第三方页面\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673349"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-快手广告",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_splash_root_container\"] >n ViewGroup > [text=\"跳过\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12673495"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] >n ViewGroup > @ViewGroup[clickable=true] > ImageView",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12826112",
            "https://i.gkd.li/import/12826124"
          ]
        },
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/ksad_tk_view\"] >n ViewGroup > @ViewGroup[childCount=1] > ImageView",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13228216",
            "https://i.gkd.li/import/13601132"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-百度广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 15,
      "rules": [
        {
          "matches": "@ImageView - RelativeLayout[childCount=9]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-第三方SDK广告",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/ad_flag_source_layout\"] + [id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673476"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "优量汇广告",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "ImageView - RelativeLayout >(3-n) [id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673231",
            "https://i.gkd.li/import/12673523",
            "https://i.gkd.li/import/13166472"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "百青藤广告",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "@[text=\"跳过\"][clickable=true] +(3) RelativeLayout >(2) [text=\"点击跳转至第三方页面\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673349"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "快手广告",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_splash_root_container\"] >n ViewGroup > [text=\"跳过\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12673495"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] >n ViewGroup > @ViewGroup[clickable=true] > ImageView",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12826112",
            "https://i.gkd.li/import/12826124"
          ]
        },
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/ksad_tk_view\"] >n ViewGroup > @ViewGroup[childCount=1] > ImageView",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13228216",
            "https://i.gkd.li/import/13601132"
          ]
        }
      ]
    },
    {
      "name": "百度广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 20,
      "rules": [
        {
          "matches": "@ImageView - RelativeLayout[childCount=9]",
          "key": 0
        }
      ]
    },
    {
      "name": "第三方SDK广告",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/ad_flag_source_layout\"] + [id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673476"
          ],
          "key": 0
        }
      ]
    }
  ]
});
