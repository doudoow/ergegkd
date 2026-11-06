// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "漫天星",
  "id": "ltd.sky.okay.cn",
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
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13625479"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "actionDelay": 1500,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13759331"
        },
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [],
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13625479"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13625479"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "actionDelay": 1500,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13759331"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13625479"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "actionDelay": 1500,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13759331"
        }
      ]
    }
  ]
});
