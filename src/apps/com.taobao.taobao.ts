// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "淘宝",
  "id": "com.taobao.taobao",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[vid*=\"close\"] > [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17576743",
            "https://i.gkd.li/i/17578451"
          ],
          "key": 0
        },
        {
          "matches": "@[vid*=\"close\"] > [text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/21708258",
          "key": 1
        },
        {
          "matches": "[id=\"com.taobao.taobao:id/close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "关闭各种全屏弹窗广告，包括会员促销、活动邀请等",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"关闭按钮\"] - [vid=\"poplayer_native_state_id\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity",
            "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
            "com.taobao.android.detail.wrapper.activity.DetailActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12648734",
            "https://i.gkd.li/i/12648746",
            "https://i.gkd.li/i/14060521",
            "https://i.gkd.li/i/14905372"
          ]
        },
        {
          "matches": "@ImageView[desc=\"图片\"][childCount=0][clickable=true][visibleToUser=true][width<180&&height<180] <<n [vid=\"poplayer_native_state_id\"]",
          "actionMaximum": 1,
          "activityIds": "com.taobao.tao.welcome.Welcome",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/18218537",
            "https://i.gkd.li/i/20277438"
          ],
          "exampleUrls": "https://e.gkd.li/5c77eaf1-b4dc-48c9-96af-131ae9644ffa"
        },
        {
          "matches": "WebView[text=\"红包签到\"] > [id=\"ice-container\"] >(3,4) View[childCount=3] > [name$=\"Image\" || name$=\"Button\"][text*=\"jpg\" || text=\"关闭\"][visibleToUser=true]",
          "activityIds": "com.taobao.browser.BrowserActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/18587158",
            "https://i.gkd.li/i/18587159"
          ],
          "exampleUrls": "https://e.gkd.li/c7c06d50-a384-4869-a14f-95d219d9d08c"
        },
        {
          "matches": "[text=\"规则\"] +2 @View[childCount=1][clickable=true] > Image[childCount=0][text!=null] <<n [vid=\"tms_tab_content_view\"]",
          "activityIds": "com.taobao.themis.container.app.TMSActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/22308745",
          "exampleUrls": "https://e.gkd.li/dbf9ea95-3674-4cb2-8a88-dfb96c24e71b"
        },
        {
          "matches": "@[clickable=true][childCount=0][width<150 && height<150][index=parent.childCount.minus(1)] -n TextView[text.length>0] <n View <<n WebView[vid=\"poplayer_inner_view\"]",
          "activityIds": [
            "com.taobao.search.uniform.SearchActivity",
            "com.taobao.android.detail.alittdetail.TTDetailActivity",
            "com.taobao.tao.TBMainActivity"
          ],
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/22949963",
            "https://i.gkd.li/i/23289412",
            "https://i.gkd.li/i/23567053",
            "https://i.gkd.li/i/24982514"
          ]
        },
        {
          "matches": "@[desc=\"关闭按钮\"] - [vid=\"poplayer_native_state_id\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity",
            "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
            "com.taobao.android.detail.wrapper.activity.DetailActivity",
            "com.alibaba.triver.container.TriverMainActivity"
          ],
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642792",
            "https://i.gkd.li/i/13180826",
            "https://i.gkd.li/i/12648734",
            "https://i.gkd.li/i/12648746",
            "https://i.gkd.li/i/13198239",
            "https://i.gkd.li/i/13198052",
            "https://i.gkd.li/i/13249418",
            "https://i.gkd.li/i/14905372"
          ]
        },
        {
          "matches": "@[desc=\"关闭按钮\"] - [vid=\"poplayer_native_state_id\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity",
            "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
            "com.taobao.android.detail.wrapper.activity.DetailActivity",
            "com.alibaba.android.ultron.vfw.weex2.highPerformance.widget.UltronTradeHybridActivity",
            "com.taobao.message.activity.ChatActivity"
          ],
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/12648734",
            "https://i.gkd.li/i/12648746",
            "https://i.gkd.li/i/14060521",
            "https://i.gkd.li/i/14905372",
            "https://i.gkd.li/i/30856922",
            "https://i.gkd.li/i/34168285"
          ]
        },
        {
          "matches": "@[name$=\".TextView\" || name$=\".Image\"][clickable=true][childCount=0][width<150 && height<150][index=parent.childCount.minus(1)] <n View >(1,2,3) [id=null][text$=\"用\" || text$=\"收下\" || text*=\"立减\"] <<n WebView[vid=\"poplayer_inner_view\"]",
          "activityIds": [
            "com.taobao.search.uniform.SearchActivity",
            "com.taobao.android.detail.alittdetail.TTDetailActivity",
            "com.taobao.tao.TBMainActivity"
          ],
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/22949963",
            "https://i.gkd.li/i/23289412",
            "https://i.gkd.li/i/23567053",
            "https://i.gkd.li/i/24982514",
            "https://i.gkd.li/i/26044614",
            "https://i.gkd.li/i/28312957"
          ]
        },
        {
          "matches": "Image[text*=\".jpg\"][width<150 && height<150] < [visibleToUser=true] < @View[clickable=true][childCount=1] <<n FrameLayout[id=null] - [vid=\"layermanager_penetrate_webview_container_id\"]",
          "activityIds": "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/30710740"
        },
        {
          "matches": "@[desc=\"关闭按钮\"] - [vid=\"poplayer_native_state_id\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity",
            "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
            "com.taobao.android.detail.wrapper.activity.DetailActivity",
            "com.alibaba.triver.container.TriverMainActivity",
            "com.alibaba.android.ultron.vfw.weex2.highPerformance.widget.UltronTradeHybridActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/import/13198052",
            "https://i.gkd.li/import/13249418",
            "https://i.gkd.li/import/14060521",
            "https://i.gkd.li/i/12642792",
            "https://i.gkd.li/i/13180826",
            "https://i.gkd.li/i/12648734",
            "https://i.gkd.li/i/12648746",
            "https://i.gkd.li/i/13198239",
            "https://i.gkd.li/i/14905372",
            "https://i.gkd.li/i/22319206",
            "https://i.gkd.li/i/30856922"
          ]
        },
        {
          "matches": "[text=\"关闭\"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*=\"0元下单\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 10,
          "name": "\"「0元下单」权益\"弹窗",
          "snapshotUrls": "https://i.gkd.li/import/14155537"
        },
        {
          "matches": "View[id=null] > [text=\"立即参加\"] + TextView[id=null][clickable=true]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity"
          ],
          "key": 11,
          "name": "视频页面-弹窗-类型1",
          "snapshotUrls": "https://i.gkd.li/import/12642813"
        },
        {
          "matches": "@Image[text.length>40] < View - View >n TextView[text*=\"立即\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity"
          ],
          "key": 12,
          "name": "视频页面-签到弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642798",
            "https://i.gkd.li/import/14163734"
          ]
        },
        {
          "matches": "View[childCount=2] >3 View[text=\"立即添加\"] + View[text=\"取消\"]",
          "activityIds": "com.alibaba.triver.container.TriverMainActivity",
          "key": 13,
          "name": "将小组件添加到手机桌面",
          "snapshotUrls": [
            "https://i.gkd.li/import/13598578",
            "https://i.gkd.li/import/13853510"
          ]
        },
        {
          "matches": "TextView[text=\"去首页\"] + TextView[text=\"退出\"]",
          "activityIds": [
            "com.taobao.themis.container.app.TMSActivity",
            "com.alibaba.triver.container.TriverMainActivity"
          ],
          "fastQuery": true,
          "key": 14,
          "name": "各级页面-添加到首页弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/13197553",
            "https://i.gkd.li/import/13197546"
          ]
        },
        {
          "matches": "@ImageView[desc=\"图片\"][childCount=0][clickable=true][visibleToUser=true][index=parent.childCount.minus(1)][width<200&&height<200]",
          "actionMaximum": 1,
          "activityIds": "com.taobao.tao.welcome.Welcome",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 15,
          "snapshotUrls": [
            "https://i.gkd.li/i/18218537",
            "https://i.gkd.li/i/20277438"
          ]
        },
        {
          "matches": "[text*=\"淘宝闪购\"] <n View + View[childCount=1] > Image[text.length>20]",
          "activityIds": "com.taobao.tao.welcome.Welcome",
          "key": 16,
          "snapshotUrls": [
            "https://i.gkd.li/i/22319191"
          ]
        },
        {
          "matches": "@[name$=\".TextView\" || name$=\".Image\"][clickable=true][childCount=0][width<150 && height<150][index=parent.childCount.minus(1)] <n View >(1,2,3) [id=null][text$=\"用\" || text$=\"收下\" || text*=\"立减\"] <<n WebView[vid=\"poplayer_inner_view\"]",
          "activityIds": [
            "com.taobao.search.uniform.SearchActivity",
            "com.taobao.android.detail.alittdetail.TTDetailActivity",
            "com.taobao.tao.TBMainActivity"
          ],
          "key": 17,
          "snapshotUrls": [
            "https://i.gkd.li/i/22949963",
            "https://i.gkd.li/i/23289412",
            "https://i.gkd.li/i/23567053",
            "https://i.gkd.li/i/24982514",
            "https://i.gkd.li/i/26044614",
            "https://i.gkd.li/i/28312957"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][width<150 && height<155] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid=\"weex_render_view\"]",
          "activityIds": "com.taobao.weex.WXActivity",
          "fastQuery": true,
          "key": 18,
          "name": "充值类商品界面广告",
          "snapshotUrls": "https://i.gkd.li/i/23923991"
        },
        {
          "matches": "Dialog > Image[text.length>40] + Button[text=\"关闭\"]",
          "activityIds": "com.taobao.weex.WXActivity",
          "key": 19,
          "snapshotUrls": "https://i.gkd.li/i/26164501"
        }
      ]
    },
    {
      "name": "局部广告-消息页面热门活动卡片",
      "key": 2,
      "rules": [
        {
          "matches": "[desc.length>0 || text.length>0] + @LinearLayout[clickable=true] + FrameLayout > TextView[text=\"퀺\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13197877",
            "https://i.gkd.li/i/23140899"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@Image[childCount=0][clickable=true][text!=null] < View <2 View < WebView < o0 <2 WebView < [id=\"android:id/content\"]",
          "activityIds": "com.taobao.browser.BrowserActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13521702"
        },
        {
          "matches": "@Image[childCount=0][clickable=true][text!=null] <2 View < View < View <9 View < WebView < m0 <2 WebView < RelativeLayout < [vid=\"tms_tab_content_view\"]",
          "activityIds": "com.taobao.themis.container.app.TMSActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22291107",
          "exampleUrls": "https://e.gkd.li/45f8b78d-bc6a-4c1a-994d-6b5bce2c96a0"
        },
        {
          "matches": "@FrameLayout[desc=\"关闭\"][clickable=true] <<n [vid=\"ll_dinamicx_container\"]",
          "activityIds": "com.taobao.android.detail.alittdetail.TTDetailActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23289445"
        },
        {
          "matches": "View[childCount=2] > @Image[text!=\"\"][clickable=true] + View",
          "activityIds": "com.taobao.browser.BrowserActivity",
          "key": 3,
          "name": "商品详情右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13521702"
        },
        {
          "matches": "@Image[childCount=0][clickable=true][text!=null] < View <2 View < WebView < o0 <2 WebView < [id=\"android:id/content\"]",
          "activityIds": "com.taobao.browser.BrowserActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13521702"
        },
        {
          "matches": "@Image[childCount=0][clickable=true][text!=null] <2 View < View < View <9 View < WebView < m0 <2 WebView < RelativeLayout < [vid=\"tms_tab_content_view\"]",
          "activityIds": "com.taobao.themis.container.app.TMSActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/22291107",
          "exampleUrls": "https://e.gkd.li/45f8b78d-bc6a-4c1a-994d-6b5bce2c96a0"
        },
        {
          "matches": "@FrameLayout[desc=\"关闭\"][clickable=true] <<n [vid=\"ll_dinamicx_container\"]",
          "activityIds": "com.taobao.android.detail.alittdetail.TTDetailActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/23289445"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true][text!=null] <n View >(1,2) [visibleToUser=true][text*=\"消息通知\" || text*=\"系统通知\"] <<n [vid=\"poplayer_inner_view\"]",
          "activityIds": [
            "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
            "com.taobao.tao.TBMainActivity",
            "com.taobao.tao.welcome.Welcome"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13446901",
            "https://i.gkd.li/i/13455424",
            "https://i.gkd.li/i/15104645",
            "https://i.gkd.li/i/18407606",
            "https://i.gkd.li/i/21789921"
          ],
          "key": 0
        },
        {
          "matches": "[text^=\"开启系统通知\"] + @Image[visibleToUser=true] <<n [vid=\"poplayer_inner_view\"]",
          "key": 1
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true][text!=null] <n View >(1,2) [visibleToUser=true][text^=\"开启\" || text*=\"消息\"][text*=\"通知\"] <<n [vid=\"poplayer_inner_view\"]",
          "activityIds": [
            "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
            "com.taobao.tao.TBMainActivity",
            "com.taobao.tao.welcome.Welcome",
            "com.alibaba.android.ultron.vfw.weex2.highPerformance.widget.UltronTradeHybridActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13446901",
            "https://i.gkd.li/i/13455424",
            "https://i.gkd.li/i/15104645",
            "https://i.gkd.li/i/18407606",
            "https://i.gkd.li/i/21789921",
            "https://i.gkd.li/i/30726795"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-各级页面添加到首页弹窗",
      "desc": "点击退出",
      "key": 5,
      "rules": [
        {
          "matches": "TextView[text=\"去首页\"] + TextView[text=\"退出\"]",
          "activityIds": [
            "com.taobao.themis.container.app.TMSActivity",
            "com.alibaba.triver.container.TriverMainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13197553",
            "https://i.gkd.li/i/13197546"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "关闭应用更新提示弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"update_imageview_cancel_v2\"]",
          "activityIds": [
            "com.taobao.android.detail.wrapper.activity.DetailActivity",
            "com.taobao.android.order.bundle.TBOrderListActivity",
            "com.taobao.browser.BrowserActivity",
            "com.taobao.themis.container.app.TMSActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13336760",
            "https://i.gkd.li/i/13695520",
            "https://i.gkd.li/i/14899863",
            "https://i.gkd.li/i/24861114",
            "https://i.gkd.li/i/24999523"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"update_imageview_cancel_v2\"]",
          "key": 1
        },
        {
          "matches": "[id=\"com.taobao.taobao:id/update_imageview_cancel_v2\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-关闭小额免密支付",
      "desc": "在支付前/后出现",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"关闭\"] < @[clickable=true] <3 * < * + * >3 [text$=\"小额免密支付\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13438414",
          "exampleUrls": "https://m.gkd.li/57941037/2322af2e-52e2-4059-9757-f26940f4b2fc"
        },
        {
          "matches": "@[checked=true] < * - [text=\"开通淘宝小额免密支付\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14471853",
            "https://i.gkd.li/i/14471858"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/3ae78555-c0a5-4f76-8096-c4d1593ebb77"
        },
        {
          "matches": "[text=\"关闭\" || text=\"不感兴趣\"] < @[clickable=true] <3 * < * + * >3 [text$=\"小额免密支付\"]",
          "key": 2,
          "name": "①点击[关闭]或[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13438414",
            "https://i.gkd.li/i/26826092"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/2322af2e-52e2-4059-9757-f26940f4b2fc"
        },
        {
          "matches": "@[checked=true] < * - [text=\"开通淘宝小额免密支付\"]",
          "key": 3,
          "name": "②取消勾选",
          "snapshotUrls": [
            "https://i.gkd.li/i/14471853",
            "https://i.gkd.li/i/14471858"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/3ae78555-c0a5-4f76-8096-c4d1593ebb77"
        }
      ]
    },
    {
      "name": "功能类-将小组件添加到手机桌面",
      "desc": "点击取消",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "View[text=\"立即添加\"] + View[text=\"取消\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/13598578",
          "key": 0
        },
        {
          "matches": "View[childCount=2] >3 View[text=\"立即添加\"] + View[text=\"取消\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/13598578",
            "https://i.gkd.li/i/13853510"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-悬浮窗权限",
      "desc": "点击[否]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": [
            "[text*=\"悬浮窗权限\"]",
            "[text=\"否\" || text=\"暂不\"]"
          ],
          "activityIds": [
            "com.taobao.android.detail2.core.framework.floatwindow.permission.PermissionActivity",
            "com.taobao.taolive.sdk.permisson.PermissionActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13588165",
            "https://i.gkd.li/i/23146078"
          ],
          "key": 0
        },
        {
          "matches": [
            "[id=\"android:id/message\"][text*=\"悬浮窗权限\"]",
            "[id=\"android:id/button2\"][text=\"否\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13588165",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-花呗推荐弹窗",
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": [
            "[text*=\"花呗升级\" || text*=\"花呗服务\" || text$=\"开通花呗\"][visibleToUser=true]",
            "@[clickable=true] >n [text=\"暂不升级，继续付款\" || text=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13691864",
            "https://i.gkd.li/i/13628020",
            "https://i.gkd.li/i/13898735"
          ]
        }
      ]
    },
    {
      "name": "局部广告-商品详情页直播悬浮窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[vid=\"view_close\"]",
          "activityIds": "com.taobao.android.detail.wrapper.activity.DetailActivity",
          "snapshotUrls": "https://i.gkd.li/i/15124094",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-登录授权",
      "desc": "点击[确认授权]",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"确认授权\"][visibleToUser=true]",
          "activityIds": "com.taobao.browser.BrowserActivity",
          "snapshotUrls": "https://i.gkd.li/i/18271783",
          "exampleUrls": "https://e.gkd.li/e6250a9c-3fee-4470-8c7c-1d28ea63d2a5",
          "key": 0
        },
        {
          "matches": "[text=\"确认授权\"][clickable=true]",
          "activityIds": [
            "com.taobao.browser.BrowserActivity",
            "com.taobao.themis.container.app.TMSActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/18271783",
            "https://i.gkd.li/i/28432106"
          ],
          "exampleUrls": "https://e.gkd.li/e6250a9c-3fee-4470-8c7c-1d28ea63d2a5",
          "key": 1
        },
        {
          "matches": "[text=\"确认授权\"][visibleToUser=true]",
          "activityIds": [
            "com.taobao.browser.BrowserActivity",
            "com.taobao.themis.container.app.TMSActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/18271783",
            "https://i.gkd.li/i/28432106"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-支付后的推荐弹窗",
      "desc": "点击关闭",
      "key": 13,
      "rules": [
        {
          "matches": [
            "[text$=\"推荐你\"][visibleToUser=true]",
            "@[clickable=true] > [text=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14155537",
            "https://i.gkd.li/i/18296345",
            "https://i.gkd.li/i/22113615"
          ],
          "exampleUrls": "https://e.gkd.li/1646b159-a3ca-4cd8-9519-729e70acb72a"
        },
        {
          "matches": "@ImageView[clickable=true][width<150 && height<155] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid=\"weex_render_view\"]",
          "activityIds": "com.taobao.weex.WXActivity",
          "fastQuery": true,
          "key": 1,
          "name": "充值类商品界面广告",
          "snapshotUrls": "https://i.gkd.li/i/23923991"
        },
        {
          "matches": "[text=\"关闭\" || text=\"跳过\"] < @[clickable=true] -(1,2) [visibleToUser=true] >(1,2) [text$=\"推荐你\" || text=\"开通指纹支付\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14155537",
            "https://i.gkd.li/i/18296345",
            "https://i.gkd.li/i/22113615",
            "https://i.gkd.li/i/30726794"
          ],
          "exampleUrls": "https://e.gkd.li/1646b159-a3ca-4cd8-9519-729e70acb72a"
        }
      ]
    },
    {
      "name": "局部广告-搜索页广告",
      "desc": "自动隐藏猜你想搜、热榜",
      "key": 14,
      "rules": [
        {
          "matches": "[vid=\"hideBtn\"][desc=\"隐藏\"][clickable=true]",
          "activityIds": "com.taobao.search.uniform.SearchActivity",
          "fastQuery": true,
          "key": 0,
          "name": "猜你想搜",
          "snapshotUrls": [
            "https://i.gkd.li/i/23165368",
            "https://i.gkd.li/i/23165384"
          ]
        },
        {
          "matches": "@[desc=\"隐藏榜单\"][clickable=true] <<n [vid=\"dynamic_container\"]",
          "activityIds": "com.taobao.search.uniform.SearchActivity",
          "fastQuery": true,
          "key": 1,
          "name": "热榜",
          "snapshotUrls": [
            "https://i.gkd.li/i/23165418",
            "https://i.gkd.li/i/23165427"
          ]
        }
      ]
    },
    {
      "name": "局部广告-消息页面-热门活动卡片",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "View[desc.length>0] +2n FrameLayout > TextView[text=\"퀺\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关闭小额免密支付开关",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "@CheckBox[checked=true][checked=true] < * - [text~=\"开通(.*)免密支付\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-各级页面-添加到首页弹窗",
      "desc": "自动点击退出",
      "enable": false,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "TextView[text=\"去首页\"] + TextView[text=\"退出\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-视频页面-活动弹窗",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "View[id=null] > [text=\"立即参加\"] + TextView[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-视频页面-签到弹窗",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "@View[clickable=true] - View > View > TextView[text=\"立即签到\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-小额免密支付弹窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] < * <3 * < * + * >3 [text$=\"小额免密支付\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-花呗升级报送征信",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "[text=\"花呗服务未升级，将影响后续使用\"] <<n FrameLayout @FrameLayout[clickable=true] [text=\"暂不升级，继续付款\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13628020"
        },
        {
          "matches": "[text=\"根据相关法律法规要求，请尽快完成花呗升级\"] <<n FrameLayout FrameLayout @[text=\"关闭\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13691864"
        },
        {
          "matches": "[id=\"com.taobao.taobao:id/flybird_userinfo\"] + * [text=\"暂不升级，继续付款\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13898735"
        }
      ]
    },
    {
      "name": "功能类-搜索结果-自动点击反馈理由",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "[desc=\"不喜欢这个商品\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-横幅广告",
      "fastQuery": true,
      "key": 23,
      "rules": [
        {
          "matches": "[desc.length>0 || text.length>0] + @LinearLayout[clickable=true] + FrameLayout > TextView[text=\"퀺\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity"
          ],
          "key": 0,
          "name": "消息页",
          "snapshotUrls": [
            "https://i.gkd.li/i/13197877",
            "https://i.gkd.li/i/23140899"
          ]
        },
        {
          "matches": "@FrameLayout[desc=\"关闭\"][clickable=true][visibleToUser=true] -3 ImageView <<3 [vid=\"bottom_float_dx\"]",
          "activityIds": "com.taobao.android.detail.alittdetail.TTDetailActivity",
          "key": 1,
          "name": "商品详情页",
          "snapshotUrls": "https://i.gkd.li/i/25639274",
          "exampleUrls": "https://e.gkd.li/9bbe3e98-3a93-49d5-9b7a-74e039db0a36"
        },
        {
          "matches": "@TextView[clickable=true][visibleToUser=true][text.length=1] -4 ImageView < LinearLayout[childCount=5] <<3 [vid=\"recycler_view\"]",
          "activityIds": "com.taobao.android.order.bundle.TBOrderListActivity",
          "key": 2,
          "name": "订单页",
          "snapshotUrls": "https://i.gkd.li/i/25639650",
          "exampleUrls": "https://e.gkd.li/e86fb61e-d4ed-4862-b677-86ddf45c9b77"
        },
        {
          "matches": "[desc.length=4] < * + @[clickable=true] > [text=\"뉜\"]",
          "activityIds": "com.taobao.tao.welcome.Welcome",
          "matchRoot": true,
          "key": 3,
          "name": "首页",
          "snapshotUrls": "https://i.gkd.li/i/25658605",
          "exampleUrls": "https://e.gkd.li/97345886-418c-4a43-a5e2-014ee822b6a2"
        }
      ]
    },
    {
      "name": "功能类-自动隐藏搜索页[猜你想搜][热榜]",
      "desc": "点击隐藏 ①猜你想搜 ②热榜",
      "fastQuery": true,
      "key": 24,
      "rules": [
        {
          "matches": "[vid=\"hideBtn\"][desc=\"隐藏\"][clickable=true]",
          "key": 0,
          "name": "①猜你想搜",
          "snapshotUrls": [
            "https://i.gkd.li/i/23165368",
            "https://i.gkd.li/i/23165384"
          ],
          "exampleUrls": "https://e.gkd.li/cce4690f-ada3-4de8-b7cd-31259ec6ef58"
        },
        {
          "matches": "@[desc=\"隐藏榜单\"][clickable=true] <n ViewGroup < [vid=\"dynamic_container\"]",
          "key": 1,
          "name": "②热榜",
          "snapshotUrls": [
            "https://i.gkd.li/i/23165418",
            "https://i.gkd.li/i/23165427"
          ],
          "exampleUrls": "https://e.gkd.li/1c06ab8e-178b-469e-8288-6e1b73e4c1e9"
        }
      ]
    },
    {
      "name": "功能类-付款前邀开通先用后付",
      "desc": "点击[不感兴趣]",
      "key": 25,
      "rules": [
        {
          "matches": [
            "[text*=\"先用后付服务协议\"]",
            "@[clickable=true] > [text=\"不感兴趣\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26426385",
          "exampleUrls": "https://e.gkd.li/535839e5-4912-4c7e-96a4-d9b39a420a32",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮/卡片/横幅广告",
      "desc": "关闭各种悬浮/卡片/横幅广告",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "@Image[childCount=0][clickable=true][text!=null] < View <2 View < WebView < o0 <2 WebView < [id=\"android:id/content\"]",
          "activityIds": "com.taobao.browser.BrowserActivity",
          "fastQuery": true,
          "key": 0,
          "name": "商品详情右侧悬浮广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13521702"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/import/14236602"
        },
        {
          "matches": "@[desc=\"关闭浮条\"] <<n [vid=\"poplayer_native_state_id\"]",
          "activityIds": "com.taobao.tao.welcome.Welcome",
          "fastQuery": true,
          "key": 1,
          "name": "首页底部浮条广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/19121544",
            "https://i.gkd.li/i/19399328"
          ]
        },
        {
          "matches": "[desc.length>0 || text.length>0] + @LinearLayout[clickable=true] + FrameLayout > TextView[text=\"퀺\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "name": "消息页面热门活动卡片",
          "snapshotUrls": [
            "https://i.gkd.li/import/13197877",
            "https://i.gkd.li/i/23140899"
          ]
        },
        {
          "matches": "@Image[childCount=0][clickable=true][text!=null] <2 View < View < View <9 View < WebView < m0 <2 WebView < RelativeLayout < [vid=\"tms_tab_content_view\"]",
          "activityIds": "com.taobao.themis.container.app.TMSActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/22291107"
        },
        {
          "matches": "@FrameLayout[desc=\"关闭\"][clickable=true] <<n [vid=\"ll_dinamicx_container\"]",
          "activityIds": "com.taobao.android.detail.alittdetail.TTDetailActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/23289445"
        },
        {
          "matches": "@FrameLayout[desc=\"关闭\"][clickable=true][visibleToUser=true] -3 ImageView <<n [vid=\"bottom_float_dx\"]",
          "activityIds": "com.taobao.android.detail.alittdetail.TTDetailActivity",
          "fastQuery": true,
          "key": 5,
          "name": "商品详情页面横条广告",
          "snapshotUrls": "https://i.gkd.li/i/25639274"
        },
        {
          "matches": "@TextView[clickable=true][visibleToUser=true][text.length=1] -4 ImageView < LinearLayout[childCount=5] <<n [vid=\"recycler_view\"]",
          "activityIds": "com.taobao.android.order.bundle.TBOrderListActivity",
          "fastQuery": true,
          "key": 6,
          "name": "订单页横条广告",
          "snapshotUrls": "https://i.gkd.li/i/25639650"
        },
        {
          "matches": "[desc.length=4] < * + @[clickable=true] > [text=\"뉜\"]",
          "activityIds": "com.taobao.tao.welcome.Welcome",
          "matchRoot": true,
          "key": 7,
          "name": "首页横条广告",
          "snapshotUrls": "https://i.gkd.li/i/25658605"
        }
      ]
    },
    {
      "name": "通知提示",
      "desc": "关闭消息推送开启提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 27,
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true][text!=null] <n View >(1,2) [visibleToUser=true][text^=\"开启\" || text*=\"消息\"][text*=\"通知\"] <<n [vid=\"poplayer_inner_view\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关闭支付相关推荐开通",
      "desc": "关闭支付时的小额免密支付、花呗支付、先用后付等推荐开通提示",
      "enable": false,
      "fastQuery": true,
      "key": 28,
      "rules": [
        {
          "matches": "@[text=\"关闭\"||text=\"不感兴趣\"] < FrameLayout -n FrameLayout > [text$=\"推荐你\"]",
          "key": 0,
          "name": "类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13438414",
            "https://i.gkd.li/i/15520321",
            "https://i.gkd.li/i/26426385",
            "https://i.gkd.li/i/26826092"
          ]
        },
        {
          "matches": "@[checked=true] < * - [text=\"开通淘宝小额免密支付\"]",
          "key": 1,
          "name": "类型2",
          "snapshotUrls": [
            "https://i.gkd.li/i/14471853",
            "https://i.gkd.li/i/14471858"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-花呗相关弹窗",
      "desc": "关闭花呗升级及征信授权相关弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 29,
      "rules": [
        {
          "matches": [
            "[text*=\"花呗升级\" || text*=\"花呗服务\" || text$=\"开通花呗\"][visibleToUser=true]",
            "[text=\"暂不升级，继续付款\" || text=\"关闭\"][visibleToUser=true] <n [clickable=true]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13628020",
            "https://i.gkd.li/import/13691864",
            "https://i.gkd.li/import/13898735",
            "https://i.gkd.li/i/18296345"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动选中发送原图",
      "desc": "图片和视频选择器-自动选中底部中间的发送原图",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 30,
      "rules": [
        {
          "matches": "[text=\"预览\"] + [text=\"原图\"][clickable=true][width!=height]",
          "activityIds": "com.taobao.taopai.business.image.album.ImageGalleryActivity",
          "snapshotUrls": "https://i.gkd.li/i/19126601",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-限时福利弹窗",
      "enable": false,
      "key": 31,
      "rules": [
        {
          "matches": "[desc^=\"限时福利\"] < FrameLayout + [desc=\"关闭按钮\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity",
            "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
            "com.taobao.android.detail.wrapper.activity.DetailActivity",
            "com.alibaba.triver.container.TriverMainActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12642792",
            "https://i.gkd.li/import/13180826",
            "https://i.gkd.li/import/12648734",
            "https://i.gkd.li/import/12648746",
            "https://i.gkd.li/import/13198239"
          ]
        },
        {
          "matches": "[desc=\"淘气值冲刺成功\"] < FrameLayout + [desc=\"关闭按钮\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity"
          ],
          "key": 1,
          "name": "全屏广告-88VIP开通优惠弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/13198052",
            "https://i.gkd.li/import/13249418"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-开启系统通知提示",
      "desc": "自动点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "key": 32,
      "rules": [
        {
          "matches": "[text^=\"开启系统通知\"] + Image[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-各级页面-添加到首页弹窗",
      "desc": "自动点击退出",
      "enable": false,
      "fastQuery": true,
      "key": 33,
      "rules": [
        {
          "matches": "TextView[text=\"去首页\"] + TextView[text=\"退出\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-小额免密支付弹窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 34,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] < * <3 * < * + * >3 [text$=\"小额免密支付\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-将小组件添加到手机桌面",
      "desc": "点击取消",
      "enable": false,
      "key": 35,
      "rules": [
        {
          "matches": "View[text=\"立即添加\"] + View[text=\"取消\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/13598578",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开启悬浮窗权限",
      "desc": "点击“否”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 36,
      "rules": [
        {
          "matches": [
            "[id=\"android:id/message\"][text*=\"悬浮窗权限\"]",
            "[id=\"android:id/button2\"][text=\"否\"]"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-签到奖励",
      "desc": "点击 X",
      "enable": false,
      "matchTime": 20000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 37,
      "rules": [
        {
          "matches": "ImageView[desc=\"关闭按钮\"]",
          "snapshotUrls": "https://i.gkd.li/import/15212029",
          "key": 0
        }
      ]
    },
    {
      "name": "限时福利弹窗",
      "enable": false,
      "key": 38,
      "rules": [
        {
          "matches": "[desc^=\"限时福利\"] < FrameLayout + [desc=\"关闭按钮\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity",
            "com.taobao.android.tbabilitykit.pop.StdPopContainerActivity",
            "com.taobao.android.detail.wrapper.activity.DetailActivity",
            "com.alibaba.triver.container.TriverMainActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12642792",
            "https://i.gkd.li/import/13180826",
            "https://i.gkd.li/import/12648734",
            "https://i.gkd.li/import/12648746",
            "https://i.gkd.li/import/13198239"
          ]
        },
        {
          "matches": "[desc=\"淘气值冲刺成功\"] < FrameLayout + [desc=\"关闭按钮\"]",
          "activityIds": [
            "com.taobao.tao.welcome.Welcome",
            "com.taobao.tao.TBMainActivity"
          ],
          "key": 1,
          "name": "88VIP开通优惠弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/13198052",
            "https://i.gkd.li/import/13249418"
          ]
        }
      ]
    },
    {
      "name": "消息页面-热门活动卡片",
      "enable": false,
      "key": 39,
      "rules": [
        {
          "matches": "View[desc.length>0] +2n FrameLayout > TextView[text=\"퀺\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "悬浮广告",
      "enable": false,
      "key": 40,
      "rules": [
        {
          "matches": "View[childCount=2] > @Image[text!=\"\"][clickable=true] + View",
          "activityIds": "com.taobao.browser.BrowserActivity",
          "key": 0,
          "name": "商品详情右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13521702"
        }
      ]
    },
    {
      "name": "开启系统通知提示",
      "desc": "自动点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "key": 41,
      "rules": [
        {
          "matches": "[text^=\"开启系统通知\"] + Image[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "各级页面-添加到首页弹窗",
      "desc": "自动点击退出",
      "enable": false,
      "quickFind": true,
      "key": 42,
      "rules": [
        {
          "matches": "TextView[text=\"去首页\"] + TextView[text=\"退出\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "视频页面-活动弹窗",
      "enable": false,
      "key": 43,
      "rules": [
        {
          "matches": "View[id=null] > [text=\"立即参加\"] + TextView[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "视频页面-签到弹窗",
      "enable": false,
      "key": 44,
      "rules": [
        {
          "matches": "@View[clickable=true] - View > View > TextView[text=\"立即签到\"]",
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
      "key": 45,
      "rules": [
        {
          "matches": "[id=\"com.taobao.taobao:id/update_imageview_cancel_v2\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "小额免密支付弹窗",
      "desc": "点击关闭",
      "enable": false,
      "quickFind": true,
      "key": 46,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] < * <3 * < * + * >3 [text$=\"小额免密支付\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "将小组件添加到手机桌面",
      "desc": "点击取消",
      "enable": false,
      "key": 47,
      "rules": [
        {
          "matches": "View[text=\"立即添加\"] + View[text=\"取消\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/13598578",
          "key": 0
        }
      ]
    },
    {
      "name": "开启悬浮窗权限",
      "desc": "点击“否”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 48,
      "rules": [
        {
          "matches": [
            "[id=\"android:id/message\"][text*=\"悬浮窗权限\"]",
            "[id=\"android:id/button2\"][text=\"否\"]"
          ],
          "key": 0
        }
      ]
    }
  ]
});
