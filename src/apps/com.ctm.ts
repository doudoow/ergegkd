// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "CTM Buddy",
  "id": "com.ctm",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.ctm:id/iv_close\"]",
          "activityIds": ".home.page.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13350575",
          "exampleUrls": "https://e.gkd.li/fbaa53c3-109d-47b3-b85c-373d93e420d9",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".home.page.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13350575",
          "exampleUrls": "https://e.gkd.li/fbaa53c3-109d-47b3-b85c-373d93e420d9",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-底部横幅广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.ctm:id/iv_bottom_adv\"] + [id=\"com.ctm:id/btn_close\"]",
          "activityIds": "com.ctm.home.page.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13350612",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_bottom_adv\"] + [vid=\"btn_close\"]",
          "activityIds": ".home.page.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13350612",
          "key": 1
        },
        {
          "matches": "[id=\"com.ctm:id/btn_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-浮窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.ctm:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-底部横幅广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.ctm:id/btn_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.ctm:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "浮窗广告",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.ctm:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "底部横幅广告",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.ctm:id/btn_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
