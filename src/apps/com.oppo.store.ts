// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OPPO商城",
  "id": "com.oppo.store",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击下次再说",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"下次再说\"] -3 [text=\"发现新版本\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13295202",
          "key": 0
        },
        {
          "matches": "@[text=\"下次再说\"] -n [text=\"发现新版本\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"com.oppo.store:id/dialog_delete\"][desc=\"关闭\"]",
          "activityIds": "com.oppo.store.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13295201",
          "key": 0
        },
        {
          "matches": "ImageView[vid=\"dialog_delete\"][desc=\"关闭\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13295201",
          "key": 1
        },
        {
          "matches": "ImageView[id=\"com.oppo.store:id/dialog_delete\"][desc=\"关闭\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-升级提示",
      "desc": "点击下次再说",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"下次再说\"] -n [text=\"发现新版本\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[id=\"com.oppo.store:id/dialog_delete\"][desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级提示",
      "desc": "点击下次再说",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"下次再说\"] -n [text=\"发现新版本\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView[id=\"com.oppo.store:id/dialog_delete\"][desc=\"关闭\"]",
          "key": 0
        }
      ]
    }
  ]
});
