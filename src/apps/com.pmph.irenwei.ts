// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "人卫",
  "id": "com.pmph.irenwei",
  "groups": [
    {
      "name": "全屏广告-抽奖弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.pmph.irenwei:id/iv_close\"]",
          "activityIds": "com.pmph.main.ad.AdActivity",
          "snapshotUrls": "https://i.gkd.li/i/13897421",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.pmph.main.ad.AdActivity",
          "snapshotUrls": "https://i.gkd.li/i/13897421",
          "key": 1
        }
      ]
    }
  ]
});
