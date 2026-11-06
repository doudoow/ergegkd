// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "视趣",
  "id": "com.sqsp.movie",
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
          "matches": "[text=\"反馈\"] -(2,4) @View[visibleToUser=true][childCount=1] > Image[text=\"\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": [
            "https://i.gkd.li/i/15342445",
            "https://i.gkd.li/i/15374240"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/640c42bf-5279-4ab5-a3bc-e264a99af2ac",
          "key": 0
        }
      ]
    }
  ]
});
