// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "鱼泡网",
  "id": "io.dcloud.H576E6CC7",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"]",
          "activityIds": "com.yupao.entry.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14731764",
          "exampleUrls": "https://m.gkd.li/57941037/42273686-b44a-4964-80a5-84b55e6ad75c"
        },
        {
          "matches": "[text=\"广告\"] <2 View +3 View > TextView[clickable=true]",
          "activityIds": "com.yupao.entry.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14732000",
          "exampleUrls": "https://m.gkd.li/57941037/123997dd-4783-4aac-a787-e02daccd43da"
        },
        {
          "matches": "ImageView < @FrameLayout <3 FrameLayout <2 FrameLayout - FrameLayout >2 [text=\"摇动或点击了解更多\"]",
          "activityIds": "com.yupao.entry.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14743452",
          "exampleUrls": "https://m.gkd.li/57941037/c79e700b-74ef-40bf-93e5-222d5e2a8a26"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"close\"][visibleToUser=true] - [vid=\"flItemContent\"]",
          "activityIds": "com.yupao.entry.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14731764",
          "exampleUrls": "https://m.gkd.li/57941037/42273686-b44a-4964-80a5-84b55e6ad75c",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"]",
          "activityIds": "com.yupao.entry.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14731762"
        },
        {
          "matches": "[text=\"广告\"] <2 View +3 View > TextView[clickable=true]",
          "activityIds": "com.yupao.entry.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14732000"
        },
        {
          "matches": "ImageView < @FrameLayout <3 FrameLayout <2 FrameLayout - FrameLayout >2 [text=\"摇动或点击了解更多\"]",
          "activityIds": "com.yupao.entry.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14743452",
          "exampleUrls": "https://m.gkd.li/57941037/c79e700b-74ef-40bf-93e5-222d5e2a8a26"
        }
      ]
    },
    {
      "name": "局部广告-右侧浮窗广告",
      "enable": false,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"close\"]",
          "key": 0
        }
      ]
    }
  ]
});
