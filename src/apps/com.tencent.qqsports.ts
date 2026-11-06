// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "腾讯体育",
  "id": "com.tencent.qqsports",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text*=\"跳过\"][text.length<=10]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/14032883",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页",
      "desc": "进入app-首页后出现,限时18s",
      "matchTime": 18000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0] - * > [vid=\"webViewRL\"] -> [text=\"图片\"] <<4 [vid=\"webViewRL\"]",
          "activityIds": ".ui.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/27564093",
          "exampleUrls": "https://e.gkd.li/42b7abd7-6480-44af-897c-b397f6c01fd2",
          "key": 0
        }
      ]
    }
  ]
});
