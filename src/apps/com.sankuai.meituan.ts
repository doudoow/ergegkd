// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "美团",
  "id": "com.sankuai.meituan",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[vid=\"update_logo\" || text=\"立即升级\"]",
            "[vid=\"btn_close\" || text=\"暂不升级\"]"
          ],
          "activityIds": [
            "com.meituan.android.upgrade.UpgradeDialogActivity",
            "com.meituan.android.pt.homepage.activity.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/18375410",
            "https://i.gkd.li/i/23165455"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text^=\"新版本\"] - Button[id=\"com.sankuai.meituan:id/btn_close\"]",
          "key": 1
        },
        {
          "matches": "ImageView[vid=\"update_logo\"] + Button[vid=\"btn_close\"]",
          "activityIds": [
            "com.meituan.android.upgrade.ui.f",
            "com.meituan.android.upgrade.UpgradeDialogActivity",
            "com.meituan.android.pt.homepage.activity.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12614559",
            "https://i.gkd.li/i/12673132",
            "https://i.gkd.li/i/13292635",
            "https://i.gkd.li/i/18375410"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=1] > ImageView[childCount=0][visibleToUser=true]",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 0,
          "name": "美团买菜-折扣弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12639717"
        },
        {
          "matches": "@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^=\"红包已到账\"]",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 1,
          "name": "美团买菜-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12892626"
        },
        {
          "matches": "TextView[text=\"恭喜你获得以下权益\"] + ViewGroup > ImageView",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 2,
          "name": "美团买菜-支付成功后-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12646768"
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id=\"android:id/content\"]",
          "activityIds": "com.sankuai.waimai.store.poi.list.newp.PoiVerticalityHomeActivity",
          "fastQuery": true,
          "key": 3,
          "name": "超市便利-弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13694877"
        },
        {
          "matches": "View[childCount=3] > View + TextView + TextView[text=\"\"][visibleToUser=true]",
          "activityIds": "com.meituan.mmp.lib.HeraActivity",
          "key": 4,
          "name": "骑行卡-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12739204"
        },
        {
          "matches": "@ImageView[clickable=true] - * >3 [text=\"开心收下\"]",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "fastQuery": true,
          "key": 5,
          "name": "订单完成后的红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13695703"
        },
        {
          "matches": "WebView > View > View[childCount=1] >(1,2) View[childCount=2] > View + Image[text=\"\"][childCount=0][left>0][width<200]",
          "activityIds": "com.meituan.msc.modules.container.MSCActivity",
          "key": 6,
          "name": "邀请好友提现弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/14964911",
            "https://i.gkd.li/i/15400951"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/16487898",
            "https://i.gkd.li/i/20553947"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true][width <120 && width<120][childCount=0] <2 ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.meituan.android.pt.homepage.activity.MainActivity",
          "fastQuery": true,
          "key": 7,
          "name": "首页-半价神券弹窗",
          "snapshotUrls": "https://i.gkd.li/i/24842488"
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout + FrameLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "activityIds": "com.sankuai.waimai.store.poi.list.newp.PoiVerticalityHomeActivity",
          "key": 8,
          "name": "超市便利-弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13694877"
        },
        {
          "matches": "WebView > View > View[childCount=1] >(1,2) View[childCount=2] > View + Image[text=\"\"][childCount=0][left>0]",
          "activityIds": "com.meituan.msc.modules.container.MSCActivity",
          "key": 9,
          "name": "邀请好友提现弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/14964911",
            "https://i.gkd.li/i/15400951",
            "https://i.gkd.li/i/16487898"
          ]
        }
      ]
    },
    {
      "name": "评价提示-订单调查弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text=\"小调查\"]",
          "action": "back",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 0,
          "name": "我的页面-小调查",
          "snapshotUrls": "https://i.gkd.li/i/12639723"
        },
        {
          "matches": "[id=\"com.sankuai.meituan:id/questionnaireTitle\"]",
          "action": "back",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "key": 1,
          "name": "订单详情页匿名调查",
          "snapshotUrls": "https://i.gkd.li/i/13682336"
        },
        {
          "matches": "TextView[text=\"小调查\"]",
          "action": "back",
          "name": "我的页面-小调查",
          "snapshotUrls": "https://i.gkd.li/i/12639723",
          "key": 2
        },
        {
          "matches": "[id=\"com.sankuai.meituan:id/questionnaireTitle\"]",
          "action": "back",
          "name": "订单详情页匿名调查",
          "snapshotUrls": "https://i.gkd.li/i/13682336",
          "key": 3
        },
        {
          "matches": "[vid=\"questionnaireTitle\"]",
          "action": "back",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "key": 4,
          "name": "订单详情页匿名调查",
          "snapshotUrls": "https://i.gkd.li/i/13682336"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout > @ImageView + ImageView[desc=\"资质与规则\"]",
          "activityIds": [
            "com.meituan.android.pt.homepage.activity.MainActivity",
            "com.miui.home.launcher.Launcher"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12639815",
            "https://i.gkd.li/i/12639734"
          ]
        },
        {
          "matches": "[vid=\"marking_sidebar_close\"]",
          "activityIds": "com.sankuai.waimai.business.page.homepage.TakeoutActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16079638"
        },
        {
          "matches": "@ImageView[visibleToUser=true] - [text^=\"收藏店铺领\"]",
          "activityIds": "com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16632959",
          "exampleUrls": "https://e.gkd.li/20bbae61-859b-478d-9032-8213c79dec39"
        },
        {
          "matches": "@ImageView[width<80 && height<80][clickable=true] <n * < [vid=\"novel_float_view_new\"]",
          "activityIds": "com.sankuai.waimai.store.drug.home.NewDrugHomeActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/23165473"
        },
        {
          "matches": "[vid=\"live_float_view_container\"] > [vid=\"close_btn\"]",
          "activityIds": "com.sankuai.waimai.store.drug.home.NewDrugHomeActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/23165473"
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "首页/外卖界面-\"打开位置开关弹窗\"-点击右侧x关闭",
      "enable": false,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"location_close\"]",
          "activityIds": "com.meituan.android.pt.homepage.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14472663",
          "exampleUrls": "https://m.gkd.li/57941037/da856996-b128-486a-a6d4-964183b0c719"
        },
        {
          "matches": "[id=\"com.sankuai.meituan:id/location_layer_close\"]",
          "activityIds": "com.sankuai.waimai.business.page.homepage.TakeoutActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12910211",
          "exampleUrls": "https://m.gkd.li/57941037/3071d3a4-f8ca-4c6f-8aa2-cf9573dbed3d"
        },
        {
          "matches": "[text=\"定位服务尚未开启\"] +3 TextView",
          "activityIds": "com.sankuai.meituan.MPMainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14472614",
          "exampleUrls": "https://m.gkd.li/57941037/3bb08a42-5d88-4f9d-8cbe-cb913e136ec6"
        },
        {
          "matches": "[vid=\"location_layer_close\"]",
          "activityIds": "com.sankuai.waimai.business.page.homepage.TakeoutActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12910211",
          "exampleUrls": "https://m.gkd.li/57941037/3071d3a4-f8ca-4c6f-8aa2-cf9573dbed3d"
        },
        {
          "matches": "[text=\"定位服务尚未开启\"] +3 TextView",
          "activityIds": ".MPMainActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14472614",
          "exampleUrls": "https://m.gkd.li/57941037/3bb08a42-5d88-4f9d-8cbe-cb913e136ec6"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击跳过",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\" || text=\"跳过\"] -(1,2) [text^=\"开启通知\"]",
          "activityIds": "com.meituan.android.pt.homepage.activity.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13439134",
            "https://i.gkd.li/i/15047918"
          ],
          "key": 0
        },
        {
          "matches": "@[vid=\"iv_close\" || text=\"跳过\"] <n * > [text^=\"开启通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13439134",
            "https://i.gkd.li/i/15047918"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-新人返场特惠",
      "desc": "点击左上角返回",
      "enable": false,
      "matchTime": 10000,
      "key": 6,
      "rules": [
        {
          "matches": "@TextView[text=\"\"][clickable=true][childCount=0] < View[id=\"shareNav\"] <2 View < View < WebView < WebView < [vid=\"mil_container\"]",
          "activityIds": "com.meituan.android.base.knb.KNBWebViewActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13800691",
          "key": 0
        },
        {
          "matches": "[id=\"shareNav\"] > [text=\"\"]",
          "key": 1
        },
        {
          "matches": "[id=\"shareNav\"] > [text=\"\"]",
          "activityIds": "com.meituan.android.base.knb.KNBWebViewActivity",
          "matchTime": 10000,
          "snapshotUrls": "https://i.gkd.li/i/13800691",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-视频页弹窗广告",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[index=5] +n ViewGroup[clickable=true] >n [text=\"签到必得现金\"]",
          "key": 0,
          "name": "视频页-签到弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14033982",
          "excludeSnapshotUrls": "https://i.gkd.li/i/24705788"
        },
        {
          "matches": "@ImageView[visibleToUser=true] - ViewGroup[childCount=3] > [text^=\"签到成功\"]",
          "key": 1,
          "name": "视频页-领现金弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14034073"
        },
        {
          "matches": "ViewGroup[childCount=17] > ImageView[index=5]",
          "activityIds": "com.meituan.android.pt.homepage.activity.MainActivity",
          "key": 2,
          "name": "签到弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14033982"
        },
        {
          "matches": "@ImageView[visibleToUser=true] - ViewGroup[childCount=3] [text=\"看视频继续领现金\"]",
          "activityIds": "com.meituan.android.pt.homepage.activity.MainActivity",
          "key": 3,
          "name": "看视频领现金弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14034073"
        }
      ]
    },
    {
      "name": "功能类-付款后自动点击完成",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": [
            "[text=\"商家已接单\" || text=\"等待商家接单\"][visibleToUser=true]",
            "[text=\"完成\"][visibleToUser=true]"
          ],
          "activityIds": "com.sankuai.waimai.platform.machpro.container.WMMPActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14163717",
            "https://i.gkd.li/i/17158063"
          ]
        },
        {
          "matches": "[text=\"支付成功\"] >5 @[visibleToUser=true][text=\"完成\"] <<n [vid=\"mil_container\"]",
          "action": "clickCenter",
          "activityIds": "com.meituan.android.hybridcashier.HybridCashierActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14392284"
        },
        {
          "matches": [
            "[text=\"商家已接单\"][visibleToUser=true]",
            "[text=\"完成\"][visibleToUser=true]"
          ],
          "activityIds": "com.sankuai.waimai.platform.machpro.container.WMMPActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14163717"
        },
        {
          "matches": "[text=\"支付成功\"] >5 @[clickable=true][text=\"完成\"] <<n [vid=\"mil_container\"]",
          "activityIds": "com.meituan.android.hybridcashier.HybridCashierActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14392284"
        },
        {
          "matches": "@[text=\"完成\"] -n ViewGroup >(1,7) [text=\"商家已接单\" || text=\"等待商家接单\"]",
          "activityIds": "com.sankuai.waimai.platform.machpro.container.WMMPActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/14163717",
            "https://i.gkd.li/i/17158063"
          ]
        },
        {
          "matches": "[text=\"支付成功\"] >(5,7) @[visibleToUser=true][text=\"完成\"] <<n [vid=\"mil_container\"]",
          "action": "clickCenter",
          "activityIds": "com.meituan.android.hybridcashier.HybridCashierActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14392284",
            "https://i.gkd.li/i/26628762"
          ]
        }
      ]
    },
    {
      "name": "局部广告-直播讲解悬浮窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] + [text=\"正在讲解\"]",
          "activityIds": "com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17182888",
          "exampleUrls": "https://e.gkd.li/42b1d2c5-ca75-4a89-adca-9e5c4f489165",
          "key": 0
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
          "matches": "TextView[text*=\"跳过\"][text.length<8][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/28997249",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17827264"
        }
      ]
    },
    {
      "name": "全屏广告-下单后开通月付提示",
      "desc": "出现后-按[返回键]",
      "key": 11,
      "rules": [
        {
          "matches": "@[text*=\"美团月付\"][parent.childCount=6] <<n [childCount=2][getChild(1).text^=\"确认\"] <<n [text=\"支付成功\"] < WebView < [vid=\"mil_container\"]",
          "action": "back",
          "activityIds": "com.meituan.android.hybridcashier.HybridCashierActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/27426053",
            "https://i.gkd.li/i/28056764"
          ],
          "exampleUrls": "https://e.gkd.li/9f1b0006-c4c2-4234-9cea-94ee97f48ae3",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=1] > ImageView[childCount=0][visibleToUser=true]",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 0,
          "name": "美团买菜-折扣弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12639717"
        },
        {
          "matches": "@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^=\"红包已到账\"]",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 1,
          "name": "美团买菜-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12892626"
        },
        {
          "matches": "TextView[text=\"恭喜你获得以下权益\"] + ViewGroup > ImageView",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 2,
          "name": "美团买菜-支付成功后-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12646768"
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout + FrameLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "activityIds": "com.sankuai.waimai.store.poi.list.newp.PoiVerticalityHomeActivity",
          "key": 3,
          "name": "超市便利-广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13694877"
        },
        {
          "matches": "View[childCount=3] > View + TextView + TextView[text=\"\"][visibleToUser=true]",
          "activityIds": "com.meituan.mmp.lib.HeraActivity",
          "key": 4,
          "name": "骑行卡-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12739204"
        }
      ]
    },
    {
      "name": "全屏广告-订单调查弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "TextView[text=\"小调查\"]",
          "action": "back",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "name": "我的页面-小调查",
          "snapshotUrls": "https://i.gkd.li/import/12639723",
          "key": 0
        },
        {
          "matches": "[id=\"com.sankuai.meituan:id/questionnaireTitle\"]",
          "action": "back",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "name": "订单详情页匿名调查",
          "snapshotUrls": "https://i.gkd.li/import/13682336",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页右侧抽奖小广告",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "FrameLayout > @ImageView + ImageView[desc=\"资质与规则\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求开启通知权限弹窗",
      "desc": "点击跳过",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.sankuai.meituan:id/notify_open_hint_title\"] +n [id=\"com.sankuai.meituan:id/later\"]",
          "activityIds": "com.meituan.android.pt.homepage.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13439134",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-订单完成后的红包弹窗",
      "desc": "直接关闭整个模块",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.sankuai.meituan:id/module_container\"]",
          "action": "back",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "snapshotUrls": "https://i.gkd.li/import/13695703",
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
      "key": 18,
      "rules": [
        {
          "matches": "TextView[text^=\"新版本\"] - Button[id=\"com.sankuai.meituan:id/btn_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=1] > ImageView[childCount=0][visibleToUser=true]",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 0,
          "name": "美团买菜-折扣弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12639717"
        },
        {
          "matches": "@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^=\"红包已到账\"]",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 1,
          "name": "美团买菜-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12892626"
        },
        {
          "matches": "TextView[text=\"恭喜你获得以下权益\"] + ViewGroup > ImageView",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "key": 2,
          "name": "美团买菜-支付成功后-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12646768"
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout + FrameLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "activityIds": "com.sankuai.waimai.store.poi.list.newp.PoiVerticalityHomeActivity",
          "key": 3,
          "name": "超市便利-广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13694877"
        },
        {
          "matches": "View[childCount=3] > View + TextView + TextView[text=\"\"][visibleToUser=true]",
          "activityIds": "com.meituan.mmp.lib.HeraActivity",
          "key": 4,
          "name": "骑行卡-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12739204"
        }
      ]
    },
    {
      "name": "订单调查弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "TextView[text=\"小调查\"]",
          "action": "back",
          "activityIds": "com.meituan.retail.c.android.mrn.mrn.MallMrnModal",
          "name": "我的页面-小调查",
          "snapshotUrls": "https://i.gkd.li/import/12639723",
          "key": 0
        },
        {
          "matches": "[id=\"com.sankuai.meituan:id/questionnaireTitle\"]",
          "action": "back",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "name": "订单详情页匿名调查",
          "snapshotUrls": "https://i.gkd.li/import/13682336",
          "key": 1
        }
      ]
    },
    {
      "name": "首页右侧抽奖小广告",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "FrameLayout > @ImageView + ImageView[desc=\"资质与规则\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求开启通知权限弹窗",
      "desc": "点击跳过",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"com.sankuai.meituan:id/notify_open_hint_title\"] +n [id=\"com.sankuai.meituan:id/later\"]",
          "activityIds": "com.meituan.android.pt.homepage.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13439134",
          "key": 0
        }
      ]
    },
    {
      "name": "订单完成后的红包弹窗",
      "desc": "直接关闭整个模块",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "[id=\"com.sankuai.meituan:id/module_container\"]",
          "action": "back",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "snapshotUrls": "https://i.gkd.li/import/13695703",
          "key": 0
        }
      ]
    },
    {
      "name": "新人返场特惠",
      "desc": "点击右上角返回",
      "enable": false,
      "matchTime": 10000,
      "key": 25,
      "rules": [
        {
          "matches": "[id=\"shareNav\"] > [text=\"\"]",
          "key": 0
        }
      ]
    }
  ]
});
