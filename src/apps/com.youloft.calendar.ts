// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "万年历",
  "id": "com.youloft.calendar",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.youloft.calendar:id/ad_iv_close\"]",
          "activityIds": "com.youloft.calendar.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "万年历页面-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13348416"
        },
        {
          "matches": "[vid=\"ad_iv_close\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "万年历页面-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13348416"
        }
      ]
    },
    {
      "name": "未分类-悬浮广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.youloft.calendar:id/ad_iv_close\"]",
          "activityIds": "com.youloft.calendar.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "万年历页面-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13348416"
        }
      ]
    },
    {
      "name": "全屏广告-悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.youloft.calendar:id/ad_iv_close\"]",
          "activityIds": "com.youloft.calendar.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "万年历页面-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13348416"
        }
      ]
    },
    {
      "name": "悬浮广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.youloft.calendar:id/ad_iv_close\"]",
          "activityIds": "com.youloft.calendar.MainActivity",
          "quickFind": true,
          "key": 0,
          "name": "万年历页面-右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13348416"
        }
      ]
    }
  ]
});
