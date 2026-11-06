// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "魔音MORIN",
  "id": "com.feiyu.morin",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13521556"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13546184"
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup > [text=\"广告\"]",
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16621747",
          "exampleUrls": "https://e.gkd.li/52f8dddd-3604-4144-96ce-804c66e77a19"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16621748",
          "exampleUrls": "https://e.gkd.li/a3929d91-2da9-423e-8733-7a933a611ca5"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13521556"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 5,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13546184"
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup > [text=\"广告\"]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/16621747",
          "exampleUrls": "https://e.gkd.li/52f8dddd-3604-4144-96ce-804c66e77a19"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "key": 7,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13521556"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "key": 8,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13546184"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"][visibleToUser=true]",
          "activityIds": [
            "com.feiyu.morin.view.main.MainActivity",
            "com.feiyu.morin.view.main.PlayerBottomControlActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521680",
            "https://i.gkd.li/i/13625476"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"][visibleToUser=true]",
          "activityIds": [
            ".view.main.MainActivity",
            ".view.main.PlayerBottomControlActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521680",
            "https://i.gkd.li/i/13625476"
          ]
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13521556"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13546184"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView + LinearLayout + LinearLayout + FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.feiyu.morin.view.main.MainActivity",
            "com.feiyu.morin.view.main.PlayerBottomControlActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521680",
            "https://i.gkd.li/i/13625476"
          ]
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView + LinearLayout + LinearLayout + FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.feiyu.morin.view.main.MainActivity",
            "com.feiyu.morin.view.main.PlayerBottomControlActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13521680",
            "https://i.gkd.li/import/13625476"
          ]
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13521556"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "activityIds": "com.feiyu.morin.view.main.MainActivity",
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13546184"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "ImageView + LinearLayout + LinearLayout + FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.feiyu.morin.view.main.MainActivity",
            "com.feiyu.morin.view.main.PlayerBottomControlActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13521680",
            "https://i.gkd.li/import/13625476"
          ]
        }
      ]
    }
  ]
});
