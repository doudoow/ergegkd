// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀运动健康",
  "id": "com.hihonor.health",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.health:id/iv_close_filled\"]",
          "activityIds": "com.hihonor.health.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13759407"
        },
        {
          "matches": "[vid=\"iv_close_filled\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13759407"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"btn_close\"][desc=\"关闭弹窗\"]",
          "activityIds": "com.hihonor.health.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16454150",
          "exampleUrls": "https://e.gkd.li/1ab101bd-59cb-46c0-bbb1-7a0a9dccf79a",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_close\"][desc=\"关闭弹窗\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16454150",
          "exampleUrls": "https://e.gkd.li/1ab101bd-59cb-46c0-bbb1-7a0a9dccf79a",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.health:id/iv_close_filled\"]",
          "activityIds": "com.hihonor.health.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13759407"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.health:id/iv_close_filled\"]",
          "activityIds": "com.hihonor.health.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13759407"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.hihonor.health:id/iv_close_filled\"]",
          "activityIds": "com.hihonor.health.main.MainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13759407"
        }
      ]
    }
  ]
});
