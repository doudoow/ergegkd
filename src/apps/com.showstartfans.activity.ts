// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "秀动",
  "id": "com.showstartfans.activity",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.showstartfans.activity:id/img_close_coupon\"]",
          "activityIds": "com.showstartfans.activity.activitys.maintab.newmain.MainNewActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13670432"
        },
        {
          "matches": "[vid=\"img_close_coupon\"]",
          "activityIds": ".activitys.maintab.newmain.MainNewActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13670432"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.showstartfans.activity:id/img_close_coupon\"]",
          "activityIds": "com.showstartfans.activity.activitys.maintab.newmain.MainNewActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13670432"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.showstartfans.activity:id/img_close_coupon\"]",
          "activityIds": "com.showstartfans.activity.activitys.maintab.newmain.MainNewActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13670432"
        }
      ]
    }
  ]
});
