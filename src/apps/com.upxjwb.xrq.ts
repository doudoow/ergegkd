// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "番喜视频",
  "id": "com.upxjwb.xrq",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] < * - View > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23519200"
        },
        {
          "matches": "[text=\"反馈\"] +(1,2) View[childCount=1] > Image[childCount=0][text=\"\"][width<60 && height<60]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23905532",
          "exampleUrls": "https://e.gkd.li/793d0e85-db69-4d31-bfd9-7ffbd518b962"
        }
      ]
    }
  ]
});
