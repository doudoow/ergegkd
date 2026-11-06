// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天猫校园",
  "id": "com.tmall.campus.and",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"close_btn\" || vid=\"iv_close\"][clickable=true]",
          "activityIds": [
            "com.tmall.campus.and.main.MainActivity",
            "com.tmall.campus.bizwebview.ui.CampusWebActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22399316",
            "https://i.gkd.li/i/22425649"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"close_btn\" || vid=\"iv_close\"][clickable=true]",
          "activityIds": [
            ".main.MainActivity",
            "com.tmall.campus.bizwebview.ui.CampusWebActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22399316",
            "https://i.gkd.li/i/22425649"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_close_ad\"]",
          "activityIds": [
            "com.tmall.campus.scancode.activity.ToolsCaptureActivity",
            "com.tmall.campus.bizwebview.ui.CampusWebActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22558370",
            "https://i.gkd.li/i/22871032"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-打开应用自动点击扫一扫",
      "desc": "仅开屏后触发一次",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"iv_top_scan\"]",
          "activityIds": "com.tmall.campus.and.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22871147",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_top_scan\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22871147",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"获取通知权限\"]",
            "[text=\"再想想\"]"
          ],
          "activityIds": [
            ".main.MainActivity",
            "com.tmall.campus.launcher.SplashActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23124558",
            "https://i.gkd.li/i/23254348"
          ],
          "key": 0
        }
      ]
    }
  ]
});
