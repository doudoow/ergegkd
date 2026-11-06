// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "BOSS直聘",
  "id": "com.hpbr.bosszhipin",
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
          "matches": "@ImageView[id=\"com.hpbr.bosszhipin:id/iv_cancle\"]",
          "activityIds": [
            ".module.main.activity.MainActivity",
            ".module.launcher.WelcomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13440781",
            "https://i.gkd.li/i/13623476"
          ],
          "key": 0
        },
        {
          "matches": "@ImageView[vid=\"iv_cancle\"]",
          "activityIds": [
            ".module.main.activity.MainActivity",
            ".module.launcher.WelcomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13440781",
            "https://i.gkd.li/i/13623476"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-通知权限授权弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.hpbr.bosszhipin:id/iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13440781",
            "https://i.gkd.li/i/13623476"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知权限授权弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.hpbr.bosszhipin:id/iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13440781",
            "https://i.gkd.li/import/13623476"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "通知权限授权弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.hpbr.bosszhipin:id/iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13440781",
            "https://i.gkd.li/import/13623476"
          ],
          "key": 0
        }
      ]
    }
  ]
});
