// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Cellular-Z",
  "id": "make.more.r2d2.cellular_z",
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
          "matches": [
            "[text=\"发现新版本\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".activity.MonitorActivity",
          "snapshotUrls": "https://i.gkd.li/i/13608563",
          "key": 0
        },
        {
          "matches": [
            "[id=\"make.more.r2d2.cellular_z:id/tv_alert_title\"][text=\"发现新版本\"]",
            "[id=\"make.more.r2d2.cellular_z:id/btn_alert_left\"][text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13608563",
          "key": 1
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16486491",
          "exampleUrls": "https://e.gkd.li/10fa1ebe-c208-4127-a456-48ac91901984"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13978978"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "fastQuery": true,
          "key": 2,
          "name": "全局规则-1",
          "snapshotUrls": "https://i.gkd.li/import/13987038"
        },
        {
          "matches": "TextView - @View[clickable=true] <n FrameLayout <2 FrameLayout[childCount=2]",
          "key": 3,
          "name": "字节广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13978978"
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10&&(text*=\"跳过\"||text*=\"跳過\"||text*=\"skip\"||text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"download\") || desc*=\"跳过\" || desc*=\"skip\"]",
          "key": 4,
          "name": "全局规则-2"
        }
      ]
    }
  ]
});
