// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "动漫之家社区",
  "id": "com.dmzjsq.manhua",
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
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12885087",
            "https://i.gkd.li/i/12893731"
          ]
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12885087"
        },
        {
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12893731"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12885087"
        },
        {
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12893731"
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12885087"
        },
        {
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12893731"
        }
      ]
    }
  ]
});
