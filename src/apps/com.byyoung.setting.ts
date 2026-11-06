// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱玩机工具箱",
  "id": "com.byyoung.setting",
  "groups": [
    {
      "name": "功能类-忽略授权提示",
      "desc": "初始授权欢迎界面,点击上方暂时忽略授权",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.byyoung.setting:id/tv_name\"][text*=\"忽略授权\"]",
          "snapshotUrls": "https://i.gkd.li/i/12829909",
          "key": 0
        },
        {
          "matches": "@[clickable=true] >2 [text*=\"忽略授权\"]",
          "actionDelay": 200,
          "activityIds": ".Welcome.PermissionActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34113480",
          "exampleUrls": "https://e.gkd.li/3685c49e-516e-4e15-b33a-419459cc311a",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-忽略授权提示",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.byyoung.setting:id/tv_name\"][text*=\"忽略授权\"]",
          "snapshotUrls": "https://i.gkd.li/i/12829909",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-每日自动签到",
      "desc": "延时3秒触发, 仅点击1次[签到]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - Button[text=\"签到\"][clickable=true]",
          "actionDelay": 3000,
          "activityIds": ".HomePage.activitys.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/27209865",
            "https://i.gkd.li/i/34144831"
          ],
          "exampleUrls": "https://e.gkd.li/febcaadd-d766-4970-b8ee-edbccf4022ac",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-忽略授权提示",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.byyoung.setting:id/tv_name\"][text*=\"忽略授权\"]",
          "snapshotUrls": "https://i.gkd.li/import/12829909",
          "key": 0
        }
      ]
    },
    {
      "name": "忽略授权提示",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.byyoung.setting:id/tv_name\"][text*=\"忽略授权\"]",
          "snapshotUrls": "https://i.gkd.li/import/12829909",
          "key": 0
        }
      ]
    }
  ]
});
