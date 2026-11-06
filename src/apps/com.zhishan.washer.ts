// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "悠洗",
  "id": "com.zhishan.washer",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"反馈\"] + View[text=\"\"][childCount=1] > Image[text=\"\"][childCount=0][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17002026",
          "exampleUrls": "https://e.gkd.li/355f6e11-c21f-4cb2-b103-1a56032da15c"
        },
        {
          "matches": "[text=\"反馈\"] -4 View[text=\"\"][childCount=1] > Image[text=\"\"][childCount=0][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17088067",
          "exampleUrls": "https://e.gkd.li/13cb561b-cfd5-44a8-b8ed-8bc1500b73a8"
        }
      ]
    }
  ]
});
