// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "加班",
  "id": "com.xishang.jihua",
  "groups": [
    {
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][width<100 && height<100] < ViewGroup < ViewGroup < ViewGroup < ViewGroup +2 ViewGroup >3 [text=\"广告\"][visibleToUser=true]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/21480268",
            "https://i.gkd.li/i/21487176"
          ],
          "exampleUrls": "https://e.gkd.li/5a9d8d4c-a638-46d9-ab67-9b3b115b96e1"
        },
        {
          "matches": "@Image[childCount=0][width<80 && height<80] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22092803"
        }
      ]
    }
  ]
});
