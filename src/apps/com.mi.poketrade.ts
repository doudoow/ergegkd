// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "PokeHub",
  "id": "com.mi.poketrade",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"Cancel\"][visibleToUser=true] + [desc=\"Update\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/19624988",
          "exampleUrls": "https://e.gkd.li/b0a0c338-16b1-4892-9cd6-92b4f485fda8",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-订阅广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 View[getChild(5).desc=\"Subscribe\"] < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/19643520",
          "exampleUrls": "https://e.gkd.li/19371ab4-5b1a-4efb-925a-883252fd50d0"
        },
        {
          "matches": "@View[desc=\"Back\"][visibleToUser=true] < ImageView[desc*=\"VIP\"] < View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/19825695",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20598704",
          "exampleUrls": "https://e.gkd.li/a7e15182-89fc-4b38-9acc-fdbbe81908f0"
        }
      ]
    }
  ]
});
