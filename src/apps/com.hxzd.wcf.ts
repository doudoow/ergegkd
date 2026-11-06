// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "五寸方",
  "id": "com.hxzd.wcf",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"btn_close\"]",
          "actionMaximum": 1,
          "activityIds": [
            "com.hxzd.wcf.ui.MainActivity",
            ".ui.SplashActivity"
          ],
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": [
            "https://i.gkd.li/i/14155547",
            "https://i.gkd.li/i/16828682"
          ],
          "exampleUrls": "https://e.gkd.li/be986139-cdbd-4dc7-a52f-6cb1e1a8061c",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_close\"]",
          "actionMaximum": 1,
          "activityIds": [
            ".ui.MainActivity",
            ".ui.SplashActivity"
          ],
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": [
            "https://i.gkd.li/i/14155547",
            "https://i.gkd.li/i/16828682"
          ],
          "exampleUrls": "https://e.gkd.li/be986139-cdbd-4dc7-a52f-6cb1e1a8061c",
          "key": 1
        }
      ]
    }
  ]
});
