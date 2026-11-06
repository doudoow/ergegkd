// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "雨见",
  "id": "com.yujian.ResideMenuDemo",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[id=\"com.yujian.ResideMenuDemo:id/btn_selectOther\"]",
          "activityIds": "cn.yujian.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13224234",
          "key": 0
        },
        {
          "matches": "TextView[vid=\"btn_selectOther\"]",
          "activityIds": "cn.yujian.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13224234",
          "key": 1
        },
        {
          "matches": "TextView[id=\"com.yujian.ResideMenuDemo:id/btn_selectOther\"]",
          "key": 2
        }
      ]
    }
  ]
});
