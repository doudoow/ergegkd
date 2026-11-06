// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "大茶肆",
  "id": "cisdom.com.bigteaapp",
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
          "matches": "[text$=\"抽奖送大礼\"] < WebView - [id=\"cisdom.com.bigteaapp:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228579",
          "key": 0
        },
        {
          "matches": "[text$=\"抽奖送大礼\"] < WebView - [vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228579",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text$=\"抽奖送大礼\"] < WebView - [id=\"cisdom.com.bigteaapp:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text$=\"抽奖送大礼\"] < WebView - [id=\"cisdom.com.bigteaapp:id/close\"]",
          "key": 0
        }
      ]
    }
  ]
});
