// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "埋堆堆",
  "id": "com.tvbc.maiduidui",
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
          "matches": "@[vid=\"tv_ok\"] - [vid=\"tv_open_child_model\"]",
          "key": 0
        }
      ]
    }
  ]
});
