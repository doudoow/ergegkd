// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "山香网校",
  "id": "com.shanxiang.wangxiao",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_advertising\"] + [vid=\"countDownView\"][clickable=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/26356382"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_ad\"] + [vid=\"ivClose\"]",
          "activityIds": ".ui.main.MainFragmentActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/32035807",
          "exampleUrls": "https://e.gkd.li/284033d3-fd1b-4e24-92ab-d807c7ddbde7",
          "key": 0
        }
      ]
    }
  ]
});
