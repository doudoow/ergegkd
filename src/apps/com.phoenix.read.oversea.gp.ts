// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "红果短剧",
  "id": "com.phoenix.read.oversea.gp",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"暂不开启\"] <<n [vid=\"push_permission_bottom_v2_compose_view\"]",
          "activityIds": [
            "com.dragon.read.pages.main.MainFragmentActivity",
            "com.dragon.read.component.shortvideo.impl.ShortSeriesActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/34212912",
            "https://i.gkd.li/i/34348017"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ad_source\"][visibleToUser=true]",
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34213154",
          "key": 0
        }
      ]
    }
  ]
});
