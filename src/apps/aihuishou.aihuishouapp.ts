// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱回收",
  "id": "aihuishou.aihuishouapp",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "ImageView + [vid=\"iv_close\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28374178",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "点击x掉",
      "key": 1,
      "rules": [
        {
          "matches": "@View[width<162 && height<162] <2 View <2 [childCount=2] < ComposeView < * < ViewGroup < [childCount=6] < * < [id=\"android:id/content\"]",
          "activityIds": ".recycle.activity.RecycleIndexActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28466056",
          "key": 0
        }
      ]
    }
  ]
});
