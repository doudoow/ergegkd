// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "花小猪打车",
  "id": "com.huaxiaozhu.rider",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击\"稍后更新\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"稍后更新\"]",
          "activityIds": "com.huaxiaozhu.sdk.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14233480",
          "exampleUrls": "https://m.gkd.li/57941037/7b5e81bf-6c51-4222-b832-ba4176be2a4b",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"popClose\"]",
          "activityIds": "com.huaxiaozhu.sdk.app.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14233488",
          "exampleUrls": "https://m.gkd.li/57941037/1555a2be-92cb-4360-b50f-019f30955a22",
          "key": 0
        }
      ]
    }
  ]
});
