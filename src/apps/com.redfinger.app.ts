// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "红手指云手机",
  "id": "com.redfinger.app",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.redfinger.app:id/btn_update\"] + [id=\"com.redfinger.app:id/iv_close\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13761821",
          "key": 0
        },
        {
          "matches": "[id=\"com.redfinger.app:id/btn_update\"] + [id=\"com.redfinger.app:id/iv_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"btn_update\"] + [vid=\"iv_close\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13761821",
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
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.redfinger.app:id/rl_screen_ad_close\"]",
          "activityIds": "com.redfinger.app.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13761825"
        },
        {
          "matches": "[vid=\"rl_screen_ad_close\"]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13761825"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.redfinger.app:id/rl_screen_ad_close\"]",
          "activityIds": "com.redfinger.app.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13761825"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.redfinger.app:id/btn_update\"] + [id=\"com.redfinger.app:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.redfinger.app:id/rl_screen_ad_close\"]",
          "activityIds": "com.redfinger.app.activity.MainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13761825"
        }
      ]
    }
  ]
});
