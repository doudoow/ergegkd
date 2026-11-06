// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "果冻宝盒",
  "id": "com.guodongbaohe.app",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "LinearLayout[id=\"com.guodongbaohe.app:id/close_dialog_lv\"]",
          "activityIds": "com.guodongbaohe.app.activity.AdvertisementTwoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13577877",
          "key": 0
        },
        {
          "matches": "LinearLayout[vid=\"close_dialog_lv\"]",
          "activityIds": ".activity.AdvertisementTwoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13577877",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "LinearLayout[id=\"com.guodongbaohe.app:id/close_dialog_lv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "LinearLayout[id=\"com.guodongbaohe.app:id/close_dialog_lv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "LinearLayout[id=\"com.guodongbaohe.app:id/close_dialog_lv\"]",
          "key": 0
        }
      ]
    }
  ]
});
