// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "系统更新",
  "id": "com.android.updater",
  "groups": [
    {
      "name": "功能类-不开启自动更新",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[vid=\"alertTitle\"][text=\"开启智能更新\" || text=\"Install automatically?\"]",
            "[id=\"android:id/button2\"][text=\"暂不开启\" || text=\"No\"]"
          ],
          "activityIds": [
            ".MainActivity",
            ".UpdateActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15386937",
            "https://i.gkd.li/i/15386869",
            "https://i.gkd.li/i/18469146"
          ],
          "key": 0
        },
        {
          "matches": [
            "[vid=\"alertTitle\"][text=\"开启智能更新\" || text=\"开启自动下载\" || text=\"Install automatically?\"]",
            "[id=\"android:id/button2\"][text=\"暂不开启\" || text=\"取消\" || text=\"No\"]"
          ],
          "activityIds": [
            ".MainActivity",
            ".UpdateActivity",
            ".NewVersionDialogActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15386937",
            "https://i.gkd.li/i/15386869",
            "https://i.gkd.li/i/18469146",
            "https://i.gkd.li/i/34107627"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-流量更新点击继续下载",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text^=\"您当前正在使用数据网络，继续下载可能会产生流量费用\"]",
            "[text=\"继续下载\"]"
          ],
          "activityIds": "com.android.updater.UpdateActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23182185",
          "key": 0
        },
        {
          "matches": [
            "[text^=\"您当前正在使用数据网络，继续下载可能会产生流量费用\"]",
            "[text=\"继续下载\"]"
          ],
          "activityIds": ".UpdateActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23182185",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-不开启流量自动更新",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"开启数据网络自动下载\"]",
            "[text=\"不开启\"]"
          ],
          "activityIds": "com.android.updater.UpdateActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23182175",
          "key": 0
        },
        {
          "matches": [
            "[text=\"开启数据网络自动下载\"]",
            "[text=\"不开启\"]"
          ],
          "activityIds": ".UpdateActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23182175",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-MIUI更新弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.android.updater:id/alertTitle\"][text=\"开启智能更新\"] < * +2 * > Button[id=\"android:id/button2\"][text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-全屏系统更新弹窗",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text^=\"发现系统新版本\"]",
            "[text=\"稍后\"][clickable=true]"
          ],
          "activityIds": ".NewVersionDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34107628",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-MIUI更新弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.android.updater:id/alertTitle\"][text=\"开启智能更新\"] < * +2 * > Button[id=\"android:id/button2\"][text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-智能更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[vid=\"alertTitle\"][text=\"开启智能更新\" || text=\"Install automatically?\"]",
            "[id=\"android:id/button2\"][text=\"暂不开启\" || text=\"No\"]"
          ],
          "activityIds": [
            ".MainActivity",
            ".UpdateActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15386937",
            "https://i.gkd.li/i/15386869",
            "https://i.gkd.li/i/18469146"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "MIUI更新弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.android.updater:id/alertTitle\"][text=\"开启智能更新\"] < * +2 * > Button[id=\"android:id/button2\"][text=\"暂不开启\"]",
          "key": 0
        }
      ]
    }
  ]
});
