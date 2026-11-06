// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "宝宝生活记录",
  "id": "com.bluemobile.flutterbabylife",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 0,
      "rules": [
        {
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/i/13632639"
        }
      ]
    },
    {
      "name": "未分类-应用内广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 1,
      "rules": [
        {
          "matches": "View[childCount=7] > View[index=1]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/i/13632639"
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 2,
      "rules": [
        {
          "matches": "View[childCount=7] > View[index=1]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/import/13632639"
        }
      ]
    },
    {
      "name": "应用内广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 3,
      "rules": [
        {
          "matches": "View[childCount=7] > View[index=1]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/import/13632639"
        }
      ]
    }
  ]
});
