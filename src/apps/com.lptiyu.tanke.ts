// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "步道乐跑",
  "id": "com.lptiyu.tanke",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.lptiyu.tanke:id/interact_ad_root\"] >n [id=\"com.lptiyu.tanke:id/iv_close\"]",
          "activityIds": "com.lptiyu.tanke.activities.main.MainActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12829816",
            "https://i.gkd.li/i/12869344",
            "https://i.gkd.li/i/13378925"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.lptiyu.tanke.activities.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13070801"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": [
            "com.lptiyu.tanke.activities.splash.SplashActivity",
            "com.lptiyu.tanke.activities.school_run_record_detail.RunRecordDetailActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218232",
            "https://i.gkd.li/i/13536714"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup - ViewGroup > ViewGroup > [text=\"跳过\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "fastQuery": true,
          "key": 3,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13476172"
        },
        {
          "matches": "[id=\"com.lptiyu.tanke:id/ksad_splash_circle_skip_left_view\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "fastQuery": true,
          "key": 4,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13625386"
        },
        {
          "matches": "@LinearLayout > [id=\"com.lptiyu.tanke:id/skip_parent_view\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "key": 5,
          "name": "其他广告",
          "snapshotUrls": "https://i.gkd.li/i/13166361"
        },
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": [
            ".activities.school_run_record_detail.RunRecordDetailActivity",
            ".activities.main.MainActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/22863742",
            "https://i.gkd.li/i/23549297"
          ],
          "exampleUrls": "https://e.gkd.li/5eff1f56-ea35-43f0-9789-644bd4213eed"
        },
        {
          "matches": "[vid=\"interact_ad_root\"] >n [vid=\"iv_close\"]",
          "activityIds": ".activities.main.MainActivity",
          "key": 7,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12829816",
            "https://i.gkd.li/i/12869344",
            "https://i.gkd.li/i/13378925"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".activities.main.MainActivity",
          "fastQuery": true,
          "key": 8,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13070801"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": [
            ".activities.splash.SplashActivity",
            ".activities.school_run_record_detail.RunRecordDetailActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218232",
            "https://i.gkd.li/i/13536714"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup - ViewGroup > ViewGroup > [text=\"跳过\"]",
          "activityIds": ".activities.splash.SplashActivity",
          "fastQuery": true,
          "key": 10,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13476172"
        },
        {
          "matches": "[vid=\"ksad_splash_circle_skip_left_view\"]",
          "activityIds": ".activities.splash.SplashActivity",
          "fastQuery": true,
          "key": 11,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13625386"
        },
        {
          "matches": "@LinearLayout > [vid=\"skip_parent_view\"]",
          "activityIds": ".activities.splash.SplashActivity",
          "key": 12,
          "name": "其他广告",
          "snapshotUrls": "https://i.gkd.li/i/13166361"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.lptiyu.tanke.activities.main.MainActivity",
          "key": 13,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13070801"
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -n ViewGroup > @ViewGroup[childCount=1] > ImageView",
          "activityIds": [
            "com.lptiyu.tanke.activities.splash.SplashActivity",
            "com.lptiyu.tanke.activities.school_run_record_detail.RunRecordDetailActivity"
          ],
          "key": 14,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13218232",
            "https://i.gkd.li/import/13536714"
          ]
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.lptiyu.tanke:id/interact_ad_root\"] >n [id=\"com.lptiyu.tanke:id/iv_close\"]",
          "activityIds": "com.lptiyu.tanke.activities.main.MainActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12829816",
            "https://i.gkd.li/i/12869344",
            "https://i.gkd.li/i/13378925"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.lptiyu.tanke.activities.main.MainActivity",
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13070801"
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -n ViewGroup > @ViewGroup[childCount=1] > ImageView",
          "activityIds": [
            "com.lptiyu.tanke.activities.splash.SplashActivity",
            "com.lptiyu.tanke.activities.school_run_record_detail.RunRecordDetailActivity"
          ],
          "key": 2,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218232",
            "https://i.gkd.li/i/13536714"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup - ViewGroup > ViewGroup > [text=\"跳过\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "fastQuery": true,
          "key": 3,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13476172"
        },
        {
          "matches": "[id=\"com.lptiyu.tanke:id/ksad_splash_circle_skip_left_view\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "fastQuery": true,
          "key": 4,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13625386"
        },
        {
          "matches": "@LinearLayout > [id=\"com.lptiyu.tanke:id/skip_parent_view\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "key": 5,
          "name": "其他广告",
          "snapshotUrls": "https://i.gkd.li/i/13166361"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.lptiyu.tanke:id/interact_ad_root\"] >n [id=\"com.lptiyu.tanke:id/iv_close\"]",
          "activityIds": "com.lptiyu.tanke.activities.main.MainActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12829816",
            "https://i.gkd.li/import/12869344",
            "https://i.gkd.li/import/13378925"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.lptiyu.tanke.activities.main.MainActivity",
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13070801"
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -n ViewGroup > @ViewGroup[childCount=1] > ImageView",
          "activityIds": [
            "com.lptiyu.tanke.activities.splash.SplashActivity",
            "com.lptiyu.tanke.activities.school_run_record_detail.RunRecordDetailActivity"
          ],
          "key": 2,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13218232",
            "https://i.gkd.li/import/13536714"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup - ViewGroup > ViewGroup > [text=\"跳过\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "quickFind": true,
          "key": 3,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13476172"
        },
        {
          "matches": "[id=\"com.lptiyu.tanke:id/ksad_splash_circle_skip_left_view\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "quickFind": true,
          "key": 4,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13625386"
        },
        {
          "matches": "@LinearLayout > [id=\"com.lptiyu.tanke:id/skip_parent_view\"]",
          "activityIds": "com.lptiyu.tanke.activities.splash.SplashActivity",
          "key": 5,
          "name": "其他广告",
          "snapshotUrls": "https://i.gkd.li/import/13166361"
        }
      ]
    }
  ]
});
