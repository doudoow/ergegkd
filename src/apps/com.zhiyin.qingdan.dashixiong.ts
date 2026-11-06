// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "大师兄影视",
  "id": "com.zhiyin.qingdan.dashixiong",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text=\"广告\"]",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/12843281"
        },
        {
          "matches": "@ImageView[clickable=true] <3 * -2 * >2 [text=\"广告\"]",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13521143"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13521140"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.zhiyin.qingdan.dashixiong.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843282",
            "https://i.gkd.li/i/12843345",
            "https://i.gkd.li/i/12843333",
            "https://i.gkd.li/i/13400656"
          ]
        },
        {
          "matches": "@Image < View +n View > View > View > [text=\"广告\"]",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "key": 4,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/12843323"
        },
        {
          "matches": "[id=\"close_btn\"][clickable=true]",
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13887500"
        },
        {
          "matches": "@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 6,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/12843281"
        },
        {
          "matches": "@ImageView[clickable=true] <3 * -2 * >2 [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 7,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13521143"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 8,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13521140"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "name": "腾讯广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843282",
            "https://i.gkd.li/i/12843345",
            "https://i.gkd.li/i/12843333",
            "https://i.gkd.li/i/13400656"
          ]
        },
        {
          "matches": "@Image < View +n View > View > View > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 10,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/12843323"
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[我知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[desc^=\"必读通告\"] +n [desc=\"我知道了\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12843280",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "WebView[text=\"快手\"] >3 View[childCount=5] >2 @TextView[clickable=true][text=\"\"] <<n [vid=\"ksad_container\"]",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15371800",
          "exampleUrls": "https://m.gkd.li/57941037/122d8544-ccdd-42df-8618-f98f4433ee50",
          "key": 0
        },
        {
          "matches": "WebView[text=\"快手\"] >3 View[childCount=5] >2 @TextView[clickable=true][text=\"\"] <<n [vid=\"ksad_container\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15371800",
          "exampleUrls": "https://m.gkd.li/57941037/122d8544-ccdd-42df-8618-f98f4433ee50",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text=\"广告\"]",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/i/12843281"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView"
          ],
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "key": 1,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13521143"
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -3 ViewGroup >2 [text=\"跳过\"]",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "key": 2,
          "name": "快手广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13521140"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "key": 3,
          "name": "腾讯广告-1",
          "snapshotUrls": "https://i.gkd.li/i/12843282"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": [
            "com.zhiyin.qingdan.dashixiong.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "key": 4,
          "name": "腾讯广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843345",
            "https://i.gkd.li/i/12843333",
            "https://i.gkd.li/i/13400656"
          ]
        },
        {
          "matches": "@Image < View +n View > View > View > [text=\"广告\"]",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "key": 5,
          "name": "字节广告",
          "snapshotUrls": "https://i.gkd.li/i/12843323"
        }
      ]
    },
    {
      "name": "未分类-公告弹窗",
      "desc": "自动点击【我知道了】",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[desc^=\"必读通告\"] +n [desc=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "desc": "点击X",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"close_btn\"][clickable=true]",
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "snapshotUrls": "https://i.gkd.li/i/13887500",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-公告弹窗",
      "desc": "自动点击【我知道了】",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[desc^=\"必读通告\"] +n [desc=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "公告弹窗",
      "desc": "自动点击【我知道了】",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[desc^=\"必读通告\"] +n [desc=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
