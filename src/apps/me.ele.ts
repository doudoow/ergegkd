// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "饿了么",
  "id": "me.ele",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text*=\"更新应用版本\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": [
            "com.afollestad.materialdialogs.MaterialDialog",
            ".application.ui.Launcher.LauncherActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12650280",
            "https://i.gkd.li/i/13206819",
            "https://i.gkd.li/i/18096620"
          ],
          "exampleUrls": "https://e.gkd.li/7a0ade81-d2f3-4174-ba6e-9976b8e7ecf5",
          "key": 0
        },
        {
          "matches": "[text*=\"更新应用版本\"] < ScrollView + [text=\"取消\"][focusable=true]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-红包弹窗",
      "desc": "关闭各类红包弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "anyMatches": [
            "@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < ViewGroup[childCount=2] < [vid=\"id_magex_mistview\"]",
            "@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < [vid=\"id_magex_mistview\"]"
          ],
          "activityIds": [
            "me.ele.component.pops2.Pops2MistDialog",
            "me.ele.component.webcontainer.view.AppUCWebActivity",
            "me.ele.application.ui.Launcher.LauncherActivity",
            "me.ele.application.ui.GeneralSettingsActivity",
            "me.ele.shopdetailv2.ShopDetailV2Activity",
            "me.ele.foodchannel.page.WMChannelNativeActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "红包弹窗1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12650238",
            "https://i.gkd.li/i/13294893",
            "https://i.gkd.li/i/13331361",
            "https://i.gkd.li/i/13362974",
            "https://i.gkd.li/i/13376008",
            "https://i.gkd.li/i/13710581",
            "https://i.gkd.li/i/15148480"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/17858192"
        },
        {
          "matches": "[desc$=\"今日红包\"] +n [desc$=\"关闭\"][clickable=true]",
          "activityIds": "me.ele.newretail.pack.ui.activity.PackActivity",
          "key": 1,
          "name": "红包弹窗2",
          "snapshotUrls": "https://i.gkd.li/i/12650713"
        },
        {
          "matches": "@ViewGroup[index=2][clickable=true][childCount=0][index=parent.childCount.minus(1)] <3 ViewGroup[childCount=3] < ViewGroup[childCount=1] < ViewGroup[vid=\"id_magex_mist_view\"]",
          "fastQuery": true,
          "key": 2,
          "name": "红包弹窗3",
          "snapshotUrls": "https://i.gkd.li/i/14472929",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/16346727",
            "https://i.gkd.li/i/17858192"
          ],
          "exampleUrls": "https://e.gkd.li/a933d63b-14b2-4c91-bdd9-0ba578da6bff"
        },
        {
          "matches": "ViewGroup[childCount=2] > @ImageView[index=1][clickable=true] <<n [id=\"me.ele:id/id_magex_mistview\"]",
          "activityIds": [
            "me.ele.component.pops2.Pops2MistDialog",
            "me.ele.component.webcontainer.view.AppUCWebActivity",
            "me.ele.application.ui.Launcher.LauncherActivity",
            "me.ele.application.ui.GeneralSettingsActivity",
            "me.ele.shopdetailv2.ShopDetailV2Activity",
            "me.ele.foodchannel.page.WMChannelNativeActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "红包弹窗1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12650238",
            "https://i.gkd.li/i/13294893",
            "https://i.gkd.li/i/13331361",
            "https://i.gkd.li/i/13362974",
            "https://i.gkd.li/i/13376008",
            "https://i.gkd.li/i/13710581",
            "https://i.gkd.li/i/15148480"
          ]
        },
        {
          "matches": "[desc$=\"今日红包\"] +(n) [desc$=\"关闭\"][clickable=true]",
          "activityIds": "me.ele.newretail.pack.ui.activity.PackActivity",
          "key": 4,
          "name": "红包弹窗2",
          "snapshotUrls": "https://i.gkd.li/i/12650713"
        },
        {
          "matches": "@ViewGroup[index=2][clickable=true] <3 ViewGroup < ViewGroup < ViewGroup[vid=\"id_magex_mist_view\"]",
          "fastQuery": true,
          "key": 5,
          "name": "红包弹窗3",
          "snapshotUrls": "https://i.gkd.li/i/14472929",
          "exampleUrls": "https://m.gkd.li/57941037/25425b3a-309d-464d-bbb5-091715675fcd"
        },
        {
          "anyMatches": [
            "@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < ViewGroup[childCount=2] < [vid=\"id_magex_mistview\"]",
            "@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < [vid=\"id_magex_mistview\"]"
          ],
          "activityIds": [
            ".component.pops2.Pops2MistDialog",
            ".component.webcontainer.view.AppUCWebActivity",
            ".application.ui.Launcher.LauncherActivity",
            ".application.ui.GeneralSettingsActivity",
            ".shopdetailv2.ShopDetailV2Activity",
            ".foodchannel.page.WMChannelNativeActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "name": "红包弹窗1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12650238",
            "https://i.gkd.li/i/13294893",
            "https://i.gkd.li/i/13331361",
            "https://i.gkd.li/i/13362974",
            "https://i.gkd.li/i/13376008",
            "https://i.gkd.li/i/13710581",
            "https://i.gkd.li/i/15148480"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/17858192"
        },
        {
          "matches": "[desc$=\"今日红包\"] +n [desc$=\"关闭\"][clickable=true]",
          "activityIds": ".newretail.pack.ui.activity.PackActivity",
          "key": 7,
          "name": "红包弹窗2",
          "snapshotUrls": "https://i.gkd.li/i/12650713"
        },
        {
          "matches": "[id=\"me.ele:id/id_magex_mistview\"] >n ViewGroup + ImageView",
          "activityIds": [
            "me.ele.component.pops2.Pops2MistDialog",
            "me.ele.component.webcontainer.view.AppUCWebActivity",
            "me.ele.application.ui.Launcher.LauncherActivity",
            "me.ele.application.ui.GeneralSettingsActivity",
            "me.ele.shopdetailv2.ShopDetailV2Activity"
          ],
          "fastQuery": true,
          "key": 8,
          "name": "红包弹窗1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12650238",
            "https://i.gkd.li/import/13294893",
            "https://i.gkd.li/import/13331361",
            "https://i.gkd.li/import/13362974",
            "https://i.gkd.li/import/13376008",
            "https://i.gkd.li/import/13710581"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-活动弹窗",
      "desc": "关闭各类全屏活动弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 [vid=\"id_magex_mistview\"][childCount=2]",
          "activityIds": [
            "me.ele.component.pops2.Pops2MistDialog",
            "me.ele.newbooking.checkout.entrypoint.WMCheckoutActivity",
            "me.ele.application.ui.Launcher.LauncherActivity",
            "me.ele.android.emagex.container.EMagexActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12726709",
            "https://i.gkd.li/i/13476719",
            "https://i.gkd.li/i/13523508",
            "https://i.gkd.li/i/13685037",
            "https://i.gkd.li/i/14050401"
          ]
        },
        {
          "matches": "[id=\"me.ele:id/fl_render_e_shop\"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13476611",
            "https://i.gkd.li/i/13523541"
          ]
        },
        {
          "matches": "ViewGroup[clickable=true] - TextView[text=\"放弃\"]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13710574",
            "https://i.gkd.li/i/13710591"
          ]
        },
        {
          "matches": "WebView >4 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [vid=\"pha_view_pager_root_view\"]",
          "activityIds": "me.ele.pha.shell.ui.ElePhaActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15443153"
        },
        {
          "matches": "@ImageView[clickable=true] <2 [vid=\"id_magex_mistview\"][childCount=2]",
          "activityIds": [
            ".component.pops2.Pops2MistDialog",
            ".newbooking.checkout.entrypoint.WMCheckoutActivity",
            ".application.ui.Launcher.LauncherActivity",
            ".android.emagex.container.EMagexActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12726709",
            "https://i.gkd.li/i/13476719",
            "https://i.gkd.li/i/13523508",
            "https://i.gkd.li/i/13685037",
            "https://i.gkd.li/i/14050401"
          ]
        },
        {
          "matches": "[vid=\"fl_render_e_shop\"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]",
          "activityIds": ".application.ui.Launcher.LauncherActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13476611",
            "https://i.gkd.li/i/13523541"
          ]
        },
        {
          "matches": "ViewGroup[clickable=true] - TextView[text=\"放弃\"]",
          "activityIds": ".application.ui.Launcher.LauncherActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13710574",
            "https://i.gkd.li/i/13710591"
          ]
        },
        {
          "matches": "WebView >4 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [vid=\"pha_view_pager_root_view\"]",
          "activityIds": ".pha.shell.ui.ElePhaActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/15443153"
        },
        {
          "matches": "@ImageView[clickable=true] - ImageView < [id=\"me.ele:id/id_magex_mistview\"][childCount=2]",
          "activityIds": [
            "me.ele.component.pops2.Pops2MistDialog",
            "me.ele.newbooking.checkout.entrypoint.WMCheckoutActivity",
            "me.ele.application.ui.Launcher.LauncherActivity",
            "me.ele.android.emagex.container.EMagexActivity"
          ],
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/import/12726709",
            "https://i.gkd.li/import/13476719",
            "https://i.gkd.li/import/13523508",
            "https://i.gkd.li/import/13685037"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-付款后弹窗广告",
      "desc": "关闭支付完成后的广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View[childCount=2] > View[childCount=2] > @Button[text=\"关闭\"][clickable=true] <<n [id=\"me.ele:id/inside_web_view\"]",
          "activityIds": "me.ele.component.pops2.TransparentAppWebActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13205301",
          "key": 0
        },
        {
          "matches": "View[childCount=2] > View[childCount=2] > @Button[text=\"关闭\"][clickable=true] <<n [vid=\"inside_web_view\"]",
          "activityIds": ".component.pops2.TransparentAppWebActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13205301",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-吃货卡续费弹窗",
      "desc": "关闭吃货卡到期续费提示弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@View[clickable=true] + View >2 [visibleToUser=true][text*=\"立即续费\"] <<n [id=\"me.ele:id/inside_web_view\"]",
          "activityIds": "me.ele.component.webcontainer.view.AppUCWebActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13295007",
          "key": 0
        },
        {
          "matches": "@View[clickable=true] + View >2 [visibleToUser=true][text*=\"立即续费\"] <<n [vid=\"inside_web_view\"]",
          "activityIds": ".component.webcontainer.view.AppUCWebActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13295007",
          "key": 1
        },
        {
          "matches": "@View[clickable=true] + View >2 [text*=\"立即续费\"][visibleToUser=true] <<n [id=\"me.ele:id/inside_web_view\"]",
          "activityIds": "me.ele.component.webcontainer.view.AppUCWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/13295007",
          "key": 2
        },
        {
          "matches": "@View + View >2 [text=\"买校园版超级吃货卡\"]",
          "key": 3
        }
      ]
    },
    {
      "name": "局部广告-首页底部浮窗广告",
      "desc": "关闭首页底部的悬浮广告",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@ViewGroup[childCount=0][clickable=true][visibleToUser=true] - ViewGroup[childCount=3] <<n [id=\"me.ele:id/id_magex_mist_view\"]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13710588",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16326917"
        },
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": ".application.ui.Launcher.LauncherActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17321305",
          "exampleUrls": "https://e.gkd.li/f706b801-44ee-4009-8082-75c9d4139065"
        },
        {
          "matches": "@ViewGroup[childCount=0][clickable=true] - ViewGroup[childCount=3] <<n [id=\"me.ele:id/id_magex_mist_view\"]",
          "key": 2
        },
        {
          "matches": "@ViewGroup[childCount=0][clickable=true][visibleToUser=true] - ViewGroup[childCount=3] <<n [vid=\"id_magex_mist_view\"]",
          "activityIds": ".application.ui.Launcher.LauncherActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13710588",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16326917"
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"去开启\"] + [id=\"me.ele:id/close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13710588"
        },
        {
          "matches": "[text=\"去开启\"] + [id=\"me.ele:id/close_tips\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13710585"
        },
        {
          "matches": "[text=\"去开启\"] + [id=\"me.ele:id/close\"]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13710588"
        },
        {
          "matches": "[text=\"去开启\"] + [id=\"me.ele:id/close_tips\"]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13710585"
        },
        {
          "matches": "[text=\"去开启\"] + [vid=\"close\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13710588"
        },
        {
          "matches": "[text=\"去开启\"] + [vid=\"close_tips\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13710585"
        }
      ]
    },
    {
      "name": "通知提示-获取订单信息通知",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "@View[visibleToUser=true] < * <2 [id=\"me.ele:id/frame_bottom_bg\"]",
          "activityIds": ".message.ui.PushMessageGuideActivity",
          "snapshotUrls": "https://i.gkd.li/i/13931205",
          "key": 0
        },
        {
          "matches": "@View[visibleToUser=true] < * <2 [id=\"me.ele:id/frame_bottom_bg\"]",
          "activityIds": "me.ele.message.ui.PushMessageGuideActivity",
          "snapshotUrls": "https://i.gkd.li/i/13931205",
          "key": 1
        },
        {
          "matches": "@View[visibleToUser=true] < * <2 [vid=\"frame_bottom_bg\"]",
          "activityIds": ".message.ui.PushMessageGuideActivity",
          "snapshotUrls": "https://i.gkd.li/i/13931205",
          "key": 2
        }
      ]
    },
    {
      "name": "评价提示-底部调研邀请卡片",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 8,
      "rules": [
        {
          "matches": [
            "[text*=\"小调研\"]",
            "[vid=\"iv_cancel\"][visibleToUser=true]"
          ],
          "activityIds": "me.ele.foodchannel.page.WMChannelNativeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14630370",
          "exampleUrls": "https://m.gkd.li/57941037/350d8f4d-8ab0-4572-8ff0-450ab4729d53",
          "key": 0
        },
        {
          "matches": [
            "[text*=\"小调研\"]",
            "[vid=\"iv_cancel\"][visibleToUser=true]"
          ],
          "activityIds": ".foodchannel.page.WMChannelNativeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14630370",
          "exampleUrls": "https://m.gkd.li/57941037/350d8f4d-8ab0-4572-8ff0-450ab4729d53",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-付款后广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "bb Button[text=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-吃货卡续费弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@View + View >2 [text=\"买校园版超级吃货卡\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-吃货卡低价专享弹窗",
      "desc": "点击x",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[vid=\"layoutFloat\"] >3 [vid=\"id_magex_mist_view\"] >3 ViewGroup[index=2][clickable=true]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "snapshotUrls": "https://i.gkd.li/i/14473000",
          "exampleUrls": "https://m.gkd.li/101449500/4efc22d1-508e-4b7a-a1c0-efd4e1637277",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-券包限量抢弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "View >2 View[childCount=2] > @View[clickable=true] > Image",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-付款后广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "bb Button[text=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页-底部浮窗广告",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "LinearLayout >n FrameLayout >n ViewGroup[childCount=3] + ViewGroup[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开启定位提醒",
      "desc": "自动点击X",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"去开启\"] + [id=\"me.ele:id/close\"]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13710588"
        },
        {
          "matches": "[text=\"去开启\"] + [id=\"me.ele:id/close_tips\"]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13710585"
        }
      ]
    },
    {
      "name": "全屏广告-通知提示-获取订单信息通知",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "@View[visibleToUser=true] < * <2 [id=\"me.ele:id/frame_bottom_bg\"]",
          "activityIds": "me.ele.message.ui.PushMessageGuideActivity",
          "snapshotUrls": "https://i.gkd.li/import/13931205",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[text*=\"更新应用版本\"] < ScrollView + [text=\"取消\"][focusable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "红包弹窗",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"me.ele:id/id_magex_mistview\"] >n ViewGroup + ImageView",
          "activityIds": [
            "me.ele.component.pops2.Pops2MistDialog",
            "me.ele.component.webcontainer.view.AppUCWebActivity",
            "me.ele.application.ui.Launcher.LauncherActivity",
            "me.ele.application.ui.GeneralSettingsActivity",
            "me.ele.shopdetailv2.ShopDetailV2Activity"
          ],
          "quickFind": true,
          "key": 0,
          "name": "红包弹窗1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12650238",
            "https://i.gkd.li/import/13294893",
            "https://i.gkd.li/import/13331361",
            "https://i.gkd.li/import/13362974",
            "https://i.gkd.li/import/13376008",
            "https://i.gkd.li/import/13710581"
          ]
        },
        {
          "matches": "[desc$=\"今日红包\"] +(n) [desc$=\"关闭\"][clickable=true]",
          "activityIds": "me.ele.newretail.pack.ui.activity.PackActivity",
          "key": 1,
          "name": "红包弹窗2",
          "snapshotUrls": "https://i.gkd.li/import/12650713"
        }
      ]
    },
    {
      "name": "活动弹窗",
      "enable": false,
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - ImageView < [id=\"me.ele:id/id_magex_mistview\"][childCount=2]",
          "activityIds": [
            "me.ele.component.pops2.Pops2MistDialog",
            "me.ele.newbooking.checkout.entrypoint.WMCheckoutActivity",
            "me.ele.application.ui.Launcher.LauncherActivity",
            "me.ele.android.emagex.container.EMagexActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12726709",
            "https://i.gkd.li/import/13476719",
            "https://i.gkd.li/import/13523508",
            "https://i.gkd.li/import/13685037"
          ]
        },
        {
          "matches": "[id=\"me.ele:id/fl_render_e_shop\"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]",
          "activityIds": [
            "me.ele.application.ui.Launcher.LauncherActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13476611",
            "https://i.gkd.li/import/13523541"
          ]
        },
        {
          "matches": "ViewGroup[clickable=true] - TextView[text=\"放弃\"]",
          "activityIds": [
            "me.ele.application.ui.Launcher.LauncherActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13710574",
            "https://i.gkd.li/import/13710591"
          ]
        }
      ]
    },
    {
      "name": "付款后广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "bb Button[text=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "吃货卡续费弹窗",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "@View + View >2 [text=\"买校园版超级吃货卡\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-底部浮窗广告",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "LinearLayout >n FrameLayout >n ViewGroup[childCount=3] + ViewGroup[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "开启定位提醒",
      "desc": "自动点击X",
      "enable": false,
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "[text=\"去开启\"] + [id=\"me.ele:id/close\"]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13710588"
        },
        {
          "matches": "[text=\"去开启\"] + [id=\"me.ele:id/close_tips\"]",
          "activityIds": "me.ele.application.ui.Launcher.LauncherActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13710585"
        }
      ]
    }
  ]
});
