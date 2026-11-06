// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "安易加速器",
  "id": "com.giraffe",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.giraffe:id/iv_close\"]",
          "activityIds": "com.speed.shadowsocks.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14000409",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.speed.shadowsocks.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14000409",
          "key": 2
        }
      ]
    }
  ]
});
