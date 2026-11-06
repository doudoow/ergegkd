// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "YouTube",
  "id": "by.green.tuber",
  "groups": [
    {
      "name": "功能类-关闭底部播放横条",
      "key": 0,
      "rules": [
        {
          "matches": "ImageButton[desc=\"预览缩略图\"] +2 LinearLayout > ImageButton + ImageButton[visibleToUser=true][clickable=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/24590682",
          "key": 0
        }
      ]
    }
  ]
});
