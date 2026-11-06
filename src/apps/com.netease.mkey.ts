// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易将军令",
  "id": "com.netease.mkey",
  "groups": [
    {
      "name": "其他-一键迁移至新版将军令",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.netease.mkey:id/tv_cancel\"]",
          "activityIds": "com.netease.mkey.activity.NtSecActivity",
          "snapshotUrls": "https://i.gkd.li/i/13421302",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_cancel\"]",
          "activityIds": ".activity.NtSecActivity",
          "snapshotUrls": "https://i.gkd.li/i/13421302",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-一键迁移至新版将军令",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.netease.mkey:id/tv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-一键迁移至新版将军令",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.netease.mkey:id/tv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "一键迁移至新版将军令",
      "enable": false,
      "matchTime": 10000,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.netease.mkey:id/tv_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
