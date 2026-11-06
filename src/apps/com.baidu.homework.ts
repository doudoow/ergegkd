// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "作业帮",
  "id": "com.baidu.homework",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_dialog_close\"]",
          "actionMaximum": 1,
          "activityIds": "com.baidu.homework.activity.index.IndexActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15374440"
        },
        {
          "matches": [
            "[text^=\"小组件\"]",
            "[text=\"以后再说\"][clickable=true]"
          ],
          "activityIds": ".activity.index.IndexActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23567064"
        },
        {
          "matches": "[vid=\"ad_dialog_close\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.index.IndexActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15374440"
        }
      ]
    }
  ]
});
