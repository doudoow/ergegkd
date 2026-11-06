// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "风筝影评",
  "id": "com.fzfengzheng.fzboyp",
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
          "matches": "View[childCount=6] >2 View[childCount=8] > View[childCount=4] > [text=\"反馈\"] + View[index=3]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": "https://i.gkd.li/i/14228332",
          "exampleUrls": "https://m.gkd.li/57941037/3cb59a01-f1ab-4244-b455-3824a5724811",
          "key": 0
        }
      ]
    }
  ]
});
