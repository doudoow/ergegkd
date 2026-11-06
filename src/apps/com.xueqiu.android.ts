// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "雪球",
  "id": "com.xueqiu.android",
  "groups": [
    {
      "name": "局部广告-信息流广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.xueqiu.android:id/ad_close\"]",
          "activityIds": "com.xueqiu.android.mainnesting.view.MainNestingActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13388227",
          "exampleUrls": "https://m.gkd.li/33366298/d05d1eec-cda5-4d37-a494-8eef7b7871dd",
          "key": 0
        },
        {
          "matches": "[vid=\"ad_close\"]",
          "activityIds": ".mainnesting.view.MainNestingActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13388227",
          "exampleUrls": "https://m.gkd.li/33366298/d05d1eec-cda5-4d37-a494-8eef7b7871dd",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-评论区广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xueqiu.android:id/ad_card_close\"]",
          "activityIds": "com.xueqiu.android.community.StatusDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13388361",
          "exampleUrls": "https://m.gkd.li/33366298/b223cc74-fd4f-45a2-89ab-4a18ddffc01c",
          "key": 0
        },
        {
          "matches": "[vid=\"ad_card_close\"]",
          "activityIds": ".community.StatusDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13388361",
          "exampleUrls": "https://m.gkd.li/33366298/b223cc74-fd4f-45a2-89ab-4a18ddffc01c",
          "key": 1
        },
        {
          "matches": "[id=`com.xueqiu.android:id/ad_card_close`]",
          "activityIds": "com.xueqiu.android.community.StatusDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13388361",
          "exampleUrls": "https://m.gkd.li/33366298/b223cc74-fd4f-45a2-89ab-4a18ddffc01c",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"image_cancel\"][visibleToUser=true]",
          "activityIds": ".mainnesting.view.MainNestingActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22995479",
          "exampleUrls": "https://e.gkd.li/5229142b-49d5-4985-ab75-104e46ede45e",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页信息流广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.xueqiu.android:id/ad_close\"]",
          "activityIds": "com.xueqiu.android.mainnesting.view.MainNestingActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13388227",
          "exampleUrls": "https://m.gkd.li/33366298/d05d1eec-cda5-4d37-a494-8eef7b7871dd",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区信息流广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.xueqiu.android:id/ad_card_close\"]",
          "activityIds": "com.xueqiu.android.community.StatusDetailActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13388361",
          "exampleUrls": "https://m.gkd.li/33366298/b223cc74-fd4f-45a2-89ab-4a18ddffc01c"
        }
      ]
    },
    {
      "name": "全屏广告-首页广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=`com.xueqiu.android:id/ad_close`]",
          "activityIds": "com.xueqiu.android.mainnesting.view.MainNestingActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13388227",
          "exampleUrls": "https://m.gkd.li/33366298/d05d1eec-cda5-4d37-a494-8eef7b7871dd",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=`com.xueqiu.android:id/ad_close`]",
          "activityIds": "com.xueqiu.android.mainnesting.view.MainNestingActivity",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13388227",
          "exampleUrls": "https://m.gkd.li/33366298/d05d1eec-cda5-4d37-a494-8eef7b7871dd",
          "key": 0
        }
      ]
    },
    {
      "name": "评论区广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=`com.xueqiu.android:id/ad_card_close`]",
          "activityIds": "com.xueqiu.android.community.StatusDetailActivity",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13388361",
          "exampleUrls": "https://m.gkd.li/33366298/b223cc74-fd4f-45a2-89ab-4a18ddffc01c",
          "key": 0
        }
      ]
    }
  ]
});
