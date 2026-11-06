// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百词斩",
  "id": "com.jiongji.andriod.card",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeActivityIds": "com.baicizhan.client.business.webview.ui.BczWebActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/21705324",
          "excludeSnapshotUrls": "https://i.gkd.li/i/21705338",
          "exampleUrls": "https://e.gkd.li/8612bbae-7a50-4730-8071-1c47e35c27ca",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] -2 [text=\"反馈\"]",
          "activityIds": "com.baicizhan.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13415075",
          "key": 0
        },
        {
          "matches": "[text=\"反馈\"] + ImageView + ImageView[childCount=0][clickable=true]",
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
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"抢先体验\"] - [text=\"取消\"]",
          "activityIds": "com.baicizhan.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13488652",
          "key": 0
        },
        {
          "matches": "[text=\"抢先体验\"] - [text=\"取消\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-关闭顶栏提醒",
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"word_plan_tab\"] > FrameLayout[index=2] >2 TextView[text!=null] + ImageView[clickable=true][childCount=0][index=parent.childCount.minus(1)]",
          "activityIds": "com.baicizhan.main.activity.MainTabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/24887224",
            "https://i.gkd.li/i/24983406"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-活动弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"反馈\"] + ImageView + ImageView[childCount=0][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"抢先体验\"] - [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "活动弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"反馈\"] + ImageView + ImageView[childCount=0][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"抢先体验\"] - [text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
