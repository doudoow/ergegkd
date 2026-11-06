// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "AlgerMusicPlayer",
  "id": "com.algermusic.app",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[text$=\"点击即可进入\"][visibleToUser=true] -7 [text=\"支持开发者\"] <2 View <2 WebView <<3 [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25768081",
          "exampleUrls": "https://e.gkd.li/3383969c-2ebb-41c9-96d7-d83655af7aa6",
          "key": 0
        }
      ]
    }
  ]
});
