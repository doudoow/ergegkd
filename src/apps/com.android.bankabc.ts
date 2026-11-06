// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国农业银行",
  "id": "com.android.bankabc",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "matchRoot": true,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.android.bankabc:id/close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14179162",
          "exampleUrls": "https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17879768",
          "exampleUrls": "https://e.gkd.li/a5f6ec81-04f6-4678-b1d5-f2f326521945"
        },
        {
          "matches": "[vid=\"close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14179162",
          "exampleUrls": "https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17879768"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"upgrade_checkbox\"][checked=false]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14208545",
            "https://i.gkd.li/i/16410094"
          ]
        },
        {
          "matches": "[vid=\"negativeTextView\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14208545"
        },
        {
          "matches": "[vid=\"iv_negative\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16410094"
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
          "matches": "[text=\"允许获取位置信息\"] +n * > [text=\"取消\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14208572",
          "key": 0
        },
        {
          "matches": "[text=\"允许获取位置信息\"] +n * > [text=\"取消\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"iv_notification_reminder_dialog_close\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14208621",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_notification_reminder_dialog_close\"]",
          "key": 1
        }
      ]
    }
  ]
});
