// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "泰剧兔",
  "id": "com.viva.todo",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭/跳过",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"反馈\"] + View[childCount=2] > [text$=\"跳过\"][visibleToUser=true]",
          "activityIds": "com.maoyun.guoguo.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14370321",
          "exampleUrls": "https://m.gkd.li/57941037/e4490664-3a73-473f-9f4e-79da3cb53a68"
        },
        {
          "matches": "[text=\"反馈\"] -4 View[index=0][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14370332",
          "exampleUrls": "https://m.gkd.li/57941037/7802b75c-f75a-4375-9f10-26b822ccc4f1"
        },
        {
          "matches": "[text=\"反馈\"] < View + View > [text$=\"跳过\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14406445",
          "exampleUrls": "https://m.gkd.li/57941037/541565b5-6f3e-412d-ad1c-731bab1ee2e8"
        }
      ]
    }
  ]
});
