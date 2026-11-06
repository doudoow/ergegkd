// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "全民泡泡超人",
  "id": "com.tencent.tmgp.kgame.ppcr",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.tencent.ysdkcore:id/com_tencent_ysdk_icon_h5_xx\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276317",
          "key": 0
        }
      ]
    }
  ]
});
