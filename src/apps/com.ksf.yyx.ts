// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OMOFUN",
  "id": "com.ksf.yyx",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_splash_circle_skip_view\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12775918"
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_splash_root_container\"] [childCount=3] > @ImageView[clickable=true] - [text=\"|\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12775919"
        },
        {
          "matches": "[text^=\"跳过 \"][text.length<=4][clickable=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12775926"
        },
        {
          "matches": "FrameLayout > FrameLayout > [text^=\"跳过 \"][text.length<=4][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12775926",
          "key": 3
        },
        {
          "matches": "[vid=\"ksad_splash_circle_skip_view\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12775918"
        },
        {
          "matches": "[vid=\"ksad_splash_root_container\"] [childCount=3] > @ImageView[clickable=true] - [text=\"|\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12775919"
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"了解更多\"] - [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775920",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-插屏广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] [text=\"跳过\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12775922"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12775923"
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12775925",
            "https://i.gkd.li/i/12775924"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903"
          ]
        },
        {
          "matches": "[vid=\"ksad_container\"] [text=\"跳过\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12775922"
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/import/12775922",
          "key": 5
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] TextView[text=\"广告\"] <2 ViewGroup -n ViewGroup[childCount=1] > @ViewGroup[childCount=1 && clickable=true] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775923",
            "https://i.gkd.li/import/12998899"
          ],
          "key": 6
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775925",
            "https://i.gkd.li/import/12775924"
          ],
          "key": 7
        },
        {
          "matches": "[text^=\"去\"][text$=\"看看\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775921",
            "https://i.gkd.li/import/12776903"
          ],
          "key": 8
        },
        {
          "matches": "TextView[text=\"查看详情\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout > FrameLayout > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12789196",
          "key": 9
        },
        {
          "matches": "TextView[text=\"立即下载\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12789928",
          "key": 10
        }
      ]
    },
    {
      "name": "未分类-首页通知",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"了解更多\"] - [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775920",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-插屏广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775922",
          "key": 0
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] TextView[text=\"广告\"] <2 ViewGroup -n ViewGroup[childCount=1] > @ViewGroup[childCount=1 && clickable=true] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775923",
            "https://i.gkd.li/i/12998899"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775925",
            "https://i.gkd.li/i/12775924"
          ],
          "key": 2
        },
        {
          "matches": "[text^=\"去\"][text$=\"看看\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903"
          ],
          "key": 3
        },
        {
          "matches": "TextView[text=\"查看详情\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout > FrameLayout > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12789196",
          "key": 4
        },
        {
          "matches": "TextView[text=\"立即下载\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12789928",
          "key": 5
        }
      ]
    },
    {
      "name": "全屏广告-首页通知",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[desc=\"了解更多\"] - [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/import/12775920",
          "key": 0
        }
      ]
    },
    {
      "name": "首页通知",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[desc=\"了解更多\"] - [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/import/12775920",
          "key": 0
        }
      ]
    },
    {
      "name": "插屏广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/import/12775922",
          "key": 0
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] TextView[text=\"广告\"] <2 ViewGroup -n ViewGroup[childCount=1] > @ViewGroup[childCount=1 && clickable=true] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775923",
            "https://i.gkd.li/import/12998899"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775925",
            "https://i.gkd.li/import/12775924"
          ],
          "key": 2
        },
        {
          "matches": "[text^=\"去\"][text$=\"看看\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775921",
            "https://i.gkd.li/import/12776903"
          ],
          "key": 3
        },
        {
          "matches": "TextView[text=\"查看详情\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout > FrameLayout > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12789196",
          "key": 4
        },
        {
          "matches": "TextView[text=\"立即下载\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/12789928",
          "key": 5
        }
      ]
    }
  ]
});
