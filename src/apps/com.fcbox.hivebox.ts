// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "丰巢管家",
  "id": "com.fcbox.hivebox",
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
          "matches": "[id=\"com.fcbox.hivebox:id/fl_content_container\"] + [id=\"com.fcbox.hivebox:id/iv_close\"]",
          "activityIds": "com.fcbox.hivebox.business.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13459000"
        },
        {
          "matches": "[vid=\"fl_content_container\"] + [vid=\"iv_close\"]",
          "activityIds": ".business.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13459000"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.fcbox.hivebox:id/fl_content_container\"] + [id=\"com.fcbox.hivebox:id/iv_close\"]",
          "activityIds": "com.fcbox.hivebox.business.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13459000"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.fcbox.hivebox:id/fl_content_container\"] + [id=\"com.fcbox.hivebox:id/iv_close\"]",
          "activityIds": "com.fcbox.hivebox.business.main.MainActivity",
          "quickFind": true,
          "key": 0,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/import/13459000"
        }
      ]
    }
  ]
});
