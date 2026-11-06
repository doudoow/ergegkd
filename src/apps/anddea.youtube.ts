// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "YouTube RVX",
  "id": "anddea.youtube",
  "groups": [
    {
      "name": "功能类-评论区自动点击[翻译成中文]",
      "key": 0,
      "rules": [
        {
          "matches": "@Button[desc^=\"翻译成中文\"][visibleToUser=true] <<n [vid=\"results\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18287650",
          "exampleUrls": "https://e.gkd.li/c16f1e91-7c74-46d4-bcb2-dc15e9b6812d",
          "key": 0
        }
      ]
    }
  ]
});
