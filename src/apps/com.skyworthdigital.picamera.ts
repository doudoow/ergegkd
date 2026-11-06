// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "创维智慧云",
  "id": "com.skyworthdigital.picamera",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
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
          "matches": "[vid=\"splash_container\"] >4 View[clickable=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14537292",
          "exampleUrls": "https://m.gkd.li/101449500/576447d9-56ce-476d-9d2f-4de479c82f96"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13497656",
          "exampleUrls": "https://m.gkd.li/57941037/07c9f980-aa0f-4044-a58d-299a2a358857"
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14511463",
          "exampleUrls": "https://m.gkd.li/57941037/3b5cba55-7024-4d3e-a21c-7b1d540515bc"
        }
      ]
    }
  ]
});
