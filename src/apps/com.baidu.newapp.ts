// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "文心一言",
  "id": "com.baidu.newapp",
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
          "matches": "[text=\"立即更新\"] + [text=\"暂不升级\"]",
          "activityIds": ".update.UpdateAlertActivity",
          "snapshotUrls": "https://i.gkd.li/i/13360280",
          "key": 0
        },
        {
          "matches": "[text=\"立即更新\"] + [text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/import/13360280",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-升级提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"立即更新\"] + [text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360280",
          "key": 0
        }
      ]
    },
    {
      "name": "升级提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"立即更新\"] + [text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/import/13360280",
          "key": 0
        }
      ]
    }
  ]
});
