// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "春木漫画",
  "id": "com.galaxy.qbyd",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13691104",
            "https://i.gkd.li/i/13691103"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity"
          ],
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13691104",
            "https://i.gkd.li/import/13691103"
          ]
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13691104",
            "https://i.gkd.li/i/13691103"
          ]
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13691104",
            "https://i.gkd.li/import/13691103"
          ]
        }
      ]
    }
  ]
});
