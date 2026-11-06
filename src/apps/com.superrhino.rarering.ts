// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Nico",
  "id": "com.superrhino.rarering",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true] <3 * <2 * < FrameLayout[id=\"com.superrhino.rarering:id/fl_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13853858",
          "key": 0
        }
      ]
    }
  ]
});
