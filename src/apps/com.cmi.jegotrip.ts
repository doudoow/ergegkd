// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "无忧行",
  "id": "com.cmi.jegotrip",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.cmi.jegotrip:id/ig_ad_close\"]",
          "activityIds": ".ui.BottomTabsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13631904",
          "key": 0
        },
        {
          "matches": "[vid=\"ig_ad_close\"]",
          "activityIds": ".ui.BottomTabsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13631904",
          "key": 1
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
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"申请定位权限说明\"]",
            "[id=\"com.cmi.jegotrip:id/btn_cancel\"]"
          ],
          "activityIds": "com.cmi.jegotrip.ui.BottomTabsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13232766",
          "key": 0
        },
        {
          "matches": "[text=\"申请定位权限说明\"] < LinearLayout +2 LinearLayout [id=\"com.cmi.jegotrip:id/btn_cancel\"]",
          "key": 1
        },
        {
          "matches": [
            "[text=\"申请定位权限说明\"]",
            "[vid=\"btn_cancel\"]"
          ],
          "activityIds": ".ui.BottomTabsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13232766",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-权限申请弹窗",
      "desc": "点击[取消]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"权限申请\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "pub.devrel.easypermissions.AppSettingsDialogHolderActivity",
          "snapshotUrls": "https://i.gkd.li/i/16233246",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.cmi.jegotrip:id/ig_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13631904",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.cmi.jegotrip:id/ig_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13631904",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求定位权限弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"申请定位权限说明\"] < LinearLayout +2 LinearLayout [id=\"com.cmi.jegotrip:id/btn_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.cmi.jegotrip:id/ig_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13631904",
          "key": 0
        }
      ]
    },
    {
      "name": "请求定位权限弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"申请定位权限说明\"] < LinearLayout +2 LinearLayout [id=\"com.cmi.jegotrip:id/btn_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
