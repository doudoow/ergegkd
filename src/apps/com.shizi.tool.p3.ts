// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "动漫共和国",
  "id": "com.shizi.tool.p3",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "matchRoot": true,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/22136545",
          "exampleUrls": "https://e.gkd.li/b10db699-ed34-4619-b3ca-5821321f4b58"
        },
        {
          "matches": "[vid=\"ms_skipView\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23925246",
          "exampleUrls": "https://e.gkd.li/64be8cde-d60d-4c71-ba13-4bcb78842931"
        },
        {
          "matches": "[vid=\"tobid_splash_skip_ll\"][clickable=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/22136545"
        },
        {
          "matches": "[vid=\"ms_skipView\"][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/23925246"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][clickable=true]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/30903944",
          "excludeSnapshotUrls": "https://i.gkd.li/i/30905793"
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"tobid_interstitial_skip_ll\"][visibleToUser=true]",
          "activityIds": "com.windmill.sdk.widget.InterstitialView",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23925245",
          "exampleUrls": "https://e.gkd.li/8405053f-ebb9-4915-b8c7-499fcaa953ff"
        },
        {
          "matches": "[vid=\"beizi_interstitial_ad_close_container_rl\"][visibleToUser=true]",
          "activityIds": "com.beizi.ad.internal.activity.BeiZiInterstitialActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24541547",
          "exampleUrls": "https://e.gkd.li/4ed42cae-88b2-4429-93ba-237bdf221f80"
        },
        {
          "matches": "[id$=\"ksad_auto_close_btn\"][visibleToUser=true] < LinearLayout < LinearLayout + FrameLayout >6 [text=\"广告\"]",
          "activityIds": "app.video.guoguo.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24818734",
          "exampleUrls": "https://e.gkd.li/179028f9-ae60-4286-b746-ac2f0bb7aad6"
        },
        {
          "matches": "[desc=\"不再显示\"][visibleToUser=true]",
          "activityIds": "app.video.guoguo.MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/25122774"
        },
        {
          "matches": "@[id$=\"ksad_auto_close_btn\"][visibleToUser=true] < LinearLayout < LinearLayout + FrameLayout >6 [text=\"广告\"]",
          "activityIds": "app.video.guoguo.MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/24818734",
          "exampleUrls": "https://e.gkd.li/179028f9-ae60-4286-b746-ac2f0bb7aad6"
        },
        {
          "matches": "[desc=\"不再显示\" || desc=\"top_close_button\"][visibleToUser=true]",
          "activityIds": "app.video.guoguo.MainActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/25122774",
            "https://i.gkd.li/i/25491853"
          ]
        }
      ]
    }
  ]
});
