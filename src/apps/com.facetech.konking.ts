// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "人民日报",
  "id": "com.facetech.konking",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": "https://i.gkd.li/i/12841081",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-应用内广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "key": 0
        }
      ]
    }
  ]
});
