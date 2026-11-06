// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "途虎养车",
  "id": "cn.TuHu.android",
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
          "matches": "@[id=\"cn.TuHu.android:id/imgClose\"] - [id=\"cn.TuHu.android:id/rlContent\"] > [id=\"cn.TuHu.android:id/img_jump\"]",
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13228818",
          "key": 0
        },
        {
          "matches": "@[vid=\"imgClose\"] - [vid=\"rlContent\"] > [vid=\"img_jump\"]",
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13228818",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.TuHu.android:id/imgClose\"]",
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13228796",
            "https://i.gkd.li/i/13256535"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"imgClose\"]",
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13228796",
            "https://i.gkd.li/i/13256535"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"cn.TuHu.android:id/imgClose\"] - [id=\"cn.TuHu.android:id/rlContent\"] > [id=\"cn.TuHu.android:id/img_jump\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cn.TuHu.android:id/imgClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"cn.TuHu.android:id/imgClose\"] - [id=\"cn.TuHu.android:id/rlContent\"] > [id=\"cn.TuHu.android:id/img_jump\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"cn.TuHu.android:id/imgClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"cn.TuHu.android:id/imgClose\"] - [id=\"cn.TuHu.android:id/rlContent\"] > [id=\"cn.TuHu.android:id/img_jump\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"cn.TuHu.android:id/imgClose\"]",
          "key": 0
        }
      ]
    }
  ]
});
