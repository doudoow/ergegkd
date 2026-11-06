// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "美团众包",
  "id": "com.sankuai.meituan.dispatch.crowdsource",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"image_ad_close\"]",
          "activityIds": [
            "com.meituan.banma.main.activity.MainActivity",
            "com.meituan.banma.main.activity.ImageAdActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13694935",
            "https://i.gkd.li/i/14818737"
          ]
        },
        {
          "matches": "[id=\"com.sankuai.meituan.dispatch.crowdsource:id/image_ad_close\"]",
          "activityIds": "com.meituan.banma.main.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13694935"
        }
      ]
    },
    {
      "name": "其他-[保级成功]弹窗",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"btn_close\"]",
          "activityIds": "com.meituan.banma.usercenter.activity.UserGradeUpgradeKNBActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14822280",
          "exampleUrls": "https://m.gkd.li/57941037/11dd0efd-5872-47de-a307-c3dd0c0009a9",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-[保级成功]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"btn_close\"]",
          "activityIds": "com.meituan.banma.usercenter.activity.UserGradeUpgradeKNBActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14822280",
          "exampleUrls": "https://m.gkd.li/57941037/11dd0efd-5872-47de-a307-c3dd0c0009a9",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.sankuai.meituan.dispatch.crowdsource:id/image_ad_close\"]",
          "activityIds": "com.meituan.banma.main.activity.MainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13694935"
        }
      ]
    }
  ]
});
