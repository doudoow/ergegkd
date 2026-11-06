// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "AdGuard",
  "id": "com.adguard.android",
  "groups": [
    {
      "name": "功能类-自动开启保护",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.adguard.android:id/main_switch\"][text=\"主保护开关已关闭\"]",
          "snapshotUrls": "https://i.gkd.li/import/16346724",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20513646",
          "key": 0
        }
      ]
    }
  ]
});
