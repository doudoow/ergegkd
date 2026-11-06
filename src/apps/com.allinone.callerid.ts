// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Showcaller",
  "id": "com.allinone.callerid",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"mys-content\"] > View > View > Button[clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13696207"
        },
        {
          "matches": "[id=\"close-button\"] > View > View > Image",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13696205"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"mys-content\"] > View > View > Button[clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13696207"
        },
        {
          "matches": "[id=\"close-button\"] > View > View > Image",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13696205"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"mys-content\"] > View > View > Button[clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13696207"
        },
        {
          "matches": "[id=\"close-button\"] > View > View > Image",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13696205"
        }
      ]
    }
  ]
});
