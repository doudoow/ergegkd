// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "外星人加速器",
  "id": "com.etalien.booster",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=3] > @View[childCount=1] >2 FrameLayout[childCount=4]",
          "position": {
            "left": "width * 0.9037",
            "top": "width * 0.2976"
          },
          "activityIds": "com.etalien.booster.mobile.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15142013",
          "exampleUrls": "https://m.gkd.li/57941037/33c6f9e3-25d7-4a5c-868a-35726ea9554e"
        },
        {
          "matches": "View[childCount=3] > @View[childCount=1] >2 FrameLayout[childCount=4]",
          "position": {
            "left": "width * 0.9037",
            "top": "width * 0.2976"
          },
          "activityIds": ".mobile.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15142013",
          "exampleUrls": "https://m.gkd.li/57941037/33c6f9e3-25d7-4a5c-868a-35726ea9554e"
        }
      ]
    }
  ]
});
