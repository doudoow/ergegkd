// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蜜雪冰城",
  "id": "com.mxbc.mxsa",
  "groups": [
    {
      "name": "全屏广告-主界面弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.mxbc.mxsa:id/close\"]",
          "activityIds": "com.mxbc.mxsa.modules.main.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12929345"
        },
        {
          "matches": "[vid=\"close\"]",
          "activityIds": ".modules.main.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12929345"
        },
        {
          "matches": "[id=\"com.mxbc.mxsa:id/close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12929345"
        }
      ]
    },
    {
      "name": "未分类-主界面弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.mxbc.mxsa:id/close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12929345"
        }
      ]
    },
    {
      "name": "主界面弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.mxbc.mxsa:id/close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12929345"
        }
      ]
    }
  ]
});
