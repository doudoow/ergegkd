// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天天基金",
  "id": "com.eastmoney.android.fund",
  "groups": [
    {
      "name": "局部广告-自选页面广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.eastmoney.android.fund.centralis.activity.FundRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642387",
          "key": 0
        },
        {
          "matches": "FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView",
          "activityIds": ".centralis.activity.FundRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642387",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-自选页面缩写提示信息",
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"表示场内基金的最新价和折价率\"] -(2) FrameLayout < FrameLayout + ImageView",
          "activityIds": "com.eastmoney.android.fund.centralis.activity.FundRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642387",
          "key": 0
        },
        {
          "matches": "[desc=\"表示场内基金的最新价和折价率\"] -(2) FrameLayout < FrameLayout + ImageView",
          "activityIds": ".centralis.activity.FundRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642387",
          "key": 1
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
          "matches": "@FrameLayout[clickable=true] - * >2 [desc=\"立即升级\"] <<n [id=\"com.eastmoney.android.fund:id/container\"]",
          "activityIds": ".centralis.activity.FundRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/13546927",
          "key": 0
        },
        {
          "matches": "@FrameLayout[clickable=true] - * >2 [desc=\"立即升级\"]",
          "key": 1
        },
        {
          "matches": "@FrameLayout[clickable=true] - * >2 [desc=\"立即升级\"] <<n [vid=\"container\"]",
          "activityIds": ".centralis.activity.FundRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/13546927",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"container\"]",
          "activityIds": [
            "com.eastmoney.android.fund.centralis.activity.FundRootActivity",
            "com.eastmoney.android.fund.activity.FundSplashActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14149452",
            "https://i.gkd.li/i/14332091"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d",
          "key": 0
        },
        {
          "matches": "ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"container\"]",
          "activityIds": [
            ".centralis.activity.FundRootActivity",
            ".activity.FundSplashActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14149452",
            "https://i.gkd.li/i/14332091"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示-好评弹窗",
      "desc": "点击下次再说",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[desc=\"下次再说\"] <<n [vid=\"container\"]",
          "activityIds": ".centralis.activity.FundRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/14179508",
          "exampleUrls": "https://m.gkd.li/57941037/d791a2f9-ae86-4389-8ee7-36a87f11b60d",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "[desc=\"五星好评\"] - [desc=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < FrameLayout <2 FrameLayout[childCount=2] <<n [id=\"com.eastmoney.android.fund:id/container\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14149452",
          "exampleUrls": "https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 12,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true] - * >2 [desc=\"立即升级\"]",
          "key": 0
        }
      ]
    }
  ]
});
