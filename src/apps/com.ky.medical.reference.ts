// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "用药参考",
  "id": "com.ky.medical.reference",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.ky.medical.reference:id/btn_go\"][text^=\"关闭\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_go\"][text^=\"关闭\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.ky.medical.reference:id/icClose\"]",
          "activityIds": "com.ky.medical.reference.promotion.AdDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/12840924",
          "key": 0
        },
        {
          "matches": "[vid=\"icClose\"]",
          "activityIds": ".promotion.AdDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/12840924",
          "key": 1
        },
        {
          "matches": "[id=\"com.ky.medical.reference:id/icClose\"]",
          "snapshotUrls": "https://i.gkd.li/import/12840924",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.ky.medical.reference:id/icClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840924",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.ky.medical.reference:id/icClose\"]",
          "snapshotUrls": "https://i.gkd.li/import/12840924",
          "key": 0
        }
      ]
    }
  ]
});
