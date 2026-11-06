// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "随手记",
  "id": "com.mymoney",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "点击跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 0
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "key": 1
        },
        {
          "matches": "@View[clickable=true] <3 * <2 * < FrameLayout[id=\"com.mymoney:id/external_ad_content\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13855760"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/13939216",
            "https://i.gkd.li/import/13939163"
          ]
        }
      ]
    }
  ]
});
