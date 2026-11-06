// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "简单搜索",
  "id": "com.baidu.searchcraft",
  "groups": [
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"ad-logo\"] + [id=\"logo-close-btn\"][clickable=true]",
          "activityIds": "com.baidu.browser.search.LightSearchActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13520385"
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"ad-logo\"] + [id=\"logo-close-btn\"][clickable=true]",
          "activityIds": "com.baidu.browser.search.LightSearchActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13520385"
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"ad-logo\"] + [id=\"logo-close-btn\"][clickable=true]",
          "activityIds": "com.baidu.browser.search.LightSearchActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13520385"
        }
      ]
    }
  ]
});
