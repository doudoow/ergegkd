// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "船员易综合服务平台",
  "id": "com.chuanyuanyi.zkcl",
  "groups": [
    {
      "name": "通知提示",
      "desc": "点击[忽略]",
      "matchRoot": true,
      "key": 0,
      "rules": [
        {
          "matches": "@TextView[text=\"忽略\"] <3 View < View < View < View < WebView[text=\"弹窗公告\"] < WebView < FrameLayout <2 RelativeLayout < ViewGroup < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27011641",
          "key": 0
        }
      ]
    }
  ]
});
