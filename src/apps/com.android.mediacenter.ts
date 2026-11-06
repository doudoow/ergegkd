// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华为音乐",
  "id": "com.android.mediacenter",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"跳过\"][text.length<=10]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12901417",
            "https://i.gkd.li/i/12908742"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-VIP弹窗广告",
      "desc": "点击底部圆形x图标关闭弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.android.mediacenter:id/iv_close\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-推荐卡片广告",
      "desc": "点击卡片右上角[广告],点击不感兴趣[直接关闭]",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.android.mediacenter:id/ad_more_layout\"]",
          "activityIds": "com.android.mediacenter.MainActivity",
          "key": 0,
          "name": "点击卡片右上角[广告]",
          "snapshotUrls": "https://i.gkd.li/i/12914077"
        },
        {
          "matches": "[id=\"com.android.mediacenter:id/label_title\"][text=\"直接关闭\"]",
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 1,
          "name": "点击不感兴趣[直接关闭]",
          "snapshotUrls": "https://i.gkd.li/i/12914078"
        },
        {
          "matches": "[vid=\"ad_more_layout\"]",
          "activityIds": ".MainActivity",
          "key": 2,
          "name": "点击卡片右上角[广告]",
          "snapshotUrls": "https://i.gkd.li/i/12914077"
        },
        {
          "matches": "[vid=\"label_title\"][text=\"直接关闭\"]",
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 3,
          "name": "点击不感兴趣[直接关闭]",
          "snapshotUrls": "https://i.gkd.li/i/12914078"
        }
      ]
    },
    {
      "name": "未分类-VIP广告弹窗",
      "desc": "点击底部圆形x图标关闭弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.android.mediacenter:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-推荐广告卡片",
      "desc": "点击卡片右上角[广告],点击不感兴趣[直接关闭]",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.android.mediacenter:id/ad_more_layout\"]",
          "activityIds": "com.android.mediacenter.MainActivity",
          "key": 0,
          "name": "点击卡片右上角[广告]",
          "snapshotUrls": "https://i.gkd.li/i/12914077",
          "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/37ee4a9b-2518-41e6-8227-7b204ed1bf61"
        },
        {
          "matches": "[id=\"com.android.mediacenter:id/label_title\"][text=\"直接关闭\"]",
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 1,
          "name": "点击不感兴趣[直接关闭]",
          "snapshotUrls": "https://i.gkd.li/i/12914078",
          "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/d098a194-80ff-49a1-b80e-191f7574a816"
        }
      ]
    },
    {
      "name": "全屏广告-VIP广告弹窗",
      "desc": "点击底部圆形x图标关闭弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.android.mediacenter:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-推荐广告卡片",
      "desc": "点击卡片右上角[广告],点击不感兴趣[直接关闭]",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.android.mediacenter:id/ad_more_layout\"]",
          "activityIds": "com.android.mediacenter.MainActivity",
          "key": 0,
          "name": "点击卡片右上角[广告]",
          "snapshotUrls": "https://i.gkd.li/import/12914077",
          "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/37ee4a9b-2518-41e6-8227-7b204ed1bf61"
        },
        {
          "matches": "[id=\"com.android.mediacenter:id/label_title\"][text=\"直接关闭\"]",
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 1,
          "name": "点击不感兴趣[直接关闭]",
          "snapshotUrls": "https://i.gkd.li/import/12914078",
          "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/d098a194-80ff-49a1-b80e-191f7574a816"
        }
      ]
    },
    {
      "name": "VIP广告弹窗",
      "desc": "点击底部圆形x图标关闭弹窗",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.android.mediacenter:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "推荐广告卡片",
      "desc": "点击卡片右上角[广告],点击不感兴趣[直接关闭]",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.android.mediacenter:id/ad_more_layout\"]",
          "activityIds": "com.android.mediacenter.MainActivity",
          "key": 0,
          "name": "点击卡片右上角[广告]",
          "snapshotUrls": "https://i.gkd.li/import/12914077",
          "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/37ee4a9b-2518-41e6-8227-7b204ed1bf61"
        },
        {
          "matches": "[id=\"com.android.mediacenter:id/label_title\"][text=\"直接关闭\"]",
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 1,
          "name": "点击不感兴趣[直接关闭]",
          "snapshotUrls": "https://i.gkd.li/import/12914078",
          "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/d098a194-80ff-49a1-b80e-191f7574a816"
        }
      ]
    }
  ]
});
