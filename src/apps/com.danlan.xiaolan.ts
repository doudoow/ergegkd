// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Blued极速版",
  "id": "com.danlan.xiaolan",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13421613",
            "https://i.gkd.li/i/13421923"
          ]
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13421622",
            "https://i.gkd.li/i/13422170"
          ]
        },
        {
          "matches": "[vid=\"img_close\"][clickable=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13421613",
            "https://i.gkd.li/i/13421923"
          ]
        }
      ]
    },
    {
      "name": "未分类-附近的人-广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/ad_container\"] >n [id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13421613"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13421622"
        }
      ]
    },
    {
      "name": "未分类-来访-广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13421923"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13422170"
        }
      ]
    },
    {
      "name": "局部广告-附近的人-广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/ad_container\"] >n [id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13421613"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13421622"
        }
      ]
    },
    {
      "name": "局部广告-来访-广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13421923"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13422170"
        }
      ]
    },
    {
      "name": "附近的人-广告卡片",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/ad_container\"] >n [id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13421613"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13421622"
        }
      ]
    },
    {
      "name": "来访-广告卡片",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13421923"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13422170"
        }
      ]
    }
  ]
});
