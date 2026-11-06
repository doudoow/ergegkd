// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "快牙",
  "id": "com.dewmobile.kuaiya",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [id=\"com.dewmobile.kuaiya:id/sdk_container\"]",
          "activityIds": "com.dewmobile.kuaiya.act.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13477048"
        },
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid=\"sdk_container\"]",
          "activityIds": ".act.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13477048"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.dewmobile.kuaiya.act.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13477048"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.dewmobile.kuaiya.act.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13477048"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.dewmobile.kuaiya.act.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13477048"
        }
      ]
    }
  ]
});
