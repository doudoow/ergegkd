// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "星野",
  "id": "com.xingye.app",
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
          "matches": "[vid=\"settingUpdateCancelTv\"]",
          "activityIds": "com.weaver.app.MainSplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/14137987",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xingye.app:id/teenagerDialogConfirmTv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.xingye.app:id/teenagerDialogConfirmTv\"]",
          "key": 0
        }
      ]
    }
  ]
});
