// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小周便签",
  "id": "me.zhouzhuo810.zznote",
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
          "matches": "@[vid^=\"btn_next_\"] - [vid=\"native_ad_container\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12798528",
            "https://i.gkd.li/i/14662294"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13800235",
            "https://i.gkd.li/i/16115850"
          ]
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16118464"
        },
        {
          "matches": "@[vid^=\"btn_next_\"] - [vid=\"native_ad_container\"]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12798528",
            "https://i.gkd.li/i/14662294"
          ]
        },
        {
          "matches": "@LinearLayout > [text*=\"跳过\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13800235"
        }
      ]
    }
  ]
});
