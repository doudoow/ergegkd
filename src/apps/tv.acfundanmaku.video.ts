// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "AcFun",
  "id": "tv.acfundanmaku.video",
  "groups": [
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"tv.acfundanmaku.video:id/btnSimpleDialogOne\"]",
          "activityIds": "tv.acfun.core.module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13518737",
          "exampleUrls": "https://m.gkd.li/6328439/8229e6ec-f1d6-4162-96ad-c3a6b74877c7",
          "key": 0
        },
        {
          "matches": "[id=\"tv.acfundanmaku.video:id/btnSimpleDialogOne\"]",
          "snapshotUrls": "https://i.gkd.li/i/13518737",
          "exampleUrls": "https://m.gkd.li/6328439/8229e6ec-f1d6-4162-96ad-c3a6b74877c7",
          "key": 1
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"tv.acfundanmaku.video:id/btnSimpleDialogOne\"]",
          "activityIds": "tv.acfun.core.module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13518737",
          "exampleUrls": "https://m.gkd.li/6328439/8229e6ec-f1d6-4162-96ad-c3a6b74877c7",
          "key": 0
        }
      ]
    }
  ]
});
