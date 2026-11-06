// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "山东人在山西",
  "id": "com.leiting.lt65207",
  "groups": [
    {
      "name": "全屏广告-软件推荐",
      "desc": "点击右上角X",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tab_main_bg\"] > FrameLayout[childCount=6] > ImageView[index=1]",
          "key": 0
        }
      ]
    }
  ]
});
