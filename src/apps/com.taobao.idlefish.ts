// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "闲鱼",
  "id": "com.taobao.idlefish",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][desc=null] < [desc^=\"开启系统通知\"]",
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity",
          "snapshotUrls": "https://i.gkd.li/i/13538351",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-手机信息权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text*=\"手机信息权限\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".maincontainer.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13620277",
          "exampleUrls": "https://e.gkd.li/81e3e4d8-f297-4476-b22c-73f0b97879ee",
          "key": 0
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
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"立即升级\"] -2 [text=\"暂不升级\"]",
          "activityIds": ".maincontainer.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13832272",
          "key": 0
        },
        {
          "matches": "[text=\"立即升级\"] -2 [text=\"暂不升级\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13832272"
        },
        {
          "matches": "@ImageView[text=null][desc=null][clickable=true][width>84 && width<124] - View[height<158] <2 [childCount=3] < RelativeLayout - [vid=\"fish_layer_js_native_window_background_view\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/26053923"
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "WebView[text=\"Rax App\"] > [id=\"root\"] >(3,6) View[index=parent.childCount.minus(1)][clickable=true]",
          "activityIds": "com.taobao.idlefish.maincontainer.activity.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14551046",
            "https://i.gkd.li/i/24981766"
          ]
        },
        {
          "matches": "@TextView[width<250 && height<250] - [childCount=0][text=\"收下红包\"] <<n [vid=\"fish_layer_container_id\"]",
          "activityIds": "com.taobao.idlefish.search_implement.SearchResultActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23125419"
        },
        {
          "matches": "@TextView[width<210 && height<210][clickable=true] <<n WebView[childCount!=0][text=\"夜市氛围弹框\"] <<n [vid=\"fish_layer_container_id\"]",
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "fastQuery": true,
          "key": 2,
          "name": "夜市氛围广告",
          "snapshotUrls": "https://i.gkd.li/i/23183586"
        },
        {
          "matches": "WebView[text=\"Rax App\"] > [id=\"root\"] >(3,6) View[index=parent.childCount.minus(1)][clickable=true]",
          "activityIds": ".maincontainer.activity.MainActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14551046",
            "https://i.gkd.li/i/24981766"
          ]
        },
        {
          "matches": "@[index=parent.childCount.minus(1)][clickable=true][width<250][height<250] <n View <<6 m0 <<6 [vid=\"fish_layer_container_id\"]",
          "activityIds": ".search_implement.SearchResultActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/23125419"
        },
        {
          "matches": "@[clickable=true][width<200] <<(4,6) View[id=\"root\"] <<(5,8) [vid=\"fish_layer_container_id\"]",
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/23183586",
            "https://i.gkd.li/i/25796344"
          ]
        },
        {
          "matches": "WebView[text=\"Rax App\"] > [id=\"root\"] >(3,6) View[index=parent.childCount.minus(1)][index>=1]",
          "actionMaximum": 1,
          "activityIds": "com.taobao.idlefish.maincontainer.activity.MainActivity",
          "resetMatch": "app",
          "key": 6,
          "name": "红包弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/14551046",
            "https://i.gkd.li/i/24981766",
            "https://i.gkd.li/i/26865707"
          ]
        },
        {
          "matches": "@[clickable=true][width<200] <<(4,6) View[id=\"root\"] <<(5,8) [vid=\"fish_layer_container_id\"]",
          "actionMaximum": 1,
          "activityIds": ".maincontainer.activity.MainActivity",
          "resetMatch": "app",
          "key": 7,
          "name": "夜市弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/23694103",
            "https://i.gkd.li/i/23183586",
            "https://i.gkd.li/i/25796344"
          ]
        },
        {
          "matches": "@[index=parent.childCount.minus(1)][clickable=true][width<250][height<250] <n View <<6 m0 <<6 [vid=\"fish_layer_container_id\"]",
          "activityIds": "com.taobao.idlefish.search_implement.SearchResultActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/23125419"
        }
      ]
    },
    {
      "name": "功能类-自动点击[查看原图]",
      "key": 4,
      "rules": [
        {
          "matches": "[desc=\"查看原图\"][visibleToUser=true]",
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "snapshotUrls": "https://i.gkd.li/i/15463399",
          "exampleUrls": "https://m.gkd.li/57941037/12b60303-4fb8-4786-b636-4efef10f3d78",
          "key": 0
        },
        {
          "matches": "[desc=\"查看原图\"][visibleToUser=true]",
          "activityIds": [
            "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity",
            "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15463399",
            "https://i.gkd.li/i/27207770"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/12b60303-4fb8-4786-b636-4efef10f3d78",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-关闭小额免密支付",
      "desc": "关闭支付时的小额免密支付选项",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@CheckBox[clickable=true][checked=true] < * - [text$=\"免密支付\"][visibleToUser=true]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23455398",
            "https://i.gkd.li/i/23455378"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示",
      "desc": "关闭消息推送开启提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "[desc^=\"开启系统通知\"] > ImageView[clickable=true][desc=null]",
          "key": 0
        },
        {
          "matches": "[desc^=\"开启系统通知\"||desc^=\"开启消息通知\"] > ImageView[clickable=true][desc=null]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示",
      "enable": false,
      "actionMaximum": 1,
      "key": 7,
      "rules": [
        {
          "matches": "@Button[text=\"取消\"] <<n FrameLayout >n TextView[text*=\"手机信息\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-红包弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "WebView[text=\"Rax App\"] > [id=\"root\"] >6 View[index=2][clickable=true]",
          "actionMaximum": 1,
          "activityIds": "com.taobao.idlefish.maincontainer.activity.MainActivity",
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14551046"
        }
      ]
    },
    {
      "name": "分段广告-搜索结果页广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@[clickable=true] > [desc$=\"广告\"]",
          "excludeMatches": "@[clickable=true] > [desc^=\"反馈成功\"]",
          "action": "longClick",
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14723597",
            "https://i.gkd.li/i/14723718"
          ]
        },
        {
          "matches": "[desc^=\"不喜欢该商品\"] > ImageView[index=1][visibleToUser=true]",
          "preKeys": 0,
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14723632"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "警告⚠️: 该规则有可能会误触,请谨慎开启",
      "enable": false,
      "forcedTime": 100000,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "@[longClickable=true] >3 [text=\"广告\"][visibleToUser=true]",
          "action": "longClick",
          "activityIds": ".search_implement.SearchResultActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/19603954",
          "exampleUrls": "https://e.gkd.li/ca42e088-6fae-4402-a000-06418bf054cf"
        },
        {
          "matches": "@[longClickable=true][childCount=0][height>width] < [childCount>1] >(1,3,4) [text=\"广告\"][visibleToUser=true]",
          "action": "longClick",
          "activityIds": [
            ".maincontainer.activity.MainActivity",
            ".detail.DetailActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/19604324",
            "https://i.gkd.li/i/29751786",
            "https://i.gkd.li/i/29753749",
            "https://i.gkd.li/i/31875408"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29753324",
          "exampleUrls": "https://e.gkd.li/738c623e-58fe-45a1-9a28-957f0f812c72"
        },
        {
          "matches": "View[desc$=\"广告\"][longClickable=true][visibleToUser=true][childCount>2]",
          "action": "longClick",
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/19593497",
          "excludeSnapshotUrls": "https://i.gkd.li/i/19604467"
        },
        {
          "matches": "[desc=\"引起不适\"][visibleToUser=true]",
          "actionDelay": 50,
          "actionCd": 500,
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "activityIds": [
            "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
            "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity"
          ],
          "key": 3,
          "name": "②点击[引起不适]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19593500",
            "https://i.gkd.li/i/19603913",
            "https://i.gkd.li/i/19604317",
            "https://i.gkd.li/i/29751857"
          ]
        },
        {
          "matches": "@[clickable=true] +2 [text=\"商品不感兴趣\"]",
          "preKeys": [
            1
          ],
          "activityIds": ".maincontainer.activity.MainActivity",
          "key": 4,
          "name": "②点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/29753752"
        },
        {
          "matches": "[parent=null]",
          "action": "none",
          "actionMaximum": 1,
          "preKeys": [
            3
          ],
          "activityIds": [
            ".detail.DetailActivity",
            ".maincontainer.activity.MainActivity",
            ".search_implement.SearchResultActivity"
          ],
          "key": 5,
          "name": "③仅消除preKeys=20蓄势"
        }
      ]
    },
    {
      "name": "功能类-Web登录自动授权",
      "desc": "登录确认-打勾-确认登录",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@[clickable=true] > [vid=\"confirm\"][visibleToUser=true]",
          "actionMaximum": 1,
          "resetMatch": "match",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25619592",
            "https://i.gkd.li/i/25620240"
          ]
        },
        {
          "matches": [
            "[text=\"服务协议及隐私保护\"]",
            "[text=\"同意\"][clickable=true]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25620304"
        },
        {
          "matches": [
            "[text=\"扫码登录\"]",
            "[text=\"确认登录\"][clickable=true][visibleToUser=true]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/25619659",
            "https://i.gkd.li/i/25620267"
          ],
          "exampleUrls": "https://e.gkd.li/9394183f-855c-4bd3-b089-272f6e9807ff"
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "关闭各类局部广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<100] <(2,5) FrameLayout <<(3,4) [vid=\"fish_layer_container_id\"]",
          "activityIds": ".maincontainer.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25796897",
            "https://i.gkd.li/i/26184285"
          ],
          "key": 0
        },
        {
          "matches": "Image[width<60 && height<60] < @View <n [childCount=2] < [id=\"root\"] <<2 * <2 WebView <<2 [vid=\"fish_layer_container_id\"]",
          "activityIds": ".detail.DetailActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/26837679"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "商品详情页右侧-x掉",
      "key": 13,
      "rules": [
        {
          "matches": "Image[width<60 && height<60] < @View <n [childCount=2] < [id=\"root\"] <<2 * <2 WebView <<2 [vid=\"fish_layer_container_id\"]",
          "activityIds": ".detail.DetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26837679",
          "exampleUrls": "https://e.gkd.li/d08c424f-8411-4d65-ba23-02703e328176",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[勾选]原图",
      "desc": "选择发送图片时,点击1次[原图]",
      "key": 14,
      "rules": [
        {
          "matches": "[clickable=true][desc=\"原图\"]",
          "actionMaximum": 1,
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "resetMatch": "match",
          "snapshotUrls": [
            "https://i.gkd.li/i/30770701",
            "https://i.gkd.li/i/30770836"
          ],
          "exampleUrls": "https://e.gkd.li/45d7ad2e-b436-4d30-be4b-a90584c3d2a0",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-开启个性化",
      "desc": "关闭开启个性化提示",
      "enable": false,
      "resetMatch": "app",
      "key": 15,
      "rules": [
        {
          "matches": "[text*=\"开启个性化\"] +n View[childCount=1] > Image[text.length>20]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动查看原图",
      "desc": "浏览图片时自动切换至原图模式",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "@[desc=\"查看原图\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15463399",
            "https://i.gkd.li/i/27207770"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动选中发送原图",
      "desc": "图片和视频选择器-自动选中底部中间的发送原图",
      "enable": false,
      "actionMaximum": 1,
      "key": 17,
      "rules": [
        {
          "matches": "[clickable=true][desc=\"原图\"]",
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/18824808",
            "https://i.gkd.li/i/30770701",
            "https://i.gkd.li/i/30770836"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-登录授权",
      "desc": "点击确认授权按钮",
      "enable": false,
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "@[clickable=true] > [vid=\"confirm\"][visibleToUser=true]",
          "actionMaximum": 1,
          "resetMatch": "match",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25619592",
            "https://i.gkd.li/i/25620240"
          ]
        },
        {
          "matches": [
            "[text=\"服务协议及隐私保护\"]",
            "[text=\"同意\"][clickable=true]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25620304"
        },
        {
          "matches": [
            "[text=\"扫码登录\"]",
            "[text=\"确认登录\"][clickable=true][visibleToUser=true]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/25619659",
            "https://i.gkd.li/i/25620267"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-通知提示",
      "enable": false,
      "actionMaximum": 1,
      "key": 19,
      "rules": [
        {
          "matches": "[desc^=\"开启系统通知\"] > ImageView[clickable=true][desc=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 20,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][vid=\"splash_ad_close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34161773",
          "key": 0
        }
      ]
    }
  ]
});
