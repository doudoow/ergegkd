// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小爱音箱",
  "id": "com.xiaomi.mico",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.mico:id/adImage\"] + [id=\"com.xiaomi.mico:id/ivCloseAd\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12745621",
          "key": 0
        },
        {
          "matches": "[id=\"com.xiaomi.mico:id/adImage\"] + [id=\"com.xiaomi.mico:id/ivCloseAd\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"adImage\"] + [vid=\"ivCloseAd\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12745621",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-请求开启定位权限弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text*=\"开启位置服务\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/15284753",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text*=\"开启位置服务\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15284753",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.mico:id/adImage\"] + [id=\"com.xiaomi.mico:id/ivCloseAd\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.mico:id/adImage\"] + [id=\"com.xiaomi.mico:id/ivCloseAd\"]",
          "key": 0
        }
      ]
    }
  ]
});
