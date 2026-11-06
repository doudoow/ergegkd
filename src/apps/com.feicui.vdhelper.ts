// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "翡翠视频",
  "id": "com.feicui.vdhelper",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12700749"
        },
        {
          "matches": [
            "ImageView + [id=null][text=\"广告\"]",
            "ImageView + [id=null][text=\"跳过\"]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12700759"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12700800"
        },
        {
          "matches": "[id=\"close_btn\"][clickable=true]",
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12700837",
            "https://i.gkd.li/i/12700848"
          ]
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - FrameLayout >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700749"
          ],
          "key": 0
        },
        {
          "matches": [
            "ImageView + [id=null][text=\"广告\"]",
            "ImageView + [id=null][text=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12700759"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"广告\"] - ImageView < ViewGroup -(2) ViewGroup >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700800"
          ],
          "key": 2
        },
        {
          "matches": "[id=\"close_btn\"][clickable=true]",
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12700837",
            "https://i.gkd.li/i/12700848"
          ],
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - FrameLayout >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700749"
          ],
          "key": 0
        },
        {
          "matches": [
            "ImageView + [id=null][text=\"广告\"]",
            "ImageView + [id=null][text=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12700759"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"广告\"] - ImageView < ViewGroup -(2) ViewGroup >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700800"
          ],
          "key": 2
        },
        {
          "matches": "[id=\"close_btn\"][clickable=true]",
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12700837",
            "https://i.gkd.li/import/12700848"
          ],
          "key": 3
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView - FrameLayout >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700749"
          ],
          "key": 0
        },
        {
          "matches": [
            "ImageView + [id=null][text=\"广告\"]",
            "ImageView + [id=null][text=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12700759"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"广告\"] - ImageView < ViewGroup -(2) ViewGroup >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700800"
          ],
          "key": 2
        },
        {
          "matches": "[id=\"close_btn\"][clickable=true]",
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12700837",
            "https://i.gkd.li/import/12700848"
          ],
          "key": 3
        }
      ]
    }
  ]
});
