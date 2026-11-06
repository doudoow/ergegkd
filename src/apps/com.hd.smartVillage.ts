// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "恒大智慧社区",
  "id": "com.hd.smartVillage",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "View[id=\"com.hd.smartVillage:id/notificationSettingCloseBtn\"]",
          "activityIds": [
            ".modules.main.MainActivity",
            ".modules.h5service.H5WebActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13223669",
            "https://i.gkd.li/i/13293000"
          ],
          "key": 0
        },
        {
          "matches": "View[vid=\"notificationSettingCloseBtn\"]",
          "activityIds": [
            ".modules.main.MainActivity",
            ".modules.h5service.H5WebActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13223669",
            "https://i.gkd.li/i/13293000"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[id=\"com.hd.smartVillage:id/tv_upgrade_cancel\"]",
          "activityIds": ".modules.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13223642",
          "key": 0
        },
        {
          "matches": "TextView[vid=\"tv_upgrade_cancel\"]",
          "activityIds": ".modules.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13223642",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-关闭开启通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "View[id=\"com.hd.smartVillage:id/notificationSettingCloseBtn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-关闭开启通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "View[id=\"com.hd.smartVillage:id/notificationSettingCloseBtn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "TextView[id=\"com.hd.smartVillage:id/tv_upgrade_cancel\"][text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭开启通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "View[id=\"com.hd.smartVillage:id/notificationSettingCloseBtn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "TextView[id=\"com.hd.smartVillage:id/tv_upgrade_cancel\"][text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
