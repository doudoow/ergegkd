// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "湛庐阅读",
  "id": "com.cheersedu.app",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.cheersedu.app:id/iv_version_close\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13315712",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_version_close\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13315712",
          "key": 1
        },
        {
          "matches": "[id=\"com.cheersedu.app:id/iv_version_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.cheersedu.app:id/iv_version_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.cheersedu.app:id/iv_version_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
