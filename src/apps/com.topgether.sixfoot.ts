// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "六只脚",
  "id": "com.topgether.sixfoot",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "Pro.biz.home.ProMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17265831",
          "exampleUrls": "https://e.gkd.li/fc4a468d-407f-4a70-add8-26487f35933f"
        },
        {
          "matches": "[id=\"android:id/content\"] >4 FrameLayout[childCount=2] > FrameLayout[childCount=3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]",
          "activityIds": "Pro.biz.record.RecordMainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17265832",
          "exampleUrls": "https://e.gkd.li/01fd3dff-c1e9-42b3-bdb1-05124a67504b"
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null] < FrameLayout[childCount=1] - LinearLayout > [text=\"下载应用\" || text=\"立即申请\"]",
          "activityIds": "Pro.biz.home.ProMainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17268235",
            "https://i.gkd.li/i/17303774"
          ],
          "exampleUrls": "https://e.gkd.li/32475c6e-888a-4048-b7ed-5b3bc3c1c580",
          "key": 0
        },
        {
          "matches": "@ImageView[childCount=0][text=null] < FrameLayout[childCount=1] - LinearLayout > [text=\"下载应用\"]",
          "activityIds": "Pro.biz.home.ProMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17268235",
          "exampleUrls": "https://e.gkd.li/32475c6e-888a-4048-b7ed-5b3bc3c1c580",
          "key": 1
        }
      ]
    }
  ]
});
