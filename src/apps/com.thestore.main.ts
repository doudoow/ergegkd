// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "1号会员店",
  "id": "com.thestore.main",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "关闭弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@TextView[clickable=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout < [parent=null]",
          "activityIds": "com.thestore.main.app.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13163686",
          "key": 0
        },
        {
          "matches": "@TextView[clickable=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout < [parent=null]",
          "activityIds": ".app.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13163686",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-促销广告",
      "desc": "关闭促销弹窗，也许有用呢",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.thestore.main.home.feature:id/ad\"] > TextView",
          "snapshotUrls": "https://i.gkd.li/i/13163686",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-促销广告",
      "desc": "关闭促销弹窗，也许有用呢",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.thestore.main.home.feature:id/ad\"] > TextView",
          "snapshotUrls": "https://i.gkd.li/import/13163686",
          "key": 0
        }
      ]
    },
    {
      "name": "促销广告",
      "desc": "关闭促销弹窗，也许有用呢",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.thestore.main.home.feature:id/ad\"] > TextView",
          "snapshotUrls": "https://i.gkd.li/import/13163686",
          "key": 0
        }
      ]
    }
  ]
});
