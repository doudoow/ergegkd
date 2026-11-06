// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "一个",
  "id": "com.hihanhan.one.rt45",
  "groups": [
    {
      "name": "全屏广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ivClose\"]",
          "key": 0
        }
      ]
    }
  ]
});
