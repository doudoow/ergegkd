// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "澳覓",
  "id": "com.mem.MacaoLife",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/cancel\"]",
          "activityIds": "com.mem.life.ui.launch.LaunchActivity",
          "snapshotUrls": "https://i.gkd.li/i/13350665",
          "key": 0
        },
        {
          "matches": "[vid=\"cancel\"]",
          "activityIds": "com.mem.life.ui.launch.LaunchActivity",
          "snapshotUrls": "https://i.gkd.li/i/13350665",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-浮窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/close\"]",
          "activityIds": "com.mem.life.ui.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13350685",
          "key": 0
        },
        {
          "matches": "[vid=\"close\"]",
          "activityIds": "com.mem.life.ui.home.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13350685",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-開啟通知提示",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-浮窗廣告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-開啟通知提示",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-浮窗廣告",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "開啟通知提示",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "浮窗廣告",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/close\"]",
          "key": 0
        }
      ]
    }
  ]
});
