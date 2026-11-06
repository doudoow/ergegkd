// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小红帽",
  "id": "com.didi.live.spring",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"dialog_hall_iv_close\"]",
          "activityIds": "com.qennnsad.aknkaksd.presentation.ui.MainContainerActivity",
          "snapshotUrls": "https://i.gkd.li/i/14341955",
          "exampleUrls": "https://m.gkd.li/57941037/0d0a2a0a-b9de-4f30-9e25-a0e3b3c111d6",
          "key": 0
        }
      ]
    }
  ]
});
