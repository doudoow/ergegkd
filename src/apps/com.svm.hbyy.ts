// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "比翼多开",
  "id": "com.svm.hbyy",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": "com.svm.core.pro.view.activity.MainActivityEx",
          "snapshotUrls": "https://i.gkd.li/i/13185377",
          "key": 0
        },
        {
          "matches": [
            "[text=\"打开或下载第三方应用\"]",
            "FrameLayout[childCount=3] + FrameLayout > ImageView"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13185377",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"打开或下载第三方应用\"]",
            "FrameLayout[childCount=3] + FrameLayout > ImageView"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13185377",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"打开或下载第三方应用\"]",
            "FrameLayout[childCount=3] + FrameLayout > ImageView"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13185377",
          "key": 0
        }
      ]
    }
  ]
});
