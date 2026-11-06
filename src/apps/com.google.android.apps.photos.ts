// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "谷歌相册",
  "id": "com.google.android.apps.photos",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击[以后再说]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "matchRoot": true,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"以后再说\" || text=\"Not now\"][visibleToUser=true]",
          "activityIds": [
            ".update.treatment.UpdateAppTreatmentPromoPageActivity",
            ".home.HomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13218940",
            "https://i.gkd.li/i/18522070",
            "https://i.gkd.li/i/18608917"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"以后再说\" || text=\"Not now\"]",
          "activityIds": [
            ".update.treatment.UpdateAppTreatmentPromoPageActivity",
            ".home.HomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13218940",
            "https://i.gkd.li/i/18522070",
            "https://i.gkd.li/i/18608917"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-会员广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"转到上一层级\"] < ViewGroup[id=\"com.google.android.apps.photos:id/toolbar\"]",
          "activityIds": "com.google.android.apps.photos.cloudstorage.paidfeatures.PaidFeaturesActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13774247"
        },
        {
          "matches": "[vid=\"spark_container\"] > [vid=\"close_button\"][visibleToUser=true]",
          "activityIds": ".home.HomeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22482732",
          "exampleUrls": "https://e.gkd.li/581cad00-a5fa-4f42-b31f-84a2d5c89afc"
        },
        {
          "matches": "@[desc=\"转到上一层级\"] < ViewGroup[vid=\"toolbar\"]",
          "activityIds": ".cloudstorage.paidfeatures.PaidFeaturesActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13774247"
        }
      ]
    },
    {
      "name": "全屏广告-优惠提示",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"转到上一层级\"] < ViewGroup[id=\"com.google.android.apps.photos:id/toolbar\"]",
          "activityIds": "com.google.android.apps.photos.cloudstorage.paidfeatures.PaidFeaturesActivity",
          "snapshotUrls": "https://i.gkd.li/i/13774247",
          "key": 0
        },
        {
          "matches": "@[desc=\"转到上一层级\"] < ViewGroup[id=\"com.google.android.apps.photos:id/toolbar\"]",
          "activityIds": "com.google.android.apps.photos.cloudstorage.paidfeatures.PaidFeaturesActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13774247",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击[No thanks]",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"No thanks\"] < @[clickable=true] <7 ScrollView < View < View < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "activityIds": ".home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30710352",
          "exampleUrls": "https://e.gkd.li/e9db52c0-597e-4fa2-a936-8affe0d60864",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-取消更新",
      "desc": "点击[以后再说]",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=`com.google.android.apps.photos:id/negative_button`][text=`以后再说`]",
          "snapshotUrls": "https://i.gkd.li/import/13218940",
          "key": 0
        }
      ]
    }
  ]
});
