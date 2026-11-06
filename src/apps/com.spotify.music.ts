// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Spotify",
  "id": "com.spotify.music",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_tag\"] + [vid=\"close_button\"][clickable=true]",
          "activityIds": ".SpotifyMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/24270410",
          "exampleUrls": "https://e.gkd.li/539c0135-9b5b-44c2-baec-4eb9953f8e69",
          "key": 0
        },
        {
          "matches": "[vid=\"ad_tag\"] + [vid=\"close_button\"][clickable=true]",
          "key": 1,
          "name": "主页Ad",
          "snapshotUrls": "https://i.gkd.li/i/24270410",
          "exampleUrls": "https://e.gkd.li/539c0135-9b5b-44c2-baec-4eb9953f8e69"
        },
        {
          "matches": "[desc=\"关闭广告\"] < @[clickable=true][childCount=2] <3 View <<5 [vid=\"track_carousel\"]",
          "key": 2,
          "name": "播放器Ad",
          "snapshotUrls": "https://i.gkd.li/i/27084526",
          "exampleUrls": "https://e.gkd.li/2605fd95-0ef4-4cd6-be04-adc577b10e1a"
        }
      ]
    }
  ]
});
