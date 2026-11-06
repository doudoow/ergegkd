// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "上汽大众",
  "id": "com.svw.sc.mos",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_appstart_close\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".main.ui.home.ui.AppStartDialogActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17528776",
          "exampleUrls": "https://e.gkd.li/0acf720d-1752-449f-bbe6-357896f1bb2e"
        },
        {
          "matches": "[vid=\"imv_share_close\"][visibleToUser=true]",
          "activityIds": ".main.ui.mine.ui.MedalDialogActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18399174",
          "exampleUrls": "https://e.gkd.li/01611ed2-11f7-4ffe-93d7-f07878196ada"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"clyt_floating_close\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".main.ui.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/17528781",
          "exampleUrls": "https://e.gkd.li/fbbc311e-cfe1-468a-88c1-20633622a34e",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"close_contain\"][visibleToUser=true]",
          "activityIds": ".main.ui.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17709772",
          "exampleUrls": "https://e.gkd.li/2d9042c4-0dac-47d5-9fc4-92a91da393b5",
          "key": 0
        }
      ]
    }
  ]
});
