// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Battery Guru",
  "id": "com.paget96.batteryguru",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击[移除广告]",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"remove_ads\"][visibleToUser=true]",
          "activityIds": "activities.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17538140",
          "exampleUrls": "https://e.gkd.li/81d94f93-2308-4401-a151-771e5a94b79a",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"ad_container\"] >3 [id=\"video_container\"] >3 Button[clickable=true][childCount=0][id=null][text=\"\"][visibleToUser=true]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23417592",
          "exampleUrls": "https://e.gkd.li/40c72a7b-3e68-496f-a993-43ab9c759cbd"
        },
        {
          "matches": "@Button[clickable=true][childCount=0][id=null] < View[childCount=1] <3 View - [id=\"app-interstitial-slot\"] >2 [id=\"abgcp\"]",
          "activityIds": ".activities.IntroActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23416244"
        }
      ]
    }
  ]
});
