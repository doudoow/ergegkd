// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "南方航空",
  "id": "com.csair.mbp",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.csair.mbp:id/close_btn\"]",
          "activityIds": ".CSMBPActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13197497",
          "exampleUrls": "https://e.gkd.li/c6aeaf1c-e4d6-4b9c-a4bf-ee5b05d2bb30",
          "key": 0
        },
        {
          "matches": "[vid=\"close_btn\"]",
          "activityIds": ".CSMBPActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13197497",
          "exampleUrls": "https://e.gkd.li/c6aeaf1c-e4d6-4b9c-a4bf-ee5b05d2bb30",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-长辈版弹窗",
      "desc": "点击[暂不开启]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"开启长辈版\"] -2 [text=\"暂不开启\"]",
          "activityIds": "com.csair.mbp.CSMBPActivity",
          "snapshotUrls": "https://i.gkd.li/i/14810700",
          "exampleUrls": "https://m.gkd.li/57941037/8744f8c6-7f9a-4f7b-a5c7-68de1701cd7b",
          "key": 0
        },
        {
          "matches": "[text=\"开启长辈版\"] -2 [text=\"暂不开启\"]",
          "key": 1
        },
        {
          "matches": "[text=\"开启长辈版\"] -2 [text=\"暂不开启\"]",
          "activityIds": ".CSMBPActivity",
          "snapshotUrls": "https://i.gkd.li/i/14810700",
          "exampleUrls": "https://m.gkd.li/57941037/8744f8c6-7f9a-4f7b-a5c7-68de1701cd7b",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.csair.mbp:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.csair.mbp:id/close_btn\"]",
          "key": 0
        }
      ]
    }
  ]
});
