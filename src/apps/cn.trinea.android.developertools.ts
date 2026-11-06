// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "开发助手",
  "id": "cn.trinea.android.developertools",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=2] > View[childCount=1] + @Button[childCount=0] <<n [vid=\"alayout\"]",
          "activityIds": "c.b.a",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15140643",
          "exampleUrls": "https://m.gkd.li/57941037/6236d6de-c4e1-44d1-b6ff-f472996464a1",
          "key": 0
        }
      ]
    }
  ]
});
