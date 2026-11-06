// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "栗子漫画",
  "id": "com.hbsclj.uth",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击x掉",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "WebView[text=\"公告\"] >3 [text=\"✕\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/29899905",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-阅读页底部横幅",
      "desc": "点击x掉",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true][width<64 && height<64][left>getPrev(1).width.div(10).times(9)][top>getPrev(1).height.div(8).times(7)] < FrameLayout[childCount=1] <<n [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29899896",
          "key": 0
        }
      ]
    }
  ]
});
