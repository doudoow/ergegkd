// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百度地图",
  "id": "com.baidu.BaiduMap",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16556555",
          "exampleUrls": "https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf"
        },
        {
          "matches": "[vid=\"ms_skipView\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23742641",
          "exampleUrls": "https://e.gkd.li/cd89ffb7-6cd3-4978-b3d6-ef5ece2769d0"
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"开启位置服务\"] + RelativeLayout > [id=\"com.baidu.BaiduMap:id/tv_notip_btn\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12660884"
        },
        {
          "matches": "[text=\"需开启系统定位服务开关\"] +2 [id=\"com.baidu.BaiduMap:id/ll_dialog_btn\"] > [id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12660883"
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/location_dialog_close_iv\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12909299"
        },
        {
          "matches": "[text^=\"开启位置服务\"] + RelativeLayout > [vid=\"tv_notip_btn\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12660884"
        },
        {
          "matches": "[text=\"需开启系统定位服务开关\"] +2 [vid=\"ll_dialog_btn\"] > [vid=\"tv_dialog_cancel\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12660883"
        },
        {
          "matches": "ImageView[vid=\"location_dialog_close_iv\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12909299"
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
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/cancel_update\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "snapshotUrls": "https://i.gkd.li/i/12909385",
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/cancel_update\"]",
          "key": 1
        },
        {
          "matches": "ImageView[vid=\"cancel_update\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "snapshotUrls": "https://i.gkd.li/i/12909385",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"push_close\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "snapshotUrls": "https://i.gkd.li/i/15284736",
          "key": 0
        },
        {
          "matches": "[vid=\"push_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-通勤卡添加至桌面",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"添加至桌面\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13439258",
            "https://i.gkd.li/i/16920986"
          ],
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "snapshotUrls": "https://i.gkd.li/i/13439258",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"img_close\"][visibleToUser=true]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22616256",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"banner_ad_close_icon\"][visibleToUser=true]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/22656085"
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text=\"广告\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22616267"
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/yellow_banner_close\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24633179"
        },
        {
          "matches": "ImageView[vid=\"yellow_banner_close\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24633179"
        }
      ]
    },
    {
      "name": "局部广告-地图上方黄页横幅",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/yellow_banner_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-打车界面右侧悬浮球",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "RelativeLayout[id=\"com.baidu.BaiduMap:id/rl_close_content\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-美食大礼包弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"美食大礼包\"] +(6) TextView[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-酒店提前订弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"lottie_box\"] + TextView[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-打车界面弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/operational_activities_content_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-各类局部广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/yellow_banner_close\"]",
          "activityIds": [
            "com.baidu.baidumaps.MapsActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity",
            "com.lbe.security.ui.CountdownDialogActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "地图上方黄页横幅",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642301",
            "https://i.gkd.li/i/12801465",
            "https://i.gkd.li/i/12909281",
            "https://i.gkd.li/i/24633179"
          ]
        },
        {
          "matches": "RelativeLayout[id=\"com.baidu.BaiduMap:id/rl_close_content\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 1,
          "name": "局部广告-打车界面右侧悬浮球",
          "snapshotUrls": "https://i.gkd.li/i/12642307"
        },
        {
          "matches": "[vid=\"banner_ad_close_icon\"][visibleToUser=true]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 2,
          "name": "路线广告-1",
          "snapshotUrls": "https://i.gkd.li/i/22656085"
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text=\"广告\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 3,
          "name": "路线广告-2",
          "snapshotUrls": "https://i.gkd.li/i/22616267"
        }
      ]
    },
    {
      "name": "全屏广告-各类弹窗广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[text=\"美食大礼包\"] +(6) TextView[id=null][clickable=true]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 0,
          "name": "美食大礼包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12642310"
        },
        {
          "matches": "[id=\"lottie_box\"] + TextView[id=null][clickable=true]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 1,
          "name": "酒店提前订弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12642319"
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/operational_activities_content_close\"]",
          "activityIds": [
            "com.baidu.baidumaps.MapsActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "name": "打车界面弹窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12909300",
            "https://i.gkd.li/i/12930699"
          ]
        },
        {
          "matches": "[vid=\"img_close\"][visibleToUser=true]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/22616256"
        }
      ]
    },
    {
      "name": "局部广告-打车界面-右侧悬浮球",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "RelativeLayout[id=\"com.baidu.BaiduMap:id/rl_close_content\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求定位弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[text^=\"开启位置服务\"] + RelativeLayout > [id=\"com.baidu.BaiduMap:id/tv_notip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/import/12660884",
          "key": 0
        },
        {
          "matches": "[text=\"需开启系统定位服务开关\"] +2 [id=\"com.baidu.BaiduMap:id/ll_dialog_btn\"] > [id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/12660883",
          "key": 1
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/location_dialog_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/import/12909299",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-打车界面-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/operational_activities_content_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-打开通知权限",
      "enable": false,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "[text=\"打开通知权限\"] <n LinearLayout + ImageView[id=\"com.baidu.BaiduMap:id/push_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通勤卡-添加至桌面",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "TextView[id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "snapshotUrls": "https://i.gkd.li/import/13439258",
          "key": 0
        }
      ]
    },
    {
      "name": "地图上方黄页横幅",
      "enable": false,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/yellow_banner_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "打车界面-右侧悬浮球",
      "enable": false,
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "RelativeLayout[id=\"com.baidu.BaiduMap:id/rl_close_content\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "美食大礼包弹窗",
      "enable": false,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "[text=\"美食大礼包\"] +(6) TextView[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "酒店提前订弹窗",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"lottie_box\"] + TextView[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求定位弹窗",
      "enable": false,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "[text^=\"开启位置服务\"] + RelativeLayout > [id=\"com.baidu.BaiduMap:id/tv_notip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/import/12660884",
          "key": 0
        },
        {
          "matches": "[text=\"需开启系统定位服务开关\"] +2 [id=\"com.baidu.BaiduMap:id/ll_dialog_btn\"] > [id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/12660883",
          "key": 1
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/location_dialog_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/import/12909299",
          "key": 2
        }
      ]
    },
    {
      "name": "打车界面-弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/operational_activities_content_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级更新弹窗",
      "enable": false,
      "quickFind": true,
      "key": 25,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/cancel_update\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "打开通知权限",
      "enable": false,
      "quickFind": true,
      "key": 26,
      "rules": [
        {
          "matches": "[text=\"打开通知权限\"] <n LinearLayout + ImageView[id=\"com.baidu.BaiduMap:id/push_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通勤卡-添加至桌面",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 27,
      "rules": [
        {
          "matches": "TextView[id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "snapshotUrls": "https://i.gkd.li/import/13439258",
          "key": 0
        }
      ]
    }
  ]
});
