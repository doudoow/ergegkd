// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "咪咕音乐",
  "id": "cmccwm.mobilemusic",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"]",
          "action": "back",
          "activityIds": ".ui.base.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13448898",
          "key": 0
        },
        {
          "matches": "@ImageView[id=\"cmccwm.mobilemusic.libraries_feature:id/iv_back\"] - TextView[id=\"cmccwm.mobilemusic.libraries_feature:id/tv_title\"][text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/import/13448898",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cmccwm.mobilemusic.libraries_feature:id/tv_title\"][text=\"发现新版本\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/13448898",
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
          "matches": "[id=\"cmccwm.mobilemusic.libraries_feature:id/tv_title\"][text=\"发现新版本\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/import/13448898",
          "key": 0
        }
      ]
    }
  ]
});
