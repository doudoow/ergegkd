// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "丰声",
  "id": "com.sfexpress.sfim",
  "groups": [
    {
      "name": "功能类-自动确认登录",
      "desc": "自动点击[登录]按钮",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[visibleToUser=true][text=\"登录\"] <<n [vid=\"flContainer\"]",
          "activityIds": [
            "com.sfexpress.sfim.scan.view.SfScanActivity",
            "com.sfexpress.sfim.microservice.commonservice.ui.MicroAppContainerActivity",
            "com.sfexpress.sfim.sdkuikit.widget.dialog.NoticeDialog"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12745239",
            "https://i.gkd.li/i/12745240",
            "https://i.gkd.li/i/12745241",
            "https://i.gkd.li/i/14830687"
          ]
        },
        {
          "matches": "[text=\"登录\"]",
          "activityIds": "com.sfexpress.sfim.middleplatform.ui.SFMiddlePlatformLoginActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14830682"
        },
        {
          "matches": "@[visibleToUser=true][text=\"登录\"] <<n [vid=\"flContainer\"]",
          "activityIds": [
            ".scan.view.SfScanActivity",
            ".microservice.commonservice.ui.MicroAppContainerActivity",
            ".sdkuikit.widget.dialog.NoticeDialog"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12745239",
            "https://i.gkd.li/i/12745240",
            "https://i.gkd.li/i/12745241",
            "https://i.gkd.li/i/14830687"
          ]
        },
        {
          "matches": "[text=\"登录\"]",
          "activityIds": ".middleplatform.ui.SFMiddlePlatformLoginActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14830682"
        }
      ]
    },
    {
      "name": "功能类-登录确认",
      "desc": "自动点击 \"登录\" 按钮",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"登录\"] <<n [vid=\"flContainer\"]",
          "activityIds": [
            "com.sfexpress.sfim.scan.view.SfScanActivity",
            "com.sfexpress.sfim.microservice.commonservice.ui.MicroAppContainerActivity",
            "com.sfexpress.sfim.sdkuikit.widget.dialog.NoticeDialog"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12745239",
            "https://i.gkd.li/i/12745240",
            "https://i.gkd.li/i/12745241",
            "https://i.gkd.li/i/14830687"
          ]
        },
        {
          "matches": "[text=\"登录\"]",
          "activityIds": "com.sfexpress.sfim.middleplatform.ui.SFMiddlePlatformLoginActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14830682"
        }
      ]
    },
    {
      "name": "功能类-CAS安全认证-自动登录",
      "desc": "自动点击【登录】按钮",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"CAS安全认证\"] >n [text=\"登录\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "CAS安全认证-自动登录",
      "desc": "自动点击【登录】按钮",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"CAS安全认证\"] >n [text=\"登录\"]",
          "key": 0
        }
      ]
    }
  ]
});
