// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小步点",
  "id": "run.xbud.android",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"run.xbud.android:id/ksad_tk_view\"] >n @ViewGroup[clickable=true] > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12777133",
            "https://i.gkd.li/i/12777134"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13296371"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "京东广告",
          "snapshotUrls": "https://i.gkd.li/i/13296398"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13414538"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 4,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13414544"
        },
        {
          "matches": "[vid=\"ksad_tk_view\"] >n @ViewGroup[clickable=true] > ImageView",
          "activityIds": ".mvp.ui.other.MainActivity",
          "key": 5,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12777133",
            "https://i.gkd.li/i/12777134"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": ".mvp.ui.other.MainActivity",
          "fastQuery": true,
          "key": 6,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13296371"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "activityIds": ".mvp.ui.other.MainActivity",
          "fastQuery": true,
          "key": 7,
          "name": "京东广告",
          "snapshotUrls": "https://i.gkd.li/i/13296398"
        },
        {
          "matches": "ImageView - LinearLayout < FrameLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 8,
          "name": "腾讯广告1",
          "snapshotUrls": "https://i.gkd.li/import/13296371"
        },
        {
          "matches": "ImageView -n FrameLayout > FrameLayout > FrameLayout > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 9,
          "name": "腾讯广告2",
          "snapshotUrls": "https://i.gkd.li/import/13296398"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 10,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13414544"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"run.xbud.android:id/ksad_tk_view\"] >n @ViewGroup[clickable=true] > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12777133",
            "https://i.gkd.li/i/12777134"
          ]
        },
        {
          "matches": "ImageView - LinearLayout < FrameLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 1,
          "name": "腾讯广告1",
          "snapshotUrls": "https://i.gkd.li/i/13296371"
        },
        {
          "matches": "ImageView -n FrameLayout > FrameLayout > FrameLayout > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 2,
          "name": "腾讯广告2",
          "snapshotUrls": "https://i.gkd.li/i/13296398"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13414538"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 4,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13414544"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"run.xbud.android:id/ksad_tk_view\"] >n @ViewGroup[clickable=true] > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12777133",
            "https://i.gkd.li/import/12777134"
          ]
        },
        {
          "matches": "ImageView - LinearLayout < FrameLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 1,
          "name": "腾讯广告1",
          "snapshotUrls": "https://i.gkd.li/import/13296371"
        },
        {
          "matches": "ImageView -n FrameLayout > FrameLayout > FrameLayout > ImageView",
          "activityIds": "run.xbud.android.mvp.ui.other.MainActivity",
          "key": 2,
          "name": "腾讯广告2",
          "snapshotUrls": "https://i.gkd.li/import/13296398"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13414538"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 4,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13414544"
        }
      ]
    }
  ]
});
