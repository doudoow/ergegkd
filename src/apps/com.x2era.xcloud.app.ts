// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Fa米家",
  "id": "com.x2era.xcloud.app",
  "groups": [
    {
      "name": "更新提示",
      "desc": "关闭升级弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[id=\"com.x2era.xcloud.app:id/tv_upgrade\"]",
            "[id=\"com.x2era.xcloud.app:id/iv_cancel\"]"
          ],
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13420706",
          "key": 0
        },
        {
          "matches": [
            "[vid=\"tv_upgrade\"]",
            "[vid=\"iv_cancel\"]"
          ],
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13420706",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-Fa米家-升级提示",
      "desc": "关闭升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id$=\"com.x2era.xcloud.app:id/iv_cancel\"]",
          "activityIds": "com.x2era.xcloud.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13420706",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-Fa米家-升级提示",
      "desc": "关闭升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id$=\"com.x2era.xcloud.app:id/iv_cancel\"]",
          "activityIds": "com.x2era.xcloud.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13420706",
          "key": 0
        }
      ]
    },
    {
      "name": "Fa米家-升级提示",
      "desc": "关闭升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id$=\"com.x2era.xcloud.app:id/iv_cancel\"]",
          "activityIds": "com.x2era.xcloud.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13420706",
          "key": 0
        }
      ]
    }
  ]
});
