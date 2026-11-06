// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "HMS Core",
  "id": "com.huawei.hwid",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[id*=\"interstitial_close\"][clickable=true] +n * >n [text=\"广告\"][visibleToUser=true]",
          "activityIds": [
            "com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity",
            "com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12709068",
            "https://i.gkd.li/i/24675884",
            "https://i.gkd.li/i/24979139"
          ],
          "key": 0
        },
        {
          "matches": "@[id*=\"interstitial_close\"][clickable=true] +n * >n [text=\"广告\"][visibleToUser=true]",
          "activityIds": [
            "com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity",
            "com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12709068",
            "https://i.gkd.li/i/24675884",
            "https://i.gkd.li/i/24979139"
          ]
        },
        {
          "matches": "[id=\"com.huawei.hms.game:id/close_image\"]",
          "activityIds": "com.huawei.hms.runtimekit.stub.",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/34187296"
        },
        {
          "matches": "[id=\"com.huawei.hwid:id/interstitial_close\"]",
          "activityIds": "com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity",
          "snapshotUrls": "https://i.gkd.li/i/12709068",
          "key": 3
        }
      ]
    },
    {
      "name": "未分类-页面中间跳出广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.huawei.hwid:id/interstitial_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12709068"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-页面中间跳出广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.huawei.hwid:id/interstitial_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12709068"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "页面中间跳出广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.huawei.hwid:id/interstitial_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12709068"
          ],
          "key": 0
        }
      ]
    }
  ]
});
