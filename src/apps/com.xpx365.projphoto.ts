// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "工程相机",
  "id": "com.xpx365.projphoto",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13827755"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/16030619",
            "https://i.gkd.li/i/16030620",
            "https://i.gkd.li/i/16030622"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - [text=\"|\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16030413"
        },
        {
          "matches": "@View <2 FrameLayout <2 FrameLayout < [vid=\"splash_container\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13827755"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/16030619",
            "https://i.gkd.li/i/16030620",
            "https://i.gkd.li/i/16030622"
          ]
        },
        {
          "matches": "[vid=\"ms_skipView\"][visibleToUser=true][width<165]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/32683549"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - [text=\"|\"]",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/16030413"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/13827755"
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/13827755"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/16030619",
            "https://i.gkd.li/i/16030620",
            "https://i.gkd.li/i/16030622"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] - FrameLayout[childCount=1] > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13762195"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": "com.xpx365.projphoto.FirstActivity",
          "key": 1,
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13762196"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] @ViewGroup[clickable=true] > TextView[text=\"跳过\"]",
          "activityIds": "com.xpx365.projphoto.AdKS2AutoCloseActivity",
          "key": 2,
          "name": "快手广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13695668"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": ".FirstActivity",
          "key": 3,
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13762196"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] @ViewGroup[clickable=true] > TextView[text=\"跳过\"]",
          "activityIds": ".AdKS2AutoCloseActivity",
          "key": 4,
          "name": "快手广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13695668"
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > LinearLayout[clickable=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "字节广告SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/13695604",
            "https://i.gkd.li/i/13762212",
            "https://i.gkd.li/i/13762195"
          ],
          "key": 0
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[index=3]",
          "activityIds": "com.xpx365.projphoto.FirstActivity",
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13762196",
          "key": 1
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] @ViewGroup[clickable=true] > TextView[text=\"跳过\"]",
          "activityIds": "com.xpx365.projphoto.AdKS2AutoCloseActivity",
          "name": "快手广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13695668",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > LinearLayout[clickable=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "字节广告SDK",
          "snapshotUrls": [
            "https://i.gkd.li/import/13695604",
            "https://i.gkd.li/import/13762212",
            "https://i.gkd.li/import/13762195"
          ],
          "key": 0
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[index=3]",
          "activityIds": "com.xpx365.projphoto.FirstActivity",
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13762196",
          "key": 1
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] @ViewGroup[clickable=true] > TextView[text=\"跳过\"]",
          "activityIds": "com.xpx365.projphoto.AdKS2AutoCloseActivity",
          "name": "快手广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13695668",
          "key": 2
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > LinearLayout[clickable=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "字节广告SDK",
          "snapshotUrls": [
            "https://i.gkd.li/import/13695604",
            "https://i.gkd.li/import/13762212",
            "https://i.gkd.li/import/13762195"
          ],
          "key": 0
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[index=3]",
          "activityIds": "com.xpx365.projphoto.FirstActivity",
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13762196",
          "key": 1
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] @ViewGroup[clickable=true] > TextView[text=\"跳过\"]",
          "activityIds": "com.xpx365.projphoto.AdKS2AutoCloseActivity",
          "name": "快手广告SDK",
          "snapshotUrls": "https://i.gkd.li/import/13695668",
          "key": 2
        }
      ]
    }
  ]
});
