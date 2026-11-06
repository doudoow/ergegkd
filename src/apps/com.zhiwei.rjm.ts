// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "RJmao",
  "id": "com.zhiwei.rjm",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < * +2 ViewGroup > [text=\"广告\"]",
          "actionMaximum": 1,
          "activityIds": "com.zhiwei.rjm.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14430564",
          "exampleUrls": "https://m.gkd.li/57941037/a68b2a70-9bd3-4ba4-9802-f0b60052d4c2"
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < * +2 ViewGroup > [text=\"广告\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14430564",
          "exampleUrls": "https://m.gkd.li/57941037/a68b2a70-9bd3-4ba4-9802-f0b60052d4c2"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@TextView[clickable=true] <2 View + View > [visibleToUser=true][text=\"广告\"] <<n [vid=\"ksad_container\"]",
          "activityIds": "com.zhiwei.rjm.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "视频播放页卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/14430539",
          "exampleUrls": "https://m.gkd.li/57941037/7bfe06a0-d91a-40cf-879e-1c03beac7a35"
        },
        {
          "matches": "@TextView[clickable=true] <2 View + View > [visibleToUser=true][text=\"广告\"] <<n [vid=\"ksad_container\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "视频播放页卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/14430539",
          "exampleUrls": "https://m.gkd.li/57941037/7bfe06a0-d91a-40cf-879e-1c03beac7a35"
        }
      ]
    }
  ]
});
