// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "店长直聘",
  "id": "com.hpbr.directhires",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.hpbr.directhires:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13774242",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.hpbr.directhires:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13774242",
          "key": 0
        }
      ]
    }
  ]
});
