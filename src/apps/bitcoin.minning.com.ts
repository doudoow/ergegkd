// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Bitcoin Mining",
  "id": "bitcoin.minning.com",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@Button[text=\"Close button\"][clickable=true][childCount=0][visibleToUser=true] <5 View[id*=\"ad\"] < View < WebView < WebView < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": "com.vungle.ads.internal.ui.VungleActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/22361347",
          "exampleUrls": "https://e.gkd.li/99958310-8a0e-47df-b017-b2eea86cd60e"
        },
        {
          "matches": "View[childCount=0] < @FrameLayout[clickable=true][childCount=1][visibleToUser=true] - RelativeLayout[getChild(0).getChild(0).getChild(0).getChild(0).id=\"adFrame\"] < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.applovin.adview.AppLovinFullscreenActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22337133",
          "exampleUrls": "https://e.gkd.li/aff580b7-2e95-4145-b50c-07a59d1db617"
        }
      ]
    }
  ]
});
