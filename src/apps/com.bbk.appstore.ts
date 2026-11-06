// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "vivo应用商店",
  "id": "com.bbk.appstore",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".ui.AppStoreTabActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13198234",
            "https://i.gkd.li/i/13246971",
            "https://i.gkd.li/i/13884356"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-热门应用推荐",
      "desc": "点击[跳过，进入首页]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"跳过，进入首页\"]",
          "activityIds": ".upgrade.UpgradeNecessaryActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13198101",
          "exampleUrls": "https://e.gkd.li/eb96ca80-2e68-4f41-ac0f-3c82092034d7",
          "key": 0
        },
        {
          "matches": "[text*=\"进入首页\"][clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13198101",
          "exampleUrls": "https://e.gkd.li/eb96ca80-2e68-4f41-ac0f-3c82092034d7"
        },
        {
          "matches": "@Button[clickable=true] >2 [text*=\"进入首页\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/28419903",
          "exampleUrls": "https://e.gkd.li/d28ac0e6-a03e-4e46-8600-550f22b35a85"
        }
      ]
    },
    {
      "name": "通知提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.bbk.appstore:id/upgrade_necessary_btn_high_new\"]",
          "activityIds": "com.bbk.appstore.upgrade.UpgradeNecessaryActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13198101"
        },
        {
          "matches": [
            "[text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "actionMaximumKey": 0,
          "activityIds": "com.bbk.appstore.ui.AppStoreTabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13198234",
            "https://i.gkd.li/i/13246971",
            "https://i.gkd.li/i/13884356"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.bbk.appstore:id/upgrade_necessary_btn_high_new\"]",
          "activityIds": "com.bbk.appstore.upgrade.UpgradeNecessaryActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13198101"
        },
        {
          "matches": [
            "[text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "actionMaximumKey": 0,
          "activityIds": "com.bbk.appstore.ui.AppStoreTabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/import/13198234",
            "https://i.gkd.li/import/13246971",
            "https://i.gkd.li/import/13884356"
          ],
          "key": 1
        }
      ]
    }
  ]
});
