// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智慧树",
  "id": "com.hyww.wisdomtree",
  "groups": [
    {
      "name": "全屏广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0] + RelativeLayout >(1,2) [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 0,
          "name": "百度广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13799876",
            "https://i.gkd.li/i/13852024"
          ]
        },
        {
          "matches": "[id=\"android:id/content\"] >n RelativeLayout[childCount<=3] > ImageView[clickable=true]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "key": 1,
          "name": "百度广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13799876",
            "https://i.gkd.li/i/13852024"
          ]
        }
      ]
    },
    {
      "name": "局部广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"rl_down\"] <<n [vid=\"tt_ad_content\"]",
          "fastQuery": true,
          "key": 0,
          "name": "信息流广告",
          "snapshotUrls": "https://i.gkd.li/i/13852023"
        },
        {
          "matches": "[vid=\"time_line_type\"] <<n * > * > [vid=\"rl_down\"]",
          "fastQuery": true,
          "key": 1,
          "name": "信息流广告",
          "snapshotUrls": "https://i.gkd.li/i/13852023"
        }
      ]
    }
  ]
});
