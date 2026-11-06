// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "集换社",
  "id": "com.jihuanshe",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击【跳过】",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View <2 FrameLayout <2 FrameLayout < [vid=\"adContainer\"]",
          "key": 0
        }
      ]
    }
  ]
});
