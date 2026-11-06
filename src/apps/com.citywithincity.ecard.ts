// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "e通卡",
  "id": "com.citywithincity.ecard",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true][width<119 && height<119] < [childCount=1] <2 ViewGroup < ViewGroup <2 [childCount=2] < ViewGroup < FrameLayout < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": ".EntryActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28448307",
          "key": 0
        }
      ]
    }
  ]
});
