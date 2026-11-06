// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "掌上生活",
  "id": "com.cmbchina.ccd.pluto.cmbActivity",
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
          "matches": "[text=\"暂不更新\"][visibleToUser=true]",
          "activityIds": [
            ".CMBRootActivityV2",
            ".secplugin.activity.login.fingerprint.cmbR6VH0R"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12647025",
            "https://i.gkd.li/i/12727203",
            "https://i.gkd.li/i/13345771"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/bt_sure_tips\"] - [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/bt_cancel_tips\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/lly_pop_shell\"] > [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"lly_pop_shell\"] > [vid=\"img_cf_view_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_floating_ad_cmb\"] - [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_close_floating_ad_cmb\"]",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
            "com.cmbchina.ccd.pluto.cmbActivity.secondNav"
          ],
          "name": "信用卡、我的页面",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647039",
            "https://i.gkd.li/i/12647052"
          ],
          "key": 0
        },
        {
          "matches": "@[vid=\"img_cmb_drag_pendant_close\"] + [vid=\"img_cmb_drag_pendant_bg\"]",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
            "com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billRepay",
            "com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billDetail.view"
          ],
          "name": "查账页面",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647127",
            "https://i.gkd.li/i/14209121"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/view_cat\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/view_close\"]",
          "activityIds": "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
          "name": "发现页",
          "snapshotUrls": "https://i.gkd.li/i/13402782",
          "key": 2
        },
        {
          "matches": "[vid=\"img_floating_ad_cmb\"] - [vid=\"img_close_floating_ad_cmb\"]",
          "activityIds": [
            ".CMBRootActivityV2",
            ".secondNav"
          ],
          "name": "信用卡、我的页面",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647039",
            "https://i.gkd.li/i/12647052"
          ],
          "key": 3
        },
        {
          "matches": "@[vid=\"img_cmb_drag_pendant_close\"] + [vid=\"img_cmb_drag_pendant_bg\"]",
          "activityIds": [
            ".CMBRootActivityV2",
            ".repaymentBillv3.billRepay",
            ".repaymentBillv3.billDetail.view"
          ],
          "name": "查账页面",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647127",
            "https://i.gkd.li/i/14209121"
          ],
          "key": 4
        },
        {
          "matches": "[vid=\"view_cat\"] + [vid=\"view_close\"]",
          "activityIds": ".CMBRootActivityV2",
          "name": "发现页",
          "snapshotUrls": "https://i.gkd.li/i/13402782",
          "key": 5
        },
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cmb_drag_pendant_bg\"] - [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cmb_drag_pendant_close\"]",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
            "com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billRepay"
          ],
          "name": "查账页面",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647127"
          ],
          "key": 6
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击x按钮，不开启系统通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"btn_open_notify\"] + [vid=\"iv_delete\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"定位服务\"] +n * > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-消息页面通知开关",
      "desc": "点击x按钮，不开启系统通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/lly_pop_shell\"] > [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-消息页面-通知开关",
      "desc": "点击x按钮，不开启系统通知",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete\"]",
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
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/bt_sure_tips\"] - [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/bt_cancel_tips\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/lly_pop_shell\"] > [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "右侧悬浮广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_floating_ad_cmb\"] - [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_close_floating_ad_cmb\"]",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
            "com.cmbchina.ccd.pluto.cmbActivity.secondNav"
          ],
          "name": "信用卡、我的页面",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647039",
            "https://i.gkd.li/import/12647052"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cmb_drag_pendant_bg\"] - [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cmb_drag_pendant_close\"]",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
            "com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billRepay"
          ],
          "name": "查账页面",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647127"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/view_cat\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/view_close\"]",
          "activityIds": "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
          "name": "发现页",
          "snapshotUrls": "https://i.gkd.li/import/13402782",
          "key": 2
        }
      ]
    },
    {
      "name": "消息页面-通知开关",
      "desc": "点击x按钮，不开启系统通知",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete\"]",
          "key": 0
        }
      ]
    }
  ]
});
