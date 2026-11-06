// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "飞鸟听书",
  "id": "cn.ms.pages",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13450787"
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "activityIds": "cn.ms.pages.ActivityLingPai",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16136277"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "activityIds": "cn.ms.pages.ActivityLingPai",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16136271"
        },
        {
          "matches": "[text=\"反馈\"] +3 View > [text$=\"跳过\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16136260"
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "activityIds": ".ActivityLingPai",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16136277"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "activityIds": ".ActivityLingPai",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16136271"
        }
      ]
    },
    {
      "name": "分段广告-看视频得奖励广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@RelativeLayout[childCount=0][clickable=true] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16136235",
          "exampleUrls": "https://m.gkd.li/57941037/fd1ff96e-6d17-4738-a2f1-3648169ce53c"
        },
        {
          "matches": "[text=\"坚持退出\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16136240",
          "exampleUrls": "https://m.gkd.li/57941037/f09986f3-6dc6-4067-9136-ac6aa0afad3f"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13450787"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13450787"
        }
      ]
    }
  ]
});
