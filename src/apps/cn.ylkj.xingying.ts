// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "星影视频",
  "id": "cn.ylkj.xingying",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": "cn.ylkj.xingying.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14783306",
          "exampleUrls": "https://m.gkd.li/57941037/66b19fbd-b82d-4f10-b82d-0fc74c146b1c",
          "key": 0
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14783306",
          "exampleUrls": "https://m.gkd.li/57941037/66b19fbd-b82d-4f10-b82d-0fc74c146b1c",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >4 FrameLayout[childCount=1] > ImageView",
          "activityIds": "cn.ylkj.xingying.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14783306",
          "exampleUrls": "https://m.gkd.li/57941037/66b19fbd-b82d-4f10-b82d-0fc74c146b1c",
          "key": 0
        }
      ]
    }
  ]
});
