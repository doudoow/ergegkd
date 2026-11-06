// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "2345天气王",
  "id": "com.tianqi2345",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@TextView[id=\"com.biz2345.adware:id/cloud_interstitial_close_tv\"][clickable=true][childCount=0] < RelativeLayout[childCount=2] < RelativeLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.biz2345.shell.activity.holder.CloudInterstitialActivity",
          "snapshotUrls": "https://i.gkd.li/i/14391796",
          "exampleUrls": "https://m.gkd.li/57941037/1535a559-f2cd-49c5-8c19-b2bc16709f55",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.biz2345.adware:id/native_express_close_iv\"] + LinearLayout > [text=\"广告\"]",
          "activityIds": "com.tianqi2345.activity.NewMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14391799",
          "exampleUrls": "https://m.gkd.li/57941037/a2ce856a-78e8-4b81-bc1f-64a5db81913f",
          "key": 0
        },
        {
          "matches": "@[id=\"com.biz2345.adware:id/native_express_close_iv\"] + LinearLayout > [text=\"广告\"]",
          "activityIds": ".activity.NewMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14391799",
          "exampleUrls": "https://m.gkd.li/57941037/a2ce856a-78e8-4b81-bc1f-64a5db81913f",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] + * > [text=\"广告\"]",
          "activityIds": "com.tianqi2345.activity.NewMainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手SDK",
          "snapshotUrls": "https://i.gkd.li/i/14391630"
        }
      ]
    },
    {
      "name": "全屏广告-首页全屏广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.biz2345.adware:id/cloud_interstitial_close_tv\"]",
          "activityIds": "com.biz2345.shell.activity.holder.CloudInterstitialActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14391631"
        }
      ]
    }
  ]
});
