// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QQ极速版",
  "id": "com.tencent.qqlite",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.tencent.qqlite:id/close_top_bar\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14428054"
          ],
          "key": 0
        }
      ]
    }
  ]
});
