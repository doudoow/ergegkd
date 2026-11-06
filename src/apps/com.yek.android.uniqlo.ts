// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "优衣库",
  "id": "com.yek.android.uniqlo",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[id=\"com.yek.android.uniqlo:id/pop_close\"]",
          "activityIds": "com.yek.android.uniqlo.uiux.Home.activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13212320",
          "key": 0
        },
        {
          "matches": "ImageView[vid=\"pop_close\"]",
          "activityIds": ".uiux.Home.activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13212320",
          "key": 1
        },
        {
          "matches": "ImageView[id=\"com.yek.android.uniqlo:id/pop_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@TextView[text=\"取消\"] + TextView[text=\"确定\"]",
          "activityIds": ".activity.WelcomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13446421",
          "key": 0
        },
        {
          "matches": "@TextView[text=\"取消\"] + TextView[text=\"确定\"]",
          "activityIds": "com.yek.android.uniqlo.activity.WelcomeActivity",
          "snapshotUrls": "https://i.gkd.li/import/13446421",
          "key": 1
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
          "matches": "ImageView[id=\"com.yek.android.uniqlo:id/pop_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-新版本弹窗",
      "desc": "点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@TextView[text=\"取消\"] + TextView[text=\"确定\"]",
          "activityIds": "com.yek.android.uniqlo.activity.WelcomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13446421",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView[id=\"com.yek.android.uniqlo:id/pop_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "新版本弹窗",
      "desc": "点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "@TextView[text=\"取消\"] + TextView[text=\"确定\"]",
          "activityIds": "com.yek.android.uniqlo.activity.WelcomeActivity",
          "snapshotUrls": "https://i.gkd.li/import/13446421",
          "key": 0
        }
      ]
    }
  ]
});
