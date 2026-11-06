// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "芒果TV",
  "id": "com.hunantv.imgo.activity",
  "groups": [
    {
      "name": "分段广告-首页推荐广告",
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/layout_logo\"] > [id=\"com.hunantv.imgo.activity:id/tv_ad_logo\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12472616"
        },
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/close_ad\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12472615"
        },
        {
          "matches": "@[vid=\"layout_logo\"] > [vid=\"tv_ad_logo\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12472616"
        },
        {
          "matches": "[vid=\"close_ad\"]",
          "preKeys": 0,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12472615"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/imgPromotion\"] + [id=\"com.hunantv.imgo.activity:id/vClosePromotionView\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12818464"
        },
        {
          "matches": "@TextView[id=null][text=\"\"] - View > Image[id=\"hotGif\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12818528"
        },
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/ivPromotion\"] + [id=\"com.hunantv.imgo.activity:id/btnClose\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13761169"
        },
        {
          "matches": "[vid=\"imgPromotion\"] + [vid=\"vClosePromotionView\"]",
          "activityIds": ".MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12818464"
        },
        {
          "matches": "@TextView[id=null][text=\"\"] - View > Image[id=\"hotGif\"]",
          "activityIds": ".MainActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12818528"
        },
        {
          "matches": "[vid=\"ivPromotion\"] + [vid=\"btnClose\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13761169"
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/apperience_close\"] + [id=\"com.hunantv.imgo.activity:id/apperience_enter\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12818430"
        },
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/iv_float_close\"] + [id=\"com.hunantv.imgo.activity:id/iv_float_content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12818481"
        },
        {
          "matches": "@[vid=\"apperience_close\"] + [vid=\"apperience_enter\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12818430"
        },
        {
          "matches": "@[vid=\"iv_float_close\"] + [vid=\"iv_float_content\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12818481"
        }
      ]
    },
    {
      "name": "全屏广告-视频播放时的广告",
      "desc": "点击[关闭广告]",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.mgtv.ui.videoplay.MGVideoPlayActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14322017",
          "exampleUrls": "https://m.gkd.li/57941037/386d0906-f81f-43d2-af7f-adc3ab0ea5a6"
        }
      ]
    },
    {
      "name": "未分类-首页推荐流-卡片广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/layout_logo\"] > [id=\"com.hunantv.imgo.activity:id/tv_ad_logo\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12472616"
        },
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/close_ad\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12472615"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/imgPromotion\"] + [id=\"com.hunantv.imgo.activity:id/vClosePromotionView\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12818464"
        },
        {
          "matches": "@TextView[id=null][text=\"\"] - View > Image[id=\"hotGif\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12818528"
        },
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/ivPromotion\"] + [id=\"com.hunantv.imgo.activity:id/btnClose\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13761169"
        }
      ]
    },
    {
      "name": "未分类-右侧悬浮广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/apperience_close\"] + [id=\"com.hunantv.imgo.activity:id/apperience_enter\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12818430"
        },
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/iv_float_close\"] + [id=\"com.hunantv.imgo.activity:id/iv_float_content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12818481"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/llSetAgeMode\"] + [id=\"com.hunantv.imgo.activity:id/btnIknow\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页推荐流-卡片广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/layout_logo\"] > [id=\"com.hunantv.imgo.activity:id/tv_ad_logo\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12472616"
        },
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/close_ad\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12472615"
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/llSetAgeMode\"] + [id=\"com.hunantv.imgo.activity:id/btnIknow\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页推荐流-卡片广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/layout_logo\"] > [id=\"com.hunantv.imgo.activity:id/tv_ad_logo\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12472616"
        },
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/close_ad\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12472615"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/imgPromotion\"] + [id=\"com.hunantv.imgo.activity:id/vClosePromotionView\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12818464"
        },
        {
          "matches": "@TextView[id=null][text=\"\"] - View > Image[id=\"hotGif\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12818528"
        },
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/ivPromotion\"] + [id=\"com.hunantv.imgo.activity:id/btnClose\"]",
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "quickFind": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13761169"
        }
      ]
    },
    {
      "name": "右侧悬浮广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/apperience_close\"] + [id=\"com.hunantv.imgo.activity:id/apperience_enter\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12818430"
        },
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/iv_float_close\"] + [id=\"com.hunantv.imgo.activity:id/iv_float_content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12818481"
        }
      ]
    }
  ]
});
