// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "迅游手游加速器",
  "id": "cn.wsds.gamemaster",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "desc": "点击关闭-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > @ImageView[childCount=0][index=1][clickable=true][visibleToUser=true] - [text=\"立即下载\"]",
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13930398"
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            6
          ],
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "snapshotUrls": "https://i.gkd.li/i/13930399",
          "key": 1
        },
        {
          "matches": "[id=\"cn.wsds.gamemaster:id/feed_ad\"] [text=\"立即下载\"] + ImageView[clickable=true]",
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13930398"
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": 0,
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13930399",
          "key": 3
        },
        {
          "matches": "ViewGroup[childCount=2] > @ImageView[childCount=0][index=1][clickable=true][visibleToUser=true] - [text=\"立即下载\"]",
          "activityIds": ".ui.gamedetails.ActivityGameDetails",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13930398"
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            6
          ],
          "activityIds": ".ui.gamedetails.ActivityGameDetails",
          "snapshotUrls": "https://i.gkd.li/i/13930399",
          "key": 5
        },
        {
          "matches": "@ImageView - TextView < ViewGroup <n * <n * <n * <n * < [id=\"cn.wsds.gamemaster:id/feed_ad\"]",
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/import/13930398"
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": 0,
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "snapshotUrls": "https://i.gkd.li/import/13930399",
          "key": 7
        }
      ]
    },
    {
      "name": "开屏广告",
      "desc": "点击跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid=\"splash_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930391",
          "key": 0
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13930391",
          "key": 1
        }
      ]
    }
  ]
});
