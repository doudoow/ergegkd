// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "民生银行",
  "id": "cn.com.cmbc.newmbank",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "View[id=\"cn.com.cmbc.newmbank:id/view_count_down\"]",
          "snapshotUrls": "https://i.gkd.li/i/19463734",
          "key": 0
        }
      ]
    }
  ]
});
