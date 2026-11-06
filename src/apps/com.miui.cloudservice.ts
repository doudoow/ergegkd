// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米云服务",
  "id": "com.miui.cloudservice",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"以后再说\"]",
          "activityIds": "com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity",
          "key": 0,
          "name": "云存储空间不足弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12847374",
          "exampleUrls": "https://m.gkd.li/57941037/df5f7c28-a1fa-4d1b-87b8-2f592e5a8423"
        },
        {
          "matches": "[vid=\"ad_popup_close_iv\"]",
          "activityIds": "com.miui.cloudservice.ad.AdPopupActivity",
          "fastQuery": true,
          "key": 1,
          "name": "会员打折弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14320937",
          "exampleUrls": "https://m.gkd.li/57941037/fbb8a877-4e69-4d72-b31d-85ad87ab34af"
        },
        {
          "matches": "[text=\"以后再说\"]",
          "activityIds": ".hybrid.SignDeductDialogHybridActivity",
          "key": 2,
          "name": "云存储空间不足弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12847374",
          "exampleUrls": "https://m.gkd.li/57941037/df5f7c28-a1fa-4d1b-87b8-2f592e5a8423"
        },
        {
          "matches": "[vid=\"ad_popup_close_iv\"]",
          "activityIds": ".ad.AdPopupActivity",
          "fastQuery": true,
          "key": 3,
          "name": "会员打折弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14320937",
          "exampleUrls": "https://m.gkd.li/57941037/fbb8a877-4e69-4d72-b31d-85ad87ab34af"
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击[以后再说]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即升级\"]",
          "activityIds": ".ui.MiCloudMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14476801",
          "exampleUrls": "https://m.gkd.li/57941037/789b4472-f989-4d32-aff2-6b657b6e0deb",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text$=\"开启“通知”权限。\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "actionMaximum": 1,
          "activityIds": ".ui.MiCloudMainActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/23165486",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-相册-云存储空间不足",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View > [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-云存储空间不足弹窗",
      "desc": "点击云存储空间不足提示弹窗中的\"以后再说\"按钮",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "View > [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-相册-云存储空间不足",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "View > [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "相册-云存储空间不足",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "View > [text=\"以后再说\"]",
          "key": 0
        }
      ]
    }
  ]
});
