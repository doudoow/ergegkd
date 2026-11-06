// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "萌娘百科",
  "id": "org.moegirl.moegirlview",
  "groups": [
    {
      "name": "局部广告-搜索页广告",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[width<50 && height<50] < FrameLayout <3 FrameLayout[childCount>3] <<7 View - View > EditText <<7 [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26493172",
          "key": 0
        }
      ]
    }
  ]
});
