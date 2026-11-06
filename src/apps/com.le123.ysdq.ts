// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "影视大全",
  "id": "com.le123.ysdq",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.le123.ysdq:id/ad_close_iv\"]",
          "activityIds": "com.elinkway.infinitemovies.ui.activity.NewMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13635244"
        },
        {
          "matches": "[vid=\"ad_close_iv\"]",
          "activityIds": "com.elinkway.infinitemovies.ui.activity.NewMainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13635244"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.le123.ysdq:id/ad_close_iv\"]",
          "activityIds": "com.elinkway.infinitemovies.ui.activity.NewMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13635244"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.le123.ysdq:id/ad_close_iv\"]",
          "activityIds": "com.elinkway.infinitemovies.ui.activity.NewMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13635244"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.le123.ysdq:id/ad_close_iv\"]",
          "activityIds": "com.elinkway.infinitemovies.ui.activity.NewMainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13635244"
        }
      ]
    }
  ]
});
