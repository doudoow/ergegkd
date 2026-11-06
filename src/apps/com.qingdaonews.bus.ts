// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "青岛公交查询",
  "id": "com.qingdaonews.bus",
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
          "matches": "[id=\"com.qingdaonews.bus:id/iv_native_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/13467193",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_native_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/13467193",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.qingdaonews.bus:id/iv_native_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/13467193",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.qingdaonews.bus:id/iv_native_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/import/13467193",
          "key": 0
        }
      ]
    }
  ]
});
