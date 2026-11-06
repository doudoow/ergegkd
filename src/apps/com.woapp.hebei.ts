// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "联通智家",
  "id": "com.woapp.hebei",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"忽略更新\"] + [text=\"立即更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"忽略更新\"] + [text=\"立即更新\"]",
          "key": 0
        }
      ]
    }
  ]
});
