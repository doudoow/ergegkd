// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "甜糖",
  "id": "com.tt.turbo",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"取消\"] + [desc=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292907",
          "key": 0
        }
      ]
    }
  ]
});
