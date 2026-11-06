// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "铁塔换电",
  "id": "com.chinatower.tthd",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.chinatower.tthd:id/fl_content_container\"] + [id=\"com.chinatower.tthd:id/iv_close\"]",
          "activityIds": "com.chinatower.fghd.customer.home.HomeNewActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13694901"
        },
        {
          "matches": "[vid=\"fl_content_container\"] + [vid=\"iv_close\"]",
          "activityIds": "com.chinatower.fghd.customer.home.HomeNewActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13694901"
        },
        {
          "matches": "[id=\"com.chinatower.tthd:id/fl_content_container\"] + [id=\"com.chinatower.tthd:id/iv_close\"]",
          "activityIds": "com.chinatower.fghd.customer.home.HomeNewActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13694901"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.chinatower.tthd:id/fl_content_container\"] + [id=\"com.chinatower.tthd:id/iv_close\"]",
          "activityIds": "com.chinatower.fghd.customer.home.HomeNewActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13694901"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.chinatower.tthd:id/fl_content_container\"] + [id=\"com.chinatower.tthd:id/iv_close\"]",
          "activityIds": "com.chinatower.fghd.customer.home.HomeNewActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13694901"
        }
      ]
    }
  ]
});
