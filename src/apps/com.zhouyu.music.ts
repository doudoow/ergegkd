// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微音乐",
  "id": "com.zhouyu.music",
  "groups": [
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=null][clickable=true] + View >n View [text$=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-搜索底部广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.zhouyu.music:id/ksad_ad_dislike\"]",
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
          "matches": "@[id=null][clickable=true] + View >n View [text$=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-搜索底部广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.zhouyu.music:id/ksad_ad_dislike\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=null][clickable=true] + View >n View [text$=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "搜索底部广告",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.zhouyu.music:id/ksad_ad_dislike\"]",
          "key": 0
        }
      ]
    }
  ]
});
