// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "钱包",
  "id": "com.mipay.wallet",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"skip\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16828031",
            "https://i.gkd.li/i/16828053"
          ],
          "exampleUrls": "https://e.gkd.li/670b95f6-12d0-4787-9158-98ac52eb1641",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout >2 View[childCount=2] >2 View[childCount=2] > @ImageView[clickable=true][index=0][visibleToUser=true] <<n [vid=\"flutter_container\"]",
          "activityIds": "com.xiaomi.jr.app.MiFinanceActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16828039",
          "exampleUrls": "https://e.gkd.li/9d8a1bb4-40ab-4312-8f5b-ef224e18720e",
          "key": 0
        }
      ]
    }
  ]
});
