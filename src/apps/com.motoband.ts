// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "摩托邦",
  "id": "com.motoband",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true] <3 * <2 * < [vid=\"splash_container_half_size\"]",
          "key": 0
        }
      ]
    }
  ]
});
