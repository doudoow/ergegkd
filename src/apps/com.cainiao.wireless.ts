// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "菜鸟",
  "id": "com.cainiao.wireless",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "关闭首页和物流页面的全屏推广弹窗",
      "enable": false,
      "forcedTime": 10000,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"draw_dialog_iv_close\" || vid=\"package_import_ad_dialog_iv_close\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "forcedTime": 10000,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16118156",
            "https://i.gkd.li/i/22570634"
          ]
        },
        {
          "matches": "View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13042279"
        },
        {
          "matches": "View[clickable=true] > @[text=\"关闭\"] + [visibleToUser=true][text=\"活动\"] <<n [vid=\"browser_fragment_layout\"]",
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14033859"
        },
        {
          "matches": "[vid=\"dialog_full_image_close\"]",
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13842492"
        },
        {
          "matches": "@[text=\"关闭\"] + [visibleToUser=true][text=\"活动\"] <<n [vid=\"browser_fragment_layout\"]",
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14033859"
        },
        {
          "matches": "[vid=\"cn_bottom_sheet_close\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16118155"
        },
        {
          "matches": "[desc=\"恭喜你获得\" || desc=\"你想买的\"] - @ImageView[id=null][text=null][clickable=true][visibleToUser=true][width<150&&height<150] <2 FrameLayout <2 FrameLayout < FrameLayout < [vid=\"fl_guide_ad_get_reward_dialog_dx_container\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/22441306",
            "https://i.gkd.li/i/22570632"
          ]
        },
        {
          "matches": "Image[childCount=0][width<100 && height<100] < @View[clickable=true][childCount=1] - Image[childCount=0][text=\"超时享\"] <<n [vid=\"browser_fragment_layout\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/24099845"
        },
        {
          "matches": "[vid=\"draw_dialog_iv_close\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "forcedTime": 10000,
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/16118156"
        },
        {
          "matches": "View[clickable=true] > @[text=\"关闭\"] + [visibleToUser=true][text=\"活动\"] <<n [vid=\"browser_fragment_layout\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/14033859"
        },
        {
          "matches": "[vid=\"dialog_full_image_close\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/13842492"
        },
        {
          "matches": "@[text=\"关闭\"] + [visibleToUser=true][text=\"活动\"] <<n [vid=\"browser_fragment_layout\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 11,
          "snapshotUrls": "https://i.gkd.li/i/14033859"
        },
        {
          "matches": "@Image[clickable=true][width<100 && height<100] +3 * > [childCount=0][text=\"开心收下\"] <<n [vid=\"browser_fragment_layout\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "fastQuery": true,
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/28173171"
        },
        {
          "matches": "[vid=\"draw_dialog_iv_close\" || vid=\"package_import_ad_dialog_iv_close\"]",
          "fastQuery": true,
          "key": 13,
          "snapshotUrls": [
            "https://i.gkd.li/import/14162087",
            "https://i.gkd.li/import/14162238",
            "https://i.gkd.li/i/16118156",
            "https://i.gkd.li/i/22570634"
          ]
        },
        {
          "matches": "View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]",
          "key": 14,
          "snapshotUrls": "https://i.gkd.li/import/13042279"
        },
        {
          "matches": "[vid=\"dialog_full_image_close\"]",
          "fastQuery": true,
          "key": 15,
          "snapshotUrls": "https://i.gkd.li/import/13842492"
        },
        {
          "matches": "View[childCount=2][clickable=true] > [text=\"关闭\"]",
          "key": 16,
          "snapshotUrls": "https://i.gkd.li/import/14033859"
        },
        {
          "matches": [
            "[text^=\"好友代取\"]",
            "[text=\"下次再说\"][clickable=true]"
          ],
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 17,
          "name": "好友代取功能提示",
          "snapshotUrls": "https://i.gkd.li/i/23787455"
        },
        {
          "matches": "[id=\"com.cainiao.wireless:id/draw_dialog_iv_close\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "fastQuery": true,
          "key": 18,
          "snapshotUrls": [
            "https://i.gkd.li/import/12914371",
            "https://i.gkd.li/import/13692758"
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
          "matches": "View[desc=\"立即查看\"] +2 ImageView[id=null]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12914450"
        },
        {
          "matches": "[vid=\"iv_banner_close\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15879126"
        },
        {
          "matches": "FrameLayout[childCount=8] > @FrameLayout[clickable=true][childCount=0][text=null] + ImageView[childCount=0][text=null] <<n [vid=\"layout_root\"]",
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16024305",
            "https://i.gkd.li/i/16518502"
          ]
        },
        {
          "matches": "[vid=\"home_task_action_close\"]",
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16024305"
        },
        {
          "matches": "FrameLayout[childCount=8] > @FrameLayout[clickable=true][childCount=0][text=null] + ImageView[childCount=0][text=null] <<n [vid=\"layout_root\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/16024305",
            "https://i.gkd.li/i/16518502"
          ]
        },
        {
          "matches": "[vid=\"home_task_action_close\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16024305"
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
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"确认\"] - [text=\"取消\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "snapshotUrls": "https://i.gkd.li/i/13042207",
          "key": 0
        },
        {
          "matches": "[text=\"确认\"] - [text=\"取消\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.cainiao.wireless:id/gg_dialog_base_close\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"gg_dialog_base_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"好评\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-询问[是否要查询包裹]弹窗",
      "desc": "点击[立即查看]",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"立即查看\"] < * - * >2 [text=\"您是否要查询包裹\"]",
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14913359",
          "exampleUrls": "https://m.gkd.li/57941037/eb48e137-66c3-4777-b65e-8f4f6b3bc4ee",
          "key": 0
        },
        {
          "matches": "@[text=\"立即查看\"] < * - * >2 [text=\"您是否要查询包裹\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14913359",
          "exampleUrls": "https://m.gkd.li/57941037/eb48e137-66c3-4777-b65e-8f4f6b3bc4ee",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-包裹页面-自动展开更多物流信息",
      "desc": "点击[展开]",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@[clickable=true] > View[desc=\"展开\"] <<n LinearLayout[vid=\"layout_root\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15879126",
          "key": 0
        },
        {
          "matches": "@[clickable=true] > View[desc=\"展开\"] <<n LinearLayout[vid=\"layout_root\"]",
          "snapshotUrls": "https://i.gkd.li/i/15879126",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-好友代取功能提示",
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text^=\"好友代取\"]",
            "[text=\"下次再说\"][clickable=true]"
          ],
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23787455",
          "key": 0
        },
        {
          "matches": [
            "[text^=\"好友代取\"]",
            "[text=\"下次再说\"][clickable=true]"
          ],
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23787455",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-超时享服务",
      "desc": "x掉",
      "key": 8,
      "rules": [
        {
          "matches": "[desc^=\"激活超时享服务\"] -2 @[clickable=true] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"package_dx_container\"]",
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29924327",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "关闭首页底部横幅、地图底部广告、物流页面横条广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "View[desc=\"立即查看\"] +2 ImageView[id=null]",
          "key": 0,
          "name": "地图底部横条广告",
          "snapshotUrls": "https://i.gkd.li/import/14162159"
        },
        {
          "matches": "[vid=\"iv_banner_close\"]",
          "fastQuery": true,
          "key": 1,
          "name": "物流信息底部横条广告",
          "snapshotUrls": "https://i.gkd.li/i/15879126"
        },
        {
          "matches": "[vid=\"home_task_action_close\"]",
          "fastQuery": true,
          "key": 2,
          "name": "首页底部横条广告",
          "snapshotUrls": "https://i.gkd.li/i/16028234"
        },
        {
          "matches": "FrameLayout[childCount=8] > @FrameLayout[clickable=true][childCount=0][text=null] + ImageView[childCount=0][text=null] <<n [vid=\"layout_root\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/16024305",
            "https://i.gkd.li/i/16518502"
          ]
        },
        {
          "matches": "[desc^=\"激活超时享服务\"] -2 @[clickable=true] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"package_dx_container\"]",
          "fastQuery": true,
          "key": 4,
          "name": "超时享服务",
          "snapshotUrls": "https://i.gkd.li/i/29924327"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 10,
      "rules": [
        {
          "anyMatches": [
            "@View + TextView[index=parent.childCount.minus(1)] <n FrameLayout <n FrameLayout < FrameLayout[id=\"com.cainiao.wireless:id/fl_third_splash_container\"]",
            "TextView[text^=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/19222366",
            "https://i.gkd.li/i/21750819",
            "https://i.gkd.li/i/19477428",
            "https://i.gkd.li/i/21913724"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-包裹页面-地图底部横条广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "View[desc=\"立即查看\"] +2 ImageView[id=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-开启消息弹窗",
      "desc": "自动点击关闭。",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.cainiao.wireless:id/gg_dialog_base_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求好评弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"好评\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-今日手气红包",
      "desc": "点击右上角X",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[vid=\"dialog_full_image_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.cainiao.wireless:id/draw_dialog_iv_close\"]",
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12914371",
            "https://i.gkd.li/import/13692758"
          ]
        },
        {
          "matches": "View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13042279"
        }
      ]
    },
    {
      "name": "包裹页面-地图底部横条广告",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "View[desc=\"立即查看\"] +2 ImageView[id=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级提示",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "[text=\"确认\"] - [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开启消息弹窗",
      "desc": "自动点击关闭。",
      "enable": false,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.cainiao.wireless:id/gg_dialog_base_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求好评弹窗",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"好评\"]",
          "key": 0
        }
      ]
    }
  ]
});
