// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "JavDB",
  "id": "xxx.pornhub.fuck",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[知道了]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[desc=\"知道了\"][visibleToUser=true] <3 View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14559882",
          "exampleUrls": "https://m.gkd.li/57941037/ae1792dd-210b-4ac2-bfce-c2081ed03498",
          "key": 0
        },
        {
          "matches": "[desc=\"公告\"] + * + [desc=\"知道了\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-公告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"公告\"] + * + [desc=\"知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "公告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"公告\"] + * + [desc=\"知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
