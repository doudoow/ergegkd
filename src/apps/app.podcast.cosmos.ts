// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小宇宙",
  "id": "app.podcast.cosmos",
  "groups": [
    {
      "name": "全屏广告-内容推荐",
      "desc": "x掉",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"clSubscribeBsd\"] > [vid=\"ivCancel\"][clickable=true]",
          "activityIds": "io.iftech.android.podcast.app.home.index.view.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25470023",
          "key": 0
        }
      ]
    }
  ]
});
