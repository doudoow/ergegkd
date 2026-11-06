// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "优酷视频",
  "id": "com.youku.phone",
  "groups": [
    {
      "name": "全屏广告-视频推荐弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.youku.phone:id/closeView\"][desc=\"关闭弹层\"]",
          "activityIds": "com.youku.vip.wrapper.VipHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12701029",
          "key": 0
        },
        {
          "matches": "[id=\"com.youku.phone:id/closeView\"][desc=\"关闭弹层\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"closeView\"][desc=\"关闭弹层\"]",
          "activityIds": "com.youku.vip.wrapper.VipHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12701029",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-视频播放时的广告",
      "desc": "点击[关闭广告]",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"关闭广告\"][visibleToUser=true]",
          "activityIds": "com.youku.ui.activity.DetailActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14321401",
          "exampleUrls": "https://m.gkd.li/57941037/529c75b6-1a97-4765-856b-dd4d4c810207"
        },
        {
          "matches": "[vid=\"xadsdk_pause_ad_close\"]",
          "activityIds": "com.youku.ui.activity.DetailActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14321469",
          "exampleUrls": "https://m.gkd.li/57941037/42773084-a7db-4e70-878d-6a5eacd5ecb2"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"novelad_corner_close\"]",
          "activityIds": "com.youku.ui.activity.DetailActivity",
          "fastQuery": true,
          "key": 0,
          "name": "视频播放时的广告",
          "snapshotUrls": "https://i.gkd.li/i/14321461",
          "exampleUrls": "https://m.gkd.li/57941037/8994fdc0-fce0-4a06-8bc5-2ff23fc3afe5"
        },
        {
          "matches": "[vid=\"novel_banner_ad_close\"]",
          "activityIds": [
            "com.youku.android.youkuhistory.activity.HistoryActivity",
            "com.soku.searchsdk.activity.SearchActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "历史记录/搜索页面广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/14670383",
            "https://i.gkd.li/i/14680702"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7a160f41-b101-40dc-b875-533623228406"
        },
        {
          "matches": "[vid=\"xadsdk_banner_ad_close\"]",
          "activityIds": "com.youku.ui.activity.DetailActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16925042",
          "exampleUrls": "https://e.gkd.li/8577d2e5-20a4-40e0-92f0-191bafeb55ed"
        }
      ]
    },
    {
      "name": "分段广告-首页卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"novel_banner_ad_feed_back\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16925043",
          "exampleUrls": "https://e.gkd.li/6ae8cc7b-1302-4f10-b544-8d8265a69610"
        },
        {
          "matches": "[text=\"就是不感兴趣\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/16977036",
          "exampleUrls": "https://e.gkd.li/be57974c-6656-4619-aed8-c61421f6a748",
          "key": 1
        }
      ]
    },
    {
      "name": "综合广告-视频播放暂停时的广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"layout_ad_float\"] >n [vid=\"xadsdk_pause_ad_close\"]",
          "key": 0,
          "name": "全屏广告、局部广告-xadSDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/14321469",
            "https://i.gkd.li/i/14321401"
          ]
        },
        {
          "matches": "[vid=\"ad_content\"] +2 [vid=\"novelad_corner_close\"]",
          "key": 1,
          "name": "局部广告-右下角-广告",
          "snapshotUrls": "https://i.gkd.li/i/14321461"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"青少年模式\"] +(3) [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"青少年模式\"] +(3) [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "视频推荐弹窗",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.youku.phone:id/closeView\"][desc=\"关闭弹层\"]",
          "key": 0
        }
      ]
    }
  ]
});
