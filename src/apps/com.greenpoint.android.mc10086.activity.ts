// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国移动",
  "id": "com.greenpoint.android.mc10086.activity",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 2,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16335136"
        },
        {
          "matches": "@FrameLayout[childCount=2] > [vid=\"ll_top_right\"][childCount=0]",
          "position": {
            "left": "width * 0.8731",
            "top": "width * 0.1352"
          },
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20903074",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16335136",
          "exampleUrls": "https://e.gkd.li/6fca95f1-d672-4d1d-bcf5-e71f1865dd52"
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"暂不更新\"][visibleToUser=true]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "snapshotUrls": "https://i.gkd.li/i/18271745",
          "exampleUrls": "https://e.gkd.li/130e0c2e-f568-4a96-9c06-9876a21e0466",
          "key": 0
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
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/ad_image\"] < RelativeLayout + [id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "snapshotUrls": "https://i.gkd.li/i/12662361",
          "key": 0
        },
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/ad_image\"] < RelativeLayout + [id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12662361",
          "key": 1
        },
        {
          "matches": "@[vid=\"close_btn\" || vid=\"iv_close_top\"] <n LinearLayout >2 [vid=\"ad_image\" || vid=\"ll_ad_logo\"]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12662361",
            "https://i.gkd.li/i/31612036"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "请求推送通知弹窗，点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text*=\"开启推送通知\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.mc10086.cmcc.base.StartPageActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13327880"
        },
        {
          "matches": "[text=\"授权提醒\"] +3 [text=\"拒绝\"]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13775652"
        }
      ]
    },
    {
      "name": "权限提示-请求获取剪贴板权限弹窗",
      "desc": "请求获取剪贴板权限弹窗，点击不允许",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"获取您的\"] < LinearLayout +(2) LinearLayout >(2) [text=\"不允许\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662251",
            "https://i.gkd.li/i/13775651",
            "https://i.gkd.li/i/15944173"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮小图标",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12662265"
        },
        {
          "matches": "[vid=\"close_btn_bottom\"]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14570369",
          "exampleUrls": "https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c"
        },
        {
          "matches": "[text=\"余量查询\"] > View > View > @Image[clickable=true][text!=null] <<n [vid=\"patmentwebview\"]",
          "activityIds": "com.cmccit.webview.ac.CommonHtml5Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14738550",
          "exampleUrls": "https://m.gkd.li/57941037/69c6bf73-d901-4816-a9da-e4bcb0f4b9c6"
        },
        {
          "matches": "[vid=\"close_btn\" || vid=\"close_btn_bottom\" || vid=\"cmcc_digital_delete_float_icon_ll\"]",
          "actionCd": 300,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12662265",
            "https://i.gkd.li/i/14570369",
            "https://i.gkd.li/i/25768816"
          ],
          "exampleUrls": [
            "https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c",
            "https://e.gkd.li/56c11ab7-227f-4b35-a2e0-8763dd557f69"
          ]
        },
        {
          "matches": "[vid=\"tab_ai_tag\"] >2 [vid=\"ai_floatingBar_close\"][clickable=true]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/25768547",
          "exampleUrls": "https://e.gkd.li/c8c018e9-4082-43f2-8d6d-98bc99bd4806"
        },
        {
          "matches": "@Image[clickable=true][text!=null] <<3 WebView[text=\"余量查询\"] <<2 [vid=\"patmentwebview\"]",
          "activityIds": "com.cmccit.webview.ac.CommonHtml5Activity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/14738550",
          "exampleUrls": "https://m.gkd.li/57941037/69c6bf73-d901-4816-a9da-e4bcb0f4b9c6"
        },
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/drag_img\"] + [id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662265"
          ],
          "key": 6
        }
      ]
    },
    {
      "name": "评价提示-请求好评弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"com.greenpoint.android.mc10086.activity:id/close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "snapshotUrls": "https://i.gkd.li/i/12662345",
          "key": 0
        },
        {
          "matches": "@[id=\"com.greenpoint.android.mc10086.activity:id/close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/12662345",
          "key": 1
        },
        {
          "matches": "@[vid=\"close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "snapshotUrls": "https://i.gkd.li/i/12662345",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通讯录权限申请弹窗",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text=\"通讯录权限申请\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.cmccit.paycenter.PayCenterActivity",
          "snapshotUrls": "https://i.gkd.li/i/16369235",
          "exampleUrls": "https://e.gkd.li/7d332325-497f-47a4-a322-729ffa5dd121",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 8,
      "rules": [
        {
          "matches": [
            "[text^=\"位置权限\" || text$=\"定位权限\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23445705",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-请求推送通知弹窗",
      "desc": "请求推送通知弹窗，点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 9,
      "rules": [
        {
          "matches": "[text*=\"开启推送通知\"] +(2) LinearLayout > [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662213",
            "https://i.gkd.li/i/13327880"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"授权提醒\"] +3 [text=\"拒绝\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13775652",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-关闭更新弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "Button[text=\"以后再说\"][id^=\"com.greenpoint.android.mc10086.activity:id/dialog_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/ad_image\"] < RelativeLayout + [id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662361"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求推送通知弹窗",
      "desc": "请求推送通知弹窗，点击取消",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[text*=\"开启推送通知\"] +(2) LinearLayout > [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662213",
            "https://i.gkd.li/import/13327880"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"授权提醒\"] +3 [text=\"拒绝\"]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/import/13775652"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-请求获取剪贴板权限弹窗",
      "desc": "请求获取剪贴板权限弹窗，点击不允许",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[text*=\"获取您的\"] < LinearLayout +(2) LinearLayout >(2) [text=\"不允许\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662251",
            "https://i.gkd.li/import/13775651"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求好评弹窗",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@[id=\"com.greenpoint.android.mc10086.activity:id/close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662345"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "关闭更新弹窗",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "Button[text=\"以后再说\"][id^=\"com.greenpoint.android.mc10086.activity:id/dialog_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/ad_image\"] < RelativeLayout + [id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662361"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "请求推送通知弹窗",
      "desc": "请求推送通知弹窗，点击取消",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "[text*=\"开启推送通知\"] +(2) LinearLayout > [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662213",
            "https://i.gkd.li/import/13327880"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"授权提醒\"] +3 [text=\"拒绝\"]",
          "quickFind": true,
          "snapshotUrls": [
            "https://i.gkd.li/import/13775652"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "请求获取剪贴板权限弹窗",
      "desc": "请求获取剪贴板权限弹窗，点击不允许",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "[text*=\"获取您的\"] < LinearLayout +(2) LinearLayout >(2) [text=\"不允许\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662251",
            "https://i.gkd.li/import/13775651"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "右侧悬浮小图标",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/drag_img\"] + [id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662265"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "请求好评弹窗",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "@[id=\"com.greenpoint.android.mc10086.activity:id/close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662345"
          ],
          "key": 0
        }
      ]
    }
  ]
});
