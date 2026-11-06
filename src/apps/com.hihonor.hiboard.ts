// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "负一屏",
  "id": "com.hihonor.hiboard",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ll_ad_flag_layout\"] > [vid=\"iv_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/19670830",
          "exampleUrls": "https://e.gkd.li/3ca8edb5-ba16-406c-8319-7bc5389f6e31"
        },
        {
          "matches": "[text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/19670664",
          "exampleUrls": "https://e.gkd.li/eaea2f1e-741a-4171-9cc1-8a2c86848d93",
          "key": 1
        }
      ]
    }
  ]
});
