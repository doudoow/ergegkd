// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "汇率速查",
  "id": "com.zhima.currency",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0] < ViewGroup[childCount=1] - ViewGroup > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/21910422",
            "https://i.gkd.li/i/21910423"
          ],
          "exampleUrls": "https://e.gkd.li/c07dc400-c222-4592-bf4e-9fa2227a1751"
        },
        {
          "matches": "@Image[childCount=0][width<70 && height<70] < View[childCount=1] < View[childCount=1] + View > [text=\"广告\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/21910493",
          "exampleUrls": "https://e.gkd.li/6dded2be-0407-488d-a0cc-4aca133f6fc0"
        }
      ]
    }
  ]
});
