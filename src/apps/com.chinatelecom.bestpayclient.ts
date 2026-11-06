// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "翼支付",
  "id": "com.chinatelecom.bestpayclient",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/bupdate_tv_bottom_tip\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13391544",
          "key": 0
        },
        {
          "matches": "[vid=\"bupdate_tv_bottom_tip\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13391544",
          "key": 1
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/bupdate_tv_bottom_tip\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[name$=\"Dialog\"] >4 @[clickable=true][visibleToUser=true] - View >(1,2) [childCount=0][text=\"\"] + Image[text!=null][childCount=0] <<n [vid=\"best_h5_container\"]",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "权益页",
          "snapshotUrls": [
            "https://i.gkd.li/i/13402692",
            "https://i.gkd.li/i/24428096"
          ]
        },
        {
          "matches": "[vid=\"iv_dialog_close_one\" || vid=\"iv_sky_close\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".ui.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "name": "首页1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455790",
            "https://i.gkd.li/i/15369212",
            "https://i.gkd.li/i/18160066"
          ]
        },
        {
          "matches": "[text=\"甜橙信用卡\"] >2  View[childCount=2] > @Image[clickable=true][text!=null] <<n [id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"]",
          "actionMaximum": 1,
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 2,
          "name": "首页2",
          "snapshotUrls": "https://i.gkd.li/i/13626324"
        },
        {
          "matches": "@[clickable=true][text=\"\"][visibleToUser=true] <<n [vid=\"best_h5_container\"]",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "key": 3,
          "name": "借贷页",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455929",
            "https://i.gkd.li/i/24427912"
          ]
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"] >2 bc >5 View > View >3 View[childCount=3] > @[clickable=true][width<150 && height<150][visibleToUser=true] + * + View[childCount=0]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 4,
          "name": "信用卡页面",
          "snapshotUrls": [
            "https://i.gkd.li/i/13696322",
            "https://i.gkd.li/i/13696323"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24420758"
        },
        {
          "matches": "Image < @View[clickable=true][index=1] <<n Dialog <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "key": 5,
          "name": "权益页",
          "snapshotUrls": "https://i.gkd.li/i/13402692"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/iv_dialog_close_one\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "key": 6,
          "name": "首页1",
          "snapshotUrls": "https://i.gkd.li/i/13455790"
        },
        {
          "matches": "@View[clickable=true][text=\"\"] <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "key": 7,
          "name": "借贷页",
          "snapshotUrls": "https://i.gkd.li/i/13455929"
        },
        {
          "matches": "[childCount=0] -2 @[clickable=true] <n View[childCount=3] <<n [vid=\"h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "fastQuery": true,
          "key": 8,
          "name": "信用卡页面",
          "snapshotUrls": "https://i.gkd.li/i/14603126"
        },
        {
          "matches": "[text=\"甜橙信用卡\"] >2  View[childCount=2] > @Image[clickable=true][text!=null] <<n [vid=\"h5_pc_container\"]",
          "actionMaximum": 1,
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 9,
          "name": "首页2",
          "snapshotUrls": "https://i.gkd.li/i/13626324"
        },
        {
          "matches": "[vid=\"h5_pc_container\"] >2 bc >5 View > View >3 View[childCount=3] > @[clickable=true][width<150 && height<150][visibleToUser=true] + * + View[childCount=0]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 10,
          "name": "信用卡页面",
          "snapshotUrls": [
            "https://i.gkd.li/i/13696322",
            "https://i.gkd.li/i/13696323"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24420758"
        },
        {
          "matches": "Image < @View[clickable=true][index=1] <<n Dialog <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "key": 11,
          "name": "权益页",
          "snapshotUrls": "https://i.gkd.li/import/13402692"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/iv_dialog_close_one\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "key": 12,
          "name": "首页1",
          "snapshotUrls": "https://i.gkd.li/import/13455790"
        },
        {
          "matches": "@Image[clickable=true][text!=null] < View[childCount=2] <<n FrameLayout[id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 13,
          "name": "首页2",
          "snapshotUrls": "https://i.gkd.li/import/13626324"
        },
        {
          "matches": "@View[clickable=true][text=\"\"] <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "key": 14,
          "name": "借贷页",
          "snapshotUrls": "https://i.gkd.li/import/13455929"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"] >n View[childCount=3] > @*[clickable=true] + * + *[childCount=0]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 15,
          "name": "信用卡页面",
          "snapshotUrls": [
            "https://i.gkd.li/import/13696322",
            "https://i.gkd.li/import/13696323"
          ]
        },
        {
          "matches": "Dialog >3 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "key": 16,
          "name": "权益页",
          "snapshotUrls": "https://i.gkd.li/i/13402692"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"] >n View[childCount=3] > @[clickable=true] + * + [childCount=0]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 17,
          "name": "信用卡页面",
          "snapshotUrls": [
            "https://i.gkd.li/i/13696322",
            "https://i.gkd.li/i/13696323"
          ]
        }
      ]
    },
    {
      "name": "局部广告-悬浮窗小广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"] View[childCount=2] > @View[clickable=true] + View[clickable=true] > Image[text!=null]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13402711",
          "exampleUrls": "https://m.gkd.li/57941037/4457a342-5750-45d8-ad8e-233dd1da3de3"
        },
        {
          "matches": "[vid=\"iv_market_close\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14456159",
          "exampleUrls": "https://m.gkd.li/57941037/14326e73-6c7c-4659-8493-d4b196746b2a"
        },
        {
          "matches": "[vid=\"best_h5_container\"] View[childCount=2] > @View[clickable=true] + View[clickable=true] > Image[text!=null]",
          "activityIds": ".ui.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13402711",
          "exampleUrls": "https://m.gkd.li/57941037/4457a342-5750-45d8-ad8e-233dd1da3de3"
        },
        {
          "matches": "[vid=\"iv_market_close\"]",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14456159",
          "exampleUrls": "https://m.gkd.li/57941037/14326e73-6c7c-4659-8493-d4b196746b2a"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"] View[childCount=2] > @View[clickable=true] +  View[clickable=true] > Image[text!=null]",
          "key": 4
        }
      ]
    },
    {
      "name": "全屏广告-年底积分活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "View[childCount=2] > @View[index=1][clickable=true][childCount=1] > Image[childCount=0] <<n [id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13543032",
            "https://i.gkd.li/i/13625037"
          ],
          "key": 0
        },
        {
          "matches": "View[childCount=2] > @View[index=1][clickable=true][childCount=1] > Image[childCount=0] <<n [vid=\"h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13543032",
            "https://i.gkd.li/i/13625037"
          ],
          "key": 1
        },
        {
          "matches": "View > View[index=1][clickable=true][childCount=1] > Image",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动签到",
      "desc": "点击[立即打卡]-关闭弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"已连续签到\"] +12 * >2 Image[visibleToUser=true]",
          "action": "clickCenter",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14459643",
          "exampleUrls": "https://m.gkd.li/57941037/8fd8a0ce-90a3-460b-9882-33fdb55cbca4"
        },
        {
          "matches": "[text=\"明日签到可得惊喜盲盒\"] <2 View + View > Image",
          "preKeys": 0,
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14459494",
          "exampleUrls": "https://m.gkd.li/57941037/31296e53-7d32-405b-b8ae-25855a02291d"
        }
      ]
    },
    {
      "name": "未分类-悬浮窗小广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"] View[childCount=2] > @View[clickable=true] +  View[clickable=true] > Image[text!=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-年底积分活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 6,
      "rules": [
        {
          "matches": "View > View[index=1][clickable=true][childCount=1] > Image",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/bupdate_tv_bottom_tip\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 8,
      "rules": [
        {
          "matches": "Image < @View[clickable=true][index=1] <<n Dialog <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "quickFind": true,
          "key": 0,
          "name": "权益页",
          "snapshotUrls": "https://i.gkd.li/import/13402692"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/iv_dialog_close_one\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "quickFind": true,
          "key": 1,
          "name": "首页1",
          "snapshotUrls": "https://i.gkd.li/import/13455790"
        },
        {
          "matches": "@Image[clickable=true][text!=null] < View[childCount=2] <<n FrameLayout[id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "quickFind": true,
          "key": 2,
          "name": "首页2",
          "snapshotUrls": "https://i.gkd.li/import/13626324"
        },
        {
          "matches": "@View[clickable=true][text=\"\"] <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "quickFind": true,
          "key": 3,
          "name": "借贷页",
          "snapshotUrls": "https://i.gkd.li/import/13455929"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"] >n View[childCount=3] > @*[clickable=true] + * + *[childCount=0]",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "key": 4,
          "name": "信用卡页面",
          "snapshotUrls": [
            "https://i.gkd.li/import/13696322",
            "https://i.gkd.li/import/13696323"
          ]
        }
      ]
    },
    {
      "name": "悬浮窗小广告",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"] View[childCount=2] > @View[clickable=true] +  View[clickable=true] > Image[text!=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "年底积分活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 10,
      "rules": [
        {
          "matches": "View > View[index=1][clickable=true][childCount=1] > Image",
          "key": 0
        }
      ]
    }
  ]
});
