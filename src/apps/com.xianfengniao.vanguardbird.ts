// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "先锋鸟",
  "id": "com.xianfengniao.vanguardbird",
  "groups": [
    {
      "name": "功能类-今日任务自动点击签到",
      "desc": "首页-今日任务-点击签到",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"签到\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24839618"
        },
        {
          "matches": "[vid=\"tv_cancel\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/24839655",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-个人页面自动点击签到",
      "desc": "个人页点击签到",
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"点击签到\"][visibleToUser=true]",
          "activityIds": ".ui.common.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24839732",
          "key": 0
        }
      ]
    }
  ]
});
