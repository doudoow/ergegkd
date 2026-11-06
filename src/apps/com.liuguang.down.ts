// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "流光助手",
  "id": "com.liuguang.down",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][clickable=true][desc.length<10]",
          "fastQuery": true,
          "key": 0
        },
        {
          "matches": "[clickable=true][desc*=\"跳过\"][desc.length<10]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/31147124"
        }
      ]
    }
  ]
});
