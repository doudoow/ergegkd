// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "快看漫画",
  "id": "com.kuaikan.comic",
  "groups": [
    {
      "name": "局部广告-漫画界面底部弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.kuaikan.comic:id/adBannerClose\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"adBannerClose\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-漫画界面-底部广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.kuaikan.comic:id/adBannerClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] +2 [id=\"com.kuaikan.comic:id/cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-漫画界面-底部广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.kuaikan.comic:id/adBannerClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭青少年模式弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] +2 [id=\"com.kuaikan.comic:id/cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "漫画界面-底部广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.kuaikan.comic:id/adBannerClose\"]",
          "key": 0
        }
      ]
    }
  ]
});
