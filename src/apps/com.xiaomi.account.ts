// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米账号",
  "id": "com.xiaomi.account",
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
          "matches": "@[text=\"以后再说\"] + [text=\"立即升级\"]",
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
          "matches": "@[text=\"以后再说\"] + [text=\"立即升级\"]",
          "key": 0
        }
      ]
    }
  ]
});
