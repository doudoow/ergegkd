// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云·原神",
  "id": "com.miHoYo.cloudgames.ys",
  "groups": [
    {
      "name": "功能类-自动点击[使用流量进行游戏]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"使用流量进行游戏\"]",
          "activityIds": "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14783168",
          "exampleUrls": "https://m.gkd.li/57941037/84c18536-b3a4-4f6e-99b2-264c1a36beb5",
          "key": 0
        },
        {
          "matches": "[text=\"使用流量进行游戏\"][clickable=true]",
          "activityIds": "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14783168",
          "exampleUrls": "https://m.gkd.li/57941037/84c18536-b3a4-4f6e-99b2-264c1a36beb5",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-流量提醒",
      "desc": "点击[使用流量进行游戏]",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"使用流量进行游戏\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击[下载版本更新]",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"立即更新\"][clickable=true]",
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 0,
          "name": "点击[立即更新]",
          "snapshotUrls": "https://i.gkd.li/i/26310355",
          "exampleUrls": "https://e.gkd.li/c061f2fd-ed19-4ae2-84c9-ae1bbc37ace1"
        },
        {
          "matches": "[text=\"开始安装\"][clickable=true]",
          "actionMaximum": 1,
          "preKeys": [
            0
          ],
          "resetMatch": "app",
          "name": "点击[开始安装]",
          "snapshotUrls": "https://i.gkd.li/i/26310561",
          "exampleUrls": "https://e.gkd.li/c5f4db25-e1e5-492e-874d-c4e96eea5e99",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-中断自动重连",
      "desc": "连接中断-尝试重连/重试",
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"尝试重连\" || text=\"重试\"][clickable=true]",
          "activityIds": [
            "com.mihoyo.gamecloud.playcenter.main.MainActivity",
            "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/26311100",
            "https://i.gkd.li/i/27207520"
          ],
          "exampleUrls": [
            "https://e.gkd.li/649824e2-e15e-4ddd-849a-b093357e3a7f",
            "https://e.gkd.li/71a3b3ff-4588-42e0-9750-a207a0c63d8e"
          ],
          "key": 0
        }
      ]
    }
  ]
});
