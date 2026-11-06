// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智慧笑联",
  "id": "com.xiaolian.prometheus",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"close_rel\"] - * > [text=\"发现新版本\"]",
          "activityIds": "com.xiaolian.home.ui.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/14292788",
          "key": 0
        },
        {
          "matches": "@[vid=\"close_rel\"] - * > [text=\"发现新版本\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-关注公众号弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"close_img\"] + [text=\"关注\"]",
          "activityIds": "com.xiaolian.home.ui.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/14292789",
          "key": 0
        },
        {
          "matches": "@[vid=\"close_img\"] + [text=\"关注\"]",
          "key": 1
        }
      ]
    }
  ]
});
