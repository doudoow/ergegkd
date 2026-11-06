// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "搜狗浏览器极速版",
  "id": "sogou.mobile.explorer",
  "groups": [
    {
      "name": "分段广告-小说页面广告",
      "key": 0,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true] >2 [desc=\"广告\"][visibleToUser=true]",
          "excludeMatches": "[desc=\"关闭此广告\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/21556785",
          "exampleUrls": "https://e.gkd.li/5c2eb8d5-f53a-4b8e-81e2-65728cf4e924"
        },
        {
          "matches": "@ViewGroup[clickable=true] > [desc=\"关闭此广告\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/21556776",
          "exampleUrls": "https://e.gkd.li/63c0e510-c2eb-4cca-b3f4-81bfe709972c",
          "key": 1
        }
      ]
    }
  ]
});
