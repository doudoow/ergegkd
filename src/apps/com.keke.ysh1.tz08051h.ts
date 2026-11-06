// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "可可影视",
  "id": "com.keke.ysh1.tz08051h",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"朕知道了\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13548412"
        },
        {
          "matches": "[text=\"可可影视\"] +2 * > [text*=\"知道了\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-开屏提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text=\"可可影视\"] < LinearLayout >n @TextView[text*=\"知道了\"]",
          "fastQuery": true,
          "key": 0,
          "name": "网址更新",
          "snapshotUrls": "https://i.gkd.li/import/13548412"
        }
      ]
    },
    {
      "name": "开屏提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text=\"可可影视\"] < LinearLayout >n @TextView[text*=\"知道了\"]",
          "quickFind": true,
          "key": 0,
          "name": "网址更新",
          "snapshotUrls": "https://i.gkd.li/import/13548412"
        }
      ]
    }
  ]
});
