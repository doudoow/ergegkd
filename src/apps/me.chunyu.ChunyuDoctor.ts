// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "春雨医生",
  "id": "me.chunyu.ChunyuDoctor",
  "groups": [
    {
      "name": "评价提示-应用评分弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"给应用评分\"] +(2) RelativeLayout > [text=\"下次再说\"]",
          "activityIds": [
            ".Activities.MainActivity",
            ".Activities.WelcomeActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12661907",
            "https://i.gkd.li/i/12661924"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-应用评分弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"给应用评分\"] +(2) RelativeLayout > [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12661907",
            "https://i.gkd.li/i/12661924"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用评分弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"给应用评分\"] +(2) RelativeLayout > [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12661907",
            "https://i.gkd.li/import/12661924"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "应用评分弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"给应用评分\"] +(2) RelativeLayout > [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12661907",
            "https://i.gkd.li/import/12661924"
          ],
          "key": 0
        }
      ]
    }
  ]
});
