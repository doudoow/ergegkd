// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "希望谷",
  "id": "com.xwg.cc",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": ".ui.other.YLHAdvertActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23228410",
          "exampleUrls": "https://e.gkd.li/ed6e343a-7a53-4d22-84b8-a2da1da5b241",
          "key": 0
        }
      ]
    }
  ]
});
