// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "哈啰",
  "id": "com.jingyao.easybike",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView + [vid=\"contentContainer\"] >2 [text*=\"新版本\"]",
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
          "snapshotUrls": "https://i.gkd.li/i/16108173",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text*=\"开启通知\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": [
            "com.yanzhenjie.permission.PermissionActivity",
            "com.hellobike.atlas.business.portal.PortalActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13228735",
            "https://i.gkd.li/i/13402675"
          ],
          "key": 0
        },
        {
          "matches": "[text*=\"开启通知\"] < FrameLayout + FrameLayout >2 [text=\"取消\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"系统定位服务已关闭\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
          "snapshotUrls": "https://i.gkd.li/i/13228677",
          "key": 0
        },
        {
          "matches": "[text=\"系统定位服务已关闭\"] < FrameLayout +n FrameLayout >2 [text=\"取消\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"actionDialogClose\"]",
          "activityIds": [
            "com.hellobike.ads.widget.insert.dialog.HBAdvertDialog",
            "com.hellobike.atlas.business.portal.PortalActivity",
            "com.hellobike.hitch.business.homenew.HitchHomeActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12650090",
            "https://i.gkd.li/i/16503613",
            "https://i.gkd.li/i/23407810"
          ]
        },
        {
          "matches": "[id=\"com.jingyao.easybike:id/lottie_view\"] < ViewGroup + [id=\"com.jingyao.easybike:id/btn_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12650163"
        },
        {
          "matches": "[text=\"订单完成\"] >(2) View[childCount=2] > Image[id=null][clickable=true]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12684673"
        },
        {
          "matches": "[desc=\"去使用\"] + Button[text=null][visibleToUser=true]",
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12739316"
        },
        {
          "matches": "@Image[childCount=0][text!=null] - View[childCount=1] > Image[childCount=0][text!=null] <<n [vid=\"webContainer\"]",
          "activityIds": "com.hellobike.moped.platform.offline.web.OhoRealmWebActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/23415363",
          "exampleUrls": "https://e.gkd.li/c6364646-6d3c-4b2e-80b9-0b356d4cd8b7"
        },
        {
          "matches": "[vid=\"actionDialogClose\"]",
          "activityIds": [
            "com.hellobike.ads.widget.insert.dialog.HBAdvertDialog",
            "com.hellobike.atlas.business.portal.PortalActivity"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/12650090",
            "https://i.gkd.li/i/16503613"
          ]
        },
        {
          "matches": "[vid=\"actionDialogClose\"]",
          "activityIds": [
            "com.hellobike.ads.widget.insert.dialog.HBAdvertDialog",
            "com.hellobike.atlas.business.portal.PortalActivity",
            "com.hellobike.hitch.business.homenew.HitchHomeActivity",
            "com.hellobike.business.hitch.common.home.HLPHHomeActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/12650090",
            "https://i.gkd.li/i/16503613",
            "https://i.gkd.li/i/23407810",
            "https://i.gkd.li/i/29299383"
          ]
        },
        {
          "matches": "[vid=\"lottie_view\"] < ViewGroup + [vid=\"btn_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/12650163"
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.jingyao.easybike:id/closeFloatArea\"] + [id=\"com.jingyao.easybike:id/floatADContainer\"]",
          "key": 0
        },
        {
          "matches": "@[vid=\"closeFloatArea\"] + [vid=\"floatADContainer\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-新人教学弹窗",
      "desc": "点击跳过",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@View[text=\"跳过\"] <2 View <2 View <<n FrameLayout[id=\"com.jingyao.easybike:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "snapshotUrls": "https://i.gkd.li/i/13837543",
          "key": 0
        },
        {
          "matches": "@View[text=\"跳过\"] <2 View <2 View <<n FrameLayout[vid=\"h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "snapshotUrls": "https://i.gkd.li/i/13837543",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-新人教学弹窗",
      "desc": "点击跳过",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "@View[text=\"跳过\"] <2 View <2 View <<n FrameLayout[id=\"com.jingyao.easybike:id/h5_pc_container\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-悬浮窗权限",
      "desc": "点击[下次再说]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text*=\"悬浮窗\"]",
            "[vid=\"btnCancel\"]"
          ],
          "activityIds": "com.hellobike.business.hitch.common.home.HLPHHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/29299377",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-关闭公众号提醒",
      "key": 8,
      "rules": [
        {
          "matches": "[text*=\"公众号\"] - [vid=\"ivClose\"]",
          "activityIds": "com.hellobike.hitch.business.match.temp.HitchDriverTempMatchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30827751",
          "exampleUrls": "https://e.gkd.li/84f6f033-7686-439a-b50e-87a2c8409ddf",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[text*=\"开启通知\"] < FrameLayout + FrameLayout >2 [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求定位权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"系统定位服务已关闭\"] < FrameLayout +n FrameLayout >2 [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内活动、广告弹窗（大部分）",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "FrameLayout[id=\"com.jingyao.easybike:id/hbDialogLayout\"] + ImageView[id=\"com.jingyao.easybike:id/actionDialogClose\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-哈啰智能电动车-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.jingyao.easybike:id/lottie_view\"] < ViewGroup + [id=\"com.jingyao.easybike:id/btn_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-骑行订单完成-广告弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[text=\"订单完成\"] >(2) View[childCount=2] > Image[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-骑行卡-优惠券弹窗",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[desc=\"去使用\"] + Button[text=null][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[text*=\"开启通知\"] < FrameLayout + FrameLayout >2 [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求定位权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"系统定位服务已关闭\"] < FrameLayout +n FrameLayout >2 [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内活动、广告弹窗（大部分）",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "FrameLayout[id=\"com.jingyao.easybike:id/hbDialogLayout\"] + ImageView[id=\"com.jingyao.easybike:id/actionDialogClose\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "哈啰智能电动车-广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.jingyao.easybike:id/lottie_view\"] < ViewGroup + [id=\"com.jingyao.easybike:id/btn_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "右侧悬浮广告",
      "enable": false,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "@[id=\"com.jingyao.easybike:id/closeFloatArea\"] + [id=\"com.jingyao.easybike:id/floatADContainer\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "骑行订单完成-广告弹窗",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "[text=\"订单完成\"] >(2) View[childCount=2] > Image[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "骑行卡-优惠券弹窗",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "[desc=\"去使用\"] + Button[text=null][visibleToUser=true]",
          "key": 0
        }
      ]
    }
  ]
});
