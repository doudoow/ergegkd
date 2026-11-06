// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QuickEdit",
  "id": "com.rhmsoft.edit",
  "groups": [
    {
      "name": "功能类-自动点击完成",
      "desc": "保存成功后点击完成",
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"完成\"][clickable=true] - * > [text^=\"保存成功\"]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24842648",
          "key": 0
        }
      ]
    }
  ]
});
