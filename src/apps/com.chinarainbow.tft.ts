// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天府通",
  "id": "com.chinarainbow.tft",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "Image[text=\"\"] < @View +4 [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13269854"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after_close\"]",
          "activityIds": ".mvp.ui.activity.QrcodeScanCompletedActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13468554"
        },
        {
          "matches": "Image[text=\"\"] < @View +4 [text=\"反馈\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13269854"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after_close\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13468554"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "Image[text=\"\"] < @View +4 [text=\"反馈\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13269854"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after_close\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13468554"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "Image[text=\"\"] < @View +4 [text=\"反馈\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13269854"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after_close\"]",
          "quickFind": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13468554"
        }
      ]
    }
  ]
});
