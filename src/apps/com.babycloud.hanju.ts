// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "韩小圈",
  "id": "com.babycloud.hanju",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"unified_ad_close\"][visibleToUser=true]",
          "activityIds": [
            "com.babycloud.hanju.ui.activity.HanjuSeriesActivity",
            "com.babycloud.hanju.ui.activity.HanjuHomeActivity",
            "com.babycloud.hanju.search.activity.SearchActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13628282",
            "https://i.gkd.li/i/13670721",
            "https://i.gkd.li/i/13849929"
          ]
        },
        {
          "matches": "[vid=\"unified_ad_close\"][visibleToUser=true]",
          "activityIds": [
            ".ui.activity.HanjuSeriesActivity",
            ".ui.activity.HanjuHomeActivity",
            ".search.activity.SearchActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13628282",
            "https://i.gkd.li/i/13670721",
            "https://i.gkd.li/i/13849929"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-视频播放时的弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"close_rl\" || vid=\"only_skip_rl\" || vid=\"skip_rl\"][visibleToUser=true]",
          "activityIds": "com.babycloud.hanju.ui.activity.HanjuSeriesActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13800123",
            "https://i.gkd.li/i/13972345",
            "https://i.gkd.li/i/14048532",
            "https://i.gkd.li/i/14048302"
          ]
        },
        {
          "matches": "@RelativeLayout[childCount=1] [vid*=\"skip_tv\" || vid*=\"close_iv\"]",
          "activityIds": "com.babycloud.hanju.ui.activity.HanjuSeriesActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13800123",
            "https://i.gkd.li/i/13972345",
            "https://i.gkd.li/i/14048532",
            "https://i.gkd.li/i/14048302"
          ]
        },
        {
          "matches": "[vid=\"close_rl\" || vid=\"only_skip_rl\" || vid=\"skip_rl\"][visibleToUser=true]",
          "activityIds": ".ui.activity.HanjuSeriesActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13800123",
            "https://i.gkd.li/i/13972345",
            "https://i.gkd.li/i/14048532",
            "https://i.gkd.li/i/14048302"
          ]
        },
        {
          "matches": "@[vid=\"close_rl\"][clickable=true] > [vid=\"close_iv\"]",
          "activityIds": "com.babycloud.hanju.ui.activity.HanjuSeriesActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13800123"
        }
      ]
    },
    {
      "name": "局部广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.babycloud.hanju:id/unified_ad_close\"][visibleToUser=true]",
          "activityIds": [
            "com.babycloud.hanju.ui.activity.HanjuSeriesActivity",
            "com.babycloud.hanju.ui.activity.HanjuHomeActivity",
            "com.babycloud.hanju.search.activity.SearchActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13628282",
            "https://i.gkd.li/i/13670721",
            "https://i.gkd.li/i/13849929"
          ]
        },
        {
          "matches": "[id=\"com.babycloud.hanju:id/unified_ad_close\"][visibleToUser=true]",
          "activityIds": [
            "com.babycloud.hanju.ui.activity.HanjuSeriesActivity",
            "com.babycloud.hanju.ui.activity.HanjuHomeActivity",
            "com.babycloud.hanju.search.activity.SearchActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13628282",
            "https://i.gkd.li/import/13670721",
            "https://i.gkd.li/import/13849929"
          ]
        }
      ]
    },
    {
      "name": "视频播放时的弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[vid=\"close_rl\"][clickable=true] > [vid=\"close_iv\"]",
          "activityIds": "com.babycloud.hanju.ui.activity.HanjuSeriesActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13800123"
        }
      ]
    }
  ]
});
