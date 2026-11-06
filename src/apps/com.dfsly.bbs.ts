// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "AC匿名版",
  "id": "com.dfsly.bbs",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >7 FrameLayout[childCount=7] > LinearLayout >3 ImageView[text=null][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13330351",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".ui.NavigationActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13335135",
            "https://i.gkd.li/i/13335316"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".ui.NavigationActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13343675",
          "exampleUrls": "https://e.gkd.li/586a67a6-27d2-4cc2-9a00-be2fc63ed63f"
        },
        {
          "matches": [
            "[id=\"android:id/content\"] >n FrameLayout[childCount=5 || childCount=8] > FrameLayout > ImageView[text=null][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13343675",
            "https://i.gkd.li/import/13335135",
            "https://i.gkd.li/import/13335316"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[id=\"android:id/content\"] >n FrameLayout[childCount=5 || childCount=8] > FrameLayout > ImageView[text=null][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13343675",
            "https://i.gkd.li/i/13335135",
            "https://i.gkd.li/i/13335316"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[id=\"android:id/content\"] >n FrameLayout[childCount=5 || childCount=8] > FrameLayout > ImageView[text=null][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13343675",
            "https://i.gkd.li/import/13335135",
            "https://i.gkd.li/import/13335316"
          ],
          "key": 0
        }
      ]
    }
  ]
});
