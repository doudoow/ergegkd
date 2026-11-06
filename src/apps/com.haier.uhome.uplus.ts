// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "海尔智家",
  "id": "com.haier.uhome.uplus",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即更新\"||text=\"立即安装\"]",
          "activityIds": ".upgradeui.ui.UpgradeDialogActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12726844",
            "https://i.gkd.li/i/12726801"
          ],
          "key": 0
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"立即更新\"||text=\"立即安装\"]",
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
      "key": 1,
      "rules": [
        {
          "matches": "@[checked=false] + [text=\"禁止后不在询问\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12726829",
          "exampleUrls": "https://e.gkd.li/e1c6f008-4eba-4370-b7a1-054d0279956a"
        },
        {
          "matches": "[text=\"取消\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12726829",
          "exampleUrls": "https://e.gkd.li/e1c6f008-4eba-4370-b7a1-054d0279956a"
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"通知栏权限\"] +n LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"通知栏权限\"] +n LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即更新\"||text=\"立即安装\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"通知栏权限\"] +n LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
