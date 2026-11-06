// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "kds宽带山",
  "id": "net.pchome.kds",
  "groups": [
    {
      "name": "分段广告-应用内卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13043221"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13049609"
        }
      ]
    },
    {
      "name": "未分类-应用内广告卡片",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13043221"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13049609"
        }
      ]
    },
    {
      "name": "局部广告-应用内广告卡片",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13043221"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13049609"
        }
      ]
    },
    {
      "name": "应用内广告卡片",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13043221"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13049609"
        }
      ]
    }
  ]
});
