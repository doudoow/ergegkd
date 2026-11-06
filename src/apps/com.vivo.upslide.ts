// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "交互池",
  "id": "com.vivo.upslide",
  "groups": [
    {
      "name": "功能类-交互池-微信扫码",
      "desc": "快速微信扫码",
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] [text=\"扫一扫\"][visibleToUser=true]",
          "activityIds": "com.bbk.launcher2.Launcher",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25832521",
          "exampleUrls": "https://e.gkd.li/1a1e58f0-7251-4359-8a2b-c7f4562a0f9f",
          "key": 0
        }
      ]
    }
  ]
});
