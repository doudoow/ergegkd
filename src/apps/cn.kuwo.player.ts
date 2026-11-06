// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "酷我音乐",
  "id": "cn.kuwo.player",
  "groups": [
    {
      "name": "全屏广告-酷我会员日弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"cn.kuwo.player:id/iv_business_personal_dia_close\"]",
          "activityIds": "cn.kuwo.player.activities.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13974483",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_business_personal_dia_close\"]",
          "activityIds": ".activities.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13974483",
          "key": 1
        }
      ]
    }
  ]
});
