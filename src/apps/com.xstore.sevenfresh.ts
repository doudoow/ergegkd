// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "七鲜",
  "id": "com.xstore.sevenfresh",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"closed_img\"][visibleToUser=true]",
          "activityIds": ".modules.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23021853",
          "exampleUrls": "https://e.gkd.li/fd3abb40-d339-49cf-a6c8-83eedf1451b4",
          "key": 0
        }
      ]
    }
  ]
});
