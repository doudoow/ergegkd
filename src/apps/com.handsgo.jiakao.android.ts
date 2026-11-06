// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "驾考宝典",
  "id": "com.handsgo.jiakao.android",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.handsgo.jiakao.android:id/ivDelete\"][visibleToUser=true]",
          "activityIds": "com.handsgo.jiakao.android.main.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13475994"
        },
        {
          "matches": "[id=\"com.handsgo.jiakao.android:id/adsdk__ids_component_close\"][visibleToUser=true]",
          "activityIds": ".main.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13475994",
          "exampleUrls": "https://e.gkd.li/a3ff6d58-4902-4ff4-a1dd-dbdb4a9ae38a"
        },
        {
          "matches": "@[id=\"com.handsgo.jiakao.android:id/ivDelete\"] + [id=\"com.handsgo.jiakao.android:id/ivRemote\"]",
          "activityIds": "com.handsgo.jiakao.android.main.activity.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13475994"
        },
        {
          "matches": "[vid=\"ivDelete\"][visibleToUser=true]",
          "activityIds": ".main.activity.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13475994"
        },
        {
          "matches": "[vid=\"adsdk__ids_component_close\"][visibleToUser=true]",
          "activityIds": ".main.activity.MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13475994",
          "exampleUrls": "https://e.gkd.li/a3ff6d58-4902-4ff4-a1dd-dbdb4a9ae38a"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@View[clickable=true][childCount=0] < FrameLayout[desc^=\"webview-close\"] +4 FrameLayout >3 [text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13476039"
        },
        {
          "matches": [
            "[vid=\"adsdk__ids_cta_layout\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "activityIds": "com.handsgo.jiakao.android.main.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20745398"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".main.activity.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/20745379",
          "exampleUrls": "https://e.gkd.li/5370968e-fded-4be0-8fa4-b7997f8a861a"
        },
        {
          "matches": [
            "[desc^=\"logoad\"] > [text=\"广告\"]",
            "[desc^=\"webview-close\"] > View[clickable=true]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13476039"
        },
        {
          "matches": "[id=\"com.handsgo.jiakao.android:id/adsdk__ids_cta_layout\"] - * > [id=\"com.handsgo.jiakao.android:id/close\"]",
          "activityIds": "com.handsgo.jiakao.android.main.activity.MainActivity",
          "fastQuery": true,
          "key": 4,
          "name": "课程广告",
          "snapshotUrls": "https://i.gkd.li/i/13523033"
        },
        {
          "matches": [
            "[vid=\"adsdk__ids_cta_layout\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "activityIds": ".main.activity.MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/20745398"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"开启专属学习资料推送\"] + [vid=\"closeIv\"]",
          "activityIds": "com.handsgo.jiakao.android.main.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/17001986",
          "exampleUrls": "https://e.gkd.li/9a9aad9b-052b-4e00-9926-d4a213f96372",
          "key": 0
        },
        {
          "matches": "[text=\"开启专属学习资料推送\"] + [id=\"com.handsgo.jiakao.android:id/closeIv\"]",
          "key": 1
        },
        {
          "matches": "[text=\"开启专属学习资料推送\"] + [vid=\"closeIv\"]",
          "activityIds": ".main.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/17001986",
          "exampleUrls": "https://e.gkd.li/9a9aad9b-052b-4e00-9926-d4a213f96372",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14812686",
          "exampleUrls": "https://m.gkd.li/101449500/cac1598d-0e1c-44d7-8a5c-5fb084d8e437"
        },
        {
          "matches": "[id=`com.handsgo.jiakao.android:id/closeLayout`]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-请求开启通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"开启专属学习资料推送\"] + [id=\"com.handsgo.jiakao.android:id/closeIv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "悬浮广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"com.handsgo.jiakao.android:id/ivDelete\"] + [id=\"com.handsgo.jiakao.android:id/ivRemote\"]",
          "activityIds": "com.handsgo.jiakao.android.main.activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13475994"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[desc^=\"logoad\"] > [text=\"广告\"]",
            "[desc^=\"webview-close\"] > View[clickable=true]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13476039"
        },
        {
          "matches": "[id=\"com.handsgo.jiakao.android:id/adsdk__ids_cta_layout\"] - * > [id=\"com.handsgo.jiakao.android:id/close\"]",
          "activityIds": "com.handsgo.jiakao.android.main.activity.MainActivity",
          "quickFind": true,
          "key": 1,
          "name": "课程广告",
          "snapshotUrls": "https://i.gkd.li/import/13523033"
        }
      ]
    },
    {
      "name": "请求开启通知权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"开启专属学习资料推送\"] + [id=\"com.handsgo.jiakao.android:id/closeIv\"]",
          "key": 0
        }
      ]
    }
  ]
});
