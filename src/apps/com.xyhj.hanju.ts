// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "韩剧TV",
  "id": "com.xyhj.hanju",
  "groups": [
    {
      "name": "局部广告-播放页下方广告",
      "desc": "点击x",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"unified_ad_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
