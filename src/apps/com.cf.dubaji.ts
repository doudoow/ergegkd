// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "毒霸姬",
  "id": "com.cf.dubaji",
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
          "matches": "[id=\"com.cf.dubaji:id/dlg_action_positive\"][text=\"立即更新\"]",
          "action": "back",
          "activityIds": ".module.main.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13198107"
        },
        {
          "matches": "[id=\"com.cf.dubaji:id/dlg_action_positive\"][text=\"立即更新\"]",
          "action": "back",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13198107"
        },
        {
          "matches": "[vid=\"dlg_action_positive\"][text=\"立即更新\"]",
          "action": "back",
          "activityIds": ".module.main.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13198107"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.cf.dubaji:id/dlg_action_positive\"][text=\"立即更新\"]",
          "action": "back",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13198107"
        }
      ]
    }
  ]
});
