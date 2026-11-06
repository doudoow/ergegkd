// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "icash Pay",
  "id": "tw.com.icash.a.icashpay",
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
          "matches": "[vid=\"img_activity_ad_close\"]",
          "activityIds": "tw.com.icash.icashpay.framework.home.HomeNavigationActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17640327",
          "exampleUrls": "https://e.gkd.li/8fefb936-558b-44d2-a6e0-457f7e59772d",
          "key": 0
        }
      ]
    }
  ]
});
