// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米移动",
  "id": "com.xiaomi.mimobile",
  "groups": [
    {
      "name": "评价提示",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[desc=null] < [desc=\"「小米移动」使用体验调查\"]",
          "activityIds": ".activity.XiaomiMobileMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/23227230",
          "key": 0
        }
      ]
    }
  ]
});
