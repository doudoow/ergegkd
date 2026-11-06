// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云服务",
  "id": "com.heytap.cloud",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"检测到新版本\"]",
            "[vid=\"cancel\"]"
          ],
          "activityIds": "com.heytap.cloud.home.ui.CloudSettingsActivity2",
          "snapshotUrls": "https://i.gkd.li/i/16097208",
          "key": 0
        },
        {
          "matches": [
            "[text=\"检测到新版本\"]",
            "[vid=\"cancel\"]"
          ],
          "activityIds": ".home.ui.CloudSettingsActivity2",
          "snapshotUrls": "https://i.gkd.li/i/16097208",
          "key": 1
        }
      ]
    }
  ]
});
