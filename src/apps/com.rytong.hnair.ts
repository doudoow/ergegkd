// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "海南航空",
  "id": "com.rytong.hnair",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "desc": "关闭APP首页出现的全屏弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[id*=\"com.rytong.hnair:id/iv_cloes\"]",
          "activityIds": "com.hnair.airlines.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12846381",
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.rytong.hnair:id/iv_cloes\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id*=\"com.rytong.hnair:id/iv_cloes\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id*=\"com.rytong.hnair:id/iv_cloes\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[id*=\"com.rytong.hnair:id/iv_cloes\"]",
          "key": 0
        }
      ]
    }
  ]
});
