// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "元道经纬相机",
  "id": "com.ydtx.camera",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true][top<600]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/20882921",
            "https://i.gkd.li/i/20896758"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/20882935",
          "exampleUrls": "https://e.gkd.li/a2e4b32b-dfee-4626-9612-6df0cb530f9e"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20883248"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true][top<600]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/20882921",
            "https://i.gkd.li/i/20896758"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/20882935",
          "exampleUrls": "https://e.gkd.li/a2e4b32b-dfee-4626-9612-6df0cb530f9e"
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/20883248"
        },
        {
          "matches": "@[text*=\"跳过\"] <2 View <n View < WebView < WebView < [vid=\"ptgAdvertLayout\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/28448904"
        },
        {
          "matches": "@View[id=null][text=null][desc=null][clickable=true][height<123] - LinearLayout >2 [text*=\"广告\"][text.length<10]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/28449513"
        }
      ]
    }
  ]
});
