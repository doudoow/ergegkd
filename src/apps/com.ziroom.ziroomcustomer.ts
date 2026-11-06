// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "自如",
  "id": "com.ziroom.ziroomcustomer",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tv_ok\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18373198",
          "exampleUrls": "https://e.gkd.li/c6507af4-1bb2-4c39-ab5d-3d04ec391291",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-推荐好友弹窗",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_nps_close\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18373218",
          "exampleUrls": "https://e.gkd.li/808f8c61-211f-4592-abe5-21467c133ba6",
          "key": 0
        }
      ]
    }
  ]
});
