// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Sankaku Black",
  "id": "com.sankakucomplex.channel.black",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[childCount=0] < ViewGroup[childCount=1] < @ViewGroup[clickable=true] +4 ViewGroup > [text*=\"UPGRADE NOW\"][visibleToUser=true]",
          "activityIds": "com.sc.channel.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23687159",
          "exampleUrls": "https://e.gkd.li/5ff482ad-639e-42a0-86db-19df81689e2e",
          "key": 0
        }
      ]
    }
  ]
});
