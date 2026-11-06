// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "相册",
  "id": "com.coloros.gallery3d",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"更新\"] -2 [text=\"取消\"]",
          "activityIds": ".app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13554797",
          "exampleUrls": "https://m.gkd.li/47232102/0dae9f4b-8432-4cf4-b648-07ae17cdece2",
          "key": 0
        },
        {
          "matches": "[text=\"更新\"] -2 [text=\"取消\"]",
          "activityIds": "com.coloros.gallery3d.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13554797",
          "exampleUrls": "https://m.gkd.li/47232102/0dae9f4b-8432-4cf4-b648-07ae17cdece2",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-开启相册同步弹窗",
      "desc": "点击忽略",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"开启相册自动同步，保障相册数据安全\"] + [text=\"忽略\"]",
          "activityIds": "com.coloros.gallery3d.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13637185",
          "key": 0
        },
        {
          "matches": "[text=\"开启相册自动同步，保障相册数据安全\"] + [text=\"忽略\"]",
          "activityIds": ".app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13637185",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-开启相册同步弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"开启相册自动同步，保障相册数据安全\"] + [text=\"忽略\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开启相册同步弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"开启相册自动同步，保障相册数据安全\"] + [text=\"忽略\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开启相册同步弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"开启相册自动同步，保障相册数据安全\"] + [text=\"忽略\"]",
          "key": 0
        }
      ]
    }
  ]
});
