// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "花瓣",
  "id": "com.huaban.android",
  "groups": [
    {
      "name": "更新提示-版本更新弹窗",
      "desc": "点击不再提示",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tv_update\"] + * > [text=\"不再提示\"]",
          "snapshotUrls": "https://i.gkd.li/i/13832253",
          "key": 0
        }
      ]
    }
  ]
});
