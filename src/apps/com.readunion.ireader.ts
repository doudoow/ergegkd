// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "息壤阅读",
  "id": "com.readunion.ireader",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": "com.union.modulehome.ui.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/16790805",
          "exampleUrls": "https://e.gkd.li/8192872f-b071-450b-aea7-ec3ce62fee95",
          "key": 0
        }
      ]
    }
  ]
});
