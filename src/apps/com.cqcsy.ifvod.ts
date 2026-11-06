// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱壹帆",
  "id": "com.cqcsy.ifvod",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] +2 [text=\"立即更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] +2 [text=\"立即更新\"]",
          "key": 0
        }
      ]
    }
  ]
});
