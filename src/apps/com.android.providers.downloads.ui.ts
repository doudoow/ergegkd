// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "下载管理",
  "id": "com.android.providers.downloads.ui",
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
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "activityIds": ".DownloadList",
          "snapshotUrls": "https://i.gkd.li/i/13631769",
          "key": 0
        },
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "key": 1
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
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "key": 0
        }
      ]
    }
  ]
});
