// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "徽商银行",
  "id": "com.hsbank.mobilebank",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_skip\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/31823929"
        }
      ]
    }
  ]
});
