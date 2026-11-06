// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "铁路12306",
  "id": "com.chinarailway.globalticketing",
  "groups": [
    {
      "name": "权限提示-定位权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"开启定位权限\"]",
            "[vid=\"img_close\"]"
          ],
          "activityIds": "com.MobileTicket.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/16987292",
          "exampleUrls": "https://e.gkd.li/95c8443e-babc-4d96-a3cd-00692c2acf30",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-关闭底部公告横幅",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_tip_close\"][desc^=\"关闭公告\"][visibleToUser=true]",
          "activityIds": "com.MobileTicket.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/19497545",
          "exampleUrls": "https://e.gkd.li/be03fa78-7c6f-4a05-8370-93a5de9a246e",
          "key": 0
        }
      ]
    }
  ]
});
