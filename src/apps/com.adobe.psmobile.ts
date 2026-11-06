// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Photoshop Express",
  "id": "com.adobe.psmobile",
  "groups": [
    {
      "name": "评价提示",
      "desc": "点击[不,谢谢]",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"不，谢谢\"] < [childCount=2] <4 View[childCount=4] < View < WebView < * < * < [id=\"android:id/custom\"]",
          "action": "clickCenter",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26115696",
          "key": 0
        }
      ]
    }
  ]
});
