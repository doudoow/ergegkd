// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "MT管理器Pro",
  "id": "bin.mt.plus.canary",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"更新\"]",
          "activityIds": "bin.mt.plus.Main",
          "snapshotUrls": "https://i.gkd.li/i/13561226",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "LinearLayoutCompat @[text=\"取消\"] + [text=\"更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "LinearLayoutCompat @[text=\"取消\"] + [text=\"更新\"]",
          "key": 0
        }
      ]
    }
  ]
});
