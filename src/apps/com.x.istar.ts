// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "观星",
  "id": "com.x.istar",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"关闭广告\"][vid=\"btn_negative\"]",
          "activityIds": "com.x.istar.view.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13974606",
          "key": 0
        },
        {
          "matches": "[text=\"关闭广告\"][vid=\"btn_negative\"]",
          "activityIds": ".view.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13974606",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-开屏广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"关闭广告\"][vid=\"btn_negative\"]",
          "key": 0
        }
      ]
    }
  ]
});
