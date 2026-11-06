// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "真不卡",
  "id": "com.xiaolan.tv.chat",
  "groups": [
    {
      "name": "通知提示-温馨提示弹窗",
      "desc": "点击[确定]",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"确定\"][visibleToUser=true]",
          "activityIds": "com.xiaolan.tv.chat.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15484133",
          "exampleUrls": "https://m.gkd.li/57941037/884dc3b4-e60d-4b21-90c9-a68b96632070"
        },
        {
          "matches": "[desc=\"我知道了\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": "com.xiaolan.tv.chat.MainActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16476930",
          "exampleUrls": "https://e.gkd.li/fe0403ee-0ffb-4921-a06a-ccefa5c26bcc"
        },
        {
          "matches": "[desc=\"确定\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15484133",
          "exampleUrls": "https://m.gkd.li/57941037/884dc3b4-e60d-4b21-90c9-a68b96632070"
        },
        {
          "matches": "[desc=\"我知道了\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16476930",
          "exampleUrls": "https://e.gkd.li/fe0403ee-0ffb-4921-a06a-ccefa5c26bcc"
        }
      ]
    },
    {
      "name": "分段广告-看视频领奖励广告",
      "desc": "点击关闭-点击[放弃奖励离开]",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < FrameLayout -2 * > [text*=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15484070"
        },
        {
          "matches": "[text=\"放弃奖励离开\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15484521"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "@[desc$=\"dislike\"][clickable=true] <2 FrameLayout +4 [text=\"立即下载\"]",
          "activityIds": "com.xiaolan.tv.chat.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16476931",
          "exampleUrls": "https://e.gkd.li/ff11b8f3-16d8-4613-a113-827f6389c30e",
          "key": 0
        },
        {
          "matches": "@[desc$=\"dislike\"][clickable=true] <2 FrameLayout +4 [text=\"立即下载\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16476931",
          "exampleUrls": "https://e.gkd.li/ff11b8f3-16d8-4613-a113-827f6389c30e",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"反馈\"] + @View[childCount=1] > Image[childCount=0][text=\"\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": "https://i.gkd.li/i/16476933",
          "exampleUrls": "https://e.gkd.li/bbb19188-567d-4e5c-8ffd-f9576b5e1188",
          "key": 0
        }
      ]
    }
  ]
});
