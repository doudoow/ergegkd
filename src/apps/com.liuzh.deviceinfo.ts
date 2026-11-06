// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "设备信息",
  "id": "com.liuzh.deviceinfo",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[childCount=3 || childCount=4] > ImageView[text=null] +(2,3) @FrameLayout[childCount=1] > ImageView[childCount=0] <<n [vid=\"ad_container\"]",
          "activityIds": "com.liuzh.deviceinfo.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16322794",
            "https://i.gkd.li/i/16322793"
          ],
          "exampleUrls": "https://e.gkd.li/250d3229-a933-410b-8a4a-daccb366558c"
        },
        {
          "matches": "FrameLayout[childCount=3] > TextView[text!=null] + ImageView[clickable=true][text=null][childCount=0]",
          "preKeys": [
            2
          ],
          "activityIds": "com.qq.e.ads.ADActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16322792",
          "exampleUrls": "https://e.gkd.li/ce0348d0-f864-4e52-b235-2e83ec7c20ac"
        },
        {
          "matches": "FrameLayout[childCount=3 || childCount=4] > ImageView[text=null] +(2,3) @FrameLayout[childCount=1] > ImageView[childCount=0] <<n [vid=\"ad_container\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16322794",
            "https://i.gkd.li/i/16322793"
          ],
          "exampleUrls": "https://e.gkd.li/250d3229-a933-410b-8a4a-daccb366558c"
        }
      ]
    }
  ]
});
