// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "和平营地",
  "id": "com.tencent.gamehelper.pg",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "①选中[不再提示] ②点击[x]掉",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@CheckBox[checked=false] + [text=\"不再提示\"]",
          "key": 0,
          "name": "①选中[不再提示]",
          "snapshotUrls": "https://i.gkd.li/i/26953259",
          "exampleUrls": "https://e.gkd.li/f5d3e4e4-2cb8-4c01-bf14-604788ae8ab3"
        },
        {
          "matches": "[vid=\"closebtn\"][clickable=true]",
          "key": 1,
          "name": "②点击[x]掉",
          "snapshotUrls": "https://i.gkd.li/i/26953259"
        }
      ]
    }
  ]
});
