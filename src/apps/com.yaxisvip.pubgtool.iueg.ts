// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "次元城动画",
  "id": "com.yaxisvip.pubgtool.iueg",
  "groups": [
    {
      "name": "通知提示-公告",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"我知道了\"] < @[clickable=true] -n * > [text=\"重要通知\"]",
          "activityIds": "top.cycdm.cycapp.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/24331012",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "@Image[childCount=0][text=\"\"] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": "https://i.gkd.li/i/24331009",
          "key": 0
        }
      ]
    }
  ]
});
