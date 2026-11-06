// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "一刻相册",
  "id": "com.baidu.youavideo",
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
          "anyMatches": [
            "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
            "[text.length<10][text*=\"跳过\"][visibleToUser=true]"
          ],
          "excludeMatches": "[text=\"开启安全备份\"][visibleToUser=true]",
          "excludeActivityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/23549481",
            "https://i.gkd.li/i/23549490"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23549097",
            "https://i.gkd.li/i/23567868"
          ],
          "exampleUrls": "https://e.gkd.li/5185bf9d-70f7-4841-991e-55b1b6768e97"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/23549504",
            "https://i.gkd.li/i/23549553"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeMatches": "[text=\"开启安全备份\"][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23549481",
          "excludeSnapshotUrls": "https://i.gkd.li/i/23567868",
          "exampleUrls": "https://e.gkd.li/5185bf9d-70f7-4841-991e-55b1b6768e97"
        },
        {
          "matches": "@[text*=\"跳过\"] + [visibleToUser=true] >(1,3) [text*=\"摇一摇\" || text*=\"摇动\" || text*=\"点击\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/23549490"
        },
        {
          "matches": "[vid=\"flash_fragment\"] >n [vid=\"ms_skipView\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/30690903"
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/23549504",
            "https://i.gkd.li/i/23549553"
          ]
        }
      ]
    },
    {
      "name": "更新提示-软件升级提醒",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_upgrade\"] < LinearLayout +2 [id=\"com.baidu.youavideo:id/img_close\"]",
          "activityIds": ".home.view.HomeActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12597916"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"tv_upgrade\"] < LinearLayout +2 [vid=\"img_close\"]",
          "activityIds": ".home.view.HomeActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12597916"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-悬浮窗广告",
      "desc": "关闭广告悬浮窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/img_operation_close\"]",
          "activityIds": ".home.view.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12970088",
          "key": 0
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/img_operation_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12970088"
          ],
          "key": 1
        },
        {
          "matches": "[vid=\"img_operation_close\"]",
          "activityIds": ".home.view.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12970088",
          "key": 2
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "点击下次再说",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_next_time\"]",
          "activityIds": ".home.view.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12970094",
          "key": 0
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_next_time\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12970094"
          ],
          "key": 1
        },
        {
          "matches": "[vid=\"tv_next_time\"]",
          "activityIds": ".home.view.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12970094",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-会员弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"恭喜获得会员\"] - View[text=\"\"] > @Image[text!=null][visibleToUser=true] <<n [vid=\"fl_web_view\"]",
          "activityIds": ".vip.ui.VipPayWebDialogActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17576805",
          "exampleUrls": "https://e.gkd.li/c149b068-7f00-4173-9000-a41fa1603ba7"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"fl_ad\"] - [vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": [
            ".preview.ui.search.SearchPreviewActivity",
            ".preview.ui.hometimeline.TimelinePreviewActivity",
            ".preview.ui.album.AlbumPreviewActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14133595",
            "https://i.gkd.li/i/14217352",
            "https://i.gkd.li/i/17580816"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/15750684",
          "exampleUrls": "https://e.gkd.li/6b628b65-214f-4dc0-b0b8-805ea566464b"
        },
        {
          "matches": "[vid=\"dialog_home_pop_close_button\"]",
          "actionMaximum": 1,
          "activityIds": ".home.view.HomeActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17732139",
          "exampleUrls": "https://e.gkd.li/c83b5006-1b0d-478e-ab0a-d2f3f4957162"
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_home_pop_close_button\"] ",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13048700"
          ]
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/iv_close\"]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14133595",
            "https://i.gkd.li/i/14217352"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/3aa0e107-e31f-4e5a-8969-1fcd8310281d"
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
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_open_guide_notification_root\"] > [id=\"com.baidu.youavideo:id/img_close\"]",
          "activityIds": ".app.ui.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13413819",
          "key": 0
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_open_guide_notification_root\"] > [id=\"com.baidu.youavideo:id/img_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"dialog_open_guide_notification_root\"] > [vid=\"img_close\"]",
          "activityIds": ".app.ui.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13413819",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-照片页底部浮窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/cl_root\"] + [id=\"com.baidu.youavideo:id/img_close\"]",
          "activityIds": "com.baidu.youavideo.home.view.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13711475",
          "key": 0
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/cl_root\"] + [id=\"com.baidu.youavideo:id/img_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"cl_root\"] + [vid=\"img_close\"]",
          "activityIds": ".home.view.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13711475",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[vid=\"riv_banner\"] + [vid=\"iv_close\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13874124",
            "https://i.gkd.li/i/15220559"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"riv_banner\"] < * > [vid=\"iv_close\"][visibleToUser=true]",
          "key": 1
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
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_upgrade\"] < LinearLayout +2 [id=\"com.baidu.youavideo:id/img_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12597916"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-会员充值提示",
      "desc": "点击x关闭充值提示",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_confirm_pay\"] -5 [id=\"com.baidu.youavideo:id/img_close_dialog\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12970094"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-忽略电池优化",
      "desc": "点击【取消】",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[text*=\"电池优化权限\"] < * +n [vid=\"bottom_two_button_layout\"] >n [vid=\"cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-展示精选回忆故事",
      "desc": "点击x",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"在桌面展示精选回忆故事\"] - [vid=\"iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮窗",
      "desc": "关闭广告悬浮窗",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/img_operation_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12970088"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-评价",
      "desc": "点击下次再说",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_next_time\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12970094"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求开启通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_open_guide_notification_root\"] > [id=\"com.baidu.youavideo:id/img_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-照片-底部浮窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/cl_root\"] + [id=\"com.baidu.youavideo:id/img_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "软件升级提醒",
      "enable": false,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_upgrade\"] < LinearLayout +2 [id=\"com.baidu.youavideo:id/img_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12597916"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "悬浮窗",
      "desc": "关闭广告悬浮窗",
      "enable": false,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/img_operation_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12970088"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "评价",
      "desc": "点击下次再说",
      "enable": false,
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_next_time\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12970094"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "会员充值提示",
      "desc": "点击x关闭充值提示",
      "enable": false,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_confirm_pay\"] -5 [id=\"com.baidu.youavideo:id/img_close_dialog\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12970094"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "desc": "点击x关闭广告提示",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_home_pop_close_button\"] ",
          "snapshotUrls": [
            "https://i.gkd.li/import/13048700"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "请求开启通知权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_open_guide_notification_root\"] > [id=\"com.baidu.youavideo:id/img_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "照片-底部浮窗广告",
      "enable": false,
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/cl_root\"] + [id=\"com.baidu.youavideo:id/img_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
