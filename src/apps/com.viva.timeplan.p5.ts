// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "烟花动漫",
  "id": "com.viva.timeplan.p5",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - RelativeLayout > [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14481496",
          "exampleUrls": "https://m.gkd.li/57941037/3bfe1e95-56ed-43f7-b40c-e523953e71f6",
          "key": 0
        }
      ]
    }
  ]
});
