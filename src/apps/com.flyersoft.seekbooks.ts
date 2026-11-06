// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "搜书大师",
  "id": "com.flyersoft.seekbooks",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "forcedTime": 10000,
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.flyersoft.seekbooks:id/splash_container1\"] >5 [text^=\"跳过\"][text.length<=3]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12857275"
        },
        {
          "matches": "FrameLayout > TextView[text=null] - View[visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13797352"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/32143574"
        },
        {
          "matches": "@ImageView[width<147 && height<147] < [visibleToUser=true] < [childCount=1] +3 ViewGroup >2 [text=\"广告\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/32141142"
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/32140212"
        }
      ]
    }
  ]
});
