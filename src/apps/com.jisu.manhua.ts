// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "漫画人极速版",
  "id": "com.jisu.manhua",
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
          "matches": "[id=\"com.jisu.manhua:id/iv_promotion\"] + [id=\"com.jisu.manhua:id/iv_close\"]",
          "activityIds": "com.ilike.cartoon.activities.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13688186",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_promotion\"] + [vid=\"iv_close\"]",
          "activityIds": "com.ilike.cartoon.activities.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13688186",
          "key": 1
        },
        {
          "matches": "[id=\"com.jisu.manhua:id/iv_promotion\"] + [id=\"com.jisu.manhua:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13688186",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.jisu.manhua:id/iv_promotion\"] + [id=\"com.jisu.manhua:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688186",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.jisu.manhua:id/iv_promotion\"] + [id=\"com.jisu.manhua:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13688186",
          "key": 0
        }
      ]
    }
  ]
});
