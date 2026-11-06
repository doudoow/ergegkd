// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易严选",
  "id": "com.netease.yanxuan",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.netease.yanxuan:id/trans_cancel\"]",
          "activityIds": "com.netease.yanxuan.module.mainpage.activity.MainPageActivity",
          "snapshotUrls": "https://i.gkd.li/i/12840641",
          "key": 0
        },
        {
          "matches": "[vid=\"trans_cancel\"]",
          "activityIds": ".module.mainpage.activity.MainPageActivity",
          "snapshotUrls": "https://i.gkd.li/i/12840641",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.netease.yanxuan:id/trans_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.netease.yanxuan:id/trans_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.netease.yanxuan:id/trans_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
