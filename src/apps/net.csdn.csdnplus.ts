// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "CSDN",
  "id": "net.csdn.csdnplus",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"net.csdn.csdnplus:id/update\"] -2 [id=\"net.csdn.csdnplus:id/cancel\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.SetActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12673693",
            "https://i.gkd.li/i/12673654"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"net.csdn.csdnplus:id/update\"] -2 [id=\"net.csdn.csdnplus:id/cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673693",
            "https://i.gkd.li/i/12673654"
          ],
          "key": 1
        },
        {
          "matches": "[vid=\"update\"] -2 [vid=\"cancel\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.SetActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12673693",
            "https://i.gkd.li/i/12673654"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"广告\"] + [id=\"net.csdn.csdnplus:id/iv_more\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673738",
            "https://i.gkd.li/i/13224538"
          ]
        },
        {
          "matches": "@[clickable=true] > [id=\"net.csdn.csdnplus:id/img_feedback_title\"][text=\"重复推荐该广告\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673787",
            "https://i.gkd.li/i/13224551"
          ]
        },
        {
          "matches": "[text=\"广告\"] + [vid=\"iv_more\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673738",
            "https://i.gkd.li/i/13224538"
          ]
        },
        {
          "matches": "@[clickable=true] > [vid=\"img_feedback_title\"][text=\"重复推荐该广告\"]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673787",
            "https://i.gkd.li/i/13224551"
          ]
        }
      ]
    },
    {
      "name": "评价提示-软件好评弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"net.csdn.csdnplus:id/tv_cancel\"][text=\"残忍拒绝\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13251085",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_cancel\"][text=\"残忍拒绝\"]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13251085",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击【x】",
      "key": 3,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > [vid=\"img_cancel\"][clickable=true][visibleToUser=true]",
          "activityIds": "net.csdn.csdnplus.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25171470",
          "exampleUrls": "https://e.gkd.li/3debb965-7773-4160-b172-15dc052ac6c9",
          "key": 0
        },
        {
          "matches": "LinearLayout[childCount=2] > [vid=\"img_cancel\"][clickable=true][visibleToUser=true]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25171470",
          "exampleUrls": "https://e.gkd.li/3debb965-7773-4160-b172-15dc052ac6c9",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[id=\"net.csdn.csdnplus:id/iv_close\"]"
          ],
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12673638",
          "key": 0
        },
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[vid=\"iv_close\"]"
          ],
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12673638",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-底部广告",
      "desc": "点击关闭-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "ViewGroup > ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][childCount=0][visibleToUser=true] <<n [vid=\"fl_template_container\" || vid=\"fl_bottom_ad_container\"]",
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13830821",
            "https://i.gkd.li/i/14312501"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "preKeys": [
            4
          ],
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13830858",
            "https://i.gkd.li/i/14312349",
            "https://i.gkd.li/i/24376480"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] <<2 ViewGroup <<2 ViewGroup - FrameLayout <<6 FrameLayout[id=\"net.csdn.csdnplus:id/fl_template_container\"][visibleToUser=true]",
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13830821"
        },
        {
          "matches": "FrameLayout[id=\"android:id/content\"] [text=\"不感兴趣\"]",
          "preKeys": 0,
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13830858"
        },
        {
          "matches": "ViewGroup > ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][childCount=0][visibleToUser=true] <<n [vid=\"fl_template_container\" || vid=\"fl_bottom_ad_container\"]",
          "activityIds": ".mvvm.ui.activity.BlogDetailActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13830821",
            "https://i.gkd.li/i/14312501"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "preKeys": [
            4
          ],
          "activityIds": ".mvvm.ui.activity.BlogDetailActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13830858",
            "https://i.gkd.li/i/14312349",
            "https://i.gkd.li/i/24376480"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            4
          ],
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13830858",
            "https://i.gkd.li/i/14312349"
          ]
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 6,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673680"
          ],
          "key": 0
        },
        {
          "matches": "@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid=\"fl_third_ad\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13826577",
          "key": 1
        },
        {
          "matches": "[id$=\"tt_splash_skip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13224627",
          "key": 2
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673680"
          ],
          "key": 3
        },
        {
          "matches": "@View + TextView <(3,4,5) FrameLayout <(1,2) FrameLayout <<(1,2) [id=\"net.csdn.csdnplus:id/fl_third_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13826577",
            "https://i.gkd.li/import/13224627",
            "https://i.gkd.li/i/17405187"
          ],
          "key": 4
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10][visibleToUser=true]",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12673680"
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13826577",
            "https://i.gkd.li/i/13224627"
          ]
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"广告\"] + [id=\"net.csdn.csdnplus:id/iv_more\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673738",
            "https://i.gkd.li/i/13224538"
          ]
        },
        {
          "matches": "@[clickable=true] > [id=\"net.csdn.csdnplus:id/img_feedback_title\"][text=\"重复推荐该广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673787",
            "https://i.gkd.li/i/13224551"
          ]
        }
      ]
    },
    {
      "name": "未分类-关闭好评弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"net.csdn.csdnplus:id/tv_cancel\"][text=\"残忍拒绝\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[id=\"net.csdn.csdnplus:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12673638"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"广告\"] + [id=\"net.csdn.csdnplus:id/iv_more\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12673738",
            "https://i.gkd.li/import/13224538"
          ]
        },
        {
          "matches": "@[clickable=true] > [id=\"net.csdn.csdnplus:id/img_feedback_title\"][text=\"重复推荐该广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12673787",
            "https://i.gkd.li/import/13224551"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-关闭好评弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"net.csdn.csdnplus:id/tv_cancel\"][text=\"残忍拒绝\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[id=\"net.csdn.csdnplus:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12673638"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"net.csdn.csdnplus:id/update\"] -2 [id=\"net.csdn.csdnplus:id/cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12673693",
            "https://i.gkd.li/import/12673654"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "enable": false,
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[text=\"广告\"] + [id=\"net.csdn.csdnplus:id/iv_more\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12673738",
            "https://i.gkd.li/import/13224538"
          ]
        },
        {
          "matches": "@[clickable=true] > [id=\"net.csdn.csdnplus:id/img_feedback_title\"][text=\"重复推荐该广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12673787",
            "https://i.gkd.li/import/13224551"
          ]
        }
      ]
    },
    {
      "name": "关闭好评弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"net.csdn.csdnplus:id/tv_cancel\"][text=\"残忍拒绝\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[id=\"net.csdn.csdnplus:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12673638"
          ],
          "key": 0
        }
      ]
    }
  ]
});
