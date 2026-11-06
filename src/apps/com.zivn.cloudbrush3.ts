// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "书法字典大全",
  "id": "com.zivn.cloudbrush3",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true] < FrameLayout  -2 FrameLayout [text=\"广告\"]",
          "key": 0,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/13425305"
        },
        {
          "matches": "@LinearLayout > [id=\"com.byted.pangle.m:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/13425306",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@View[clickable=true] < FrameLayout  -2 FrameLayout [text=\"广告\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/i/13425305"
        },
        {
          "matches": "@LinearLayout > [id=\"com.byted.pangle.m:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "点击【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/i/13425306",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@View[clickable=true] < FrameLayout  -2 FrameLayout [text=\"广告\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13425305"
        },
        {
          "matches": "@LinearLayout > [id=\"com.byted.pangle.m:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "点击【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/13425306",
          "key": 1
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@View[clickable=true] < FrameLayout  -2 FrameLayout [text=\"广告\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13425305"
        },
        {
          "matches": "@LinearLayout > [id=\"com.byted.pangle.m:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "点击【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/13425306",
          "key": 1
        }
      ]
    }
  ]
});
