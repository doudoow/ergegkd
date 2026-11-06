// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "志愿汇",
  "id": "com.zzw.october",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.zzw.october:id/interact_ad_root\"] >n ImageView[id=\"com.zzw.october:id/iv_close\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12842675"
        },
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18235996",
          "exampleUrls": "https://e.gkd.li/2033b8e2-8234-486d-ba8a-e7d140215d88"
        },
        {
          "matches": "[vid=\"beizi_interstitial_ad_close_iv\"]",
          "activityIds": "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23003165"
        },
        {
          "matches": "[vid=\"close_iv\"]",
          "activityIds": "com.beizi.ad.AdActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/23002976"
        },
        {
          "matches": "@ImageView[clickable=true][width<90 && height<90] - [text=\"反馈\"]",
          "activityIds": "com.octopus.ad.AdActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/23021515"
        },
        {
          "matches": "[vid=\"interact_ad_root\"] >n ImageView[vid=\"iv_close\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12842675"
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "anyMatches": [
            "[vid=\"dialog_de\"][visibleToUser=true]",
            "[text=\"以后再说\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".MainActivity",
            ".LaunchActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19485921",
            "https://i.gkd.li/i/19535009"
          ],
          "exampleUrls": "https://e.gkd.li/f80b0ecb-a704-495d-9afc-c1ffcba2108f",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-志愿者保险提示弹窗",
      "desc": "点击[暂不领取]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"暂不领取\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19485920",
          "exampleUrls": "https://e.gkd.li/fe4b163a-bb6c-4337-b095-4bdf1219e9b2",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-浮标广告",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"channel_banner_close_iv\"]",
          "activityIds": "com.zzw.october.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23003170",
          "key": 0
        },
        {
          "matches": "[vid=\"channel_banner_close_iv\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23003170",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-主页广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.zzw.october:id/interact_ad_root\"] >n ImageView[id=\"com.zzw.october:id/iv_close\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12842675",
            "https://i.gkd.li/i/12869369"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-我的",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout > ImageView[text=null]",
          "snapshotUrls": "https://i.gkd.li/import/14661569",
          "key": 0
        },
        {
          "matches": "@ImageView < FrameLayout[id=\"com.zzw.october:id/fl_close\"] < [id=\"com.zzw.october:id/dialog_root\"]",
          "snapshotUrls": "https://i.gkd.li/i/32597470",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-主页广告",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.zzw.october:id/interact_ad_root\"] >n ImageView[id=\"com.zzw.october:id/iv_close\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12842675",
            "https://i.gkd.li/import/12869369"
          ]
        },
        {
          "matches": "@ImageView < FrameLayout - FrameLayout > TextView[text=\"进入小程序\"] - FrameLayout > [text=\"上滑或点击按钮查看详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/32597173",
          "key": 1
        }
      ]
    },
    {
      "name": "主页广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.zzw.october:id/interact_ad_root\"] >n ImageView[id=\"com.zzw.october:id/iv_close\"]",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12842675",
            "https://i.gkd.li/import/12869369"
          ]
        }
      ]
    }
  ]
});
