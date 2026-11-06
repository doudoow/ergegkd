// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "简讯",
  "id": "com.tipsoon.android",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14568317",
          "exampleUrls": "https://m.gkd.li/57941037/7ba2a5cd-12e8-4ac3-a867-8d0f81247d93",
          "key": 0
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14568317",
          "exampleUrls": "https://m.gkd.li/57941037/7ba2a5cd-12e8-4ac3-a867-8d0f81247d93",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.tipsoon.android:id/cardview\"] + [id=\"com.tipsoon.android:id/img_close\"]",
          "activityIds": "com.tipsoon.android.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13426997"
        },
        {
          "matches": "[vid=\"cardview\"] + [vid=\"img_close\"]",
          "activityIds": ".activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13426997"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.tipsoon.android:id/cardview\"] + [id=\"com.tipsoon.android:id/img_close\"]",
          "activityIds": "com.tipsoon.android.activity.MainActivity",
          "key": 0,
          "name": "弹窗广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13426997"
        }
      ]
    }
  ]
});
