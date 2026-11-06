// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Nekogram",
  "id": "tw.nekomimi.nekogram",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[desc$=\"稍后提醒我\"] - [desc=\"立即下载\"] <3 FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "org.telegram.ui.LaunchActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14229236",
            "https://i.gkd.li/i/14372061"
          ],
          "key": 0
        }
      ]
    }
  ]
});
