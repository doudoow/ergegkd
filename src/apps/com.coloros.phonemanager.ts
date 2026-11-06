// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OPPO手机管家",
  "id": "com.coloros.phonemanager",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < [id=\"com.coloros.phonemanager:id/buttonPanel\"] > [text=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13194979",
          "key": 0
        },
        {
          "matches": "@[text=\"取消\"] <<(1,2) [vid=\"buttonPanel\"] >(1,2) [text=\"更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13194979",
            "https://i.gkd.li/i/34210785"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"][clickable=true]",
          "activityIds": "com.coloros.phonemanager.clear.ClearMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14317524",
          "exampleUrls": "https://m.gkd.li/57941037/4d8b27a4-f129-479e-871b-bc6f664072ae",
          "key": 0
        },
        {
          "matches": "[vid=\"ad_close\"][clickable=true]",
          "activityIds": ".clear.ClearMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14317524",
          "exampleUrls": "https://m.gkd.li/57941037/4d8b27a4-f129-479e-871b-bc6f664072ae",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-风险应用提示",
      "desc": "点击忽略",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text$=\"风险应用\"][visibleToUser=true]",
            "[text=\"忽略\"][visibleToUser=true]"
          ],
          "activityIds": "com.oplus.phonemanager.virusdetect.VirusDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19749344",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < [id=\"com.coloros.phonemanager:id/buttonPanel\"] > [text=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13194979",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-风险应用提示",
      "desc": "点击忽略",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text$=\"风险应用\"][visibleToUser=true]",
            "[text=\"忽略\"][visibleToUser=true]"
          ],
          "activityIds": "com.oplus.phonemanager.virusdetect.VirusDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19749344",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < [id=\"com.coloros.phonemanager:id/buttonPanel\"] > [text=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/import/13194979",
          "key": 0
        }
      ]
    }
  ]
});
