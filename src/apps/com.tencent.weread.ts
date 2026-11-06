// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微信读书",
  "id": "com.tencent.weread",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.tencent.weread:id/open_notification_close\"]",
          "activityIds": [
            ".module.bottomSheet.BottomSheetForFragment",
            ".WeReadFragmentActivity"
          ],
          "matchTime": 30000,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642247",
            "https://i.gkd.li/i/13233735"
          ]
        },
        {
          "matches": "[text=\"开启推送通知\"] +3 [clickable=true][visibleToUser=true]",
          "activityIds": ".WeReadFragmentActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14190089"
        },
        {
          "matches": "[vid=\"open_notification_close\"]",
          "activityIds": [
            ".module.bottomSheet.BottomSheetForFragment",
            ".WeReadFragmentActivity"
          ],
          "matchTime": 30000,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642247",
            "https://i.gkd.li/i/13233735"
          ]
        }
      ]
    },
    {
      "name": "通知提示-开启推送通知",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.tencent.weread:id/open_notification_close\"]",
          "actionMaximum": 1,
          "matchTime": 30000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "name": "通知提示-开启推送通知提示弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642247",
            "https://i.gkd.li/i/13233735"
          ]
        },
        {
          "matches": "[text=\"开启推送通知\"] +3 [clickable=true][visibleToUser=true]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "key": 1,
          "name": "通知提示-开启推送通知提示信息",
          "snapshotUrls": "https://i.gkd.li/i/14190089"
        }
      ]
    },
    {
      "name": "全屏广告-系统推送弹窗",
      "desc": "系统推送弹窗-点击取消",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.tencent.weread:id/open_notification_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642247",
            "https://i.gkd.li/import/13233735"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"设置青少年模式\"] - LinearLayout >2 [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "系统推送弹窗",
      "desc": "系统推送弹窗-点击取消",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.tencent.weread:id/open_notification_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642247",
            "https://i.gkd.li/import/13233735"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"设置青少年模式\"] - LinearLayout >2 [text=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
