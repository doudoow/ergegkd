// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "起点读书",
  "id": "com.qidian.QDReader",
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
          "matches": "([text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]) || ([vid=\"splash_skip_button\"][visibleToUser=true])",
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19580847",
            "https://i.gkd.li/i/19633020"
          ],
          "exampleUrls": "https://e.gkd.li/3e2357fd-dced-4929-85e0-a9a06ce5fea0",
          "key": 0
        },
        {
          "matches": "[vid=\"splash_skip_button\"][clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/33750455"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][clickable=true][width<500 && height<300]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/33750485",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/33630317",
            "https://i.gkd.li/i/33750400"
          ],
          "exampleUrls": "https://e.gkd.li/2c5cc57a-1e92-4e83-b31e-9342aa75034c"
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
      "key": 1,
      "rules": [
        {
          "matches": "[text$=\"新版本\"] +2 * >2 [id=\"com.qidian.QDReader:id/cancel\"]",
          "activityIds": ".framework.widget.dialog.judian",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12641026"
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/upgrade_dialog_close_btn\"]",
          "activityIds": "com.tencent.upgrade.ui.UpgradeDialogActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13116821"
        },
        {
          "matches": "[text$=\"新版本\"] +2 * >2 [vid=\"cancel\"]",
          "activityIds": ".framework.widget.dialog.judian",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12641026"
        },
        {
          "matches": "[vid=\"upgrade_dialog_close_btn\"]",
          "activityIds": "com.tencent.upgrade.ui.UpgradeDialogActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/33833374"
        },
        {
          "matches": "[text$=\"新版本\"] +2 * >2 [id=\"com.qidian.QDReader:id/cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12641026"
          ],
          "key": 4
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/upgrade_dialog_close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13116821"
          ],
          "key": 5
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"btnEnterTeen\"] + [vid=\"btnCancel\"]",
          "activityIds": [
            ".bll.helper.z0",
            ".ui.activity.MainGroupActivity",
            ".framework.widget.dialog.judian"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640241",
            "https://i.gkd.li/i/12709168",
            "https://i.gkd.li/i/12905817",
            "https://i.gkd.li/i/17879416"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/btnEnterTeen\"] + [id=\"com.qidian.QDReader:id/btnCancel\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"imgClose\" || vid=\"btnClose\"][visibleToUser=true]",
          "activityIds": [
            "com.qidian.QDReader.ui.activity.MainGroupActivity",
            "com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI",
            "com.qidian.QDReader.framework.widget.dialog.judian",
            "com.qidian.QDReader.ui.activity.BookLastPageNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640195",
            "https://i.gkd.li/i/12640158",
            "https://i.gkd.li/i/12818198",
            "https://i.gkd.li/i/13469004",
            "https://i.gkd.li/i/23210736",
            "https://i.gkd.li/i/23249358"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击顶部提醒左侧关闭按钮",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.qidian.QDReader:id/ivClose\"] + [text^=\"开启推送\"]",
          "activityIds": "com.afollestad.materialdialogs.MaterialDialog",
          "snapshotUrls": "https://i.gkd.li/i/12640242",
          "key": 0
        },
        {
          "matches": "@[vid=\"ivClose\"] + [text^=\"开启推送\"]",
          "activityIds": "com.afollestad.materialdialogs.MaterialDialog",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12640242"
        },
        {
          "matches": "ImageView < [vid=\"ivUpdateNoticeClose\"][clickable=true]",
          "activityIds": ".ui.activity.MainGroupActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24913610"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "activityIds": [
            "com.qidian.QDReader.ui.activity.QDBookDetailActivity",
            "com.qidian.QDReader.ui.activity.MainGroupActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12717032",
            "https://i.gkd.li/i/13459031"
          ]
        },
        {
          "matches": "[vid=\"ivAdClose\"][clickable=true]",
          "activityIds": [
            ".ui.activity.QDBookDetailActivity",
            ".ui.activity.MainGroupActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12717032",
            "https://i.gkd.li/i/31591781"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/ivAd\"] + [id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.MainGroupActivity",
          "fastQuery": true,
          "key": 2,
          "name": "书架页面右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/12717032"
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/floatingView\"] + [id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.QDBookDetailActivity",
          "key": 3,
          "name": "详情页右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13459031"
        }
      ]
    },
    {
      "name": "功能类-起点中文网登录自动确认",
      "desc": "自动点击\"登录\"",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"scanLogin\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.QDBrowserActivity",
          "snapshotUrls": "https://i.gkd.li/i/12903081",
          "key": 0
        },
        {
          "matches": "[id=\"scanLogin\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "View[desc=\"更多游戏\"] - ImageView[clickable=true]",
          "activityIds": "com.qidian.QDReader.flutter.DailyReadingMainPageActivity",
          "snapshotUrls": "https://i.gkd.li/i/13406169",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true] < [desc^=\"游戏广告\"]",
          "activityIds": ".flutter.DailyReadingMainPageActivity",
          "snapshotUrls": "https://i.gkd.li/i/31592925",
          "exampleUrls": "https://e.gkd.li/84123bd4-a6d5-4186-88fe-e35320a241cb",
          "key": 1
        },
        {
          "matches": "View[desc=\"更多游戏\"] - ImageView[clickable=true]",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-福利中心看完广告-知道了",
      "desc": "点击[知道了]",
      "key": 8,
      "rules": [
        {
          "matches": "@TextView[childCount=0][text$=\"知道了\"][visibleToUser=true] <<n [id=\"com.qidian.QDReader:id/webViewContainer\"]",
          "activityIds": ".ui.activity.QDBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13606901",
            "https://i.gkd.li/i/22909666",
            "https://i.gkd.li/i/24339296"
          ],
          "exampleUrls": "https://e.gkd.li/54f41a5a-1c71-4618-bdab-5335172ab7f5",
          "key": 0
        },
        {
          "matches": "@TextView[text$=\"知道了\"][visibleToUser=true] < [index=parent.childCount.minus(1)] <n View < View - [id=\"app\"] <<4 [vid=\"webViewContainer\"]",
          "activityIds": ".ui.activity.QDBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22909666",
            "https://i.gkd.li/i/24339296"
          ],
          "exampleUrls": "https://e.gkd.li/54f41a5a-1c71-4618-bdab-5335172ab7f5",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-红包弹窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/rootView\"] > [id=\"com.qidian.QDReader:id/btnHongbaoClose\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.hongbao_square.NewHongBaoSquareActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13918466",
          "key": 0
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/rootView\"] > [id=\"com.qidian.QDReader:id/btnHongbaoClose\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.hongbao_square.NewHongBaoSquareActivity",
          "snapshotUrls": "https://i.gkd.li/i/13918466",
          "key": 1
        },
        {
          "matches": "[vid=\"rootView\"] > [vid=\"btnHongbaoClose\"]",
          "activityIds": [
            ".ui.activity.hongbao_square.NewHongBaoSquareActivity",
            ".ui.activity.MainGroupActivity",
            ".flutter.HongBaoSquareActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13918466",
            "https://i.gkd.li/i/23291755",
            "https://i.gkd.li/i/28931164"
          ],
          "exampleUrls": "https://e.gkd.li/a11d58b2-70fd-420c-86f1-7a11a8603ee7",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-移动网络下自动点击播放视频",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": [
            "[text^=\"当前处于移动网络\"]",
            "@[clickable=true] >2 [text=\"播放\"]"
          ],
          "activityIds": "com.qidian.QDReader.ui.activity.QDBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15857381",
          "exampleUrls": "https://m.gkd.li/57941037/ea612e44-12a9-405f-aa03-60a19cebef57",
          "key": 0
        },
        {
          "matches": [
            "[text^=\"当前处于移动网络\"]",
            "@[clickable=true] >2 [text=\"播放\"]"
          ],
          "activityIds": ".ui.activity.QDBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15857381",
          "exampleUrls": "https://m.gkd.li/57941037/ea612e44-12a9-405f-aa03-60a19cebef57",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动签到",
      "desc": "①点击[签到] ②退出福利中心",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@[vid=\"btnCheckIn\"] >2 [text=\"签到\"][visibleToUser=true]",
          "excludeMatches": "[vid=\"tvTipNum\"][text=\"--\"][visibleToUser=true]",
          "activityIds": ".ui.activity.MainGroupActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/22634962",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23210761",
            "https://i.gkd.li/i/23211622"
          ]
        },
        {
          "matches": "@View[id=null][childCount=0][clickable=true] < View < View < WebView[text=\"福利中心\"] < WebView < FrameLayout < [vid=\"webViewContainer\"]",
          "preKeys": [
            2
          ],
          "activityIds": ".ui.activity.QDBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24012947",
          "key": 1
        },
        {
          "matches": "@[vid=\"btnCheckIn\"] >2 [text=\"签到\"][visibleToUser=true]",
          "excludeMatches": "[vid=\"tvTipNum\"][text=\"--\"][visibleToUser=true]",
          "activityIds": ".ui.activity.MainGroupActivity",
          "key": 2,
          "name": "①点击[签到]",
          "snapshotUrls": "https://i.gkd.li/i/22634962",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23210761",
            "https://i.gkd.li/i/23211622"
          ]
        },
        {
          "matches": "@View[id=null][childCount=0][clickable=true] < View < View < WebView[text=\"福利中心\"] < WebView < FrameLayout < [vid=\"webViewContainer\"]",
          "preKeys": [
            2
          ],
          "activityIds": ".ui.activity.QDBrowserActivity",
          "name": "②退出福利中心",
          "snapshotUrls": "https://i.gkd.li/i/24012947",
          "key": 3
        }
      ]
    },
    {
      "name": "未分类-活动弹窗",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/imgBKT\"] + [id=\"com.qidian.QDReader:id/imgClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求通知权限提示信息",
      "desc": "点击顶部提醒左侧x按钮",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "@[id=\"com.qidian.QDReader:id/ivClose\"] + [text^=\"开启推送\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-悬浮广告",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/ivAd\"] + [id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.MainGroupActivity",
          "fastQuery": true,
          "key": 0,
          "name": "书架页面右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/12717032"
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/floatingView\"] + [id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.QDBookDetailActivity",
          "key": 1,
          "name": "详情页右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13459031"
        }
      ]
    },
    {
      "name": "未分类-起点中文网登录自动确认",
      "desc": "自动点击【登录】",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"scanLogin\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "desc": "自动点击【x】",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "View[desc=\"更多游戏\"] - ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-福利中心-我知道了",
      "desc": "福利中心看视频后获得奖励，自动点击“我知道了”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 17,
      "rules": [
        {
          "matches": "View[desc=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "key": 18,
      "rules": [
        {
          "matches": "[vid=\"imgClose\" || vid=\"btnClose\"][visibleToUser=true]",
          "activityIds": [
            ".ui.activity.MainGroupActivity",
            ".framework.widget.dialog.judian",
            ".ui.activity.BookLastPageNewActivity",
            "com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12640158",
            "https://i.gkd.li/i/12818198",
            "https://i.gkd.li/i/13469004",
            "https://i.gkd.li/i/23210736",
            "https://i.gkd.li/i/23249358"
          ],
          "exampleUrls": "https://e.gkd.li/79947364-3b02-4113-a7de-2c26cca14286",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "点击x掉",
      "key": 19,
      "rules": [
        {
          "matches": "@[vid=\"fClose\"] - [visibleToUser=true] > [text*=\"给个好评\"]",
          "activityIds": ".ui.activity.CircleHomePageActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31592429",
          "exampleUrls": "https://e.gkd.li/4a4e064a-742b-41d3-8cce-8fc9ab54528c",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[展开]书籍简介",
      "desc": "书单列表页/书籍详情页",
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "[vid=\"etvBookRecomWord\" || vid=\"tvIntro\"][text$=\"...展开\"][clickable=true]",
          "actionCd": 500,
          "activityIds": [
            ".ui.activity.RecomBookListDetailActivity",
            ".ui.activity.QDBookDetailActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/31593523",
            "https://i.gkd.li/i/31593865"
          ],
          "exampleUrls": [
            "https://e.gkd.li/48250906-5ae1-448e-84f8-900cdfbff970",
            "https://e.gkd.li/7f933b03-487c-48ad-825a-bb3a1ff08154"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] < View[desc.length>30] <n ScrollView < View < View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "actionCd": 2000,
          "activityIds": ".flutter.QDBookDetailFlutterActivity",
          "forcedTime": 5000,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/33534760",
            "https://i.gkd.li/i/33535207",
            "https://i.gkd.li/i/33535541"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/33534953",
          "exampleUrls": "https://e.gkd.li/c44b8465-e586-4dd7-8957-7e3c90097564"
        }
      ]
    },
    {
      "name": "功能类-自动[收起]书架上方推广",
      "desc": "点击1次[收起]",
      "key": 21,
      "rules": [
        {
          "matches": "@[vid=\"operationItemCloseIcon\"] - [text=\"收起\"]",
          "actionMaximum": 1,
          "activityIds": ".ui.activity.MainGroupActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/33534248",
          "exampleUrls": "https://e.gkd.li/d8f0794f-2cc4-463f-ae76-55a417ad4a5a",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-扫描自动确认[登录]",
      "desc": "点击[登录]",
      "key": 22,
      "rules": [
        {
          "matches": "@[id=\"scanLogin\"] <<(7,9) [vid=\"webViewContainer\"]",
          "activityIds": ".ui.activity.QDBrowserActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12903081",
            "https://i.gkd.li/i/28999743"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-订阅后续章节后自动[返回]",
      "desc": "返回小说正文页 (对于自定义订阅不可用)",
      "fastQuery": true,
      "key": 23,
      "rules": [
        {
          "matches": "[text^=\"订阅后续付费章\"]",
          "action": "none",
          "actionMaximum": 1,
          "key": 0,
          "name": "①未订最新章-待后续",
          "snapshotUrls": "https://i.gkd.li/i/26221300"
        },
        {
          "matches": "@[desc^=\"订阅后续付费章\"] <2 View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "action": "none",
          "actionMaximum": 1,
          "activityIds": ".flutter.BatchOrderDialogActivity",
          "forcedTime": 5000,
          "key": 1,
          "name": "①未订后续章",
          "snapshotUrls": "https://i.gkd.li/i/33536620"
        },
        {
          "matches": "[text=\"已订阅至最新章节\"]",
          "action": "back",
          "preKeys": [
            0
          ],
          "key": 2,
          "name": "②已订最新章-返回键",
          "snapshotUrls": [
            "https://i.gkd.li/i/26220488",
            "https://i.gkd.li/i/27051045",
            "https://i.gkd.li/i/27156111"
          ],
          "exampleUrls": "https://e.gkd.li/40df3df2-a5a5-4044-bf82-8622396bf39a"
        },
        {
          "matches": "@ImageView[desc^=\"已订阅\"] <2 View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "action": "none",
          "preKeys": [
            1
          ],
          "activityIds": ".flutter.BatchOrderDialogActivity",
          "forcedTime": 10000,
          "key": 3,
          "name": "②提示已订阅n章",
          "snapshotUrls": "https://i.gkd.li/i/33537343"
        },
        {
          "matches": "@[vid=\"btnBack\"][clickable=true] + * >6 [vid=\"layoutTitle\"][text=\"目录\"]",
          "preKeys": [
            2,
            3
          ],
          "forcedTime": 10000,
          "key": 4,
          "name": "③退出目录",
          "snapshotUrls": "https://i.gkd.li/i/26221238"
        }
      ]
    },
    {
      "name": "功能类-书友圈自动[打卡]",
      "key": 24,
      "rules": [
        {
          "matches": "[text=\"打卡\"] < [vid=\"layoutTopButton\"]",
          "actionDelay": 300,
          "actionMaximum": 1,
          "activityIds": ".ui.activity.CircleHomePageActivity",
          "forcedTime": 10000,
          "fastQuery": true,
          "resetMatch": "match",
          "snapshotUrls": "https://i.gkd.li/i/31843604",
          "exampleUrls": "https://e.gkd.li/a1fe7a7d-3863-4e5f-befc-47eae3a505f0",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-追更至最新章节弹窗",
      "desc": "①[取消勾选]提醒 ②x掉弹窗",
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 25,
      "rules": [
        {
          "matches": "[vid=\"switchUpdate\"][checkable=true][checked=true]",
          "key": 0,
          "name": "①[取消勾选]提醒",
          "snapshotUrls": "https://i.gkd.li/i/34316607"
        },
        {
          "matches": "@[vid=\"ivClose\"] +2 [visibleToUser=true] >2 [text=\"追更至最新章节\"]",
          "key": 1,
          "name": "②x掉弹窗",
          "snapshotUrls": "https://i.gkd.li/i/34316605",
          "exampleUrls": "https://e.gkd.li/f969ad39-da92-458f-95f6-e2939857c808"
        }
      ]
    },
    {
      "name": "全屏广告-活动弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 26,
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/imgBKT\"] + [id=\"com.qidian.QDReader:id/imgClose\"]",
          "key": 0
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/imgBKT\"] + [id=\"com.qidian.QDReader:id/imgClose\"]",
          "activityIds": [
            "com.qidian.QDReader.ui.activity.MainGroupActivity",
            "com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI",
            "com.qidian.QDReader.framework.widget.dialog.judian",
            "com.qidian.QDReader.ui.activity.BookLastPageNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640195",
            "https://i.gkd.li/i/12640158",
            "https://i.gkd.li/i/12818198",
            "https://i.gkd.li/i/13469004"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限提示信息",
      "desc": "点击顶部提醒左侧x按钮",
      "enable": false,
      "fastQuery": true,
      "key": 27,
      "rules": [
        {
          "matches": "@[id=\"com.qidian.QDReader:id/ivClose\"] + [text^=\"开启推送\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-福利中心-我知道了",
      "desc": "福利中心看视频后获得奖励，自动点击“我知道了”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 28,
      "rules": [
        {
          "matches": "View[desc=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击\"知道了\"",
      "desc": "福利中心自动点击\"知道了\"",
      "enable": false,
      "key": 29,
      "rules": [
        {
          "matches": "@TextView[text*=\"知道了\"] <<n View <<n WebView < FrameLayout < [vid=\"webViewContainer\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动看广告",
      "desc": "点击去完成",
      "enable": false,
      "key": 30,
      "rules": [
        {
          "matches": "[id=\"video\"] >(1,2) [text=\"去完成\"][visibleToUser=true]",
          "actionCd": 1500,
          "activityIds": "com.qidian.QDReader.ui.activity.QDBrowserActivity",
          "fastQuery": false,
          "snapshotUrls": [
            "https://i.gkd.li/i/23290942",
            "https://i.gkd.li/i/23561866",
            "https://i.gkd.li/i/23561912"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/23562885",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 31,
      "rules": [
        {
          "matches": "[text$=\"新版本\"] +2 * >2 [id=\"com.qidian.QDReader:id/cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12641026"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/upgrade_dialog_close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13116821"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 32,
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/btnEnterTeen\"] + [id=\"com.qidian.QDReader:id/btnCancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "活动弹窗",
      "enable": false,
      "key": 33,
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/imgBKT\"] + [id=\"com.qidian.QDReader:id/imgClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限提示信息",
      "desc": "点击顶部提醒左侧x按钮",
      "enable": false,
      "quickFind": true,
      "key": 34,
      "rules": [
        {
          "matches": "@[id=\"com.qidian.QDReader:id/ivClose\"] + [text^=\"开启推送\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "悬浮广告",
      "enable": false,
      "key": 35,
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/ivAd\"] + [id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.MainGroupActivity",
          "quickFind": true,
          "key": 0,
          "name": "书架页面右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/12717032"
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/floatingView\"] + [id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.QDBookDetailActivity",
          "key": 1,
          "name": "详情页右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13459031"
        }
      ]
    },
    {
      "name": "起点中文网登录自动确认",
      "desc": "自动点击【登录】",
      "enable": false,
      "key": 36,
      "rules": [
        {
          "matches": "[id=\"scanLogin\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "自动点击【x】",
      "enable": false,
      "key": 37,
      "rules": [
        {
          "matches": "View[desc=\"更多游戏\"] - ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "福利中心-我知道了",
      "desc": "福利中心看视频后获得奖励，自动点击“我知道了”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 38,
      "rules": [
        {
          "matches": "View[desc=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
