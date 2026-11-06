// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "i 主题",
  "id": "com.bbk.theme",
  "groups": [
    {
      "name": "全屏广告-推广弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"card_close_img\"]",
          "activityIds": "com.bbk.theme.Theme",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14904298",
          "exampleUrls": "https://m.gkd.li/57941037/8207ec80-6e9d-4b9e-9880-7370d826c405",
          "key": 0
        },
        {
          "matches": "[vid=\"card_close_img\"]",
          "activityIds": ".Theme",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14904298",
          "exampleUrls": "https://m.gkd.li/57941037/8207ec80-6e9d-4b9e-9880-7370d826c405",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-[添加主题卡片至桌面]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"cancel\"] + * > [text=\"智慧桌面\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14904036",
          "exampleUrls": "https://m.gkd.li/57941037/45df70c2-55bc-428a-91cf-40dff23ae2af",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 10000,
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/30565834"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/17072382",
          "exampleUrls": "https://e.gkd.li/57b7401d-4aeb-4480-9ea7-62a58da28eed",
          "key": 1
        }
      ]
    }
  ]
});
