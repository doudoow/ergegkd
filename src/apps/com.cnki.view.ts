// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "知网文化",
  "id": "com.cnki.view",
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
          "matches": "[id=\"com.cnki.view:id/update_undo\"]",
          "activityIds": [
            "com.cnki.view.core.navigator.main.HomeActivity",
            "com.cnki.view.core.tramp.main.SplashActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12755689",
            "https://i.gkd.li/i/12755700"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.cnki.view:id/update_undo\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"update_undo\"]",
          "activityIds": [
            ".core.navigator.main.HomeActivity",
            ".core.tramp.main.SplashActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12755689",
            "https://i.gkd.li/i/12755700"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.cnki.view:id/update_undo\"]",
          "key": 0
        }
      ]
    }
  ]
});
