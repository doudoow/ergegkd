// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "MyComic",
  "id": "com.qc.mycomic",
  "groups": [
    {
      "name": "开屏广告",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] > [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15443225",
          "key": 0
        }
      ]
    }
  ]
});
