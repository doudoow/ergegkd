// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "斗鱼",
  "id": "air.tv.douyu.android",
  "groups": [
    {
      "name": "局部广告-直播间广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "ViewGroup[childCount=8] > ViewGroup[index=5] >4 RelativeLayout[visibleToUser=true] > ImageView[clickable=true][index=1]",
          "key": 0,
          "name": "右下方悬浮广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13948990",
          "excludeSnapshotUrls": "https://i.gkd.li/i/14310474"
        },
        {
          "matches": "[id=\"android:id/content\"] > RelativeLayout >2 FrameLayout > ViewGroup[childCount=4] > ImageView[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)]",
          "key": 1,
          "name": "视频下方横幅广告-1",
          "snapshotUrls": "https://i.gkd.li/i/14667860"
        },
        {
          "matches": "@ImageView[visibleToUser=true][childCount=0] -(1,2) * >3 [text=\"推荐\"]",
          "fastQuery": true,
          "key": 2,
          "name": "右下方悬浮广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/14668232",
            "https://i.gkd.li/i/17978451"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] +(1,2) ViewGroup >2 [text=\"广告\"]",
          "fastQuery": true,
          "key": 3,
          "name": "右下方悬浮广告-3",
          "snapshotUrls": [
            "https://i.gkd.li/i/16939767",
            "https://i.gkd.li/i/24661966"
          ],
          "exampleUrls": "https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0][index=1] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid=\"big_live_actions_layout\"]",
          "fastQuery": true,
          "key": 4,
          "name": "右下方悬浮广告-4",
          "snapshotUrls": "https://i.gkd.li/i/16939767",
          "exampleUrls": "https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] - FrameLayout >2 [text=\"去看看\" || text^=\"立即\"]",
          "fastQuery": true,
          "key": 5,
          "name": "视频下方横幅广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/14668232",
            "https://i.gkd.li/i/18032754",
            "https://i.gkd.li/i/24661966"
          ],
          "exampleUrls": "https://e.gkd.li/942ee7a5-43e1-4709-b967-7af1a6900e4c"
        },
        {
          "matches": "ImageView < ViewGroup + @ViewGroup[childCount=1][clickable=true] > ImageView",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/12892825",
            "https://i.gkd.li/i/13037239",
            "https://i.gkd.li/i/14692807"
          ]
        },
        {
          "matches": "ViewPager[childCount=3] + @View + ImageView + View",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/12892825"
        },
        {
          "matches": "RelativeLayout[childCount=3] > ViewPager + @View + ImageView",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/13056107"
        },
        {
          "matches": "ViewGroup[childCount=4] > View + ImageView + FrameLayout + ImageView",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/13056107"
        },
        {
          "matches": "FrameLayout[childCount=2] > @ImageView - FrameLayout > RelativeLayout > WebView",
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/13056107"
        },
        {
          "matches": "[id=\"android:id/content\"] > RelativeLayout >4 FrameLayout + ImageView",
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/14668232",
            "https://i.gkd.li/i/14668248",
            "https://i.gkd.li/i/14667860"
          ]
        },
        {
          "matches": "@ImageView[visibleToUser=true] -2 * >3 [text=\"推荐\"]",
          "fastQuery": true,
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/14668232"
        }
      ]
    },
    {
      "name": "新版本弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"立即升级\"] - [text=\"忽略\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "直播间广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView < ViewGroup + @ViewGroup[childCount=1] > ImageView",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12892825",
            "https://i.gkd.li/import/13037239"
          ]
        },
        {
          "matches": "ViewPager + @View + ImageView + View",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12892825"
        },
        {
          "matches": "RelativeLayout[childCount=3] > ViewPager + @View + ImageView",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13056107"
        },
        {
          "matches": "ViewGroup[childCount=4] > View + ImageView + FrameLayout + ImageView",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13056107"
        },
        {
          "matches": "FrameLayout[childCount=2] > @ImageView - FrameLayout > RelativeLayout > WebView",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/13056107"
        }
      ]
    }
  ]
});
