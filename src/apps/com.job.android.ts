// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "前程无忧51Job",
  "id": "com.job.android",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ivBack\"][visibleToUser=true]",
          "activityIds": ".pages.apphome.AppHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19798235",
          "exampleUrls": "https://e.gkd.li/5c1e281a-f5cc-45ff-9799-828f510c78c6",
          "key": 0
        }
      ]
    }
  ]
});
