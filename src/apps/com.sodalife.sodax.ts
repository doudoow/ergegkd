// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "苏打校园",
  "id": "com.sodalife.sodax",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@Image < View +3 View > View > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13400643"
        },
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup + ViewGroup[clickable=true][childCount=1]",
          "actionMaximum": 1,
          "activityIds": "com.sodalife.sodax.libraries.ads.gromore.GroMoreSplashActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 1,
          "name": "双十一广告",
          "snapshotUrls": "https://i.gkd.li/i/13400653"
        },
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup + ViewGroup[clickable=true][childCount=1]",
          "actionMaximum": 1,
          "activityIds": ".libraries.ads.gromore.GroMoreSplashActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 2,
          "name": "双十一广告",
          "snapshotUrls": "https://i.gkd.li/i/13400653"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@Image < View +3 View > View > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13400643"
        },
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup + ViewGroup[clickable=true][childCount=1]",
          "activityIds": "com.sodalife.sodax.libraries.ads.gromore.GroMoreSplashActivity",
          "key": 1,
          "name": "双十一广告",
          "snapshotUrls": "https://i.gkd.li/i/13400653"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@Image < View +3 View > View > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13400643"
        },
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup + ViewGroup[clickable=true][childCount=1]",
          "activityIds": "com.sodalife.sodax.libraries.ads.gromore.GroMoreSplashActivity",
          "key": 1,
          "name": "双十一广告",
          "snapshotUrls": "https://i.gkd.li/import/13400653"
        }
      ]
    }
  ]
});
