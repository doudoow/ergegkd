// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百度浏览器(荣耀版)",
  "id": "com.hihonor.baidu.browser",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[text*=\"跳过\"][clickable=true] <n LinearLayout[childCount>1] +2 [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/32739487"
        }
      ]
    }
  ]
});
