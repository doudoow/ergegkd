// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云·星穹铁道",
  "id": "com.miHoYo.cloudgames.hkrpg",
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
          "snapshotUrls": "https://i.gkd.li/i/14784161",
          "exampleUrls": "https://m.gkd.li/57941037/f33b53ea-32a2-48b3-a4a8-54bfa8b1fdd8",
          "key": 0
        },
        {
          "matches": "[text=\"使用流量进行游戏\"][clickable=true]",
          "activityIds": "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14784161",
          "exampleUrls": "https://m.gkd.li/57941037/f33b53ea-32a2-48b3-a4a8-54bfa8b1fdd8",
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
          "snapshotUrls": "https://i.gkd.li/i/26311879",
          "exampleUrls": "https://e.gkd.li/eda9555c-565a-4c75-844d-3529d552e203"
        },
        {
          "matches": "[text=\"开始安装\"][clickable=true]",
          "actionMaximum": 1,
          "preKeys": [
            0
          ],
          "resetMatch": "app",
          "name": "点击[开始安装]",
          "snapshotUrls": "https://i.gkd.li/i/26311880",
          "exampleUrls": "https://e.gkd.li/752b4fcb-f86a-4a69-b29b-17eaa7c62763",
          "key": 1
        }
      ]
    }
  ]
});
