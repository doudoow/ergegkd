// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "777影视",
  "id": "com.changyou.app.qi",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ksad_auto_close_btn\"]",
          "activityIds": "com.changyou.app.qi.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14228685",
          "exampleUrls": "https://m.gkd.li/57941037/687f8201-8b15-491e-9c51-f3af0dc00260"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.changyou.app.qi.MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14296913",
            "https://i.gkd.li/i/14480073"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/c65e146e-4f2a-42f0-b233-4e04152d851d"
        },
        {
          "matches": "[vid=\"ksad_auto_close_btn\"]",
          "activityIds": ".MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14228685",
          "exampleUrls": "https://m.gkd.li/57941037/687f8201-8b15-491e-9c51-f3af0dc00260"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14296913",
            "https://i.gkd.li/i/14480073"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/c65e146e-4f2a-42f0-b233-4e04152d851d"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ksad_auto_close_btn\"]",
          "activityIds": "com.changyou.app.qi.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14228685",
          "exampleUrls": "https://m.gkd.li/57941037/687f8201-8b15-491e-9c51-f3af0dc00260"
        },
        {
          "matches": "[id=\"android:id/content\"] >5 ImageView[visibleToUser=true]",
          "activityIds": "com.changyou.app.qi.MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14296913",
            "https://i.gkd.li/i/14480073"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/c65e146e-4f2a-42f0-b233-4e04152d851d"
        }
      ]
    }
  ]
});
