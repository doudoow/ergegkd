// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "古诗文网",
  "id": "org.gushiwen.gushiwen",
  "groups": [
    {
      "name": "分段广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "@Image < View[width<100] <n View > [text=\"反馈\"]",
          "actionDelay": 500,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12837225",
            "https://i.gkd.li/i/12876086",
            "https://i.gkd.li/i/12876067",
            "https://i.gkd.li/i/12837225",
            "https://i.gkd.li/i/12912911",
            "https://i.gkd.li/i/13171930"
          ]
        },
        {
          "matches": "@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^=\"摇动\"]",
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13266879"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "actionDelay": 500,
          "activityIds": ".HomeActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12813618",
            "https://i.gkd.li/i/18047950"
          ],
          "exampleUrls": "https://e.gkd.li/71e9b352-e2a9-427e-bcbb-71510ed066b2"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "actionDelay": 500,
          "activityIds": ".HomeActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/18047949",
          "exampleUrls": "https://e.gkd.li/f6d34c18-e426-48dd-8030-4471cded8208"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "actionDelay": 500,
          "activityIds": "com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13059294",
          "exampleUrls": "https://e.gkd.li/012f64ec-b3ed-4472-8d07-8ed3b4ad6c07"
        },
        {
          "matches": "[id=\"org.gushiwen.gushiwen:id/btn_back\"]",
          "preKeys": [
            0,
            7,
            2,
            3,
            4
          ],
          "activityIds": [
            "local.z.androidshared.vip.RewardActivity",
            "local.z.androidshared.pay.RewardActivity"
          ],
          "key": 5,
          "name": "打赏页面-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813638",
            "https://i.gkd.li/i/13111042"
          ]
        },
        {
          "matches": "[id=\"org.gushiwen.gushiwen:id/backBtn\"]",
          "preKeys": [
            0,
            7,
            2,
            3,
            4
          ],
          "activityIds": [
            "local.z.androidshared.vip.member.VipActivity",
            "local.z.androidshared.pay.vip.VipActivity"
          ],
          "key": 6,
          "name": "荣誉会员-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12837229",
            "https://i.gkd.li/i/13111057"
          ]
        },
        {
          "matches": "@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^=\"摇动\"]",
          "actionDelay": 500,
          "activityIds": ".HomeActivity",
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/13266879"
          ]
        },
        {
          "matches": "[vid=\"btn_back\"]",
          "preKeys": [
            0,
            7,
            2,
            3,
            4
          ],
          "activityIds": [
            "local.z.androidshared.vip.RewardActivity",
            "local.z.androidshared.pay.RewardActivity"
          ],
          "key": 8,
          "name": "打赏页面-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813638",
            "https://i.gkd.li/i/13111042"
          ]
        },
        {
          "matches": "[vid=\"backBtn\"]",
          "preKeys": [
            0,
            7,
            2,
            3,
            4
          ],
          "activityIds": [
            "local.z.androidshared.vip.member.VipActivity",
            "local.z.androidshared.pay.vip.VipActivity"
          ],
          "key": 9,
          "name": "荣誉会员-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12837229",
            "https://i.gkd.li/i/13111057"
          ]
        }
      ]
    },
    {
      "name": "未分类-应用内广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[width>1 && width<65] < FrameLayout - [name=\"android.widget.ImageView\"||name=\"android.widget.FrameLayout\"||name=\"android.widget.LinearLayout\"]",
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12813618",
            "https://i.gkd.li/i/12903835",
            "https://i.gkd.li/i/12903885",
            "https://i.gkd.li/i/12876077",
            "https://i.gkd.li/i/13059294"
          ]
        },
        {
          "matches": "@Image < View[width<100] <n View > [text=\"反馈\"]",
          "actionDelay": 500,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12837225",
            "https://i.gkd.li/i/12876086",
            "https://i.gkd.li/i/12876067",
            "https://i.gkd.li/i/12837225",
            "https://i.gkd.li/i/12912911",
            "https://i.gkd.li/i/13171930"
          ]
        },
        {
          "matches": "@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^=\"摇动\"]",
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13266879"
          ]
        },
        {
          "matches": "[id=\"org.gushiwen.gushiwen:id/btn_back\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "activityIds": [
            "local.z.androidshared.vip.RewardActivity",
            "local.z.androidshared.pay.RewardActivity"
          ],
          "key": 3,
          "name": "打赏页面-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813638",
            "https://i.gkd.li/i/13111042"
          ]
        },
        {
          "matches": "[id=\"org.gushiwen.gushiwen:id/backBtn\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "activityIds": [
            "local.z.androidshared.vip.member.VipActivity",
            "local.z.androidshared.pay.vip.VipActivity"
          ],
          "key": 4,
          "name": "荣誉会员-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12837229",
            "https://i.gkd.li/i/13111057"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[width>1 && width<65] < FrameLayout - [name=\"android.widget.ImageView\"||name=\"android.widget.FrameLayout\"||name=\"android.widget.LinearLayout\"]",
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12813618",
            "https://i.gkd.li/import/12903835",
            "https://i.gkd.li/import/12903885",
            "https://i.gkd.li/import/12876077",
            "https://i.gkd.li/import/13059294"
          ]
        },
        {
          "matches": "@Image < View[width<100] <n View > [text=\"反馈\"]",
          "actionDelay": 500,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12837225",
            "https://i.gkd.li/import/12876086",
            "https://i.gkd.li/import/12876067",
            "https://i.gkd.li/import/12837225",
            "https://i.gkd.li/import/12912911",
            "https://i.gkd.li/import/13171930"
          ]
        },
        {
          "matches": "@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^=\"摇动\"]",
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13266879"
          ]
        },
        {
          "matches": "[id=\"org.gushiwen.gushiwen:id/btn_back\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "activityIds": [
            "local.z.androidshared.vip.RewardActivity",
            "local.z.androidshared.pay.RewardActivity"
          ],
          "key": 3,
          "name": "打赏页面-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12813638",
            "https://i.gkd.li/import/13111042"
          ]
        },
        {
          "matches": "[id=\"org.gushiwen.gushiwen:id/backBtn\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "activityIds": [
            "local.z.androidshared.vip.member.VipActivity",
            "local.z.androidshared.pay.vip.VipActivity"
          ],
          "key": 4,
          "name": "荣誉会员-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12837229",
            "https://i.gkd.li/import/13111057"
          ]
        }
      ]
    },
    {
      "name": "应用内广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[width>1 && width<65] < FrameLayout - [name=\"android.widget.ImageView\"||name=\"android.widget.FrameLayout\"||name=\"android.widget.LinearLayout\"]",
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12813618",
            "https://i.gkd.li/import/12903835",
            "https://i.gkd.li/import/12903885",
            "https://i.gkd.li/import/12876077",
            "https://i.gkd.li/import/13059294"
          ]
        },
        {
          "matches": "@Image < View[width<100] <n View > [text=\"反馈\"]",
          "actionDelay": 500,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12837225",
            "https://i.gkd.li/import/12876086",
            "https://i.gkd.li/import/12876067",
            "https://i.gkd.li/import/12837225",
            "https://i.gkd.li/import/12912911",
            "https://i.gkd.li/import/13171930"
          ]
        },
        {
          "matches": "@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^=\"摇动\"]",
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13266879"
          ]
        },
        {
          "matches": "[id=\"org.gushiwen.gushiwen:id/btn_back\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "activityIds": [
            "local.z.androidshared.vip.RewardActivity",
            "local.z.androidshared.pay.RewardActivity"
          ],
          "key": 3,
          "name": "打赏页面-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12813638",
            "https://i.gkd.li/import/13111042"
          ]
        },
        {
          "matches": "[id=\"org.gushiwen.gushiwen:id/backBtn\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "activityIds": [
            "local.z.androidshared.vip.member.VipActivity",
            "local.z.androidshared.pay.vip.VipActivity"
          ],
          "key": 4,
          "name": "荣誉会员-点击返回按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12837229",
            "https://i.gkd.li/import/13111057"
          ]
        }
      ]
    }
  ]
});
