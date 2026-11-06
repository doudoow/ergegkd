// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "皮皮喵",
  "id": "com.gentle.ppcat",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@FrameLayout - LinearLayout >2 [text$=\"惊喜奖励\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12777048",
            "https://i.gkd.li/i/12858015"
          ]
        },
        {
          "matches": "[text=\"放弃奖励离开\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15008493"
        },
        {
          "matches": "@ImageView - WebView > [text=\"优量汇-插屏视频endcard\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12777051"
        },
        {
          "matches": "[desc=\"关闭喵\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13797494"
        },
        {
          "matches": "@FrameLayout - LinearLayout [text$=\"惊喜奖励\"]",
          "activityIds": [
            "com.qq.e.ads.PortraitADActivity",
            "com.qq.e.ads.LandscapeADActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/12777048",
            "https://i.gkd.li/import/12858015"
          ]
        },
        {
          "matches": "[text=\"放弃奖励离开\"]",
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/import/12777058"
        },
        {
          "matches": "@ImageView - WebView > [text=\"优量汇-插屏视频endcard\"]",
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/import/12777051"
        },
        {
          "matches": "[desc=\"关闭喵\"]",
          "activityIds": [
            "com.qq.e.ads.PortraitADActivity",
            "com.gentle.ppcat.MainActivity",
            "com.hihonor.android.launcher.drawer.DrawerLauncher"
          ],
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/import/12777059",
            "https://i.gkd.li/import/12777054",
            "https://i.gkd.li/import/13797494"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20950433",
          "exampleUrls": "https://e.gkd.li/68c0ad3a-0f25-43bb-a6d4-ab45d49e8db7"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true][width<100 && height<100] < FrameLayout[childCount=1] <2 FrameLayout[childCount=3] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20950403",
          "exampleUrls": "https://e.gkd.li/7002f432-f9cb-45c1-a120-5458b94782b3"
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true][width<80 && height<80] < View[childCount=1] < View[childCount=1] + View > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/20960114",
          "exampleUrls": "https://e.gkd.li/f3ad0b42-3c85-4742-9326-8a4b221fb433"
        }
      ]
    }
  ]
});
