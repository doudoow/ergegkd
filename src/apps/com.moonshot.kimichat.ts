// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Kimi",
  "id": "com.moonshot.kimichat",
  "groups": [
    {
      "name": "评价提示",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"残忍拒绝\"] < @View[clickable=true] -n [text^=\"感谢喜欢 Kimi\"][text*=\"打个分吧\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/31449987",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"稍后再说\"] < @View[clickable=true] -n [text=\"开启通知\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/31450087",
          "key": 0
        }
      ]
    }
  ]
});
