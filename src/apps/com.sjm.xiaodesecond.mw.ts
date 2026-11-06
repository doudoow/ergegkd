// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "喵物次元",
  "id": "com.sjm.xiaodesecond.mw",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭/跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.sjm.xiaodesecond.mw.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14353263",
          "exampleUrls": "https://e.gkd.li/5332e99f-d47b-44ad-b8df-fcd9ec564df4"
        },
        {
          "matches": "@[clickable=true] > [text=\"跳过\"]",
          "activityIds": "com.sjm.xiaodesecond.mw.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14203087",
            "https://i.gkd.li/i/14354395"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a52ba4bb-0838-4c08-b771-78205786b016"
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": "com.sjm.xiaodesecond.mw.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14203600",
            "https://i.gkd.li/i/14203327"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/46e28728-570e-4fef-9c38-d561813d1c63"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <(2,3) FrameLayout[childCount=4] +(1,2) FrameLayout[childCount=2] >2 [text^=\"立即\" || text=\"去逛逛\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14345580",
          "exampleUrls": "https://e.gkd.li/0b695e8c-c998-49bb-a416-27cf0f3a8f30"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14353263",
          "exampleUrls": "https://e.gkd.li/5332e99f-d47b-44ad-b8df-fcd9ec564df4"
        },
        {
          "matches": "@[clickable=true] > [text=\"跳过\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14203087",
            "https://i.gkd.li/i/14354395"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a52ba4bb-0838-4c08-b771-78205786b016"
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/14203600",
            "https://i.gkd.li/i/14203327"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/46e28728-570e-4fef-9c38-d561813d1c63"
        }
      ]
    },
    {
      "name": "全屏广告-开屏二次弹窗",
      "desc": "点击x或跳过",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text=\"跳过\"] <4 @ViewGroup <<n ViewGroup >n TextView[text=\"广告\"]",
          "key": 0,
          "name": "全屏广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/14203319",
            "https://i.gkd.li/i/14203087"
          ]
        },
        {
          "matches": "@ViewGroup < ViewGroup +2 ViewGroup > TextView[text=\"广告\"]",
          "key": 1,
          "name": "全屏广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/14203327",
            "https://i.gkd.li/i/14203600"
          ]
        },
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3 && childCount!=5] >2 ImageView[visibleToUser=true]",
          "key": 2,
          "name": "全屏广告-3",
          "snapshotUrls": [
            "https://i.gkd.li/i/14345580",
            "https://i.gkd.li/i/14353263"
          ]
        }
      ]
    }
  ]
});
