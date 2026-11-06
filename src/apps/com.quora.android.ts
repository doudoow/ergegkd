// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Quora",
  "id": "com.quora.android",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "赞助推广",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"Sponsored\"] < View <3 [childCount=3] <2 [childCount>5] >6 @Button[desc=\"Hide\"] <<(10-n) View[visibleToUser=true][childCount=1] <n [id=\"root\"] <<(7-n) [vid=\"swiperefresh\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/28922252",
            "https://i.gkd.li/i/28922253"
          ],
          "exampleUrls": "https://e.gkd.li/8764eb22-4910-4602-a3de-973fcd9d8e53"
        },
        {
          "matches": "@Button[desc=\"Dismiss\"] < View < View < View < View < View < View <2 View < WebView < WebView < [vid=\"swiperefresh\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/28922254"
        }
      ]
    }
  ]
});
