// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "有道云笔记",
  "id": "com.youdao.note",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.youdao.note:id/recycle_view\"] + [id=\"com.youdao.note:id/close_ad\"]",
          "activityIds": "com.youdao.note.activity2.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "首页上方卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/13379524"
        },
        {
          "matches": "[vid=\"recycle_view\"] + [vid=\"close_ad\"]",
          "activityIds": ".activity2.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "首页上方卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/13379524"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.youdao.note:id/recycle_view\"] + [id=\"com.youdao.note:id/close_ad\"]",
          "activityIds": "com.youdao.note.activity2.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "首页上方卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/13379524"
        }
      ]
    },
    {
      "name": "全屏广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.youdao.note:id/recycle_view\"] + [id=\"com.youdao.note:id/close_ad\"]",
          "activityIds": "com.youdao.note.activity2.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "首页上方卡片广告",
          "snapshotUrls": "https://i.gkd.li/import/13379524"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.youdao.note:id/recycle_view\"] + [id=\"com.youdao.note:id/close_ad\"]",
          "activityIds": "com.youdao.note.activity2.MainActivity",
          "quickFind": true,
          "key": 0,
          "name": "首页上方卡片广告",
          "snapshotUrls": "https://i.gkd.li/import/13379524"
        }
      ]
    }
  ]
});
