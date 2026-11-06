// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "古文岛",
  "id": "com.guwendao.gwd",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12781344"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.guwendao.gwd.MainActivity",
            "com.android.systemui.media.MediaProjectionPermissionActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12776607",
            "https://i.gkd.li/i/12777151",
            "https://i.gkd.li/i/12924728"
          ]
        },
        {
          "matches": "@Image[id=null] < View + View + TextView[text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12781327"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".MainActivity",
            "com.android.systemui.media.MediaProjectionPermissionActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12776607",
            "https://i.gkd.li/i/12777151",
            "https://i.gkd.li/i/12924728"
          ]
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"应用升级提醒\"] +n LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-第三方 SDK 广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView[id=null]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12776607"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[id=null]",
          "activityIds": "com.android.systemui.media.MediaProjectionPermissionActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12777151"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12781344"
        },
        {
          "matches": "ImageView < FrameLayout + FrameLayout > FrameLayout > ImageView[id=null]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12924728"
        },
        {
          "matches": "@Image[id=null] < View + View + TextView[text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12781327"
        }
      ]
    },
    {
      "name": "全屏广告-更新弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"应用升级提醒\"] +n LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-第三方 SDK 广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView[id=null]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12776607"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[id=null]",
          "activityIds": "com.android.systemui.media.MediaProjectionPermissionActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12777151"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12781344"
        },
        {
          "matches": "ImageView < FrameLayout + FrameLayout > FrameLayout > ImageView[id=null]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12924728"
        },
        {
          "matches": "@Image[id=null] < View + View + TextView[text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/12781327"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"应用升级提醒\"] +n LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "第三方 SDK 广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView[id=null]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12776607"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[id=null]",
          "activityIds": "com.android.systemui.media.MediaProjectionPermissionActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12777151"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12781344"
        },
        {
          "matches": "ImageView < FrameLayout + FrameLayout > FrameLayout > ImageView[id=null]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12924728"
        },
        {
          "matches": "@Image[id=null] < View + View + TextView[text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/12781327"
        }
      ]
    }
  ]
});
