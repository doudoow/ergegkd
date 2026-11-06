// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "多看",
  "id": "com.duokan.reader",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/store_feed_layer_close\"]",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13248773",
          "key": 0
        },
        {
          "matches": "[vid=\"store_feed_layer_close\"]",
          "activityIds": ".DkMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13248773",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-小说推荐弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/reading_stop_read_recommend_stop\"]",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "退出阅读时的推荐弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13413412"
        },
        {
          "matches": "[vid=\"reading_stop_read_recommend_stop\"]",
          "activityIds": ".DkMainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "退出阅读时的推荐弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13413412"
        }
      ]
    },
    {
      "name": "局部广告-小说页广告",
      "desc": "小说页面下方出现的条形广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout[id=\"com.duokan.reader:id/reading__app_ad_view__close\"]",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13497902",
          "key": 0
        },
        {
          "matches": "@ImageView < FrameLayout[vid=\"reading__app_ad_view__close\"]",
          "activityIds": ".DkMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13497902",
          "key": 1
        },
        {
          "matches": "@ImageView < FrameLayout[id=\"com.duokan.reader:id/reading__app_ad_view__close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-小说页全屏卡片广告",
      "desc": "点击关闭-点击确定按钮",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/reading__app_ad_view__close\"][text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13498048"
        },
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/ad__feedback_close_dialog_button\"][text=\"知道了\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13497990"
        },
        {
          "matches": "@TextView[vid=\"reading__app_ad_view__close\"][text=\"广告\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13498048"
        },
        {
          "matches": "@TextView[vid=\"ad__feedback_close_dialog_button\"][text=\"知道了\"]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13497990"
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击以后再说",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/general__common_dialog_view__button_frame\"] >2 [text=\"以后再说\"]",
          "activityIds": ".DkMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14007573",
          "key": 0
        },
        {
          "matches": "[vid=\"general__common_dialog_view__button_frame\"] >2 [text=\"以后再说\"]",
          "activityIds": ".DkMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14007573",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/store_feed_layer_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-小说推荐弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/reading_stop_read_recommend_stop\"]",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "退出阅读时的推荐弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13413412"
        }
      ]
    },
    {
      "name": "未分类-小说页广告",
      "desc": "小说页面下方出现的条形广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout[id=\"com.duokan.reader:id/reading__app_ad_view__close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-小说页全屏卡片广告",
      "desc": "点击关闭和确定按钮",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/reading__app_ad_view__close\"][text=\"广告\"]",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "key": 0
        },
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/ad__feedback_close_dialog_button\"][text=\"知道了\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/store_feed_layer_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-小说页全屏卡片广告",
      "desc": "点击关闭和确定按钮",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/reading__app_ad_view__close\"][text=\"广告\"]",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "key": 0
        },
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/ad__feedback_close_dialog_button\"][text=\"知道了\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "首页-广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/store_feed_layer_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "小说推荐弹窗",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/reading_stop_read_recommend_stop\"]",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "quickFind": true,
          "key": 0,
          "name": "退出阅读时的推荐弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13413412"
        }
      ]
    },
    {
      "name": "小说页广告",
      "desc": "小说页面下方出现的条形广告",
      "enable": false,
      "quickFind": true,
      "key": 13,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout[id=\"com.duokan.reader:id/reading__app_ad_view__close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "小说页全屏卡片广告",
      "desc": "点击关闭和确定按钮",
      "enable": false,
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/reading__app_ad_view__close\"][text=\"广告\"]",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "key": 0
        },
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/ad__feedback_close_dialog_button\"][text=\"知道了\"]",
          "key": 1
        }
      ]
    }
  ]
});
