// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "知乎极速版",
  "id": "com.zhihu.android.lite",
  "groups": [
    {
      "name": "局部广告-底部悬浮卡片",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1][text=\"\"] > Image[childCount=0][text=\"\"] <<n [vid=\"view_content\"]",
          "activityIds": "com.zhihu.android.mixshortcontainer.MixShortContainerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16413243",
          "exampleUrls": "https://e.gkd.li/23c80cb4-4bad-451c-b8e9-bfdbdfa7c6c5",
          "key": 0
        }
      ]
    }
  ]
});
