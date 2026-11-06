// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "叮当快药",
  "id": "com.ddsy.songyao",
  "groups": [
    {
      "name": "全屏广告-优惠卷提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.ddsy.songyao:id/iv_coupon_bottom\"] + [id=\"com.ddsy.songyao:id/iv_close\"]",
          "activityIds": "com.ddsy.songyao.activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13048720",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_coupon_bottom\"] + [vid=\"iv_close\"]",
          "activityIds": ".activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13048720",
          "key": 1
        },
        {
          "matches": "[id=\"com.ddsy.songyao:id/iv_coupon_bottom\"] + [id=\"com.ddsy.songyao:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13048720",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-优惠卷提示",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.ddsy.songyao:id/iv_coupon_bottom\"] + [id=\"com.ddsy.songyao:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13048720",
          "key": 0
        }
      ]
    },
    {
      "name": "优惠卷提示",
      "enable": false,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.ddsy.songyao:id/iv_coupon_bottom\"] + [id=\"com.ddsy.songyao:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13048720",
          "key": 0
        }
      ]
    }
  ]
});
