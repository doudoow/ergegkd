// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小牛加速器",
  "id": "com.craftvpn.craft",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击X",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View < View[childCount=2] < View[childCount=1] < View[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13914788",
          "key": 0
        }
      ]
    }
  ]
});
