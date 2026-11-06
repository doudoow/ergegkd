// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云听",
  "id": "com.shinyv.cnr",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "yt.com.module.home.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16914130",
          "exampleUrls": "https://e.gkd.li/d1680c51-70c8-4d50-9560-f5e091685ee8",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.shinyv.cnr:id/iv_ad\"] + [id=\"com.shinyv.cnr:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.shinyv.cnr:id/iv_ad\"] + [id=\"com.shinyv.cnr:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.shinyv.cnr:id/iv_ad\"] + [id=\"com.shinyv.cnr:id/iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
