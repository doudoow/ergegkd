// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "彩虹多多",
  "id": "com.ddyc.lotterytool",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageButton[clickable=true][childCount=0] < LinearLayout < FrameLayout < [parent=null]",
          "snapshotUrls": "https://i.gkd.li/i/13324555",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"开启推送通知\"] +2 LinearLayout [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13325888",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - ImageButton[id=\"com.ddyc.lotterytool:id/arg\"][text=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[text^=\"开启推送通知\"] +2 LinearLayout [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView - ImageButton[id=\"com.ddyc.lotterytool:id/arg\"][text=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[text^=\"开启推送通知\"] +2 LinearLayout [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "ImageView - ImageButton[id=\"com.ddyc.lotterytool:id/arg\"][text=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "[text^=\"开启推送通知\"] +2 LinearLayout [text=\"以后再说\"]",
          "key": 0
        }
      ]
    }
  ]
});
