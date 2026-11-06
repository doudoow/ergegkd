// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "支付宝",
  "id": "com.eg.android.AlipayGphone",
  "groups": [
    {
      "name": "全屏广告-关闭花呗升级弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"根据相关法律法规要求，请尽快完成花呗升级\"]",
            "FrameLayout > FrameLayout  > FrameLayout > [text=\"关闭\"]"
          ],
          "activityIds": [
            "com.alipay.android.msp.ui.views.MspContainerActivity",
            "com.alipay.android.msp.ui.views.MspUniRenderActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13183946",
            "https://i.gkd.li/i/12826077"
          ]
        },
        {
          "matches": [
            "[text*=\"花呗服务\"]",
            "@[clickable=true] >2 [text=\"暂不升级，继续付款\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13631362",
            "https://i.gkd.li/i/13857535"
          ]
        },
        {
          "matches": "@Image[width<90] - [text=\"花呗服务升级\"] <<3 Dialog <2 View < View[index=parent.childCount.minus(1)] <n WebView <<4 [id=\"com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/25000603"
        },
        {
          "matches": "View[childCount=3] > @Image - View[text=\"花呗服务升级\"]",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12737055"
        },
        {
          "matches": [
            "[text=\"根据相关法律法规要求，请尽快完成花呗升级\"]",
            "FrameLayout > FrameLayout  > FrameLayout > [text=\"关闭\"]"
          ],
          "activityIds": [
            "com.alipay.android.msp.ui.views.MspContainerActivity",
            "com.alipay.android.msp.ui.views.MspUniRenderActivity"
          ],
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13183946",
            "https://i.gkd.li/i/12826077"
          ]
        },
        {
          "matches": [
            "[text*=\"花呗服务\"]",
            "@[clickable=true] >2 [text=\"暂不升级，继续付款\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13631362",
            "https://i.gkd.li/i/13857535"
          ]
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"取消\"] + [text*=\"位置权限\"][visibleToUser=true]",
          "activityIds": [
            ".AlipayLogin",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App",
            "com.alipay.mobile.beehive.cityselect.ui.CeilingHomeCitySelectActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/18549931",
            "https://i.gkd.li/i/23415365",
            "https://i.gkd.li/i/23415366"
          ],
          "exampleUrls": "https://e.gkd.li/caa96cc4-9943-40d8-8cb6-8c89aa60b20f"
        },
        {
          "matches": "@[desc=\"关闭\"] - LinearLayout >(2,4) [text^=\"定位到\" || text^=\"开启定位权限\"][visibleToUser=true]",
          "activityIds": ".AlipayLogin",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/18551258",
            "https://i.gkd.li/i/19267032",
            "https://i.gkd.li/i/25041632"
          ],
          "exampleUrls": "https://e.gkd.li/c153cd53-16a1-4d77-bf99-9cac8821ccf8"
        },
        {
          "matches": "@[desc=\"关闭\"] - * >4 [text*=\"开启定位权限\"]",
          "key": 2
        },
        {
          "matches": "@[desc=\"取消\"] + [text*=\"位置权限\" || text=\"支付宝本地服务\"][visibleToUser=true]",
          "activityIds": [
            ".AlipayLogin",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App",
            "com.alipay.mobile.beehive.cityselect.ui.CeilingHomeCitySelectActivity"
          ],
          "key": 3,
          "name": "全屏",
          "snapshotUrls": [
            "https://i.gkd.li/i/18549931",
            "https://i.gkd.li/i/23415365",
            "https://i.gkd.li/i/23415366",
            "https://i.gkd.li/i/29814624"
          ],
          "exampleUrls": [
            "https://e.gkd.li/caa96cc4-9943-40d8-8cb6-8c89aa60b20f",
            "https://e.gkd.li/3d87f8db-acc0-417c-9815-ea6c347baf5d"
          ]
        },
        {
          "matches": "@[clickable=true][id$=\"iv_close\"] -2 [text*=\"权限\"][text*=\"定位\" || text*=\"位置\"][visibleToUser=true]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 4,
          "name": "局部横幅",
          "snapshotUrls": "https://i.gkd.li/i/32203447"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text^=\"开启通知权限\" || text^=\"开通推送通知\"][visibleToUser=true]",
            "[id=\"com.alipay.mobile.antui:id/closeButton\"][desc=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": [
            "com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity",
            "com.eg.android.AlipayGphone.AlipayLogin"
          ],
          "key": 0,
          "name": "底部悬浮提示",
          "snapshotUrls": [
            "https://i.gkd.li/i/13194955",
            "https://i.gkd.li/i/16494085"
          ]
        },
        {
          "matches": "[text=\"选择通知接收范围\"] +3 * > [text=\"暂时不用\"]",
          "activityIds": "com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity",
          "key": 1,
          "name": "消息页弹窗提示",
          "snapshotUrls": [
            "https://i.gkd.li/i/13669620",
            "https://i.gkd.li/i/14944514"
          ]
        },
        {
          "matches": [
            "[text^=\"开启通知权限\" || text^=\"开通推送通知\"][visibleToUser=true]",
            "[id=\"com.alipay.mobile.antui:id/closeButton\"][desc=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": [
            "com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity",
            ".AlipayLogin"
          ],
          "key": 2,
          "name": "底部悬浮提示",
          "snapshotUrls": [
            "https://i.gkd.li/i/13194955",
            "https://i.gkd.li/i/16494085"
          ]
        }
      ]
    },
    {
      "name": "更新提示-版本更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -9,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"立即更新\" || text=\"马上体验\"]",
            "[text^=\"稍后\"][text.length=4]"
          ],
          "activityIds": [
            "com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage",
            ".AlipayLogin"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13327095",
            "https://i.gkd.li/i/15010554"
          ]
        },
        {
          "matches": [
            "[text=\"版本更新\" || text^=\"Version\"]",
            "[id=\"com.alipay.mobile.antui:id/btn_close\" || id=\"com.alipay.mobile.accountauthbiz:id/close_dialog_button\"]"
          ],
          "activityIds": [
            "com.alipay.mobile.about.ui.AboutAlipayActivity",
            ".AlipayLogin",
            "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13490805",
            "https://i.gkd.li/i/13580594",
            "https://i.gkd.li/i/23236828"
          ]
        },
        {
          "matches": "[text=\"立即升级最新版支付宝客户端\"] < LinearLayout + [id=\"com.alipay.mobile.advertisement:id/announcementview_righticon\"]",
          "activityIds": ".AlipayLogin",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13490797"
        },
        {
          "matches": "[text=\"立即更新\" || text=\"马上体验\"] <n * > [text*=\"稍后\"]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13327095",
            "https://i.gkd.li/i/15010554"
          ]
        },
        {
          "matches": "[text=\"版本更新\"||text^=\"Version\"] - [id=\"com.alipay.mobile.antui:id/btn_close\"]",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13490805",
            "https://i.gkd.li/i/13580594"
          ]
        },
        {
          "matches": "[text=\"立即升级最新版支付宝客户端\"] < LinearLayout + [id=\"com.alipay.mobile.advertisement:id/announcementview_righticon\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13490797"
        },
        {
          "matches": "TextView[id=\"com.alipay.mobile.accountauthbiz:id/update_cancel_tv\"]",
          "name": "弹窗-【稍后再说】",
          "snapshotUrls": "https://i.gkd.li/import/13327095",
          "key": 6
        }
      ]
    },
    {
      "name": "全屏广告-小组件弹窗",
      "desc": "点击[近期不再提醒我]",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"设置支付宝小组件\"]",
            "@[clickable=true] > [text=\"关闭\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13327349"
        },
        {
          "matches": "[text^=\"去\"][text.length>2] + [text=\"近期不再提醒我\"]",
          "activityIds": [
            "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/16427922",
            "https://i.gkd.li/i/22984695",
            "https://i.gkd.li/i/22984696",
            "https://i.gkd.li/i/24981728"
          ],
          "exampleUrls": "https://e.gkd.li/de3df4c8-6ab4-45a0-aec5-0fbdfa75e823"
        },
        {
          "matches": "@Image[width<80 && height<80][visibleToUser=true] < View < View < View < View < WebView[text*=\"半浮层容器\"] < WebView <2 * < * < [id=\"android:id/content\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "excludeActivityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/27384135"
        }
      ]
    },
    {
      "name": "全屏广告-借呗消费信贷协议",
      "desc": "点击X",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"同意协议并刷脸验证\"] < * -4 * >2 Image[visibleToUser=true]",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "snapshotUrls": "https://i.gkd.li/i/13915022",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-支付后自动点击完成",
      "desc": "支付/充值/提交成功后自动点击完成按钮",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[text=\"支付成功\" || text=\"充值成功\" || text=\"提交成功\"]",
            "[text=\"完成\"]"
          ],
          "activityIds": [
            "com.alipay.android.msp.ui.views.MspContainerActivity",
            "com.alipay.android.phone.businesscommon.ucdp.nfc.activity.NResPageActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14008852",
            "https://i.gkd.li/i/16328809",
            "https://i.gkd.li/i/17503266",
            "https://i.gkd.li/i/17686972"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.alipay.android.app:id/rl_nav_bar\"] > [id=\"com.alipay.android.app:id/nav_right_textview\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "snapshotUrls": "https://i.gkd.li/i/14008852",
          "key": 1
        },
        {
          "matches": [
            "[text=\"支付成功\" || text=\"充值成功\" || text=\"提交成功\"]",
            "[text=\"完成\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "snapshotUrls": [
            "https://i.gkd.li/import/14008852",
            "https://i.gkd.li/i/17503266",
            "https://i.gkd.li/i/16328809",
            "https://i.gkd.li/i/17686972"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2][desc=\"全屏广告\"] ImageView[desc=\"关闭\"]",
          "activityIds": "com.eg.android.AlipayGphone.AlipayLogin",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14034152"
        },
        {
          "matches": "WebView > View > View > View > View > @TextView[clickable=true][visibleToUser=true][text=\"\"] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16812751",
          "exampleUrls": "https://e.gkd.li/ebbd606a-0e21-4fc5-b0c3-49e4d87d065c"
        },
        {
          "matches": "@[text*=\"跳过\"] + [visibleToUser=true][text^=\"账单分期还\"] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18409779",
          "exampleUrls": "https://e.gkd.li/cc064c84-75a9-4447-b01b-9d5597515093"
        },
        {
          "matches": "Image[text=\"关闭弹屏\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/22531246"
        },
        {
          "matches": "@[text=\"我知道了\"][clickable=true] -n [text^=\"用碰一下支付\"]",
          "activityIds": ".AlipayLogin",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/24563264"
        },
        {
          "matches": "@ImageView[desc=\"关闭\"][clickable=true] < LinearLayout - [id=\"com.alipay.mobile.advertisement:id/standardlayer_contentview\"][desc=\"推荐广告\"]",
          "activityIds": ".AlipayLogin",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14034152",
            "https://i.gkd.li/i/26184718"
          ]
        },
        {
          "matches": "@TextView[id=desc][text=\"\"][visibleToUser=true][width<110][height<110][top>getPrev(1).height.div(2)][left<getPrev(1).width.div(2)][right>getPrev(1).width.div(2)] <(2,3) View[childCount>1] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "activityIds": [
            "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity"
          ],
          "excludeActivityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$",
          "forcedTime": 10000,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/16812751",
            "https://i.gkd.li/i/29666442",
            "https://i.gkd.li/i/29814861",
            "https://i.gkd.li/i/30511870"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29814461",
          "exampleUrls": "https://e.gkd.li/ebbd606a-0e21-4fc5-b0c3-49e4d87d065c"
        },
        {
          "matches": "@[text*=\"跳过\"] + [visibleToUser=true][text^=\"账单分期还\"] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "excludeActivityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/18409779",
          "exampleUrls": "https://e.gkd.li/cc064c84-75a9-4447-b01b-9d5597515093"
        },
        {
          "matches": "Image[visibleToUser=true][text=\"关闭弹屏\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "excludeActivityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/22531246"
        },
        {
          "matches": "@[text=\"我知道了\"][clickable=true] -n [text^=\"用碰一下支付\"]",
          "activityIds": ".AlipayLogin",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/24563264"
        },
        {
          "matches": "View[width=getPrev(2).width][height=getPrev(2).height] < ViewGroup - * ->2 @ImageView < [visibleToUser=true] < FrameLayout - View < ViewGroup[childCount=3] < * < * < * < FrameLayout - [vid=\"alipaylogin_layout\"]",
          "position": {
            "left": "width * 0.5",
            "top": "width * 1.3792"
          },
          "activityIds": ".AlipayLogin",
          "key": 10,
          "name": "⑤坐标点击x掉",
          "snapshotUrls": "https://i.gkd.li/i/26526026"
        },
        {
          "matches": "@ImageView[desc=\"关闭\"][clickable=true] < LinearLayout - [id=\"com.alipay.mobile.advertisement:id/standardlayer_contentview\"][desc=\"推荐广告\"]",
          "activityIds": "com.eg.android.AlipayGphone.AlipayLogin",
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/14034152",
            "https://i.gkd.li/i/26184718"
          ]
        },
        {
          "matches": "@[text*=\"跳过\"] + [text^=\"账单分期还\"][visibleToUser=true] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/18409779"
        },
        {
          "matches": "[desc=\"推荐广告\"] + * > [desc=\"关闭\"]",
          "activityIds": ".com.eg.android.AlipayGphone.AlipayLogin",
          "key": 13,
          "name": "外卖红包",
          "snapshotUrls": "https://i.gkd.li/i/21138908"
        },
        {
          "anyMatches": [
            "[text^=\"去\"][text.length>2] + [text=\"近期不再提醒我\"]",
            "@Image[width<80 && height<80][visibleToUser=true] < View < View < View < View < WebView[text*=\"半浮层容器\"] < WebView <2 * < * < [id=\"android:id/content\"]"
          ],
          "activityIds": [
            "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity"
          ],
          "key": 14,
          "name": "小组件弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/16427922",
            "https://i.gkd.li/i/22984695",
            "https://i.gkd.li/i/22984696",
            "https://i.gkd.li/i/24981728",
            "https://i.gkd.li/i/27384135"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-支付后的推荐弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": [
            "[text$=\"推荐你\"][visibleToUser=true]",
            "@[clickable=true] > [text=\"关闭\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14060628",
            "https://i.gkd.li/i/14893122",
            "https://i.gkd.li/i/15050300",
            "https://i.gkd.li/i/20684144"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5",
          "key": 0
        },
        {
          "matches": [
            "[text$=\"推荐你\"][visibleToUser=true]",
            "@[clickable=true] > [text=\"关闭\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14060628",
            "https://i.gkd.li/i/14893122",
            "https://i.gkd.li/i/15050300",
            "https://i.gkd.li/i/20684144"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5"
        },
        {
          "matches": [
            "[text*=\"花呗\"][text^=\"开通\" || text^=\"下次支付\"]",
            "@[clickable=true] > [text=\"关闭\"]"
          ],
          "key": 2,
          "name": "花呗开通提示",
          "snapshotUrls": [
            "https://i.gkd.li/i/27007114",
            "https://i.gkd.li/i/31612291"
          ]
        }
      ]
    },
    {
      "name": "分段广告-扫码乘车后出现的广告",
      "desc": "点击[展开更多]-点击[对该内容不感兴趣]",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "@[desc=\"展开更多选项\"] - * >2 [text=\"广告\"]",
          "key": 0,
          "name": "点击[展开更多]",
          "snapshotUrls": "https://i.gkd.li/i/14546044",
          "exampleUrls": "https://m.gkd.li/57941037/d7c12df8-a92e-45be-a462-bef23ca9b5fc"
        },
        {
          "matches": "@RelativeLayout[clickable=true] >2 [text$=\"内容不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[对该内容不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14546047",
            "https://i.gkd.li/i/15209602"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7008e1da-738c-4790-9f12-6a5155d42c47"
        }
      ]
    },
    {
      "name": "全屏广告-关闭免密支付广告",
      "actionMaximum": 1,
      "key": 10,
      "rules": [
        {
          "matches": "@[checked=true] < FrameLayout - [text*=\"免密\"][text$=\"支付\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14630824",
            "https://i.gkd.li/i/14630825",
            "https://i.gkd.li/i/17107841"
          ],
          "exampleUrls": "https://e.gkd.li/7c789099-9b6f-40a2-bc3b-c73b30891cf0"
        },
        {
          "matches": [
            "[text^=\"开通\"][text$=\"免密支付\"][visibleToUser=true]",
            "@[clickable=true] > [text=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/19449399",
          "exampleUrls": "https://e.gkd.li/c8388cd5-a97f-4683-9ef1-2caa0a24de91"
        },
        {
          "matches": [
            "[text^=\"开通\"][text$=\"免密支付\" || text*=\"极速付款\"][visibleToUser=true]",
            "@[clickable=true] > [text=\"不感兴趣\"][visibleToUser=true]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/19449399",
            "https://i.gkd.li/i/30699230"
          ],
          "exampleUrls": "https://e.gkd.li/c8388cd5-a97f-4683-9ef1-2caa0a24de91"
        }
      ]
    },
    {
      "name": "分段广告-服务消息页面卡片广告",
      "desc": "点击关闭-不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14787644",
            "https://i.gkd.li/i/23935865"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/c3e08729-6d97-4a87-bfc3-1e38dd95c384"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14787585",
            "https://i.gkd.li/i/23935930"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/64c8c27d-23de-43b1-a87b-e2107b644eb1"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "WebView[text=\"基金\"] >(2,3) View[childCount=3] > @TextView[clickable=true][visibleToUser=true][text=\"\"] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "activityIds": [
            "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity"
          ],
          "forcedTime": 10000,
          "matchRoot": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14907533",
            "https://i.gkd.li/i/15144834",
            "https://i.gkd.li/i/15220394",
            "https://i.gkd.li/i/15231403"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/5df9b6fb-7455-492c-a726-fb6a42266a02"
        },
        {
          "matches": "View[childCount=3] >4 View[childCount=6] > @TextView[index=2][clickable=true][visibleToUser=true] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15144844",
          "exampleUrls": "https://m.gkd.li/57941037/2d714755-efe9-4c63-8187-7f9b7a5a199c"
        },
        {
          "matches": "@TextView[width<50 && height<50] -n [text=\"去看看\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 2,
          "name": "余额宝广告",
          "snapshotUrls": "https://i.gkd.li/i/23054580"
        },
        {
          "matches": "@TextView[text=\"15天内不再询问\"][clickable=true] -n [text$=\"转出原因\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 3,
          "name": "余额宝转出-询问转出原因",
          "snapshotUrls": "https://i.gkd.li/i/24229300"
        },
        {
          "matches": "[childCount=4] > @TextView[width<50 && height<50] -n [visibleToUser=true][text=\"去看看\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "excludeActivityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$",
          "key": 4,
          "name": "余额宝广告",
          "snapshotUrls": "https://i.gkd.li/i/23054580",
          "excludeSnapshotUrls": "https://i.gkd.li/i/34356908"
        },
        {
          "matches": "@TextView[text=\"15天内不再询问\"][clickable=true] -n [visibleToUser=true][text$=\"转出原因\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "excludeActivityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$",
          "key": 5,
          "name": "余额宝转出-询问转出原因",
          "snapshotUrls": "https://i.gkd.li/i/24229300"
        }
      ]
    },
    {
      "name": "其他-蚂蚁理财社区-[加入同路人]弹窗",
      "desc": "点击关闭",
      "key": 13,
      "rules": [
        {
          "matches": "@TextView[clickable=true][text=\"\"] < * > [visibleToUser=true][text=\"立即加入\"] <<n [id=\"com.alipay.mobile.nebula:id/h5_trans_web_content\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15289022",
          "exampleUrls": "https://m.gkd.li/57941037/e6332999-1c2b-49f0-84e1-780424a5cf2a",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-[银行卡还款服务升级]弹窗",
      "desc": "点击[放弃升级，直接付款]",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"放弃升级，直接付款\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16106615",
          "exampleUrls": "https://m.gkd.li/57941037/1b788a34-68f6-43c0-8be4-e13cb8221852",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告-小程序开屏广告",
      "desc": "①点击[跳过] ②坐标点击[关闭]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 15,
      "rules": [
        {
          "matches": "@View[id=null][text=null][childCount=0][visibleToUser=true] < ViewGroup[id=null][text=null][childCount=1][index=parent.childCount.minus(1)] <7 ViewGroup <2 ViewGroup < ViewGroup < LinearLayout < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17141999",
          "exampleUrls": "https://e.gkd.li/a243e31f-f1b5-4689-8d1a-c53250be651e",
          "key": 0
        },
        {
          "matches": "@View[id=null][text=null][childCount=0][visibleToUser=true] < ViewGroup[id=null][text=null][childCount=1][index=parent.childCount.minus(1)] <(7,8) ViewGroup <2 ViewGroup < ViewGroup < LinearLayout < RelativeLayout <(1,2) [id=\"android:id/content\"]",
          "key": 1,
          "name": "①点击[跳过]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17141999",
            "https://i.gkd.li/i/28130319"
          ],
          "exampleUrls": "https://e.gkd.li/a243e31f-f1b5-4689-8d1a-c53250be651e"
        },
        {
          "matches": "View[width=getPrev(5).width] - @ViewGroup[childCount=1][height<150][getChild(0).name$=\".View\"][visibleToUser=true] < [childCount>3] < ViewGroup < LinearLayout < RelativeLayout <2 [id=\"android:id/content\"][childCount=2]",
          "position": {
            "left": "width * 0.2490",
            "top": "width * 0.0435"
          },
          "key": 2,
          "name": "②坐标点击[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28133622",
            "https://i.gkd.li/i/28337298"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动授权登录",
      "desc": "自动点击登录确认",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"支付宝授权\"] >3 @[childCount=0][text=\"同意\"] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "action": "clickCenter",
          "actionMaximum": 1,
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17376764",
          "key": 0
        },
        {
          "matches": "[text=\"支付宝授权\"] >3 @[text=\"同意\"][childCount=0] <<n [id=\"com.alipay.mobile.nebula:id/h5_pc_container\"]",
          "action": "clickCenter",
          "actionMaximum": 1,
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17376764",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-直播悬浮窗",
      "desc": "点击关闭",
      "key": 17,
      "rules": [
        {
          "matches": "@[id=\"com.alipay.mobile.beevideo:id/fl_bee_player_view_container\"][childCount=2] > [id=\"com.alipay.mobile.beevideo:id/rl_player_poster\"][visibleToUser=true]",
          "position": {
            "left": "width * 0.8893",
            "top": "width * 0.1230"
          },
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/21467483",
          "excludeSnapshotUrls": "https://i.gkd.li/i/23763580",
          "exampleUrls": "https://e.gkd.li/3698e238-f39b-47ce-b0df-e2e47c15b400"
        },
        {
          "matches": "@TextView[clickable=true][width<110 && height<110] +n [text=\"产品动态\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24548034"
        },
        {
          "matches": "[id=\"android:id/content\"][width.div(3)>prev.width] >n [id=\"com.alipay.mobile.beevideo:id/fl_bee_player_view_container\"][childCount=2][visibleToUser=true]",
          "position": {
            "left": "width * 0.8893",
            "top": "width * 0.1230"
          },
          "fastQuery": true,
          "key": 2,
          "name": "①坐标点击x掉",
          "snapshotUrls": "https://i.gkd.li/i/21467483",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23763580",
            "https://i.gkd.li/i/28927558"
          ],
          "exampleUrls": "https://e.gkd.li/3698e238-f39b-47ce-b0df-e2e47c15b400"
        },
        {
          "matches": "@TextView[clickable=true][width<110 && height<110] +n [text=\"产品动态\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24548034"
        }
      ]
    },
    {
      "name": "功能类-余额宝转出自动勾选[短期不再提示]",
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 18,
      "rules": [
        {
          "matches": [
            "[text^=\"该笔为你快速转出\"]",
            "@CheckBox + [text$=\"不再提示\"]"
          ],
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/22798330",
            "https://i.gkd.li/i/22798432",
            "https://i.gkd.li/i/24230171"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动领取会员积分",
      "desc": "点击[全部领取]",
      "key": 19,
      "rules": [
        {
          "matches": "@[text*=\"领取\"] < [childCount=1] <n View <<2 * - * >2 [text=\"我的积分\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/22951439",
            "https://i.gkd.li/i/22960401",
            "https://i.gkd.li/i/23455621",
            "https://i.gkd.li/i/23577538"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-无法访问时点击[返回]",
      "desc": "访问被拒绝/人气太旺啦",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": [
            "[text=\"访问被拒绝\" || text=\"人气太旺啦，请稍后再试\"][visibleToUser=true]",
            "[id=\"com.alipay.mobile.antui:id/back_button\"][visibleToUser=true]"
          ],
          "activityIds": [
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main",
            ".AlipayLogin",
            "com.alipay.android.phone.wallet.blessingcard_receive.biz.activity.ReceiveDialogActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23046994",
            "https://i.gkd.li/i/23096790",
            "https://i.gkd.li/i/23549719",
            "https://i.gkd.li/i/24183318",
            "https://i.gkd.li/i/25199767"
          ],
          "exampleUrls": "https://e.gkd.li/c1ddb8bf-084b-4109-b777-96c02858d266",
          "key": 0
        },
        {
          "matches": "[text=\"访问被拒绝\" || text^=\"人气太旺啦\"] -2 RelativeLayout >3 @[clickable=true][desc=\"返回\"] > [text=\"\"]",
          "activityIds": [
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main",
            ".AlipayLogin",
            "com.alipay.android.phone.wallet.blessingcard_receive.biz.activity.ReceiveDialogActivity",
            "com.alipay.android.living.activity.LivingDetailActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23046994",
            "https://i.gkd.li/i/23096790",
            "https://i.gkd.li/i/23549719",
            "https://i.gkd.li/i/24183318",
            "https://i.gkd.li/i/25199767",
            "https://i.gkd.li/i/25485052"
          ],
          "exampleUrls": "https://e.gkd.li/c1ddb8bf-084b-4109-b777-96c02858d266",
          "key": 1
        },
        {
          "matches": [
            "[text=\"访问被拒绝\" || text^=\"人气太旺啦\" || text^=\"訪問被拒絕\" || text^=\"人氣太旺啦\" || text^=\"伺服器繁忙\"][visibleToUser=true]",
            "[id=\"com.alipay.mobile.antui:id/back_button\"][clickable=true]"
          ],
          "activityIds": [
            "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
            "com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main",
            "com.alipay.android.living.activity.LivingNotTransparentDetailActivity",
            "com.alipay.android.phone.wallet.blessingcard_receive.biz.activity.ReceiveDialogActivity",
            "com.alipay.android.living.activity.LivingDetailActivity",
            ".AlipayLogin"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23046994",
            "https://i.gkd.li/i/23096790",
            "https://i.gkd.li/i/23832722",
            "https://i.gkd.li/i/24353818",
            "https://i.gkd.li/i/24353826",
            "https://i.gkd.li/i/24183318",
            "https://i.gkd.li/i/25199767",
            "https://i.gkd.li/i/25485052"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "其他-滑动验证时返回",
      "key": 21,
      "rules": [
        {
          "matches": "[childCount=0][text=\"为保障您的正常访问请进行验证\"] <<n [id=\"com.alipay.multiplatform.phone.xriver_integration:id/h5_trans_progress_rl\"]",
          "action": "back",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23158302",
          "exampleUrls": "https://e.gkd.li/f2571f51-3a8c-4e47-a7c5-3363375c1b78",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-开通刷脸支付弹窗",
      "desc": "点击关闭",
      "key": 22,
      "rules": [
        {
          "matches": [
            "[text=\"开通刷脸支付\"]",
            "@[clickable=true] > [text=\"关闭\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23455533",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-确认清理已选中的缓存",
      "key": 23,
      "rules": [
        {
          "matches": [
            "[text=\"是否确认清理已选中的缓存\"][visibleToUser=true]",
            "[text=\"确定\"][visibleToUser=true]"
          ],
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23619464",
          "exampleUrls": "https://e.gkd.li/4dfc8429-e633-4cab-8f0e-7cf1f86f98ce",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "key": 24,
      "rules": [
        {
          "matches": [
            "@[id=\"com.alipay.android.phone.wallet.manufacturebiz:id/teenager_cancel\"] - RelativeLayout[childCount=4] > [text=\"启用未成年人保护模式\"]"
          ],
          "activityIds": ".AlipayLogin",
          "fastQuery": true,
          "key": 0,
          "name": "底部悬浮卡片-启用未成年人保护模式\"",
          "snapshotUrls": "https://i.gkd.li/i/24992663"
        }
      ]
    },
    {
      "name": "功能类-设置支付宝小组件",
      "desc": "点击关闭",
      "enable": false,
      "key": 25,
      "rules": [
        {
          "matches": [
            "[text=\"设置支付宝小组件\"]",
            "@[clickable=true] > [text=\"关闭\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13327349"
        },
        {
          "matches": "[text=\"添加会员小组件\"] < View +3 View[childCount=2] > [text=\"近期不再提醒我\"]",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16427922",
          "exampleUrls": "https://e.gkd.li/de3df4c8-6ab4-45a0-aec5-0fbdfa75e823"
        }
      ]
    },
    {
      "name": "全屏广告-\"下次支付用花呗\"弹窗",
      "desc": "点击\"30天不再提醒\"",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": [
            "[text=\"同意协议并开通\"]",
            "[text=\"30天不再提醒\"]"
          ],
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14060628",
            "https://i.gkd.li/i/15050300"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关闭免密支付开关",
      "desc": "关闭免密支付功能开关",
      "enable": false,
      "actionMaximum": 1,
      "key": 27,
      "rules": [
        {
          "matches": "@[checked=true] < * - [text$=\"免密支付\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14630824",
            "https://i.gkd.li/i/14630825"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/1e3a5f01-c42b-4d41-9d7d-21ff96c0075f",
          "key": 0
        },
        {
          "matches": "@[checked=true] < FrameLayout - [text*=\"免密\"][text$=\"支付\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14630824",
            "https://i.gkd.li/i/14630825",
            "https://i.gkd.li/i/17107841"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-服务消息页面-卡片广告",
      "desc": "点击[关闭]-点击[不感兴趣]",
      "enable": false,
      "fastQuery": true,
      "key": 28,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14787644",
          "exampleUrls": "https://m.gkd.li/57941037/c3e08729-6d97-4a87-bfc3-1e38dd95c384"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14787585",
          "exampleUrls": "https://m.gkd.li/57941037/64c8c27d-23de-43b1-a87b-e2107b644eb1"
        }
      ]
    },
    {
      "name": "功能类-[0元下单权益]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 29,
      "rules": [
        {
          "matches": "[text=\"关闭\"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*=\"0元下单\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14893122",
          "exampleUrls": "https://m.gkd.li/57941037/3575bbbc-717b-466d-b863-443a15629ef6",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-其他-蚂蚁理财社区-[加入同路人]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 30,
      "rules": [
        {
          "matches": "@TextView[clickable=true][text=\"\"] < * > [visibleToUser=true][text=\"立即加入\"] <<n [id=\"com.alipay.mobile.nebula:id/h5_trans_web_content\"]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15289022",
          "exampleUrls": "https://m.gkd.li/57941037/e6332999-1c2b-49f0-84e1-780424a5cf2a",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-底部横幅广告",
      "enable": false,
      "fastQuery": true,
      "key": 31,
      "rules": [
        {
          "matches": "@[id$=\"teenager_cancel\"] - RelativeLayout[childCount=4] > [text=\"启用未成年人保护模式\"]",
          "key": 0,
          "name": "青少年模式",
          "snapshotUrls": "https://i.gkd.li/i/24992663"
        },
        {
          "matches": "@ImageView[clickable=true][width<68] <2 [desc=\"底部广告\"] - [vid=\"alipaylogin_layout\"]",
          "key": 1,
          "name": "邀请参加调研",
          "snapshotUrls": "https://i.gkd.li/i/26330637"
        }
      ]
    },
    {
      "name": "功能类-小游戏申请发消息-拒绝",
      "desc": "①保持以上选择 ②点击[取消] ③直接拒绝",
      "fastQuery": true,
      "key": 32,
      "rules": [
        {
          "matches": "@CheckBox[clickable=true][checked=false] + [text$=\"不再询问\"]",
          "key": 0,
          "name": "①保持以上选择-✅",
          "snapshotUrls": "https://i.gkd.li/i/25098582",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25098563",
          "exampleUrls": "https://e.gkd.li/d0e5b909-7d7d-4fcb-9368-631e50d020d6"
        },
        {
          "matches": "[text=\"发送一次以下消息\"] +n * > Button[text=\"取消\"][clickable=true]",
          "key": 1,
          "name": "②取消",
          "snapshotUrls": [
            "https://i.gkd.li/i/22981739",
            "https://i.gkd.li/i/23238549"
          ]
        },
        {
          "matches": "[text=\"发送以下消息\"] +n * > [text$=\"不再询问\"][clickable=true]",
          "key": 2,
          "name": "③直接拒绝",
          "snapshotUrls": "https://i.gkd.li/i/25199524"
        }
      ]
    },
    {
      "name": "通知提示-关闭花呗,借呗,还款升级,推荐等弹窗",
      "desc": "关闭支付成功后的升级、开通、推荐等弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 33,
      "rules": [
        {
          "matches": "@[(name$=\".Image\"&&text.length=0)||((text^=\"暂不升级\"||text^=\"放弃升级\"||text^=\"不感兴趣\")||text=\"关闭\")][visibleToUser=true][desc.length=null] <<n * <n * > * >n [((text^=\"同意\")&&((text*=\"协议并\"||text*=\"升级并\")))&&(text$=\"确认交易\"||text$=\"升级\"||text$=\"开通\"||text*=\"刷脸\"||text$=\"付款\")||text=\"确认\"||text=\"立即领取\"||text=\"立即开通\"||text=\"确认开通\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12737055",
            "https://i.gkd.li/import/13915022",
            "https://i.gkd.li/import/13183946",
            "https://i.gkd.li/import/12826077",
            "https://i.gkd.li/import/12915864",
            "https://i.gkd.li/import/14229068",
            "https://i.gkd.li/import/13631362",
            "https://i.gkd.li/import/13857535",
            "https://i.gkd.li/import/14060628",
            "https://i.gkd.li/i/14650607",
            "https://i.gkd.li/i/15050300",
            "https://i.gkd.li/i/16106615",
            "https://i.gkd.li/i/17391739",
            "https://i.gkd.li/i/17945065",
            "https://i.gkd.li/i/14893122",
            "https://i.gkd.li/i/19449399",
            "https://i.gkd.li/i/20684144",
            "https://i.gkd.li/i/23455533",
            "https://i.gkd.li/i/25000603",
            "https://i.gkd.li/i/27007114",
            "https://i.gkd.li/i/30699230",
            "https://i.gkd.li/i/31612291"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/19478718"
          ]
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
      "key": 34,
      "rules": [
        {
          "matches": "[text=\"立即更新\" || text=\"马上体验\"] <n * > [text*=\"稍后\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13327095",
            "https://i.gkd.li/i/15010554"
          ]
        },
        {
          "matches": [
            "[text=\"版本更新\" || text^=\"Version\"]",
            "[id=\"com.alipay.mobile.antui:id/btn_close\" || id=\"com.alipay.mobile.accountauthbiz:id/close_dialog_button\"]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13490805",
            "https://i.gkd.li/i/13580594",
            "https://i.gkd.li/i/23236828"
          ]
        },
        {
          "matches": "[text=\"立即升级最新版支付宝客户端\"] < LinearLayout + [id=\"com.alipay.mobile.advertisement:id/announcementview_righticon\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13490797"
        }
      ]
    },
    {
      "name": "全屏广告-设置支付宝小组件",
      "desc": "关闭支付宝小组件设置提示和推荐",
      "enable": false,
      "fastQuery": true,
      "key": 35,
      "rules": [
        {
          "matches": "@TextView[text=\"关闭\"] < * <3 * < * + * >3 TextView[text=\"设置支付宝小组件\"]",
          "activityIds": "com.alipay.android.msp.ui.views.MspContainerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13327349"
        },
        {
          "matches": "[text=\"添加会员小组件\"] < View +3 View[childCount=2] > @[text=\"近期不再提醒我\"][clickable=true]",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16427922"
        },
        {
          "matches": "[text=\"通用半浮层容器页面\"] >4 [text*=\"小组件\"] - View[index=0][visibleToUser=true]",
          "activityIds": "com.alipay.mobile.nebulax.xriver.activity.XRiverActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/26164320",
            "https://i.gkd.li/i/26164322"
          ]
        },
        {
          "matches": "@TextView[text=\"关闭\"] < * <3 * < * + * >3 TextView[text=\"设置支付宝小组件\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/13327349",
          "key": 3
        }
      ]
    },
    {
      "name": "分段广告-小程序-12306",
      "desc": "关闭12306小程序界面的推广广告",
      "enable": false,
      "key": 36,
      "rules": [
        {
          "matches": "[desc=\"推荐广告\"] > [desc=\"展开更多选项\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13763314"
        },
        {
          "matches": "[text=\"对该内容不感兴趣\"]",
          "preKeys": 0,
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13763315"
        }
      ]
    },
    {
      "name": "分段广告-出行扫码广告",
      "desc": "关闭扫码出行页面的推广广告",
      "enable": false,
      "fastQuery": true,
      "key": 37,
      "rules": [
        {
          "matches": "@[desc=\"展开更多选项\"] - * >2 [text=\"广告\"]",
          "key": 0,
          "name": "点击[展开更多]",
          "snapshotUrls": "https://i.gkd.li/i/14546044"
        },
        {
          "matches": "@RelativeLayout[clickable=true] >2 [text$=\"内容不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[对该内容不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14546047",
            "https://i.gkd.li/i/15209602"
          ]
        }
      ]
    },
    {
      "name": "更新提示-关闭花呗升级弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 38,
      "rules": [
        {
          "matches": "View[childCount=3] > @Image - View[text=\"花呗服务升级\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12737055"
        },
        {
          "matches": [
            "[text=\"根据相关法律法规要求，请尽快完成花呗升级\"]",
            "FrameLayout > FrameLayout  > FrameLayout > [text=\"关闭\"]"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/import/13183946",
            "https://i.gkd.li/import/12826077",
            "https://i.gkd.li/import/12915864"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"花呗服务未升级，将影响后续使用\"] <<n FrameLayout @FrameLayout[clickable=true] [text=\"暂不升级，继续付款\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13631362",
          "key": 2
        },
        {
          "matches": "[id=\"com.alipay.android.app:id/flybird_userinfo\"] + * >8 FrameLayout[clickable=true][index=1]",
          "snapshotUrls": "https://i.gkd.li/import/13857535",
          "key": 3
        }
      ]
    },
    {
      "name": "全屏广告-定位提示-请求定位权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 39,
      "rules": [
        {
          "matches": "@[id=\"com.alipay.mobile.antui:id/closeButton\"] - [id=\"com.alipay.mobile.antui:id/textAndButtonLayout\"] [id=\"com.alipay.mobile.antui:id/tipTextView\"][text^=\"开启定位权限\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知提示-请求通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 40,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - * >n [id=\"com.alipay.mobile.antui:id/tipTextView\"][text^=\"开启通知权限\"]",
          "activityIds": "com.eg.android.AlipayGphone.AlipayLogin",
          "key": 0,
          "name": "首页底部提示",
          "snapshotUrls": "https://i.gkd.li/import/13194955"
        },
        {
          "matches": "[text=\"选择通知接收范围\"] <2 RelativeLayout [text=\"暂时不用\"]",
          "activityIds": "com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity",
          "key": 1,
          "name": "消息页弹窗提示",
          "snapshotUrls": "https://i.gkd.li/import/13669620"
        }
      ]
    },
    {
      "name": "全屏广告-小程序-12306",
      "enable": false,
      "key": 41,
      "rules": [
        {
          "matches": "[desc=\"推荐广告\"] > [desc=\"展开更多选项\"][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13763314"
        },
        {
          "matches": "[text=\"对该内容不感兴趣\"]",
          "action": "clickCenter",
          "preKeys": 0,
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13763315"
        }
      ]
    },
    {
      "name": "定位提示-请求定位权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 42,
      "rules": [
        {
          "matches": "@[id=\"com.alipay.mobile.antui:id/closeButton\"] - [id=\"com.alipay.mobile.antui:id/textAndButtonLayout\"] [id=\"com.alipay.mobile.antui:id/tipTextView\"][text^=\"开启定位权限\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-请求通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 43,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - * >n [id=\"com.alipay.mobile.antui:id/tipTextView\"][text^=\"开启通知权限\"]",
          "activityIds": "com.eg.android.AlipayGphone.AlipayLogin",
          "key": 0,
          "name": "首页底部提示",
          "snapshotUrls": "https://i.gkd.li/import/13194955"
        },
        {
          "matches": "[text=\"选择通知接收范围\"] <2 RelativeLayout [text=\"暂时不用\"]",
          "activityIds": "com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity",
          "key": 1,
          "name": "消息页弹窗提示",
          "snapshotUrls": "https://i.gkd.li/import/13669620"
        }
      ]
    },
    {
      "name": "设置支付宝小组件",
      "desc": "点击关闭",
      "enable": false,
      "quickFind": true,
      "key": 44,
      "rules": [
        {
          "matches": "@TextView[text=\"关闭\"] < * <3 * < * + * >3 TextView[text=\"设置支付宝小组件\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/import/13327349",
          "key": 0
        }
      ]
    },
    {
      "name": "小程序-12306",
      "enable": false,
      "key": 45,
      "rules": [
        {
          "matches": "[desc=\"推荐广告\"] > [desc=\"展开更多选项\"][visibleToUser=true]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13763314"
        },
        {
          "matches": "[text=\"对该内容不感兴趣\"]",
          "action": "clickCenter",
          "preKeys": 0,
          "quickFind": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13763315"
        }
      ]
    }
  ]
});
