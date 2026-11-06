// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微视",
  "id": "com.tencent.weishi",
  "groups": [
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"青少年保护功能提示\"] +3 [text=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
