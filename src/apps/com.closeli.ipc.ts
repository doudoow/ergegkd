// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Eyeplus",
  "id": "com.closeli.ipc",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] - [vid=\"iv_ads\"]",
          "activityIds": "com.arcsoft.closeli.dhmain2.main.NewMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18070447",
          "exampleUrls": "https://e.gkd.li/2f4b9b69-06bb-4d7e-9607-4e1ebb57322b",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout[childCount=3] > FrameLayout[index=2][childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid=\"cv_empty_container\"]",
          "activityIds": "com.arcsoft.closeli.dhmain2.main.NewMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18070476",
          "exampleUrls": "https://e.gkd.li/798ebfdd-7966-437c-9d29-ce34749113d8",
          "key": 0
        }
      ]
    }
  ]
});
