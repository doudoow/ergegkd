// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "TextNow",
  "id": "com.enflick.android.TextNow",
  "groups": [
    {
      "name": "其他-设为默认应用提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.enflick.android.TextNow:id/btn_dismiss\"][text=\"Not Now\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13630460"
        },
        {
          "matches": "[id=\"android:id/button2\"][text=\"SKIP\"]",
          "preKeys": [
            2
          ],
          "snapshotUrls": "https://i.gkd.li/i/13630463",
          "key": 1
        },
        {
          "matches": "[vid=\"btn_dismiss\"][text=\"Not Now\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13630460"
        }
      ]
    },
    {
      "name": "权限提示-通知/链接蓝牙附件设备",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 [id=\"com.enflick.android.TextNow:id/calling_banner\"]",
          "activityIds": "com.enflick.android.TextNow.activities.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13657279",
            "https://i.gkd.li/i/13657280"
          ],
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true] <2 [id=\"com.enflick.android.TextNow:id/calling_banner\"]",
          "key": 1
        },
        {
          "matches": "@ImageView[clickable=true] <2 [vid=\"calling_banner\"]",
          "activityIds": ".activities.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13657279",
            "https://i.gkd.li/i/13657280"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-设为默认应用提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.enflick.android.TextNow:id/btn_dismiss\"][text=\"Not Now\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13630460"
        },
        {
          "matches": "[id=\"android:id/button2\"][text=\"SKIP\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/i/13630463",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-设为默认应用提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.enflick.android.TextNow:id/btn_dismiss\"][text=\"Not Now\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13630460"
        },
        {
          "matches": "[id=\"android:id/button2\"][text=\"SKIP\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/13630463",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知/链接蓝牙附件设备 权限申请",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 [id=\"com.enflick.android.TextNow:id/calling_banner\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "设为默认应用提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.enflick.android.TextNow:id/btn_dismiss\"][text=\"Not Now\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13630460"
        },
        {
          "matches": "[id=\"android:id/button2\"][text=\"SKIP\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/13630463",
          "key": 1
        }
      ]
    },
    {
      "name": "通知/链接蓝牙附件设备 权限申请",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 [id=\"com.enflick.android.TextNow:id/calling_banner\"]",
          "key": 0
        }
      ]
    }
  ]
});
