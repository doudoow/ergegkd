// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国邮政",
  "id": "com.wisentsoft.chinapost.android",
  "groups": [
    {
      "name": "全屏广告-首页弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 LinearLayout <3 ViewGroup < [vid=\"ll_main\"]",
          "snapshotUrls": "https://i.gkd.li/i/15914347",
          "key": 0
        }
      ]
    }
  ]
});
