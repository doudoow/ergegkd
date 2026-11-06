// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Cubox",
  "id": "pro.cubox.androidapp",
  "groups": [
    {
      "name": "全屏广告-会员广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)] - [text*=\"支付\"] <5 View[childCount=6] < [vid=\"newCV\"]",
          "activityIds": ".ui.pro.ProAccountActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20708841",
          "exampleUrls": "https://e.gkd.li/a51b01f3-d690-4bdf-9db1-f40e05212b11",
          "key": 0
        }
      ]
    }
  ]
});
