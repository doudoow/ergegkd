// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Dislike",
  "id": "com.xiangzi.dislikecn",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击 跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid=\"csj_ad_container\"]",
          "key": 0
        }
      ]
    }
  ]
});
