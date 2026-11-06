// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "飞常准业内版",
  "id": "com.feeyo.vz.pro.cdm",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View <3 FrameLayout[childCount=4] <2 FrameLayout[childCount=2] < FrameLayout < [vid=\"splashAdContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/13926823",
          "key": 0
        }
      ]
    }
  ]
});
