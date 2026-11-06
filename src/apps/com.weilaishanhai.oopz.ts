// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Oopz",
  "id": "com.weilaishanhai.oopz",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "该软件部分开屏广告存在虚假跳过按钮，若点击会误触广告，因此该规则无法适配所有情况",
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[name!$=\"RelativeLayout\"] > [text*=\"跳过\"][index=0][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/21202366",
            "https://i.gkd.li/i/21202363",
            "https://i.gkd.li/i/21202366",
            "https://i.gkd.li/i/21503107"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/21202513",
          "exampleUrls": "https://e.gkd.li/fbb3e3c2-74d7-4b1b-8daa-48bab63189a4"
        },
        {
          "matches": "@ImageView[id=\"com.wangmai.allmodules:id/wm_image_clear\"] <2 RelativeLayout[childCount=2] < FrameLayout < [vid=\"wm_reward_main\"]",
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/21202940",
          "exampleUrls": "https://e.gkd.li/c1299341-66bf-4702-885c-3fbe5d648675",
          "key": 1
        },
        {
          "matches": "@View[clickable=true][childCount=0][width<120 && height<120] < RelativeLayout[childCount=1] <2 RelativeLayout[childCount=2] < [id=\"android:id/content\"]",
          "activityIds": "cn.jy.ad.sdk.activity.AdDetailActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/21502302",
          "exampleUrls": "https://e.gkd.li/cd81effe-cd18-4e17-92e1-599ea4400126"
        }
      ]
    }
  ]
});
