// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "MINO 4K",
  "id": "com.qjy.youqulife.io",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"] ",
            "[text=\"跳过\"]"
          ],
          "activityIds": "com.qjy.youqulife.io.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13378653"
        },
        {
          "matches": [
            "[text=\"广告\"] ",
            "[text=\"跳过\"]"
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13378653"
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -n ViewGroup > ViewGroup > [text=\"跳过\"]",
          "activityIds": "com.qjy.youqulife.io.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13378653"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -n ViewGroup > ViewGroup > [text=\"跳过\"]",
          "activityIds": "com.qjy.youqulife.io.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13378653"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -n ViewGroup > ViewGroup > [text=\"跳过\"]",
          "activityIds": "com.qjy.youqulife.io.MainActivity",
          "quickFind": true,
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13378653"
        }
      ]
    }
  ]
});
