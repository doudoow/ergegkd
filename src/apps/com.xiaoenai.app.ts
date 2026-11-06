// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小恩爱",
  "id": "com.xiaoenai.app",
  "groups": [
    {
      "name": "全屏广告",
      "enable": false,
      "matchTime": 15000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".presentation.home.view.activity.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13728018",
          "exampleUrls": "https://e.gkd.li/3997eac2-4b0d-4adc-a00c-d7551ea4f364"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.mzd.feature.launcher.view.activity.LauncherActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13867878",
          "exampleUrls": "https://e.gkd.li/e11364ec-62dc-483b-b8c9-28feab2563fb"
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "name": "腾讯广告SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/13728018",
            "https://i.gkd.li/i/13867878"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<90][height<90] -3 ImageView <<n [id=\"com.xiaoenai.app:id/view_ad_tpl\"]",
          "activityIds": "com.xiaoenai.app.presentation.home.view.activity.HomeActivity",
          "fastQuery": true,
          "name": "字节广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13728026",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true][width<90][height<90] -3 ImageView <<n [vid=\"view_ad_tpl\"]",
          "activityIds": ".presentation.home.view.activity.HomeActivity",
          "fastQuery": true,
          "name": "字节广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13728026",
          "key": 1
        },
        {
          "matches": "@ImageView[clickable=true][width<90][height<90] -3 ImageView <<n [id=\"com.xiaoenai.app:id/view_ad_tpl\"]",
          "fastQuery": true,
          "name": "字节广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13728026",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13727905",
          "key": 0
        },
        {
          "matches": "@View <3 FrameLayout[childCount=4] <2 FrameLayout[childCount=2] < [vid=\"ad_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/13867880",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<90][height<90] -3 ImageView <<n [id=\"com.xiaoenai.app:id/view_ad_tpl\"]",
          "fastQuery": true,
          "name": "字节广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13728026",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<90][height<90] -3 ImageView <<n [id=\"com.xiaoenai.app:id/view_ad_tpl\"]",
          "quickFind": true,
          "name": "字节广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13728026",
          "key": 0
        }
      ]
    }
  ]
});
