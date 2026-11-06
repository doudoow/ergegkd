// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "猫耳FM",
  "id": "cn.missevan",
  "groups": [
    {
      "name": "青少年提示",
      "desc": "点击：知道了",
      "enable": false,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"cn.missevan:id/iKnowTextView\"][text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/import/12908433",
          "key": 0
        }
      ]
    }
  ]
});
