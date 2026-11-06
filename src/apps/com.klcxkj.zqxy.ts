// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "趣智校园",
  "id": "com.klcxkj.zqxy",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id\"]",
          "activityIds": [
            "com.klcxkj.zqxy.ui.main.MainActivity",
            "com.anythink.basead.ui.ATPortraitTranslucentActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13195649",
            "https://i.gkd.li/i/12781415"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text^=\"打开或下载\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\" || text^=\"下载或打开\"]",
          "activityIds": "com.klcxkj.zqxy.ui.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12781461",
            "https://i.gkd.li/i/13488673",
            "https://i.gkd.li/i/13546464",
            "https://i.gkd.li/i/13071301",
            "https://i.gkd.li/i/13707849"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] < ViewGroup +2 ViewGroup > [text$=\"广告\"]",
          "activityIds": "com.klcxkj.zqxy.ui.splash.SplashActivity",
          "fastQuery": true,
          "key": 2,
          "name": "吉欣广告",
          "snapshotUrls": "https://i.gkd.li/i/13274838"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "activityIds": ".ui.device.apartment.ble.BathingBleActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13274836",
          "exampleUrls": "https://e.gkd.li/d31ed6be-1211-4d34-855c-3f454f8f4b3f"
        },
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": ".ui.main.MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/18108931",
          "exampleUrls": "https://e.gkd.li/9c8af961-db98-4ef7-ad96-eff44f908481"
        },
        {
          "matches": "[vid=\"anythink_myoffer_btn_close_id\"]",
          "activityIds": [
            ".ui.main.MainActivity",
            "com.anythink.basead.ui.ATPortraitTranslucentActivity"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13195649",
            "https://i.gkd.li/i/12781415"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text^=\"打开或下载\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\" || text^=\"下载或打开\"]",
          "activityIds": ".ui.main.MainActivity",
          "fastQuery": true,
          "key": 6,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12781461",
            "https://i.gkd.li/i/13488673",
            "https://i.gkd.li/i/13546464",
            "https://i.gkd.li/i/13071301",
            "https://i.gkd.li/i/13707849"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] < ViewGroup +2 ViewGroup > [text$=\"广告\"]",
          "activityIds": ".ui.splash.SplashActivity",
          "fastQuery": true,
          "key": 7,
          "name": "吉欣广告",
          "snapshotUrls": "https://i.gkd.li/i/13274838"
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "activityIds": [
            "com.klcxkj.zqxy.ui.main.MainActivity",
            "com.klcxkj.zqxy.ui.device.apartment.ble.BathingBleActivity"
          ],
          "key": 8,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12781461",
            "https://i.gkd.li/import/13488673",
            "https://i.gkd.li/import/13546464",
            "https://i.gkd.li/import/13071301",
            "https://i.gkd.li/import/13274836",
            "https://i.gkd.li/import/13274836",
            "https://i.gkd.li/import/13707849"
          ]
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 9,
          "name": "字节广告"
        },
        {
          "matches": "@ViewGroup < ViewGroup +2 ViewGroup > [text=\"吉欣广告\"]",
          "activityIds": "com.klcxkj.zqxy.ui.splash.SplashActivity",
          "key": 10,
          "name": "吉欣广告",
          "snapshotUrls": "https://i.gkd.li/import/13274838"
        }
      ]
    },
    {
      "name": "局部广告-横幅广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"][visibleToUser=true]",
          "activityIds": "com.klcxkj.zqxy.ui.device.drink.ble.DrinkingBleActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13488870"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"][visibleToUser=true]",
          "activityIds": ".ui.device.drink.ble.DrinkingBleActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13488870"
        },
        {
          "matches": "[id=\"com.klcxkj.zqxy:id/bathing_adv_layout\"] >n FrameLayout[childCount=1] > ImageView",
          "activityIds": [
            "com.klcxkj.zqxy.ui.device.drink.ble.DrinkingBleActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13488870"
          ]
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id\"]",
          "activityIds": [
            "com.klcxkj.zqxy.ui.main.MainActivity",
            "com.anythink.basead.ui.ATPortraitTranslucentActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13195649",
            "https://i.gkd.li/i/12781415"
          ]
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "activityIds": [
            "com.klcxkj.zqxy.ui.main.MainActivity",
            "com.klcxkj.zqxy.ui.device.apartment.ble.BathingBleActivity"
          ],
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12781461",
            "https://i.gkd.li/i/13488673",
            "https://i.gkd.li/i/13546464",
            "https://i.gkd.li/i/13071301",
            "https://i.gkd.li/i/13274836",
            "https://i.gkd.li/i/13274836",
            "https://i.gkd.li/i/13707849"
          ]
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "name": "字节广告"
        },
        {
          "matches": "@ViewGroup < ViewGroup +2 ViewGroup > [text=\"吉欣广告\"]",
          "activityIds": "com.klcxkj.zqxy.ui.splash.SplashActivity",
          "key": 3,
          "name": "吉欣广告",
          "snapshotUrls": "https://i.gkd.li/i/13274838"
        }
      ]
    },
    {
      "name": "未分类-横幅广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.klcxkj.zqxy:id/bathing_adv_layout\"] >n FrameLayout[childCount=1] > ImageView",
          "activityIds": [
            "com.klcxkj.zqxy.ui.device.drink.ble.DrinkingBleActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13488870"
          ]
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id\"]",
          "activityIds": [
            "com.klcxkj.zqxy.ui.main.MainActivity",
            "com.anythink.basead.ui.ATPortraitTranslucentActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13195649",
            "https://i.gkd.li/import/12781415"
          ]
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "activityIds": [
            "com.klcxkj.zqxy.ui.main.MainActivity",
            "com.klcxkj.zqxy.ui.device.apartment.ble.BathingBleActivity"
          ],
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12781461",
            "https://i.gkd.li/import/13488673",
            "https://i.gkd.li/import/13546464",
            "https://i.gkd.li/import/13071301",
            "https://i.gkd.li/import/13274836",
            "https://i.gkd.li/import/13274836",
            "https://i.gkd.li/import/13707849"
          ]
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "name": "字节广告"
        },
        {
          "matches": "@ViewGroup < ViewGroup +2 ViewGroup > [text=\"吉欣广告\"]",
          "activityIds": "com.klcxkj.zqxy.ui.splash.SplashActivity",
          "key": 3,
          "name": "吉欣广告",
          "snapshotUrls": "https://i.gkd.li/import/13274838"
        }
      ]
    },
    {
      "name": "横幅广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.klcxkj.zqxy:id/bathing_adv_layout\"] >n FrameLayout[childCount=1] > ImageView",
          "activityIds": [
            "com.klcxkj.zqxy.ui.device.drink.ble.DrinkingBleActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13488870"
          ]
        }
      ]
    }
  ]
});
