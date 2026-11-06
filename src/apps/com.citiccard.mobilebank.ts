// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "动卡空间",
  "id": "com.citiccard.mobilebank",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/btn_skip\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12684908"
        },
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/jump\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13049013"
        },
        {
          "matches": "[vid=\"btn_skip\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12684908"
        },
        {
          "matches": "[vid=\"jump\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13049013"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/iv_bill_home_cancel\"]",
          "activityIds": "com.citiccard.mobilebank.card.activity.BillDetailHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13049284",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_bill_home_cancel\"]",
          "activityIds": ".card.activity.BillDetailHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13049284",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/ll_app_upgrade_content\"] + [id=\"com.citiccard.mobilebank:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049283",
          "key": 0
        },
        {
          "matches": "[vid=\"ll_app_upgrade_content\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049283",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/iv_bill_home_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13049284"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/ll_app_upgrade_content\"] + [id=\"com.citiccard.mobilebank:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13049283"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/iv_bill_home_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13049284"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/ll_app_upgrade_content\"] + [id=\"com.citiccard.mobilebank:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13049283"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/iv_bill_home_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13049284"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "通知权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/ll_app_upgrade_content\"] + [id=\"com.citiccard.mobilebank:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13049283"
          ],
          "key": 0
        }
      ]
    }
  ]
});
