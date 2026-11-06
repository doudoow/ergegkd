// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天气",
  "id": "com.coloros.weather2",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"feed_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14258190",
          "exampleUrls": "https://m.gkd.li/57941037/fc08493c-dec2-4534-9f61-3627aa337b30"
        },
        {
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16631878",
            "https://i.gkd.li/i/20429502"
          ],
          "exampleUrls": "https://e.gkd.li/9137d262-7fda-4b57-a0bc-b9fa60634a22",
          "key": 1
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/16631878",
          "exampleUrls": "https://e.gkd.li/9137d262-7fda-4b57-a0bc-b9fa60634a22",
          "key": 2
        }
      ]
    }
  ]
});
