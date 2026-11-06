// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "音乐",
  "id": "com.tencent.qqmusiclite.universal",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18699697",
          "exampleUrls": "https://e.gkd.li/2b50621d-8425-4b5f-aed7-aa767cf5eecf"
        },
        {
          "matches": "[vid=\"ad_skip_text\"][visibleToUser=true]",
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18699710",
          "exampleUrls": "https://e.gkd.li/0b1ba9a0-03a9-421c-88f2-cc3bd8d6be3c"
        }
      ]
    }
  ]
});
