// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智慧生活",
  "id": "com.huawei.smarthome",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
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
