// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蘑菇云手机",
  "id": "com.mushroomcloud.app",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true][width<150 && height<150] - FrameLayout[childCount=3][getChild(2).name$=\"TextView\"] >(n+5) [text*=\"三方应用\" || text*=\"扭动手机\" || text*=\"上滑\" || text*=\"扭一扭\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/34136348",
            "https://i.gkd.li/i/34367435"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "x掉",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"content_image\"] + [vid=\"close_btn\"]",
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34140126",
          "exampleUrls": "https://e.gkd.li/ce650c5f-4629-40d7-b846-0d201900392a",
          "key": 0
        }
      ]
    }
  ]
});
