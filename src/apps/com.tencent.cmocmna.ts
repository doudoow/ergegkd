// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "腾讯手游加速器",
  "id": "com.tencent.cmocmna",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true][childCount=0] + ImageView[childCount=0]",
          "activityIds": "com.tencent.mocmna.activity.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12847323",
            "https://i.gkd.li/i/12847336",
            "https://i.gkd.li/i/13063271"
          ],
          "key": 0
        },
        {
          "matches": "ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true] + ImageView",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-信息流内嵌广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0][index=parent.childCount.minus(1)] -5 [text=\"下载\"]",
          "activityIds": "com.tencent.mocmna.activity.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12847340",
            "https://i.gkd.li/i/12847364"
          ],
          "key": 0
        },
        {
          "matches": "ImageView - ViewGroup > ImageView + ImageView + ImageView",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-信息流内嵌广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView - ViewGroup > ImageView + ImageView + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "悬浮广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true] + ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流内嵌广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView - ViewGroup > ImageView + ImageView + ImageView",
          "key": 0
        }
      ]
    }
  ]
});
