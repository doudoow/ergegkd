// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "餐大大",
  "id": "com.csmbcx.candada",
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
          "matches": "[vid=\"flContainer\"] >n View[clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
