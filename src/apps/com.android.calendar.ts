// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米日历",
  "id": "com.android.calendar",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "desc": "注意⚠️：该广告需开启[智能服务]的对应规则才能关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"close\"][desc=\"关闭广告卡片\"][visibleToUser=true]",
          "activityIds": ".homepage.AllInOneActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23619245",
          "key": 0
        }
      ]
    }
  ]
});
