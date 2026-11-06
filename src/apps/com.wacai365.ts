// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "挖财记账",
  "id": "com.wacai365",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.wacai365:id/tv_cancel\"] - TextView[text^=\"新版本\"]",
          "activityIds": [
            "com.wacai365.HomeActivity",
            "com.wacai.android.wind.splash.WindDialogActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13249620",
            "https://i.gkd.li/i/13772291"
          ],
          "key": 0
        },
        {
          "matches": "@ImageView[id=\"com.wacai365:id/tv_cancel\"] - TextView[text^=\"新版本\"]",
          "key": 1
        },
        {
          "matches": "@ImageView[vid=\"tv_cancel\"] - TextView[text^=\"新版本\"]",
          "activityIds": [
            ".HomeActivity",
            "com.wacai.android.wind.splash.WindDialogActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13249620",
            "https://i.gkd.li/i/13772291"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id^=\"com.wacai365:id/promote_banner_close\"]",
          "activityIds": "com.wacai365.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13249666",
          "key": 0
        },
        {
          "matches": "[id^=\"com.wacai365:id/promote_banner_close\"]",
          "key": 1
        },
        {
          "matches": "[id^=\"com.wacai365:id/promote_banner_close\"]",
          "activityIds": ".HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13249666",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "@View[clickable=true] <2 * <2 * < [vid=\"flTTContainer\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14021540"
        },
        {
          "matches": "[text^=\"跳过\"][text.length<=6]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13399124"
        }
      ]
    }
  ]
});
