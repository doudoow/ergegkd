// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "极光下载器",
  "id": "com.aurora_tec.downloader",
  "groups": [
    {
      "name": "通知提示-系统公告",
      "desc": "点击[确定]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"系统公告\"] +2 [text=\"确定\"][visibleToUser=true]",
          "activityIds": ".HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/24726084",
          "exampleUrls": "https://e.gkd.li/45886cda-e54a-4a1f-b136-949b59704f0c",
          "key": 0
        }
      ]
    }
  ]
});
