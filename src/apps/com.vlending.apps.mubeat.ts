// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Mubeat",
  "id": "com.vlending.apps.mubeat",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"Close Ad\"][visibleToUser=true] > [text*=\"Ad\"]",
          "activityIds": ".activity.LauncherActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18053470",
          "exampleUrls": "https://e.gkd.li/86c7a56e-190d-4063-9b38-e8cfd71381e2",
          "key": 0
        }
      ]
    }
  ]
});
