// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "JMComic3",
  "id": "com.example.app",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "关闭选择线路后的全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@Button[clickable=true] - [text^=\"看完等待\"]",
          "action": "clickCenter",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/21399047",
          "exampleUrls": "https://e.gkd.li/df4c585e-acd7-49b5-af76-e53175ffb42c",
          "key": 0
        }
      ]
    }
  ]
});
