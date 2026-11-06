// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "乐校通",
  "id": "client.android.yixiaotong",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13055837"
        },
        {
          "matches": "[id=\"client.android.yixiaotong:id/ksad_tk_view\"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView",
          "activityIds": "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
          "key": 1,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13060116"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "fastQuery": true,
          "key": 2,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13625511"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
          "key": 3,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13055837"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "activityIds": [],
          "key": 4,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13625511"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".v3.ui.appcontrol.bath.BathDetailActivity",
          "fastQuery": true,
          "key": 5,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13055837"
        },
        {
          "matches": "[id$=\"ksad_tk_view\"] >n ViewGroup + * > @ViewGroup[clickable=true] > ImageView[width<48]",
          "activityIds": ".v3.ui.appcontrol.bath.BathDetailActivity",
          "key": 6,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13060116"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - FrameLayout - FrameLayout[childCount=1] > ImageView[childCount=0]",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13451010"
        },
        {
          "matches": "@TextView[clickable=true][childCount=0][visibleToUser=true] + View > [visibleToUser=true][text=\"广告\"] <<n [id=\"client.android.yixiaotong:id/ksad_container\"]",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13450887"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14469848",
          "exampleUrls": "https://m.gkd.li/57941037/ad8a1bbf-61b5-4a7e-8e16-5e0092f04b8c"
        },
        {
          "matches": "[vid=\"native_ad_tpbt_image_iv\"]",
          "position": {
            "left": "width * 0.9585",
            "top": "width * 0.0424"
          },
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14469800",
            "https://i.gkd.li/i/14469876",
            "https://i.gkd.li/i/14469878"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/ed6c2c12-ac17-40cc-9842-3dbc2a477d15"
        },
        {
          "matches": "@TextView[clickable=true][childCount=0][visibleToUser=true] + View > [visibleToUser=true][text=\"广告\"] <<n [vid=\"ksad_container\"]",
          "fastQuery": true,
          "key": 4,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13450887"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView + * + FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
            "client.android.yixiaotong.v3.ui.appcontrol.bath.BathControlActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13451010",
            "https://i.gkd.li/i/14469739"
          ]
        },
        {
          "matches": "[id=\"client.android.yixiaotong:id/ksad_container\"] >n @TextView + View > [text=\"广告\"]",
          "activityIds": "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13450887"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13055837"
        },
        {
          "matches": "[id=\"client.android.yixiaotong:id/ksad_tk_view\"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView",
          "activityIds": "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
          "key": 1,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13060116"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "activityIds": [],
          "key": 2,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13625511"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView - FrameLayout - FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13451010"
        },
        {
          "matches": "[id=\"client.android.yixiaotong:id/ksad_container\"] >n @TextView + View > [text=\"广告\"]",
          "activityIds": "client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity",
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13450887"
        }
      ]
    },
    {
      "name": "底部卡片广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "@TextView[clickable=true][text=\"\"] + View [text=\"广告\"] <<n [id=\"client.android.yixiaotong:id/ksad_container\"]",
          "key": 0
        }
      ]
    }
  ]
});
