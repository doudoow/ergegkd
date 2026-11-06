// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "星空视频壁纸",
  "id": "yyc.xk",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"gm信息流广告关闭\"][visibleToUser=true]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20863704",
          "exampleUrls": "https://e.gkd.li/972de09c-a399-4b7d-b7c4-e03c072a7170",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"XK\"] >n FrameLayout[childCount=1] > ImageView",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/14011298"
        }
      ]
    }
  ]
});
