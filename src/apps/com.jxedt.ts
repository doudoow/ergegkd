// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "驾校一点通",
  "id": "com.jxedt",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.jxedt:id/img_question_banner_close\"]",
          "activityIds": "com.jxedt.ui.activitys.exercise.OrderExerciseActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13195641",
          "key": 0
        },
        {
          "matches": "[vid=\"img_question_banner_close\"]",
          "activityIds": ".ui.activitys.exercise.OrderExerciseActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13195641",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.jxedt:id/img_dialog_ad_close\"]",
          "activityIds": "com.jxedt.ui.activitys.NewHomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13476741"
        },
        {
          "matches": "[vid=\"img_dialog_ad_close\"]",
          "activityIds": ".ui.activitys.NewHomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13476741"
        },
        {
          "matches": "[id=\"com.jxedt:id/img_dialog_ad_close\"]",
          "activityIds": "com.jxedt.ui.activitys.NewHomeActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13476741"
        }
      ]
    },
    {
      "name": "未分类-广告卡片",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.jxedt:id/img_question_banner_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.jxedt:id/img_dialog_ad_close\"]",
          "activityIds": "com.jxedt.ui.activitys.NewHomeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13476741"
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.jxedt:id/img_question_banner_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告卡片",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.jxedt:id/img_question_banner_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.jxedt:id/img_dialog_ad_close\"]",
          "activityIds": "com.jxedt.ui.activitys.NewHomeActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13476741"
        }
      ]
    }
  ]
});
