// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ギリギリ愛",
  "id": "com.jxhy.kuwan.gga",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[我知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/19749364",
          "exampleUrls": "https://e.gkd.li/95caf815-b2bc-48cc-a245-0341e58f0e39",
          "key": 0
        }
      ]
    }
  ]
});
