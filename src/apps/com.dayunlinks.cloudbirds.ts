// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "千鸟物联",
  "id": "com.dayunlinks.cloudbirds",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "x掉",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "activityIds": "com.qianniao.main.TabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34136039",
          "exampleUrls": "https://e.gkd.li/2e8463c1-c6d6-4fd9-84c2-98d502e95a19",
          "key": 0
        }
      ]
    }
  ]
});
