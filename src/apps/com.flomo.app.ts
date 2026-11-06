// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "flomo浮墨笔记",
  "id": "com.flomo.app",
  "groups": [
    {
      "name": "评价提示",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"觉得 flomo 怎么样？\"]",
            "[text=\"暂不提醒\"][clickable=true]"
          ],
          "activityIds": ".ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23935802",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-启动后自动点击新建卡片",
      "desc": "仅开屏后触发一次",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"btnCreateMemo\"][clickable=true]",
          "actionMaximum": 1,
          "activityIds": ".ui.activity.MainActivity",
          "matchTime": 5000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/26307856",
          "key": 0
        }
      ]
    }
  ]
});
