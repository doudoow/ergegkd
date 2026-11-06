// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "交通银行",
  "id": "com.bankcomm.Bankcomm",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"popup_close\"]",
          "activityIds": "com.bankcomm.module.biz.home.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15046998",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击 暂不更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id = \"com.bankcomm.Bankcomm:id/tvNotNow\" && text = \"暂不更新\"]",
          "activityIds": "com.bankcomm.module.biz.webcontainer.BCMHtml5Activity",
          "snapshotUrls": "https://i.gkd.li/i/12842484",
          "key": 0
        },
        {
          "matches": "[id = \"com.bankcomm.Bankcomm:id/tvNotNow\" && text = \"暂不更新\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-网络代理提示弹窗",
      "desc": "点击[继续使用]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"继续使用\"]",
          "activityIds": "com.bankcomm.module.biz.home.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17556284",
          "exampleUrls": "https://e.gkd.li/b9854883-ed3c-4a55-bd8e-7af7c02d59ba",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击x",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"popup_ad_image\"] < * > [vid=\"popup_close\"]",
          "key": 0
        },
        {
          "matches": "[id=\"com.bankcomm.Bankcomm:id/popup_ad_image\"] - [id=\"com.bankcomm.Bankcomm:id/popup_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "首页弹窗广告",
      "desc": "点击右上角x",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.bankcomm.Bankcomm:id/popup_ad_image\"] - [id=\"com.bankcomm.Bankcomm:id/popup_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本升级弹窗",
      "desc": "点击 暂不更新",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id = \"com.bankcomm.Bankcomm:id/tvNotNow\" && text = \"暂不更新\"]",
          "key": 0
        }
      ]
    }
  ]
});
