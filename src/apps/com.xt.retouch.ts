// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "醒图",
  "id": "com.xt.retouch",
  "groups": [
    {
      "name": "评价提示-好评反馈",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.xt.retouch:id/market_feedback_dialog_close\"]",
          "activityIds": ".uilauncher.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13062637",
          "key": 0
        },
        {
          "matches": "[vid=\"market_feedback_dialog_close\"]",
          "activityIds": ".uilauncher.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13062637",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-好评反馈",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xt.retouch:id/market_feedback_dialog_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-好评反馈",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.xt.retouch:id/market_feedback_dialog_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "好评反馈",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.xt.retouch:id/market_feedback_dialog_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
