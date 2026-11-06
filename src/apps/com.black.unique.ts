// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "全球购骑士特权",
  "id": "com.black.unique",
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
          "matches": "@ImageView[id=\"com.black.unique:id/iv_close\"]",
          "activityIds": "com.black.unique.feature.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13499502",
          "key": 0
        },
        {
          "matches": "@ImageView[vid=\"iv_close\"]",
          "activityIds": ".feature.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13499502",
          "key": 1
        },
        {
          "matches": "@ImageView[id=\"com.black.unique:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13499502",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.black.unique:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13499502",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.black.unique:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13499502",
          "key": 0
        }
      ]
    }
  ]
});
