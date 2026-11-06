// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "安心加速器",
  "id": "com.at.a552360580763717",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=29 || childCount=30] > View[childCount=2] > ImageView[clickable=true][visibleToUser=true][index=0]",
          "activityIds": "com.ft.movie.project_speed.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/16784443",
            "https://i.gkd.li/i/16797995"
          ],
          "exampleUrls": "https://e.gkd.li/089c780e-e37a-4c25-a375-ba7f67b5ae9b",
          "key": 0
        }
      ]
    }
  ]
});
