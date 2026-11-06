// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "手机电视高清直播",
  "id": "com.zbx.ct.tvzhibo",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@Image[text.length=0] < View -n [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/i/13739951"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.tvmain.mvp.view.activity.TvMainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/13766516"
        },
        {
          "matches": "@ImageView < FrameLayout <n FrameLayout + TextView",
          "activityIds": "com.tvmain.mvp.view.activity.TvMainActivity",
          "key": 2,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/import/13766516"
        }
      ]
    },
    {
      "name": "局部广告-浮窗广告",
      "desc": "会出现在更多页面、播放页面",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.zbx.ct.tvzhibo:id/iv_close\"]",
          "activityIds": [
            "com.tvmain.mvp.view.activity.TvMainActivity",
            "com.tvmain.mvp.view.activity.LivePlayerActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13740079",
            "https://i.gkd.li/i/13740126"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            "com.tvmain.mvp.view.activity.TvMainActivity",
            "com.tvmain.mvp.view.activity.LivePlayerActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13740079",
            "https://i.gkd.li/i/13740126"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-播放页面弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.tvmain.mvp.view.activity.VodPlayerActivity",
          "snapshotUrls": "https://i.gkd.li/i/13739932",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@Image[text.length=0] < View -n [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/i/13739951"
        },
        {
          "matches": "@ImageView < FrameLayout <n FrameLayout + TextView",
          "activityIds": "com.tvmain.mvp.view.activity.TvMainActivity",
          "key": 1,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/13766516"
        }
      ]
    },
    {
      "name": "未分类-浮窗广告",
      "desc": "会出现在更多页面、播放页面",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.zbx.ct.tvzhibo:id/iv_close\"]",
          "activityIds": [
            "com.tvmain.mvp.view.activity.TvMainActivity",
            "com.tvmain.mvp.view.activity.LivePlayerActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13740079",
            "https://i.gkd.li/i/13740126"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-播放页面-弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[text.length=null] < FrameLayout <n FrameLayout +n ImageView",
          "activityIds": "com.tvmain.mvp.view.activity.VodPlayerActivity",
          "snapshotUrls": "https://i.gkd.li/i/13739932",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-播放页面-弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[text.length=null] < FrameLayout <n FrameLayout +n ImageView",
          "activityIds": "com.tvmain.mvp.view.activity.VodPlayerActivity",
          "snapshotUrls": "https://i.gkd.li/import/13739932",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@Image[text.length=0] < View -n [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/import/13739951"
        },
        {
          "matches": "@ImageView < FrameLayout <n FrameLayout + TextView",
          "activityIds": "com.tvmain.mvp.view.activity.TvMainActivity",
          "key": 1,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/import/13766516"
        }
      ]
    },
    {
      "name": "浮窗广告",
      "desc": "会出现在更多页面、播放页面",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.zbx.ct.tvzhibo:id/iv_close\"]",
          "activityIds": [
            "com.tvmain.mvp.view.activity.TvMainActivity",
            "com.tvmain.mvp.view.activity.LivePlayerActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13740079",
            "https://i.gkd.li/import/13740126"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "播放页面-弹窗广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView[text.length=null] < FrameLayout <n FrameLayout +n ImageView",
          "activityIds": "com.tvmain.mvp.view.activity.VodPlayerActivity",
          "snapshotUrls": "https://i.gkd.li/import/13739932",
          "key": 0
        }
      ]
    }
  ]
});
