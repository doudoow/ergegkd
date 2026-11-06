// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "全球上网",
  "id": "com.miui.virtualsim",
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
          "matches": "[vid=\"img_close_btn\"]",
          "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15981731",
          "exampleUrls": "https://m.gkd.li/57941037/76a7cf39-06f1-4e1b-9bb6-fd8b1ad25e8e",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.miui.virtualsim:id/img_close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.miui.virtualsim:id/img_close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.miui.virtualsim:id/img_close_btn\"]",
          "key": 0
        }
      ]
    }
  ]
});
