// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小猿口算",
  "id": "com.fenbi.android.leo",
  "groups": [
    {
      "name": "评价提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
          "activityIds": ".imgsearch.sdk.activity.NewCheckCameraActivity",
          "snapshotUrls": "https://i.gkd.li/i/13226140",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-评分弹窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-评分弹窗",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
          "key": 0
        }
      ]
    },
    {
      "name": "评分弹窗",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
          "key": 0
        }
      ]
    }
  ]
});
