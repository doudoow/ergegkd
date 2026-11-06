// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "LOFTER",
  "id": "com.lofter.android",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"global_ad_layout\"] > [vid=\"close\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": "com.lofter.android.global.home.TabHomeActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/16494241",
          "exampleUrls": "https://e.gkd.li/0559eada-7899-4c8a-8634-ef3f55227492",
          "key": 0
        },
        {
          "matches": "[vid=\"global_ad_layout\"] > [vid=\"close\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".global.home.TabHomeActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/16494241",
          "exampleUrls": "https://e.gkd.li/0559eada-7899-4c8a-8634-ef3f55227492",
          "key": 1
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15023951"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14204158"
        }
      ]
    }
  ]
});
