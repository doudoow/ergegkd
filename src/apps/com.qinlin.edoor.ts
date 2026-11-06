// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "亲邻开门",
  "id": "com.qinlin.edoor",
  "groups": [
    {
      "name": "局部广告-首页顶部广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[id=\"com.qinlin.edoor:id/reaper_ad_source_layout\"]",
            "[id=\"com.qinlin.edoor:id/close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12707733",
          "key": 0
        },
        {
          "matches": [
            "[vid=\"reaper_ad_source_layout\"]",
            "[vid=\"close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12707733",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"广告\" || vid=\"interact_ad_root\"]",
            "[vid=\"iv_close\"]"
          ],
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13771774",
            "https://i.gkd.li/i/13932707"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] - [desc=\"立即领取\" || desc=\"开心收下\"]",
          "activityIds": ".MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12707736",
            "https://i.gkd.li/i/12707738"
          ]
        },
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18529948",
          "exampleUrls": "https://e.gkd.li/76e82ec7-70e5-47cb-91c2-4d00f33ef8ad"
        },
        {
          "matches": "@[desc=\"top_close_button\"] < ViewGroup <2 ViewGroup + ViewGroup >3 [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/18532541",
          "exampleUrls": "https://e.gkd.li/a9dc3648-339a-4925-91dd-730346711b0e"
        },
        {
          "matches": "@ViewGroup + ViewGroup > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/18703139",
            "https://i.gkd.li/i/18703827"
          ],
          "exampleUrls": [
            "https://e.gkd.li/517cc207-1e6c-4416-bbd1-193326879b68",
            "https://e.gkd.li/e60379ac-ee45-4f0f-bb18-5d1ffa4d9210"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/18704056",
          "exampleUrls": "https://e.gkd.li/a2685f57-ec36-44a1-9529-f10d7fb481ef"
        },
        {
          "matches": "@[id=\"com.qinlin.edoor:id/iv_close\"] - LinearLayout >n [text*=\"广告\"]",
          "fastQuery": true,
          "key": 6,
          "name": "穿山甲SDK",
          "snapshotUrls": "https://i.gkd.li/i/13771774"
        }
      ]
    },
    {
      "name": "通知提示-开门成功提示",
      "desc": "点击[好的]",
      "key": 2,
      "rules": [
        {
          "matches": "[desc^=\"开门成功\"] > [desc=\"好 的\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/18530006",
          "exampleUrls": "https://e.gkd.li/d8e9be78-a9d4-48f9-a6ee-9ed384a190b3",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开门有奖弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"开门有奖\"] +2 [desc=\"立即领取\"] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开门成功后广告弹窗",
      "desc": "来自【腾讯广告sdk】",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"interact_ad_root\"] >2 [vid=\"iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
