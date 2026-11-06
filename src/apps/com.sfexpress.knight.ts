// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "顺丰同城骑士",
  "id": "com.sfexpress.knight",
  "groups": [
    {
      "name": "功能类-重复[刷新]导航",
      "desc": "每隔1秒点击[导航-取/送]上方刷新",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"locationFl\"] + [vid=\"recordFl\"] >2 [text=\"导航-取\" || text=\"导航-送\"]",
          "activityIds": [
            ".home.HomeActivity",
            ".redesign.detail.activity.ReOrderDetailActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/33796598",
            "https://i.gkd.li/i/33917309"
          ],
          "exampleUrls": "https://e.gkd.li/abae860f-12d0-4e01-92a4-6331adfd8cba",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[刷新]任务列表",
      "desc": "每隔5秒点击1次[刷新列表]",
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"llRefresh\"][clickable=true] >2 [text=\"刷新列表\"]",
          "action": "clickCenter",
          "actionCd": 5000,
          "activityIds": ".home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/33797305",
          "exampleUrls": "https://e.gkd.li/b381ce15-5a3d-43b2-9834-76ef62887a35",
          "key": 0
        }
      ]
    }
  ]
});
