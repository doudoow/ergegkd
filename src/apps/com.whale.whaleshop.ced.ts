// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "追剧达人",
  "id": "com.whale.whaleshop.ced",
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
          "snapshotUrls": "https://i.gkd.li/i/17498241",
          "exampleUrls": "https://e.gkd.li/c74158b2-c8d9-4ab2-aeb8-e87289fa49e0",
          "key": 0
        }
      ]
    }
  ]
});
