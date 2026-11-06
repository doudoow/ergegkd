// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "次元城动漫",
  "id": "com.jarworld.bleach.bvn.sjm.cyc",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13626949"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13626950"
        },
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup[childCount=2] > @ViewGroup[clickable=true][childCount=1][visibleToUser=true] > ImageView[childCount=0] <<n [id=\"com.jarworld.bleach.bvn.sjm.cyc:id/ksad_js_reward_card\"]",
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13635410"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13626949"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13626950"
        },
        {
          "matches": "ViewGroup[childCount=2] > ViewGroup[childCount=2] > @ViewGroup[clickable=true][childCount=1][visibleToUser=true] > ImageView[childCount=0] <<n [vid=\"ksad_js_reward_card\"]",
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13635410"
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13626949"
        },
        {
          "matches": "[id=\"com.jarworld.bleach.bvn.sjm.cyc:id/ksad_container\"] ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView",
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13626950"
        },
        {
          "matches": [
            "WebView > View > View > [text=\"广告\"]",
            "ViewGroup[childCount=2] > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13635410"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13626949"
        },
        {
          "matches": "[id=\"com.jarworld.bleach.bvn.sjm.cyc:id/ksad_container\"] ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView",
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13626950"
        },
        {
          "matches": [
            "WebView > View > View > [text=\"广告\"]",
            "ViewGroup[childCount=2] > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13635410"
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13626949"
        },
        {
          "matches": "[id=\"com.jarworld.bleach.bvn.sjm.cyc:id/ksad_container\"] ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView",
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13626950"
        },
        {
          "matches": [
            "WebView > View > View > [text=\"广告\"]",
            "ViewGroup[childCount=2] > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13635410"
        }
      ]
    }
  ]
});
