// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "TradingView",
  "id": "com.tradingview.tradingviewapp",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true][text=\"关闭广告\"] <<n [vid=\"chart_wbv\"]",
          "activityIds": ".root.view.RootActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16725697",
          "exampleUrls": "https://e.gkd.li/3798ab1b-2cd3-471e-8303-b8124746e9d8",
          "key": 0
        },
        {
          "matches": "@[clickable=true][text=\"关闭广告\"] <<n [vid=\"chart_wbv\"]",
          "action": "clickCenter",
          "activityIds": ".root.view.RootActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29629766",
          "exampleUrls": "https://e.gkd.li/b1a372a2-f722-4d1f-ad86-32ea1cd4d83d",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"friday_fl_layout\"] > [vid=\"friday_iv_close\"]",
          "activityIds": ".root.view.RootActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18222211",
          "exampleUrls": "https://e.gkd.li/9cc35e84-1b27-4aa5-a74b-ace7cf42d943",
          "key": 0
        }
      ]
    }
  ]
});
