// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中羽在线",
  "id": "com.badmintoncn.bbs",
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
          "matches": "[id=\"com.badmintoncn.bbs:id/iv_close_ad\"]",
          "activityIds": "net.duohuo.magappx.main.IndexTabActivity",
          "key": 0,
          "name": "红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13635224"
        },
        {
          "matches": "[vid=\"iv_close_ad\"]",
          "activityIds": "net.duohuo.magappx.main.IndexTabActivity",
          "key": 1,
          "name": "红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13635224"
        },
        {
          "matches": "[id=\"com.badmintoncn.bbs:id/iv_close_ad\"]",
          "activityIds": "net.duohuo.magappx.main.IndexTabActivity",
          "fastQuery": true,
          "key": 2,
          "name": "红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13635224"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.badmintoncn.bbs:id/iv_close_ad\"]",
          "activityIds": "net.duohuo.magappx.main.IndexTabActivity",
          "fastQuery": true,
          "key": 0,
          "name": "红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13635224"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.badmintoncn.bbs:id/iv_close_ad\"]",
          "activityIds": "net.duohuo.magappx.main.IndexTabActivity",
          "quickFind": true,
          "key": 0,
          "name": "红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13635224"
        }
      ]
    }
  ]
});
