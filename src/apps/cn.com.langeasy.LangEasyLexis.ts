// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "不背单词",
  "id": "cn.com.langeasy.LangEasyLexis",
  "groups": [
    {
      "name": "功能类-自动签到",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/bb_checkin\"]",
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13610321",
          "key": 0
        },
        {
          "matches": "[vid=\"bb_checkin\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13610321",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-右下角年度报告弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/close_float_button\"]",
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13759025",
          "key": 0
        },
        {
          "matches": "[vid=\"close_float_button\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13759025",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-自动签到",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/bb_checkin\"]",
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13610321",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-右下角弹窗",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/close_float_button\"]",
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13759025",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-右下角弹窗",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/close_float_button\"]",
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13759025",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-新功能上线",
      "enable": false,
      "matchTime": 200000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView[id=\"cn.com.langeasy.LangEasyLexis:id/close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/18867092",
          "key": 0
        }
      ]
    },
    {
      "name": "自动签到",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/bb_checkin\"]",
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13610321",
          "key": 0
        }
      ]
    },
    {
      "name": "右下角弹窗",
      "enable": false,
      "matchTime": 10000,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/close_float_button\"]",
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13759025",
          "key": 0
        }
      ]
    }
  ]
});
