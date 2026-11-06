// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "兽耳助手",
  "id": "com.mimikko.mimikkoui",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击[今日不再提醒]",
      "enable": false,
      "matchTime": 9000,
      "actionMaximum": 2,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@TextView[text=\"今日不再提醒\"] < View <3 View < View < ViewGroup < [id=\"android:id/content\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/19642049",
          "key": 0
        }
      ]
    }
  ]
});
