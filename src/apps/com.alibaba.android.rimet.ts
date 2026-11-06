// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "钉钉",
  "id": "com.alibaba.android.rimet",
  "groups": [
    {
      "name": "局部广告-消息列表上方广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@FrameLayout > [id=\"com.alibaba.android.rimet:id/icft_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13325125"
        },
        {
          "matches": "@FrameLayout > [vid=\"icft_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13325125"
        }
      ]
    },
    {
      "name": "功能类-文件即将过期提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@FrameLayout[id=\"com.alibaba.android.rimet:id/layout_close\"] -2 TextView[text=\"文件即将过期请备份\"]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13325125"
        },
        {
          "matches": "@FrameLayout[vid=\"layout_close\"] -2 TextView[text=\"文件即将过期请备份\"]",
          "action": "clickCenter",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13325125"
        }
      ]
    },
    {
      "name": "功能类-自动点击原图",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "CheckBox[id=\"com.alibaba.android.rimet:id/cb_send_origin\"][text=\"原图\"][checked=false]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13309648",
            "https://i.gkd.li/i/13309845"
          ]
        },
        {
          "matches": "CheckBox[vid=\"cb_send_origin\"][text=\"原图\"][checked=false]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13309648",
            "https://i.gkd.li/i/13309845"
          ]
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
      "key": 3,
      "rules": [
        {
          "matches": "@Button[text*=\"暂不更新\"] + Button[text*=\"更新\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13402478"
        },
        {
          "matches": "TextView[id=\"com.alibaba.android.rimet:id/dialog_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13772151",
          "key": 1
        },
        {
          "matches": "TextView[vid=\"dialog_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13772151",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-扫码自动登录桌面版",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.alibaba.android.rimet:id/btn_login\"]",
          "snapshotUrls": "https://i.gkd.li/i/13433981",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_login\"]",
          "snapshotUrls": "https://i.gkd.li/i/13433981",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-文件即将过期提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@FrameLayout[id=\"com.alibaba.android.rimet:id/layout_close\"] -2 TextView[text=\"文件即将过期请备份\"]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13325125"
        }
      ]
    },
    {
      "name": "全屏广告-钉钉新功能",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "TextView[id=\"com.alibaba.android.rimet:id/dialog_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/import/13772151",
          "key": 0
        }
      ]
    },
    {
      "name": "消息列表上方广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "@FrameLayout > [id=\"com.alibaba.android.rimet:id/icft_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13325125"
        }
      ]
    },
    {
      "name": "文件即将过期提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "@FrameLayout[id=\"com.alibaba.android.rimet:id/layout_close\"] -2 TextView[text=\"文件即将过期请备份\"]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13325125"
        }
      ]
    },
    {
      "name": "自动点击原图",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "CheckBox[id=\"com.alibaba.android.rimet:id/cb_send_origin\"][text=\"原图\"][checked=false]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13309648",
            "https://i.gkd.li/import/13309845"
          ]
        }
      ]
    },
    {
      "name": "版本更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "@Button[text*=\"暂不更新\"] + Button[text*=\"更新\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13402478"
        },
        {
          "matches": "TextView[id=\"com.alibaba.android.rimet:id/dialog_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/import/13772151",
          "key": 1
        }
      ]
    },
    {
      "name": "扫码自动登录桌面版",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.alibaba.android.rimet:id/btn_login\"]",
          "snapshotUrls": "https://i.gkd.li/import/13433981",
          "key": 0
        }
      ]
    }
  ]
});
