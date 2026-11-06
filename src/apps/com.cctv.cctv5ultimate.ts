// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "央视体育",
  "id": "com.cctv.cctv5ultimate",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "[id=\"com.cctv.cctv5ultimate:id/iv_close\"]"
          ],
          "activityIds": "com.cctv.cctv5ultimate.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13405159",
          "key": 0
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "[vid=\"iv_close\"]"
          ],
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13405159",
          "key": 1
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "[id=\"com.cctv.cctv5ultimate:id/iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13405159",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-视频暂停时的广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0] + LinearLayout > [text=\"广告\"]",
          "activityIds": "com.cctv.cctv5ultimate.videodetail.activity.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16454650",
          "exampleUrls": "https://e.gkd.li/26bf9fcc-9dda-4465-a4d5-3fd56a3addde",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0] + LinearLayout > [text=\"广告\"]",
          "activityIds": ".videodetail.activity.VideoDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16454650",
          "exampleUrls": "https://e.gkd.li/26bf9fcc-9dda-4465-a4d5-3fd56a3addde",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "[id=\"com.cctv.cctv5ultimate:id/iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13405159",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "[id=\"com.cctv.cctv5ultimate:id/iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13405159",
          "key": 0
        }
      ]
    }
  ]
});
