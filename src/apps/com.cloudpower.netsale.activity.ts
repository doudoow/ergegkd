// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国人保",
  "id": "com.cloudpower.netsale.activity",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击下次再说",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.cloudpower.netsale.activity:id/tvw_cancel\"]",
          "activityIds": "com.picc.aasipods.module.versionupdate.controller.VersionUpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/14005533",
          "key": 0
        },
        {
          "matches": "[vid=\"tvw_cancel\"]",
          "activityIds": "com.picc.aasipods.module.versionupdate.controller.VersionUpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/14005533",
          "key": 1
        }
      ]
    }
  ]
});
