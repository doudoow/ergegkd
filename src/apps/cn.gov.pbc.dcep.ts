// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "数字人民币",
  "id": "cn.gov.pbc.dcep",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"upgrade_dialog_cancel\"][!(text=\"退出应用\")]",
          "activityIds": ".main.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13840408",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17607391",
          "key": 0
        },
        {
          "matches": "[vid=\"upgrade_dialog_cancel\"][text!=\"退出应用\"]",
          "activityIds": ".main.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13840408",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17607391",
          "key": 1
        },
        {
          "matches": "[vid=\"upgrade_dialog_cancel\"]",
          "key": 2
        }
      ]
    }
  ]
});
