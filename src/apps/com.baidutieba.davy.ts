// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "贴吧一键签到大师",
  "id": "com.baidutieba.davy",
  "groups": [
    {
      "name": "全屏广告-内部弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.baidutieba.davy:id/exit\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504289",
          "key": 0
        },
        {
          "matches": "[id=\"com.baidutieba.davy:id/mimo_interstitial_close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504291",
          "key": 1
        },
        {
          "matches": "[vid=\"exit\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504289",
          "key": 2
        },
        {
          "matches": "[vid=\"mimo_interstitial_close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504291",
          "key": 3
        }
      ]
    },
    {
      "name": "未分类-内部弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.baidutieba.davy:id/exit\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504289",
          "key": 0
        },
        {
          "matches": "[id=\"com.baidutieba.davy:id/mimo_interstitial_close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504291",
          "key": 1
        }
      ]
    },
    {
      "name": "内部弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.baidutieba.davy:id/exit\"]",
          "snapshotUrls": "https://i.gkd.li/import/12504289",
          "key": 0
        },
        {
          "matches": "[id=\"com.baidutieba.davy:id/mimo_interstitial_close_img\"]",
          "snapshotUrls": "https://i.gkd.li/import/12504291",
          "key": 1
        }
      ]
    }
  ]
});
