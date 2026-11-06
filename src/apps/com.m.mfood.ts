// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "mFood",
  "id": "com.m.mfood",
  "groups": [
    {
      "name": "局部广告-浮窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.m.mfood:id/close\"]",
          "activityIds": "com.zdyl.mfood.ui.home.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13350787",
          "key": 0
        },
        {
          "matches": "[vid=\"close\"]",
          "activityIds": "com.zdyl.mfood.ui.home.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13350787",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-浮窗廣告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.m.mfood:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-浮窗廣告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.m.mfood:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "浮窗廣告",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.m.mfood:id/close\"]",
          "key": 0
        }
      ]
    }
  ]
});
