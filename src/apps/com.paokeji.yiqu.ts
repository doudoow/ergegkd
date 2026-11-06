// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "喵趣漫画",
  "id": "com.paokeji.yiqu",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击\"暂不\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.paokeji.yiqu:id/btnCancel\"]",
          "activityIds": "com.aster.comic.app.view.bookdetails.BookdetailsActivity",
          "snapshotUrls": "https://i.gkd.li/i/14140265",
          "exampleUrls": "https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522",
          "key": 0
        },
        {
          "matches": "[id=\"com.paokeji.yiqu:id/btnCancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14140265",
          "exampleUrls": "https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522",
          "key": 1
        },
        {
          "matches": "[vid=\"btnCancel\"]",
          "activityIds": "com.aster.comic.app.view.bookdetails.BookdetailsActivity",
          "snapshotUrls": "https://i.gkd.li/i/14140265",
          "exampleUrls": "https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"反馈\"] + @View[childCount=2] > [text*=\"跳过\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13829749",
            "https://i.gkd.li/i/14362119"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -(2,4) @View[childCount=1][visibleToUser=true] > Image[childCount=0][text=\"\"]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.aster.comic.app.view.MainActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13809578",
            "https://i.gkd.li/i/14717730",
            "https://i.gkd.li/i/16062358"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] - * > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14847142"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": "com.aster.comic.app.view.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15374245"
        },
        {
          "matches": "[text=\"反馈\"] + View[childCount=1] > Image[childCount=0][text=\"\"]",
          "activityIds": [
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/15711106",
            "https://i.gkd.li/i/17301509"
          ]
        },
        {
          "matches": "@[id=\"com.kwad.dy.sdk:id/ksad_end_close_btn\"] - [text=\"免费获取\"]",
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16369203"
        },
        {
          "matches": "@ViewGroup[clickable=true] +3 ViewGroup > [text*=\"广告\"]",
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/16401930"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T"
          ],
          "fastQuery": true,
          "key": 7,
          "name": "腾讯SDK-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830354",
            "https://i.gkd.li/i/13842966"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": "com.aster.comic.app.view.MainActivity",
          "fastQuery": true,
          "key": 8,
          "name": "腾讯SDK-2",
          "snapshotUrls": "https://i.gkd.li/i/15173845"
        },
        {
          "matches": "FrameLayout[desc*=\"close\"] > View",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 9,
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/i/13839519"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/13810767"
        },
        {
          "matches": "Image[childCount=0][text=\"\"] < @View + View > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 11,
          "snapshotUrls": "https://i.gkd.li/i/13810150"
        },
        {
          "matches": [
            "[text*=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "fastQuery": true,
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/13809629"
        }
      ]
    },
    {
      "name": "功能类-漫画页链接断开提示",
      "desc": "点击[点我重试]",
      "enable": false,
      "actionMaximum": 3,
      "key": 2,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"点我重试\"]",
          "activityIds": "com.aster.comic.app.view.reader.ReaderActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14572053",
          "exampleUrls": "https://m.gkd.li/57941037/d71c73bb-289f-4205-a253-fcd8bd32f196",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"跳过\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14753912"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14031922",
            "https://i.gkd.li/i/14322264"
          ]
        },
        {
          "anyMatches": [
            "@View <(2,3) FrameLayout <2 FrameLayout < FrameLayout < [id=\"com.paokeji.yiqu:id/lyContainer\"]",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/14031922",
            "https://i.gkd.li/import/14427345",
            "https://i.gkd.li/import/15197461"
          ],
          "key": 2
        },
        {
          "matches": "@View[clickable=true] <<n [vid=\"lyContainer\"]",
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView",
          "actionDelay": 350,
          "key": 0,
          "name": "腾讯SDK-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830354",
            "https://i.gkd.li/i/13842716",
            "https://i.gkd.li/i/13842966"
          ]
        },
        {
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView",
          "actionDelay": 350,
          "key": 1,
          "name": "腾讯SDK-2",
          "snapshotUrls": "https://i.gkd.li/i/15173845"
        },
        {
          "matches": "FrameLayout[desc*=\"close\"] > View",
          "key": 2,
          "name": "字节SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/13839432",
            "https://i.gkd.li/i/13839519"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "actionDelay": 350,
          "key": 3,
          "name": "穿山甲SDK-1",
          "snapshotUrls": "https://i.gkd.li/i/13810767"
        },
        {
          "matches": "[text=\"反馈\"] <<n View + View[childCount=1]",
          "actionDelay": 350,
          "key": 4,
          "name": "穿山甲SDK-2",
          "snapshotUrls": "https://i.gkd.li/i/13830798"
        },
        {
          "matches": "[text*=\"跳过\" && text.length<=6] <2 @View -(3-n) View < View",
          "actionDelay": 350,
          "key": 5,
          "name": "穿山甲SDK-3",
          "snapshotUrls": "https://i.gkd.li/i/13829749"
        },
        {
          "matches": "[text=\"反馈\"] -n @View[index<=1] > Image[text.length=0]",
          "actionDelay": 350,
          "key": 6,
          "name": "穿山甲SDK-4",
          "snapshotUrls": [
            "https://i.gkd.li/i/13809737",
            "https://i.gkd.li/i/13809578"
          ]
        },
        {
          "matches": "[text=\"反馈\"] <<n View - View[childCount=1]",
          "actionDelay": 350,
          "key": 7,
          "name": "穿山甲SDK-5",
          "snapshotUrls": "https://i.gkd.li/i/13810150"
        },
        {
          "matches": "[text*=\"跳过\"] <n *[clickable=true]",
          "key": 8,
          "name": "快手SDK-1",
          "snapshotUrls": "https://i.gkd.li/i/13809629"
        },
        {
          "matches": "[vid=\"ksad_auto_close_btn\"]",
          "key": 9,
          "name": "快手SDK-2",
          "snapshotUrls": "https://i.gkd.li/i/13837855"
        },
        {
          "matches": "[vid=\"ksad_video_container\"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView",
          "key": 10,
          "name": "快手SDK-3",
          "snapshotUrls": "https://i.gkd.li/i/13829312"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"反馈\"] + @View[childCount=2] > [text=\"跳过\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14362119",
          "exampleUrls": "https://m.gkd.li/57941037/6f12fd12-b956-474a-834c-8ebba00efbff"
        },
        {
          "matches": "Image[text=\"\"] < @View +4 [text=\"反馈\"] + * >2 [text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14717730",
          "exampleUrls": "https://m.gkd.li/57941037/9bf34f1f-f1a1-4fb8-a84a-96cb8e1c2669"
        }
      ]
    },
    {
      "name": "局部广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >(-n+4) FrameLayout > FrameLayout[childCount=1] > ImageView[index=0 && id!=null]",
          "actionDelay": 350,
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": [
            "https://i.gkd.li/import/13830354",
            "https://i.gkd.li/import/13842716",
            "https://i.gkd.li/import/13842966"
          ]
        },
        {
          "matches": "FrameLayout[desc*=\"close\"] > View",
          "key": 1,
          "name": "字节SDK",
          "snapshotUrls": [
            "https://i.gkd.li/import/13839432",
            "https://i.gkd.li/import/13839519"
          ]
        },
        {
          "matches": [
            "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
            "[text=\"反馈\"] <<n View + View[childCount=1]",
            "[text*=\"跳过\" && text.length<=6] <2 @View -(3-n) View < View",
            "[text=\"反馈\"] -n @View[index<=1] > Image[text.length=0]",
            "[text=\"反馈\"] <<n View - View[childCount=1]"
          ],
          "actionDelay": 350,
          "key": 2,
          "name": "穿山甲SDK",
          "snapshotUrls": [
            "https://i.gkd.li/import/13830798",
            "https://i.gkd.li/import/13810767",
            "https://i.gkd.li/import/13829749",
            "https://i.gkd.li/import/13809737",
            "https://i.gkd.li/import/13809578",
            "https://i.gkd.li/import/13810150"
          ]
        },
        {
          "matches": [
            "[text*=\"跳过\"] <n *[clickable=true]",
            "[vid=\"ksad_auto_close_btn\"]",
            "[vid=\"ksad_video_container\"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView"
          ],
          "key": 3,
          "name": "快手SDK",
          "snapshotUrls": [
            "https://i.gkd.li/import/13809629",
            "https://i.gkd.li/import/13829312",
            "https://i.gkd.li/import/13837855"
          ]
        }
      ]
    }
  ]
});
