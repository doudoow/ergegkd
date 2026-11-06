// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "个人图书馆",
  "id": "com.doc360.client",
  "groups": [
    {
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >2 [text=\"广告\"]",
          "activityIds": "com.doc360.client.activity.ReadRoomActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13485051",
          "key": 0
        },
        {
          "matches": "@View[clickable=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >2 [text=\"广告\"]",
          "activityIds": ".activity.ReadRoomActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13485051",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-阅读-推荐-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@FrameLayout[desc^=\"dislike\"] <<n [id=\"com.doc360.client:id/fl_ad_container\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-阅读-推荐-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@FrameLayout[desc^=\"dislike\"] <<n [id=\"com.doc360.client:id/fl_ad_container\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "阅读-推荐-信息流广告",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@FrameLayout[desc^=\"dislike\"] <<n [id=\"com.doc360.client:id/fl_ad_container\"]",
          "key": 0
        }
      ]
    }
  ]
});
