// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "匠多多师傅版",
  "id": "com.jdd.newjdd.app",
  "groups": [
    {
      "name": "开屏广告",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"jump\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23294048",
          "exampleUrls": "https://e.gkd.li/10dd2d8b-e48a-4554-a748-c9e156b003d9",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23294049",
          "exampleUrls": "https://e.gkd.li/557eefdd-fd75-4a93-8f68-6ae8f042270a",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[查看详情]-返回关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"系统公告\"][visibleToUser=true]",
            "[text=\"点击查看详情\"][visibleToUser=true]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23295736",
          "exampleUrls": "https://e.gkd.li/146c27dc-9e92-4074-930f-d099c65c44f2"
        },
        {
          "matches": "@View[clickable=true] >2 [childCount=0][text=\"\"][visibleToUser=true] <<n [vid=\"webviewschool\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/23295738",
          "exampleUrls": "https://e.gkd.li/dff1e373-76eb-43d7-9bec-229eebae511d",
          "key": 1
        }
      ]
    }
  ]
});
