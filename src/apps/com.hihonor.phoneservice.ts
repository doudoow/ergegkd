// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "我的荣耀",
  "id": "com.hihonor.phoneservice",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ads_cancel\"]",
          "activityIds": "com.hihonor.phoneservice.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16476928",
          "exampleUrls": "https://e.gkd.li/539acb69-5c9c-4c4b-9757-d189b6852f89",
          "key": 0
        },
        {
          "matches": "[vid=\"ads_cancel\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16476928",
          "exampleUrls": "https://e.gkd.li/539acb69-5c9c-4c4b-9757-d189b6852f89",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"开启定位权限\"] + [id=\"com.hihonor.phoneservice:id/iv_close\"]",
          "activityIds": "com.hihonor.phoneservice.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12783134",
          "key": 0
        },
        {
          "matches": "[text^=\"开启定位权限\"] + [id=\"com.hihonor.phoneservice:id/iv_close\"]",
          "key": 1
        },
        {
          "matches": "[text^=\"开启定位权限\"] + [vid=\"iv_close\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12783134",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[id=\"com.hihonor.phoneservice:id/start_skip_count_down\"]",
          "activityIds": "com.hihonor.phoneservice.OpenScreenAdActivity",
          "snapshotUrls": "https://i.gkd.li/import/14896804",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求位置权限提示信息",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text^=\"开启定位权限\"] + [id=\"com.hihonor.phoneservice:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求位置权限提示信息",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"开启定位权限\"] + [id=\"com.hihonor.phoneservice:id/iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
