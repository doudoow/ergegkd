// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OMOFUN",
  "id": "com.cyl.musiccy.ou",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12775918",
            "https://i.gkd.li/i/12775926",
            "https://i.gkd.li/i/13063151",
            "https://i.gkd.li/i/13063246",
            "https://i.gkd.li/i/13071599"
          ]
        },
        {
          "matches": "[id=\"com.cyl.musiccy.ou:id/ksad_splash_root_container\"] [childCount=3] > @ImageView[clickable=true] - [text=\"|\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12775919"
        },
        {
          "matches": "[vid=\"ksad_splash_root_container\"] [childCount=3] > @ImageView[clickable=true] - [text=\"|\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12775919"
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
          "snapshotUrls": "https://i.gkd.li/i/13063206",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "actionDelay": 300,
      "key": 2,
      "rules": [
        {
          "matches": "[id$=\"ksad_container\"] >n @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "activityIds": [
            "com.cyl.musiccy.ou.MainActivity",
            "com.ksf.yyx.MainActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775922",
            "https://i.gkd.li/i/13063222"
          ]
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.cyl.musiccy.ou.MainActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775923",
            "https://i.gkd.li/i/13800051"
          ]
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "activityIds": [
            "com.cyl.musiccy.ou.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "key": 2,
          "name": "Sigmob广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775925",
            "https://i.gkd.li/i/12775924",
            "https://i.gkd.li/i/13759345"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.android.internal.app.ResolverActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903",
            "https://i.gkd.li/i/12789928",
            "https://i.gkd.li/i/13215476",
            "https://i.gkd.li/i/13071595",
            "https://i.gkd.li/i/13063249"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.cyl.musiccy.ou.MainActivity",
          "fastQuery": true,
          "key": 4,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13422363"
        },
        {
          "matches": "[id$=\"ksad_container\"] >n @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "activityIds": [
            "com.cyl.musiccy.ou.MainActivity",
            "com.ksf.yyx.MainActivity"
          ],
          "key": 5,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775922",
            "https://i.gkd.li/i/13063222"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup > @ViewGroup[clickable=true] > ImageView",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.cyl.musiccy.ou.MainActivity"
          ],
          "key": 6,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775923",
            "https://i.gkd.li/i/13800051"
          ]
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.android.internal.app.ResolverActivity",
            "com.cyl.musiccy.ou.MainActivity"
          ],
          "key": 7,
          "name": "腾讯SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903",
            "https://i.gkd.li/i/12789928",
            "https://i.gkd.li/i/13215476",
            "https://i.gkd.li/i/13071595",
            "https://i.gkd.li/i/13063249",
            "https://i.gkd.li/i/13422363",
            "https://i.gkd.li/i/13936028"
          ]
        },
        {
          "matches": "[id$=\"ksad_container\"] >n @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "activityIds": [
            ".MainActivity",
            "com.ksf.yyx.MainActivity"
          ],
          "fastQuery": true,
          "key": 8,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775922",
            "https://i.gkd.li/i/13063222"
          ]
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            ".MainActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775923",
            "https://i.gkd.li/i/13800051"
          ]
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "activityIds": [
            ".MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "key": 10,
          "name": "Sigmob广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775925",
            "https://i.gkd.li/i/12775924",
            "https://i.gkd.li/i/13759345"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 11,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13422363"
        },
        {
          "matches": "ImageView <n FrameLayout > FrameLayout[index=1] > FrameLayout[index=2] > ImageView",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.android.internal.app.ResolverActivity"
          ],
          "key": 12,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775921",
            "https://i.gkd.li/import/12776903",
            "https://i.gkd.li/import/12789928",
            "https://i.gkd.li/import/13215476",
            "https://i.gkd.li/import/13071595"
          ]
        },
        {
          "matches": "ImageView <n FrameLayout - FrameLayout > FrameLayout[index=1] > ImageView",
          "activityIds": "com.cyl.musiccy.ou.MainActivity",
          "key": 13,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13063249"
        },
        {
          "matches": "ImageView <n FrameLayout > FrameLayout[index=0] > FrameLayout FrameLayout > ImageView",
          "activityIds": "com.cyl.musiccy.ou.MainActivity",
          "key": 14,
          "name": "腾讯广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13422363"
        }
      ]
    },
    {
      "name": "通知提示-首页通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13063206",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/import/13063206",
          "key": 0
        }
      ]
    },
    {
      "name": "首页通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/import/13063206",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "actionDelay": 300,
      "key": 6,
      "rules": [
        {
          "matches": "[id$=\"ksad_container\"] >n @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "activityIds": [
            "com.cyl.musiccy.ou.MainActivity",
            "com.ksf.yyx.MainActivity"
          ],
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775922",
            "https://i.gkd.li/import/13063222"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup > @ViewGroup[clickable=true] > ImageView",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.cyl.musiccy.ou.MainActivity"
          ],
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775923",
            "https://i.gkd.li/import/13800051"
          ]
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "activityIds": [
            "com.cyl.musiccy.ou.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "key": 2,
          "name": "Sigmob广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13759345",
            "https://i.gkd.li/import/12775925",
            "https://i.gkd.li/import/12775924"
          ]
        },
        {
          "matches": "ImageView <n FrameLayout > FrameLayout[index=1] > FrameLayout[index=2] > ImageView",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.android.internal.app.ResolverActivity"
          ],
          "key": 3,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12775921",
            "https://i.gkd.li/import/12776903",
            "https://i.gkd.li/import/12789928",
            "https://i.gkd.li/import/13215476",
            "https://i.gkd.li/import/13071595"
          ]
        },
        {
          "matches": "ImageView <n FrameLayout - FrameLayout > FrameLayout[index=1] > ImageView",
          "activityIds": "com.cyl.musiccy.ou.MainActivity",
          "key": 4,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13063249"
        },
        {
          "matches": "ImageView <n FrameLayout > FrameLayout[index=0] > FrameLayout FrameLayout > ImageView",
          "activityIds": "com.cyl.musiccy.ou.MainActivity",
          "key": 5,
          "name": "腾讯广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13422363"
        }
      ]
    }
  ]
});
