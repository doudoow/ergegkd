// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "GKD",
  "id": "li.songe.gkd",
  "groups": [
    {
      "name": "功能类-删除快照二次提示",
      "desc": "二次确认?-确定",
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] -3 [text=\"删除快照\"] <<6 [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25569635",
          "key": 0
        }
      ]
    }
  ]
});
