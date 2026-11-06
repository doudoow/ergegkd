// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀商城",
  "id": "com.hihonor.vmall",
  "groups": [
    {
      "name": "全屏广告-应用内弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.vmall:id/gift_close_iv\"]",
          "activityIds": [
            "com.vmall.client.base.fragment.VmallWapActivity",
            "com.vmall.client.splash.fragment.SplashActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13060881",
          "key": 0
        },
        {
          "matches": "[vid=\"gift_close_iv\"]",
          "activityIds": [
            "com.vmall.client.base.fragment.VmallWapActivity",
            "com.vmall.client.splash.fragment.SplashActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13060881",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"开启消息通知\"]",
            "[vid=\"notification_close\" || vid=\"iv_close\"]"
          ],
          "activityIds": [
            "com.vmall.client.messageCenter.fragment.MessageCenterActivity",
            "com.vmall.client.base.fragment.VmallWapActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13959029",
            "https://i.gkd.li/i/16776398"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.vmall:id/gift_close_iv\"]",
          "key": 0
        }
      ]
    }
  ]
});
