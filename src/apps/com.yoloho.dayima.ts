// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "大姨妈",
  "id": "com.yoloho.dayima",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".activity.MainPageActivity",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/13800255"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14665571",
            "https://i.gkd.li/i/13800282"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >n FrameLayout[index=2] > ImageView",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/13800255"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >n FrameLayout[index=2] > ImageView",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/import/13800255"
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >n FrameLayout[index=2] > ImageView",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/import/13800255"
        }
      ]
    }
  ]
});
