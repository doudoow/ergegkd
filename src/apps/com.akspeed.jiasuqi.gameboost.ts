// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "AK加速器",
  "id": "com.akspeed.jiasuqi.gameboost",
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
          "matches": "@ImageView[index=1][clickable=true][visibleToUser=true][width<200 && height<200] <2 View[childCount=2] < View < ViewGroup < [id=\"android:id/content\"]",
          "activityIds": ".ui.screen.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20538098",
          "exampleUrls": "https://e.gkd.li/8cf84942-9a6e-43a7-b743-d72dff1b7d8c",
          "key": 0
        }
      ]
    }
  ]
});
