// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "上海农商银行",
  "id": "com.srcb.pmbank",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.srcb.pmbank:id/chronometer\"][vid=\"chronometer\"][text*=\"跳过\"]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15491928"
        }
      ]
    }
  ]
});
