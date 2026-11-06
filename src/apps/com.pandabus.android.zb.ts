// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "淄博出行",
  "id": "com.pandabus.android.zb",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.pandabus.android.zb:id/iv_native_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/13400177",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_native_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/13400177",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.pandabus.android.zb:id/iv_native_dislike\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.pandabus.android.zb:id/iv_native_dislike\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.pandabus.android.zb:id/iv_native_dislike\"]",
          "key": 0
        }
      ]
    }
  ]
});
