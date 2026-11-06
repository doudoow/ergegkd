// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "得物",
  "id": "com.shizhuang.duapp",
  "groups": [
    {
      "name": "其他-截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.shizhuang.duapp:id/ivClose\"] +2 [id=\"com.shizhuang.duapp:id/ivSave\"]",
          "activityIds": "com.shizhuang.duapp.modules.product_detail.detailv4.ui.ProductDetailActivityV4",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13473449",
          "key": 0
        },
        {
          "matches": "[vid=\"ivClose\"] +2 [vid=\"ivSave\"]",
          "activityIds": ".modules.product_detail.detailv4.ui.ProductDetailActivityV4",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13473449",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.shizhuang.duapp:id/ivClose\"] +2 [id=\"com.shizhuang.duapp:id/ivSave\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.shizhuang.duapp:id/ivClose\"] +2 [id=\"com.shizhuang.duapp:id/ivSave\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.shizhuang.duapp:id/ivClose\"] +2 [id=\"com.shizhuang.duapp:id/ivSave\"]",
          "key": 0
        }
      ]
    }
  ]
});
