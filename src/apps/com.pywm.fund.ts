// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "普益基金",
  "id": "com.pywm.fund",
  "groups": [
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text=\"立即更新\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/13327271",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text=\"立即更新\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/import/13327271",
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
          "matches": "TextView[text=\"立即更新\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/import/13327271",
          "key": 0
        }
      ]
    }
  ]
});
