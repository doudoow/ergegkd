// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "班级小管家",
  "id": "com.banjixiaoguanjia.app",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12904612"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12906196"
        }
      ]
    },
    {
      "name": "未分类-应用内广告卡片",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12904612"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12906196"
        }
      ]
    },
    {
      "name": "局部广告-应用内广告卡片",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12904612"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12906196"
        }
      ]
    },
    {
      "name": "应用内广告卡片",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12904612"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12906196"
        }
      ]
    }
  ]
});
