// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "图凌",
  "id": "com.chan.cwallpaper",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"activate_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/14293734",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-会员回馈弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ivClose\"]",
          "activityIds": "com.chan.cwallpaper.module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14308433",
          "exampleUrls": "https://m.gkd.li/57941037/8150c450-bcf8-4e8b-8236-4c3abebbeef3",
          "key": 0
        },
        {
          "matches": "[vid=\"ivClose\"]",
          "activityIds": ".module.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14308433",
          "exampleUrls": "https://m.gkd.li/57941037/8150c450-bcf8-4e8b-8236-4c3abebbeef3",
          "key": 1
        }
      ]
    }
  ]
});
