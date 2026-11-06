// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Xfinity",
  "id": "com.xfinity.digitalhome",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true][visibleToUser=true] > [desc=\"close\"] <<n [vid=\"details_modal_compose_body\"]",
          "activityIds": ".features.overview.activities.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18563031",
          "exampleUrls": "https://e.gkd.li/23c04f23-efb1-4562-a376-151ee4749e8d",
          "key": 0
        }
      ]
    }
  ]
});
