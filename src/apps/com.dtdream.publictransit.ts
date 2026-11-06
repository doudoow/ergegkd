// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "杭州公共交通",
  "id": "com.dtdream.publictransit",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.dtdream.publictransit:id/ifv_close\"]",
          "activityIds": "com.dtchuxing.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12830113",
          "key": 0
        },
        {
          "matches": "[vid=\"ifv_close\"]",
          "activityIds": "com.dtchuxing.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12830113",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.dtdream.publictransit:id/ifv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.dtdream.publictransit:id/ifv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.dtdream.publictransit:id/ifv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
