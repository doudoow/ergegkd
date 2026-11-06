// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "淘宝Lite",
  "id": "com.taobao.htao.android",
  "groups": [
    {
      "name": "局部广告-关闭顶部[打开淘宝]横幅",
      "key": 0,
      "rules": [
        {
          "matches": "WebView[text$=\"天猫Tmall.com\"] >2 View[id=null][childCount=1] > @TextView[visibleToUser=true][text=\"\"] <<n [vid=\"detail_swipe_to_refresher\"]",
          "activityIds": "com.taobao.htao.android.detail.DetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16842507",
          "exampleUrls": "https://e.gkd.li/661fca21-45e3-4e89-8ccc-b8bafb1bab02",
          "key": 0
        },
        {
          "matches": "WebView[text$=\"天猫Tmall.com\"] >2 View[id=null][childCount=1] > @TextView[visibleToUser=true][text=\"\"] <<n [vid=\"detail_swipe_to_refresher\"]",
          "activityIds": ".detail.DetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16842507",
          "exampleUrls": "https://e.gkd.li/661fca21-45e3-4e89-8ccc-b8bafb1bab02",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-关闭切换站点提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[vid=\"change_country_layout\"]",
            "[vid=\"uik_mdButtonClose\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/16976226",
          "exampleUrls": "https://e.gkd.li/2b0af049-98c9-43b2-8ae5-a40bf6833e95",
          "key": 0
        }
      ]
    }
  ]
});
