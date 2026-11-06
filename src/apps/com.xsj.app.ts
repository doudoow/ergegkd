// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "星影视频",
  "id": "com.xsj.app",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.xsj.app.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625504",
            "https://i.gkd.li/i/13761165"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0] - [text*=\"送福利啦\"][visibleToUser=true]",
          "activityIds": "com.qq.e.ads.ADActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13670176"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625504",
            "https://i.gkd.li/i/13761165"
          ]
        },
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.xsj.app.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "key": 3,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13625504",
            "https://i.gkd.li/import/13761165"
          ]
        },
        {
          "matches": "FrameLayout[childCount=3] > TextView[text!=\"\"] + @ImageView[clickable=true][visibleToUser=true]",
          "activityIds": "com.qq.e.ads.ADActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/13670176"
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13875711",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.xsj.app.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625504",
            "https://i.gkd.li/i/13761165"
          ]
        },
        {
          "matches": "FrameLayout[childCount=3] > TextView[text!=\"\"] + @ImageView[clickable=true][visibleToUser=true]",
          "activityIds": "com.qq.e.ads.ADActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13670176"
        }
      ]
    },
    {
      "name": "全屏广告-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.xsj.app.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13625504",
            "https://i.gkd.li/import/13761165"
          ]
        },
        {
          "matches": "FrameLayout[childCount=3] > TextView[text!=\"\"] + @ImageView[clickable=true][visibleToUser=true]",
          "activityIds": "com.qq.e.ads.ADActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13670176"
        }
      ]
    }
  ]
});
