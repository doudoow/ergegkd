// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "CamHipro",
  "id": "com.hichip.campro",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close_ad\"]",
          "activityIds": "main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15847732",
          "key": 0
        }
      ]
    }
  ]
});
