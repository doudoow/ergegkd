// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小包搜题",
  "id": "com.ixyzh.question",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][desc^=\"close\"] <<n [vid=\"ad_container\"]",
          "activityIds": "com.ixyzh.question.HomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16661116",
          "exampleUrls": "https://e.gkd.li/eced433b-0fd5-4999-90de-45aab80c0b51"
        },
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true][text=null] <<n [vid=\"ad_container\"]",
          "activityIds": "com.ixyzh.question.ui.fragments.my.MyDownloadActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16661119",
          "exampleUrls": "https://e.gkd.li/ab77a0a8-14df-4d73-99e7-a1428965f2dd"
        },
        {
          "matches": "@View[clickable=true] < FrameLayout[desc^=\"close\"] + FrameLayout >2 [text=\"广告\"]",
          "activityIds": "com.ixyzh.question.ui.exercise.ExerciseActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16661120",
          "exampleUrls": "https://e.gkd.li/3dc83ae2-72f0-4660-b175-0610765fc6ec"
        },
        {
          "matches": "@ImageView[clickable=true][desc^=\"close\"] <<n [vid=\"ad_container\"]",
          "activityIds": ".HomeActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16661116",
          "exampleUrls": "https://e.gkd.li/eced433b-0fd5-4999-90de-45aab80c0b51"
        },
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true][text=null] <<n [vid=\"ad_container\"]",
          "activityIds": ".ui.fragments.my.MyDownloadActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16661119",
          "exampleUrls": "https://e.gkd.li/ab77a0a8-14df-4d73-99e7-a1428965f2dd"
        },
        {
          "matches": "@View[clickable=true] < FrameLayout[desc^=\"close\"] + FrameLayout >2 [text=\"广告\"]",
          "activityIds": ".ui.exercise.ExerciseActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16661120",
          "exampleUrls": "https://e.gkd.li/3dc83ae2-72f0-4660-b175-0610765fc6ec"
        }
      ]
    }
  ]
});
