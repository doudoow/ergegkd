// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "大学搜题酱",
  "id": "com.zmzx.college.search",
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
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12867875",
            "https://i.gkd.li/i/16812698"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12867875"
        },
        {
          "matches": "[id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.8981",
            "top": "width * 0.1574"
          },
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14434685",
          "exampleUrls": "https://m.gkd.li/57941037/45daad88-68a3-41b9-933a-943eeae0e4ff"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/iv_close\"]",
          "activityIds": [
            "com.zmzx.college.search.activity.main.activity.MainActivity",
            "com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity",
            "com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity",
            "com.zmzx.college.search.activity.common.CommonCacheHybridActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12867751",
            "https://i.gkd.li/i/12894813",
            "https://i.gkd.li/i/13522998",
            "https://i.gkd.li/i/14554866"
          ]
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup <n * + ViewGroup >3 [text=\"广告\"]",
          "activityIds": [
            "com.zmzx.college.search.activity.main.activity.MainActivity",
            "com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13451304",
            "https://i.gkd.li/i/14519779",
            "https://i.gkd.li/i/14731371"
          ]
        },
        {
          "matches": "Image < @View +3 View > View > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "key": 2,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13523288"
        },
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after_close\"]",
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "字节广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893408",
            "https://i.gkd.li/i/13929945"
          ]
        },
        {
          "matches": "[vid=\"iv_itr_close\"]",
          "activityIds": "com.mercury.sdk.activity.InterstitialPortraitActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/15360368"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            ".activity.main.activity.MainActivity",
            ".activity.questionsearch.camera.activity.PicSearchResultActivity",
            ".activity.camerasdk.ZybCameraSDKActivity",
            ".activity.common.CommonCacheHybridActivity"
          ],
          "fastQuery": true,
          "key": 5,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12867751",
            "https://i.gkd.li/i/12894813",
            "https://i.gkd.li/i/13522998",
            "https://i.gkd.li/i/14554866"
          ]
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup <n * + ViewGroup >3 [text=\"广告\"]",
          "activityIds": [
            ".activity.main.activity.MainActivity",
            ".activity.questionsearch.camera.activity.PicSearchResultActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13451304",
            "https://i.gkd.li/i/14519779",
            "https://i.gkd.li/i/14731371"
          ]
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"close_m_image_left_text_right_app_compliance\"]",
          "activityIds": [
            "com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
            "com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13849755",
            "https://i.gkd.li/i/13929965"
          ]
        },
        {
          "matches": "[id^=\"com.zmzx.college.search:id/ad_flag_source\"] - * > [id=\"com.zmzx.college.search:id/close\"]",
          "activityIds": "com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13063381"
        },
        {
          "matches": "[vid=\"close_m_image_left_text_right_app_compliance\"]",
          "activityIds": [
            ".activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
            ".activity.booksearch.result.activity.AnswerBrowseActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13849755",
            "https://i.gkd.li/i/13929965"
          ]
        },
        {
          "matches": "[id^=\"com.zmzx.college.search:id/ad_flag_source\"] - * > [vid=\"close\"]",
          "activityIds": ".activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13063381"
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
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/update_close\"]",
          "activityIds": [
            ".activity.main.activity.MainActivity",
            ".activity.init.InitActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13063373",
            "https://i.gkd.li/i/13623469"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.zmzx.college.search:id/update_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"update_close\"]",
          "activityIds": [
            ".activity.main.activity.MainActivity",
            ".activity.init.InitActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13063373",
            "https://i.gkd.li/i/13623469"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] - [id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "activityIds": ".activity.main.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13440939",
          "key": 0
        },
        {
          "matches": "[text=\"开启推送通知\"] - [vid=\"siv_dialog_close\"]",
          "activityIds": ".activity.main.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13440939",
          "key": 1
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
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/iv_logo\"] + [id=\"com.zmzx.college.search:id/siv_close\"]",
          "activityIds": ".activity.camerasdk.ZybCameraSDKActivity",
          "snapshotUrls": "https://i.gkd.li/i/13476308",
          "key": 0
        },
        {
          "matches": "[id=\"com.zmzx.college.search:id/iv_logo\"] + [id=\"com.zmzx.college.search:id/siv_close\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_logo\"] + [vid=\"siv_close\"]",
          "activityIds": ".activity.camerasdk.ZybCameraSDKActivity",
          "snapshotUrls": "https://i.gkd.li/i/13476308",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-邀好友得开学好礼",
      "desc": "使用返回关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "[visibleToUser=true][text=\"邀好友得开学好礼\"] <<n [vid=\"webview_root_layout\"]",
          "action": "back",
          "activityIds": "com.zmzx.college.search.activity.common.CommonCacheHybridActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14555042",
          "exampleUrls": "https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb",
          "key": 0
        },
        {
          "matches": "[text=\"邀好友得开学好礼\"] <<n [vid=\"webview_root_layout\"]",
          "action": "back",
          "activityIds": "com.zmzx.college.search.activity.common.CommonCacheHybridActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14555042",
          "exampleUrls": "https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb",
          "key": 1
        },
        {
          "matches": "[visibleToUser=true][text=\"邀好友得开学好礼\"] <<n [vid=\"webview_root_layout\"]",
          "action": "back",
          "activityIds": ".activity.common.CommonCacheHybridActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14555042",
          "exampleUrls": "https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb",
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-底部卡片广告",
      "desc": "点击关闭-点击不感兴趣",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@[desc$=\"dislike\"] <<n [vid=\"rlBottomADContainer\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15902162"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15902298"
        }
      ]
    },
    {
      "name": "通知提示-请求推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "ImageView[id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/iv_close\"]",
          "activityIds": [
            "com.zmzx.college.search.activity.main.activity.MainActivity",
            "com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity",
            "com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity",
            "com.zmzx.college.search.activity.common.CommonCacheHybridActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12867751",
            "https://i.gkd.li/i/12894813",
            "https://i.gkd.li/i/13522998",
            "https://i.gkd.li/i/14554866"
          ]
        },
        {
          "matches": [
            "ViewGroup[childCount=2] [text=\"广告\"]",
            "ViewGroup @ViewGroup[clickable=true][childCount=1] > ImageView"
          ],
          "activityIds": [
            "com.zmzx.college.search.activity.main.activity.MainActivity",
            "com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity"
          ],
          "key": 1,
          "name": "快手广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13346628",
            "https://i.gkd.li/i/13451304",
            "https://i.gkd.li/i/14519779"
          ]
        },
        {
          "matches": "Image < @View +3 View > View > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "key": 2,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13523288"
        },
        {
          "matches": "[id$=\"tt_reward_full_count_down\"]",
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13929945"
        }
      ]
    },
    {
      "name": "通知提示-申请开启推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] - [id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440939",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "关闭各种全屏广告弹窗，包括字节广告、会员推广等",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "fastQuery": true,
          "key": 0,
          "name": "广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/12867751",
            "https://i.gkd.li/import/12894813",
            "https://i.gkd.li/import/13522998"
          ]
        },
        {
          "matches": "[vid=\"iv_itr_close\"]",
          "fastQuery": true,
          "key": 1,
          "name": "广告-2",
          "snapshotUrls": "https://i.gkd.li/i/15360368"
        },
        {
          "matches": "ImageView - FrameLayout >3 FrameLayout[childCount=1] > ImageView",
          "key": 2,
          "name": "广告-3",
          "snapshotUrls": "https://i.gkd.li/i/15372979"
        },
        {
          "matches": "@ImageView <n RelativeLayout > RelativeLayout > RelativeLayout > [text=\"反馈\"]",
          "fastQuery": true,
          "key": 3,
          "name": "广告-4",
          "snapshotUrls": "https://i.gkd.li/i/15521123"
        },
        {
          "matches": "@Image[text.length=0] < View +(3,5) View > View > TextView[text$=\"广告\"]",
          "key": 4,
          "name": "字节广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13523288",
            "https://i.gkd.li/i/14965922",
            "https://i.gkd.li/i/15316457",
            "https://i.gkd.li/i/15442099"
          ]
        },
        {
          "matches": "@TextView[text.length=0] <n View > [text*=\"免广告\"]",
          "preKeys": [
            6,
            7,
            8,
            9,
            10
          ],
          "key": 5,
          "name": "关闭开通会员免广告打扰弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/15316467"
          ]
        },
        {
          "matches": "ImageView[id=\"com.zmzx.college.search:id/iv_close\"]",
          "activityIds": [
            "com.zmzx.college.search.activity.main.activity.MainActivity",
            "com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12867751",
            "https://i.gkd.li/import/12894813"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -3 ViewGroup > @ViewGroup[clickable=true] > ImageView",
          "activityIds": "com.bbk.launcher2.Launcher",
          "key": 7,
          "name": "快手广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13346628"
        },
        {
          "matches": [
            "ViewGroup > ViewGroup > ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup > ViewGroup > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]"
          ],
          "activityIds": "com.zmzx.college.search.activity.main.activity.MainActivity",
          "key": 8,
          "name": "快手广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13451304"
        },
        {
          "matches": "[id=\"com.zmzx.college.search:id/ad_flag_source_layout\"] + [id=\"com.zmzx.college.search:id/iv_close\"]",
          "activityIds": "com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity",
          "key": 9,
          "name": "字节广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13522998"
        },
        {
          "matches": "@Image < View +3 View > View > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "key": 10,
          "name": "字节广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13523288"
        },
        {
          "matches": "@[clickable=true] > [id=\"com.zmzx.college.search:id/tt_reward_full_count_down_after_close\"]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "fastQuery": true,
          "key": 11,
          "name": "字节广告-3",
          "snapshotUrls": "https://i.gkd.li/import/12893408"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "关闭首页、教材详情页等位置的信息流广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "ImageView < FrameLayout > FrameLayout[childCount=1] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15373051"
        },
        {
          "matches": "[text=\"广告\"] <<n [name*=\".View\"] +n [name*=\".View\"] >(1, 2) [name*=\".Image\"][index=0]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/15521151",
            "https://i.gkd.li/i/16319245"
          ]
        },
        {
          "matches": "[vid=\"iv_native_close\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15527866"
        },
        {
          "matches": "@Image < View + View > View >n [text=\"广告\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15885694"
        },
        {
          "matches": "@ImageView - ImageView <(2) * > TextView[text.length>0] < * <n * > TextView[text.length>0]",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/16157056",
            "https://i.gkd.li/i/16571916"
          ]
        },
        {
          "matches": "[vid=\"ms_item_pre_render_smallimage_close\"]",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16398731"
        },
        {
          "matches": "[vid=\"tvClose\"]",
          "fastQuery": true,
          "key": 6,
          "name": "首页底部广告",
          "snapshotUrls": "https://i.gkd.li/i/14518991"
        },
        {
          "matches": "@[desc$=\"dislike\"] <<n [vid=\"rlBottomADContainer\"]",
          "fastQuery": true,
          "key": 7,
          "name": "教材底部广告",
          "snapshotUrls": "https://i.gkd.li/i/15902162"
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "fastQuery": true,
          "key": 8,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/15913004",
            "https://i.gkd.li/i/15902298"
          ]
        },
        {
          "matches": "@TextView[text.length=0] <n View > [text*=\"免广告\"]",
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8
          ],
          "key": 9,
          "name": "关闭开通会员免广告打扰弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/16319260"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-首页-推送通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "ImageView[id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[vid=\"close_m_image_left_text_right_app_compliance\"]",
          "activityIds": "com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13849755"
        },
        {
          "matches": "[id^=\"com.zmzx.college.search:id/ad_flag_source\"] - * > [id=\"com.zmzx.college.search:id/close\"]",
          "activityIds": "com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13063381"
        }
      ]
    },
    {
      "name": "权限提示-申请开启推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] - [id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440939",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求好评弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/iv_logo\"] + [id=\"com.zmzx.college.search:id/siv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-教材内弹窗广告1",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-教材内弹窗广告2",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-教材内底部广告",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/close_m_image_left_text_right_app_compliance\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-推送通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "ImageView[id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/update_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "申请开启推送通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] - [id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440939",
          "key": 0
        }
      ]
    },
    {
      "name": "请求好评弹窗",
      "enable": false,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"com.zmzx.college.search:id/iv_logo\"] + [id=\"com.zmzx.college.search:id/siv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
