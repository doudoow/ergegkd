// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "好看视频",
  "id": "com.baidu.haokan",
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
          "matches": "[text=\"进入青少年模式\"] + [text=\"我知道了\"]",
          "key": 0
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
          "matches": "[text=\"进入青少年模式\"] + [text=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
