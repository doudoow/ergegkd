// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "随便扫",
  "id": "com.jim.qrcode",
  "groups": [
    {
      "name": "局部广告-顶部卡片广告",
      "desc": "点击卡片右上角关闭按钮",
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-顶部广告卡片",
      "desc": "点击卡片右上角关闭按钮",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-顶部广告卡片",
      "desc": "点击卡片右上角关闭按钮",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "顶部广告卡片",
      "desc": "点击卡片右上角关闭按钮",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView",
          "key": 0
        }
      ]
    }
  ]
});
