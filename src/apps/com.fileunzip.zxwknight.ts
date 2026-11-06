// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "解压专家",
  "id": "com.fileunzip.zxwknight",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "Image < @View[visibleToUser=true] +4 [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/13328194"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "fastQuery": true,
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13391833"
        },
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView",
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13391833"
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13328194"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "key": 4,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13391833"
        }
      ]
    },
    {
      "name": "全屏广告-升级专业版弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"ziputil_dialog_imageview\"] < * > [text=\"升级到专业版\"]",
          "activityIds": [
            "com.fileunzip.zxwknight.activity.MainActivity",
            "com.fileunzip.zxwknight.activity.VideoPlayActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13328212",
            "https://i.gkd.li/i/14885336"
          ],
          "key": 0
        },
        {
          "matches": "@[vid=\"ziputil_dialog_imageview\"] < * > [text=\"升级到专业版\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"ziputil_dialog_imageview\"] < * > [text=\"升级到专业版\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.VideoPlayActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13328212",
            "https://i.gkd.li/i/14885336"
          ],
          "key": 2
        },
        {
          "matches": "@[id=\"com.fileunzip.zxwknight:id/ziputil_dialog_imageview\"] +n [text=\"升级到专业版\"]",
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告-软件推广",
      "desc": "全能保险箱",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"dialog_recommend_back\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14472568",
          "exampleUrls": "https://m.gkd.li/57941037/de127f4b-5de6-41ab-a1ea-5a98f7eeab58"
        },
        {
          "matches": "@[text=\"本次启动不再提示\"][checked=false]",
          "activityIds": "com.fileunzip.zxwknight.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d"
        },
        {
          "matches": "[vid=\"promote_vault_full_screen_close\"]",
          "preKeys": [
            3
          ],
          "activityIds": "com.fileunzip.zxwknight.activity.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d"
        },
        {
          "matches": "@[text=\"本次启动不再提示\"][checked=false]",
          "activityIds": ".activity.MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d"
        },
        {
          "matches": "[vid=\"promote_vault_full_screen_close\"]",
          "preKeys": [
            3
          ],
          "activityIds": ".activity.MainActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 3,
      "rules": [
        {
          "matches": "@[vid=\"ziputil_dialog_imageview\"] + [text=\"有新版本啦\"]",
          "snapshotUrls": "https://i.gkd.li/i/14900121",
          "exampleUrls": "https://m.gkd.li/57941037/a428a59c-5cdd-47e9-bfc5-492b43ed169a",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用推荐广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"dialog_recommend_back\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14472982",
          "exampleUrls": "https://m.gkd.li/101449500/e7cf2c1a-9323-4ef4-8c89-82f63244b24b"
        },
        {
          "matches": "@[text=\"本次启动不再提示\"][checked=false]",
          "activityIds": "com.fileunzip.zxwknight.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d"
        },
        {
          "matches": "[vid=\"promote_vault_full_screen_close\"]",
          "preKeys": [
            1
          ],
          "activityIds": "com.fileunzip.zxwknight.activity.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/import/13328194"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13391833"
        }
      ]
    },
    {
      "name": "升级专业版弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"com.fileunzip.zxwknight:id/ziputil_dialog_imageview\"] +n [text=\"升级到专业版\"]",
          "key": 0
        }
      ]
    }
  ]
});
