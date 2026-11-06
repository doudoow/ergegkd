// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "每日瑜伽",
  "id": "com.dailyyoga.inc",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "[visibleToUser=true] - [vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": ".session.fragment.UploadSessionResultActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/21563972",
          "excludeSnapshotUrls": "https://i.gkd.li/i/21705377",
          "exampleUrls": "https://e.gkd.li/3395e6cc-6776-4c86-ac6d-4411faced360",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_guide_share_close\"][visibleToUser=true]",
          "activityIds": ".session.fragment.UploadSessionResultActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/21705377",
          "exampleUrls": "https://e.gkd.li/a4e4e4c8-401a-47d7-8765-d5f0aa915af5",
          "key": 0
        }
      ]
    }
  ]
});
