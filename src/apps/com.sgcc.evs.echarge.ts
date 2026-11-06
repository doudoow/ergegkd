// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "e充电",
  "id": "com.sgcc.evs.echarge",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.sgcc.evs.echarge:id/iv_close\"]",
          "activityIds": [
            "com.evs.echarge.dev.ui.advertisement.SplashActivity",
            "com.evs.echarge.dev.ui.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13958838",
            "https://i.gkd.li/i/14005508"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            "com.evs.echarge.dev.ui.advertisement.SplashActivity",
            "com.evs.echarge.dev.ui.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13958838",
            "https://i.gkd.li/i/14005508"
          ],
          "key": 1
        }
      ]
    }
  ]
});
