// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "cTrader",
  "id": "com.spotware.ct",
  "groups": [
    {
      "name": "功能类-询问是否是美国居民弹窗",
      "desc": "点击[我不是美国居民]-点击[确认]",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"我不是美国居民\"]",
          "key": 0,
          "name": "点击[我不是美国居民]",
          "snapshotUrls": "https://i.gkd.li/i/14495502",
          "exampleUrls": "https://m.gkd.li/57941037/959b6c00-0d43-46d4-83eb-056326f036a5"
        },
        {
          "matches": "[text=\"确认\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[确认]",
          "snapshotUrls": "https://i.gkd.li/i/14495496",
          "exampleUrls": "https://m.gkd.li/57941037/8adae91e-019d-44eb-8820-b3d560a2b66d"
        }
      ]
    },
    {
      "name": "功能类-我不是美国公民弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"我不是美国居民\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14537505"
        },
        {
          "matches": "[text=\"确认\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14495496",
          "exampleUrls": "https://m.gkd.li/101449500/085abfc1-cb72-465b-93b6-63e1c89af88f"
        }
      ]
    }
  ]
});
