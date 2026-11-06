// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "不厌书法",
  "id": "com.buyanchuantong.buyanshufa",
  "groups": [
    {
      "name": "功能类-功能介绍",
      "desc": "点击跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"点击跳过\"]",
          "activityIds": "com.buyanchuantong.buyanshufa.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13425296",
          "key": 0
        },
        {
          "matches": "[text^=\"点击跳过\"]",
          "activityIds": ".SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13425296",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-功能介绍",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.buyanchuantong.buyanshufa:id/next_page_imageview\"][text^=\"点击跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425296",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-功能介绍",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.buyanchuantong.buyanshufa:id/next_page_imageview\"][text^=\"点击跳过\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425296",
          "key": 0
        }
      ]
    },
    {
      "name": "功能介绍",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.buyanchuantong.buyanshufa:id/next_page_imageview\"][text^=\"点击跳过\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425296",
          "key": 0
        }
      ]
    }
  ]
});
