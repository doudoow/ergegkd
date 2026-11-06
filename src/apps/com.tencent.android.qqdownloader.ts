// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "应用宝",
  "id": "com.tencent.android.qqdownloader",
  "groups": [
    {
      "name": "功能类-关闭登录弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[clickable=true] - [text=\"欢迎登录应用宝\"]",
          "activityIds": "com.tencent.assistantv2.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/16012576",
          "exampleUrls": "https://m.gkd.li/57941037/29c109c2-7993-4b39-ba80-6ae6451ab533",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-签到弹窗",
      "desc": "x掉",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[width<78 && height<78] - FrameLayout - ImageView[width=getPrev(6).width] < FrameLayout[childCount>4][visibleToUser=true] < * < * < * < * < * < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/32254247",
          "exampleUrls": "https://e.gkd.li/32251ef1-ea42-428d-8814-2b75cce47d57",
          "key": 0
        }
      ]
    }
  ]
});
