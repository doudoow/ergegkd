// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "PiliPlus",
  "id": "com.example.piliplus",
  "groups": [
    {
      "name": "功能类-分P视频跳转",
      "desc": "自动跳转到上次观看位置",
      "matchTime": 8000,
      "key": 0,
      "rules": [
        {
          "matches": "SeekBar[desc$=\"进度条\"] - View >2 [desc^=\"上次看到\"][desc$=\"点击跳转\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/26644344",
          "exampleUrls": "https://e.gkd.li/db0b9d4f-cfcb-49c8-94ce-8fc2ca80d47a",
          "key": 0
        }
      ]
    }
  ]
});
