// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "星星充电",
  "id": "com.wanbangauto.chargepile",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"image_close\"][visibleToUser=true]",
          "activityIds": ".ui.newhome.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/18421090",
          "exampleUrls": "https://e.gkd.li/ce4838fb-0f0d-4b20-bab3-565bd80bbc93",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-签到提示",
      "desc": "点击[忽略]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text^=\"小星提醒您\"][visibleToUser=true]",
            "[text=\"忽略\"][visibleToUser=true]"
          ],
          "activityIds": ".ui.newhome.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/18421092",
          "exampleUrls": "https://e.gkd.li/542507c4-57dd-46f5-b354-78cdbacb3191",
          "key": 0
        }
      ]
    }
  ]
});
