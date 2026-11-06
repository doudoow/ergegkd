// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "亿通行",
  "id": "enfc.metro",
  "groups": [
    {
      "name": "全屏广告-出站后摇一摇广告",
      "desc": "点击跳过",
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true] - * [text=\"扭动手机\"]",
          "activityIds": "enfc.metro.session.web.rn.RPReactActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13988597",
          "key": 0
        },
        {
          "matches": "@View[clickable=true] - * [text=\"扭动手机\"]",
          "activityIds": ".session.web.rn.RPReactActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13988597",
          "key": 1
        }
      ]
    }
  ]
});
