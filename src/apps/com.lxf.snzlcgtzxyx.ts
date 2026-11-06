// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "橘汁",
  "id": "com.lxf.snzlcgtzxyx",
  "groups": [
    {
      "name": "全屏广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true][desc=\"top_close_button\"] < * < [childCount=2] <n [childCount=2] < ViewGroup +n [childCount=2] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/28220375",
          "exampleUrls": "https://e.gkd.li/3072484b-b841-4b04-b07c-9c125b153d4e"
        },
        {
          "matches": "@[getChild(0).name$=\"ImageView\"] <2 [childCount=2] <2 [childCount=2] <2 [childCount=2] - FrameLayout > [text*=\"查看详情\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/28640601"
        },
        {
          "matches": "@[clickable=true][desc*=\"close\"] < * < [visibleToUser=true] +n ViewGroup >3 [text=\"广告\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/29998947"
        },
        {
          "matches": "ImageView < @[width<88 && height<88] - [visibleToUser=true] >3 [text*=\"上滑\" || text*=\"点击\" || text*=\"扭动\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/29999216"
        }
      ]
    },
    {
      "name": "分段广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@Image[width<66 && height<63] < [childCount=1] - [childCount=4] <<2 * <2 WebView <<8 [vid=\"ad_feed_content\"]",
          "key": 0,
          "name": "①x掉",
          "snapshotUrls": "https://i.gkd.li/i/28220975",
          "exampleUrls": "https://e.gkd.li/f0b45bb2-6d8f-4368-9ba8-d5cd8ec127fa"
        },
        {
          "matches": "@[clickable=true] > [text=\"无法关闭\"]",
          "preKeys": 0,
          "name": "②点击\"无法关闭\"",
          "snapshotUrls": "https://i.gkd.li/i/28221149",
          "exampleUrls": "https://e.gkd.li/da65d359-eba0-4d76-b0fc-c01ec7063fa0",
          "key": 1
        }
      ]
    }
  ]
});
