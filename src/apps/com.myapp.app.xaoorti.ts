// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天天视频",
  "id": "com.myapp.app.xaoorti",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]"
          ],
          "activityIds": "com.ys.resemble.ui.login.splash.SplashADSetActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13520475"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.ys.resemble.ui.MainActivity",
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13546700"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": "com.ys.resemble.ui.MainActivity",
          "key": 2,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13546701"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.ys.resemble.ui.login.splash.SplashADSetActivity",
          "key": 3,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13520477"
        },
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "activityIds": "com.ys.resemble.ui.login.splash.SplashADSetActivity",
          "key": 4,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13520475"
        },
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.ys.resemble.ui.MainActivity",
          "key": 5,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13546700"
        },
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "ViewGroup > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "activityIds": "com.ys.resemble.ui.MainActivity",
          "key": 6,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13546701"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.ys.resemble.ui.login.splash.SplashADSetActivity",
          "key": 7,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13520477"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "activityIds": "com.ys.resemble.ui.login.splash.SplashADSetActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13520475"
        },
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.ys.resemble.ui.MainActivity",
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13546700"
        },
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "ViewGroup > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "activityIds": "com.ys.resemble.ui.MainActivity",
          "key": 2,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13546701"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.ys.resemble.ui.login.splash.SplashADSetActivity",
          "key": 3,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13520477"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "activityIds": "com.ys.resemble.ui.login.splash.SplashADSetActivity",
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13520475"
        },
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.ys.resemble.ui.MainActivity",
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13546700"
        },
        {
          "matches": [
            "ViewGroup > ViewGroup > [text=\"广告\"]",
            "ViewGroup > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "activityIds": "com.ys.resemble.ui.MainActivity",
          "key": 2,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13546701"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.ys.resemble.ui.login.splash.SplashADSetActivity",
          "key": 3,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13520477"
        }
      ]
    }
  ]
});
