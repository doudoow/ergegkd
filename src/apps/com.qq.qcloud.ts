// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "腾讯微云",
  "id": "com.qq.qcloud",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@LinearLayout -(1,2) [text=\"互动广告\"][visibleToUser=true]",
          "activityIds": ".activity.WeiyunRootActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19752123",
            "https://i.gkd.li/i/19752144"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.qq.qcloud:id/gdt_ad_text\"] + ImageView",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12755789"
        },
        {
          "matches": "[text^=\"互动广告\"] + @LinearLayout[clickable=true] > ImageView",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12755799"
        },
        {
          "matches": "[id=\"android:id/content\"] >2 FrameLayout[childCount=4] > @LinearLayout[clickable=true] > ImageView",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14735621"
        }
      ]
    }
  ]
});
