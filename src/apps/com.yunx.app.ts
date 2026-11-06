// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云析",
  "id": "com.yunx.app",
  "groups": [
    {
      "name": "权限提示-忽略电池优化",
      "desc": "点击[暂不]",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"暂不\"] < @View[clickable=true] <(3,4) View[getChild(0).text=\"保持后台下载\"] < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/32522962",
            "https://i.gkd.li/i/32700890"
          ],
          "exampleUrls": "https://e.gkd.li/6fc05152-c83a-488b-b74d-2a4fe247ee58",
          "key": 0
        }
      ]
    }
  ]
});
