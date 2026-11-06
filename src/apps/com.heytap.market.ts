// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OPPO软件商店",
  "id": "com.heytap.market",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "全局规则不生效",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"跳过\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14668997",
          "key": 0
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=5]",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"发现软件商店新版本\"]",
          "action": "back",
          "activityIds": [
            "com.heytap.upgrade.ui.UpgradeActivity",
            "com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13455965",
            "https://i.gkd.li/i/23688317"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.heytap.market:id/tv_titile\"][text=\"发现软件商店新版本\"]",
          "action": "back",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455965",
            "https://i.gkd.li/i/14583583"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-右下角广告悬浮卡片",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] <2 [vid=\"view_id_float_ad\"]",
          "activityIds": "com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14469932",
          "exampleUrls": "https://m.gkd.li/57941037/51493144-2758-4bc7-b2b7-cc85c04c6cc1",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页-右下角浮窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] <2 [vid=\"view_id_float_ad\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.heytap.market:id/tv_titile\"][text=\"发现软件商店新版本\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/import/13455965",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.heytap.market:id/tv_titile\"][text=\"发现软件商店新版本\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/import/13455965",
          "key": 0
        }
      ]
    }
  ]
});
