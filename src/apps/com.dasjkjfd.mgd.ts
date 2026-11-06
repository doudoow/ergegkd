// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "橘汁",
  "id": "com.dasjkjfd.mgd",
  "groups": [
    {
      "name": "局部广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[width<66 && height<66][vid=null][desc=null][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout > ImageView + [text^=\"下载\" || text^=\"了解\" || text^=\"立即\" || text^=\"马上\" || text^=\"查看\"][text.length<8]",
          "key": 0,
          "name": "卡片Ad",
          "snapshotUrls": [
            "https://i.gkd.li/i/32193798",
            "https://i.gkd.li/i/32194586",
            "https://i.gkd.li/i/33744960"
          ],
          "exampleUrls": "https://e.gkd.li/e293b105-db09-4940-a4c2-7a3074ff67e0"
        }
      ]
    },
    {
      "name": "全屏广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[vid=null][text=null][width<88 && height<88] < FrameLayout[childCount=1] - FrameLayout >n  [text$=\"了解更多内容\" || text=\"立即打开\"]",
          "key": 0,
          "name": "向下找",
          "snapshotUrls": "https://i.gkd.li/i/32193904",
          "exampleUrls": "https://e.gkd.li/3d8c82b7-49bb-4105-85a9-32b50fa28d36"
        },
        {
          "matches": "@ImageView[vid=null][text=null][width<88 && height<88] < FrameLayout[childCount=1] + FrameLayout >n  [text$=\"了解更多内容\" || text=\"立即打开\"]",
          "key": 1,
          "name": "向上找",
          "snapshotUrls": "https://i.gkd.li/i/32194584",
          "exampleUrls": "https://e.gkd.li/cc89f931-daf3-41be-bae4-54e471c601ee"
        }
      ]
    },
    {
      "name": "全屏广告-插屏广告",
      "desc": "视频暂停时出现, 点击[跳过/关闭]",
      "key": 2,
      "rules": [
        {
          "matches": "@[clickable=true] > [text*=\"跳过\" || text=\"关闭\"][text.length<8]",
          "activityIds": [
            "com.windmill.sdk.widget.InterstitialView",
            "com.windmill.sdk.host.stub.StubActivityStandard_"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/32318689",
            "https://i.gkd.li/i/33745185",
            "https://i.gkd.li/i/33745188"
          ],
          "exampleUrls": "https://e.gkd.li/67e9c8a2-f9ed-477b-ae46-39f493035a20",
          "key": 0
        }
      ]
    }
  ]
});
