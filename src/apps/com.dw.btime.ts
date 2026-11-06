// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "亲宝宝",
  "id": "com.dw.btime",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/iv_overlay_close\"][clickable=true]",
          "activityIds": "com.dw.btime.MainHomeTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/12889448",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_overlay_close\"][clickable=true]",
          "activityIds": ".MainHomeTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/12889448",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-横幅广告",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/old_baby_close\"][clickable=true]",
          "activityIds": "com.dw.btime.MainHomeTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12889450",
          "key": 0
        },
        {
          "matches": "[vid=\"old_baby_close\"][clickable=true]",
          "activityIds": ".MainHomeTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12889450",
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
      "quickFind": true,
      "order": -9,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/iv_upgrade_close\"]",
          "activityIds": ".base_library.dialog.DWBaseDialog",
          "snapshotUrls": "https://i.gkd.li/i/12911011",
          "key": 0
        },
        {
          "matches": "TextView[text=\"立即更新\"] -3 [id=\"com.dw.btime:id/iv_upgrade_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_upgrade_close\"]",
          "activityIds": ".base_library.dialog.DWBaseDialog",
          "snapshotUrls": "https://i.gkd.li/i/12911011",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-应用内弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/iv_overlay_close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-应用内横幅",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/old_baby_close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/iv_overlay_close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-应用内横幅",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/old_baby_close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内弹窗",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/iv_overlay_close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内横幅",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/old_baby_close\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
