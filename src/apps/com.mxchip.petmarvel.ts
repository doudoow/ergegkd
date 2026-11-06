// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "滴宠生活",
  "id": "com.mxchip.petmarvel",
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
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15102179"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23600688",
          "exampleUrls": "https://e.gkd.li/ab86d0ac-00f3-46e5-bfbc-c6a37c1c5a23"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15102179"
        },
        {
          "matches": "FrameLayout[depth=0]",
          "position": {
            "left": "width * 0.8379",
            "top": "width * 0.2055"
          },
          "excludeActivityIds": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14717741"
        }
      ]
    },
    {
      "name": "局部广告-左上角卡片弹窗",
      "desc": "点击X",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "View[childCount=19] > View[index=1] > Image[clickable=true]",
          "activityIds": "com.mxchip.petmarvel.device.panel.DevicePanelActivity",
          "snapshotUrls": "https://i.gkd.li/i/13989316",
          "key": 0
        },
        {
          "matches": "View[childCount=19] > View[index=1] > Image[clickable=true]",
          "activityIds": ".device.panel.DevicePanelActivity",
          "snapshotUrls": "https://i.gkd.li/i/13989316",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.mxchip.petmarvel.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14717743",
          "exampleUrls": "https://m.gkd.li/57941037/de4ea9ad-c85f-4ace-bd4e-7b7fc9adbc2a",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14717743",
          "exampleUrls": "https://m.gkd.li/57941037/de4ea9ad-c85f-4ace-bd4e-7b7fc9adbc2a",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.mxchip.petmarvel.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14717743",
          "exampleUrls": "https://m.gkd.li/57941037/de4ea9ad-c85f-4ace-bd4e-7b7fc9adbc2a",
          "key": 0
        }
      ]
    }
  ]
});
