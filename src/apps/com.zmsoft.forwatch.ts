// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "子腾园",
  "id": "com.zmsoft.forwatch",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.zmsoft.forwatch:id/ad_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.zmapp.fwatch.activity.NativeAdActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13545995"
        },
        {
          "matches": "[vid=\"ad_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.zmapp.fwatch.activity.NativeAdActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13545995"
        },
        {
          "matches": "@[id=\"com.zmsoft.forwatch:id/ad_close\"] - * >n [text=\"广告\"]",
          "activityIds": "com.zmapp.fwatch.activity.NativeAdActivity",
          "fastQuery": true,
          "key": 2,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13545995"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.zmsoft.forwatch:id/ad_close\"] - * >n [text=\"广告\"]",
          "activityIds": "com.zmapp.fwatch.activity.NativeAdActivity",
          "fastQuery": true,
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13545995"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"com.zmsoft.forwatch:id/ad_close\"] - * >n [text=\"广告\"]",
          "activityIds": "com.zmapp.fwatch.activity.NativeAdActivity",
          "quickFind": true,
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13545995"
        }
      ]
    }
  ]
});
