// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "LocalSend",
  "id": "org.localsend.localsend_app",
  "groups": [
    {
      "name": "功能类-文件传输时自动点击[高级]",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"高级\"] < View <2 View[childCount=2] < View < View < FrameLayout < [id=\"android:id/content\"]",
          "actionCd": 3500,
          "activityIds": ".MainActivity",
          "forcedTime": 100000,
          "matchRoot": true,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26321028",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26314724",
          "exampleUrls": "https://e.gkd.li/54a7208c-03b2-4e74-a8ed-99829d72c8c5",
          "key": 0
        }
      ]
    }
  ]
});
