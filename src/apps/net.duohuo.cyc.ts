// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "次元城动画",
  "id": "net.duohuo.cyc",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": "top.cycdm.cycapp.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13972796",
            "https://i.gkd.li/i/14358701",
            "https://i.gkd.li/i/14358706"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"跳过\"]",
          "activityIds": "top.cycdm.cycapp.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13972792",
            "https://i.gkd.li/i/14358630"
          ]
        }
      ]
    }
  ]
});
