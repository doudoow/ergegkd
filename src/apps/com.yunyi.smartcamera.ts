// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云蚁物联",
  "id": "com.yunyi.smartcamera",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.ants360.yicamera.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24979355",
          "exampleUrls": "https://e.gkd.li/ad388d03-bb0a-44a4-92ee-af37b83776da"
        },
        {
          "matches": "@[vid=\"ivClose\"] - [text=\"专属福利\"][visibleToUser=true]",
          "activityIds": "com.xiaoyi.yiplayer.ui.PlayerActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24979364",
          "exampleUrls": "https://e.gkd.li/248a2243-5323-4a21-bed2-25f6afc8a88b"
        },
        {
          "matches": [
            "[text*=\"广告\"][visibleToUser=true]",
            "[text=\"关闭\"][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24989298"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24989256"
        },
        {
          "matches": "[vid=\"iv_ad_logo\"] - [vid=\"iv_close\"][clickable=true]",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/25016571"
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[childCount=0] < @* - * > [text^=\"立即\" || text*=\"了解更多\" || text*=\"快手\"][visibleToUser=true] <<n [vid=\"native_ad_container\"]",
          "activityIds": "com.ants360.yicamera.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/24979363",
            "https://i.gkd.li/i/24989254",
            "https://i.gkd.li/i/24989255"
          ],
          "exampleUrls": "https://e.gkd.li/0f5246d3-42c4-486d-9694-f90dd19a22d2",
          "key": 0
        },
        {
          "matches": "ImageView[width<69 && height<69][visibleToUser=true] < @[childCount=1] <<n [vid=\"native_ad_container\" || vid=\"adContainer\"]",
          "activityIds": [
            "com.ants360.yicamera.activity.MainActivity",
            "com.xiaoyi.yiplayer.ui.PlayerActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/24979363",
            "https://i.gkd.li/i/24989254",
            "https://i.gkd.li/i/24989255",
            "https://i.gkd.li/i/27407225"
          ],
          "exampleUrls": "https://e.gkd.li/0f5246d3-42c4-486d-9694-f90dd19a22d2",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"开启通知\"][childCount=0] +n [text=\"暂不开启\"][clickable=true]",
          "activityIds": "com.ants360.yicamera.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25017451"
        }
      ]
    }
  ]
});
