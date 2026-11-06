// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "下载工具箱",
  "id": "com.wan.tools",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @[text=\"取消\"] + [text=\"确认\"]",
          "activityIds": "com.one.downloadtools.ui.activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13392027",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动识别解析链接",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"识别解析\"]",
          "activityIds": "com.one.downloadtools.ui.activity.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13392085",
          "key": 0
        },
        {
          "matches": "@[text=\"识别解析\"] -2 * > [text^=\"检测到你复制链接\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-开通会员弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text^=\"开通会员\"]",
            "[text=\"暂不\"]"
          ],
          "activityIds": "com.one.downloadtools.ui.activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13392112",
          "key": 0
        },
        {
          "matches": "[text^=\"开通会员\"] < * +n * > [text=\"暂不\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-公告弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @[text=\"取消\"] + [text=\"确认\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-自动识别解析链接",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"识别解析\"] -2 * > [text^=\"检测到你复制链接\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-开通会员弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text^=\"开通会员\"] < * +n * > [text=\"暂不\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-公告弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @[text=\"取消\"] + [text=\"确认\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "公告弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @[text=\"取消\"] + [text=\"确认\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "自动识别解析链接",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[text=\"识别解析\"] -2 * > [text^=\"检测到你复制链接\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开通会员弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text^=\"开通会员\"] < * +n * > [text=\"暂不\"]",
          "key": 0
        }
      ]
    }
  ]
});
