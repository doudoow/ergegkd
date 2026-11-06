// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "京喜",
  "id": "com.jd.pingou",
  "groups": [
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] -2 [text^=\"开启定位授权\"]",
          "activityIds": "com.jd.jdlite.MainFrameActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13804515",
          "exampleUrls": "https://e.gkd.li/311e64ee-e775-41fb-b981-ceead0280ac7",
          "key": 0
        },
        {
          "matches": "[text*=\"开启定位授权\"] +2 ImageView",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-底部申请定位浮窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"开启定位授权\"] +2 ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "底部申请定位浮窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"开启定位授权\"] +2 ImageView",
          "key": 0
        }
      ]
    }
  ]
});
