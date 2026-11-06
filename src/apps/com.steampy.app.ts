// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "SteamPY",
  "id": "com.steampy.app",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.steampy.app:id/imgClose\"] - RelativeLayout [id=\"com.steampy.app:id/tv_update\"]",
          "activityIds": ".activity.common.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13695519",
          "key": 0
        },
        {
          "matches": "@[vid=\"imgClose\"] - RelativeLayout [vid=\"tv_update\"]",
          "activityIds": ".activity.common.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13695519",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-首页优惠券弹窗自动点击领取/使用",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"coupon_right\"]",
          "activityIds": ".activity.common.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/16860018",
            "https://i.gkd.li/i/16860017"
          ],
          "exampleUrls": [
            "https://e.gkd.li/2e87decb-54ba-4f8b-9330-f037c220d2d9",
            "https://e.gkd.li/b2e256c2-c606-430c-afa9-3cd02f4d56c2"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"com.steampy.app:id/imgClose\"] - RelativeLayout [id=\"com.steampy.app:id/tv_update\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"pyAdLayout\"] > [vid=\"count_down_view\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26231218",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.steampy.app:id/imgClose\"] - RelativeLayout [id=\"com.steampy.app:id/tv_update\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"com.steampy.app:id/imgClose\"] - RelativeLayout [id=\"com.steampy.app:id/tv_update\"]",
          "key": 0
        }
      ]
    }
  ]
});
