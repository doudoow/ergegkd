// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "iGPSPORT",
  "id": "com.igpsport.igpsportandroid",
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
          "matches": "@[visibleToUser=true][text=\"忽略本次\"] <<n [vid=\"updateComposeView\"]",
          "activityIds": "com.igpsport.globalapp.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13797203",
          "exampleUrls": "https://e.gkd.li/57341233-2547-4469-869c-e05fdebb20fc",
          "key": 0
        },
        {
          "matches": "@[text=\"忽略本次\"] + [text=\"立即升级\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"忽略本次\"] + [text=\"立即升级\"]",
          "key": 0
        }
      ]
    }
  ]
});
