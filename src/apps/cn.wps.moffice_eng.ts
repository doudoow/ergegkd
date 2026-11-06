// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "WPS",
  "id": "cn.wps.moffice_eng",
  "groups": [
    {
      "name": "分段广告-首页文档列表广告",
      "desc": "关闭首页文档列表中的广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.mopub.ad.xiaomi:id/nativeclose\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12505350",
            "https://i.gkd.li/i/12505286"
          ]
        },
        {
          "matches": "[text=\"不喜欢此广告\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12505365",
            "https://i.gkd.li/i/13259090"
          ]
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/afterlogin_cancel\"]",
          "activityIds": [
            "cn.wps.moffice.main.AfterLoginActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13259097",
            "https://i.gkd.li/i/12882712"
          ]
        },
        {
          "matches": "View[childCount=3] > Image[text!=null] +2 @TextView[clickable=true] <<n [vid=\"push_tips_ptr_super_webview\"]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13945835"
        },
        {
          "matches": "[vid=\"cloud_popup_close_view\"][clickable=true]",
          "activityIds": "cn.wps.moffice.plugin.cloudPage.newpage.NewCloudSettingNewActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23786698"
        },
        {
          "matches": "[vid=\"afterlogin_cancel\"]",
          "activityIds": [
            "cn.wps.moffice.main.AfterLoginActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13259097",
            "https://i.gkd.li/i/12882712"
          ]
        },
        {
          "matches": "@TextView[clickable=true] -2 Image[text!=null] <<2 View - [id=\"app\"] <<5 [vid=\"push_tips_ptr_super_webview\"]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13945835"
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
          "matches": "[id=\"cn.wps.moffice_eng:id/close_new_func_guide_dialog_imageView\"]",
          "snapshotUrls": "https://i.gkd.li/i/12882371",
          "key": 0
        },
        {
          "matches": "[vid=\"close_new_func_guide_dialog_imageView\"]",
          "snapshotUrls": "https://i.gkd.li/i/12882371",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-关闭[开启WPS云服务]弹窗",
      "desc": "自动点击不开启",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882536",
            "https://i.gkd.li/i/12882610",
            "https://i.gkd.li/i/12882678"
          ]
        },
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/dialog_button_positive\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12882554"
        },
        {
          "matches": "[vid=\"cloud_protocol_dialog_not_start_btn\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882536",
            "https://i.gkd.li/i/12882610",
            "https://i.gkd.li/i/12882678"
          ]
        },
        {
          "matches": "[vid=\"dialog_button_positive\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12882554"
        }
      ]
    },
    {
      "name": "分段广告-文档末尾广告",
      "desc": "关闭文档末尾的广告内容",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/doc_end_ad_container_main\"] >2 [id=\"cn.wps.moffice_eng:id/btn_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13513911"
        },
        {
          "matches": "[text=\"关闭当前广告\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13513914"
        },
        {
          "matches": "[vid=\"doc_end_ad_container_main\"] >2 [vid=\"btn_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13513911"
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "关闭各类局部广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/home_banner_ad_spread_close\" || vid=\"phone_message_close_button\" || vid=\"close_home_ad_banner_iv\" || vid=\"iv_item_close\" || vid=\"iv_cloud_sync_close\"][visibleToUser=true]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13804525",
            "https://i.gkd.li/i/17893252",
            "https://i.gkd.li/i/18047731",
            "https://i.gkd.li/i/23577590",
            "https://i.gkd.li/i/23786789"
          ]
        },
        {
          "matches": "[vid=\"home_banner_ad_spread_close\" || vid=\"phone_message_close_button\" || vid=\"close_home_ad_banner_iv\" || vid=\"iv_item_close\" || vid=\"iv_cloud_sync_close\"][visibleToUser=true]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13804525",
            "https://i.gkd.li/i/17893252",
            "https://i.gkd.li/i/18047731",
            "https://i.gkd.li/i/23577590",
            "https://i.gkd.li/i/23786789"
          ]
        },
        {
          "matches": "[vid=\"public_login\"] <2 LinearLayout[childCount=2] + [vid=\"public_close\"][clickable=true][visibleToUser=true]",
          "activityIds": "cn.wps.moffice.writer.multiactivity.Writer1",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/26026279",
          "exampleUrls": "https://e.gkd.li/a17eca15-c7bd-4ea6-ba84-0d3242641697"
        },
        {
          "matches": "[vid=\"home_page_list_view\"] [vid=\"card_v\"] >2 LinearLayout + * > [vid=\"close_iv\"][visibleToUser=true]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/28419645"
        }
      ]
    },
    {
      "name": "功能类-自动签到",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@[visibleToUser=true][text=\"签到\"] <<n [vid=\"push_tips_ptr_super_webview\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16382069",
          "exampleUrls": "https://e.gkd.li/c83fe3b0-74f2-45af-9f8d-6b70c622b424"
        },
        {
          "matches": "[text=\"签到成功\"] -2 View[childCount=1] > @Image[text!=null][childCount=0] <<n [vid=\"push_tips_ptr_super_webview\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16382075",
          "exampleUrls": "https://e.gkd.li/c8c2f3cb-9bde-4a01-8eb6-145cf668993f"
        },
        {
          "matches": "[text=\"签到成功\"] -2 * > @Image[text!=null] <<4 [index=parent.childCount.minus(2)] <n View <<2 WebView <<4 [vid=\"push_tips_ptr_super_webview\"]",
          "preKeys": [
            0
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16382075",
          "exampleUrls": "https://e.gkd.li/c8c2f3cb-9bde-4a01-8eb6-145cf668993f"
        }
      ]
    },
    {
      "name": "评价提示",
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text=\"喜欢WPS Office吗？\"]",
            "[text=\"以后再说\"][clickable=true]"
          ],
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23714159",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "关闭登录后弹窗和体验会员提示弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/afterlogin_cancel\"]",
          "key": 0
        },
        {
          "matches": "[vid=\"afterlogin_cancel\"]",
          "activityIds": [
            "cn.wps.moffice.main.AfterLoginActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13259097",
            "https://i.gkd.li/i/12882712"
          ]
        },
        {
          "matches": "@TextView[clickable=true] -2 Image[text!=null] <<2 View - [id=\"app\"] <<5 [vid=\"push_tips_ptr_super_webview\"]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13945835"
        },
        {
          "matches": "[vid=\"cloud_popup_close_view\"][clickable=true]",
          "activityIds": "cn.wps.moffice.plugin.cloudPage.newpage.NewCloudSettingNewActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/23786698"
        }
      ]
    },
    {
      "name": "功能类-开启WPS云服务",
      "desc": "自动点击不开启",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882536",
            "https://i.gkd.li/i/12882610",
            "https://i.gkd.li/i/12882678"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/dialog_button_positive\"]",
          "snapshotUrls": "https://i.gkd.li/i/12882554",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页底部广告",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/home_banner_ad_spread_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页底部升级会员卡片",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/phone_message_close_button\"]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/13945839",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-体验超级会员弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "View[childCount=3] > Image[text!=null] +2 @TextView[clickable=true] <<n [vid=\"push_tips_ptr_super_webview\"]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "snapshotUrls": "https://i.gkd.li/i/13945835",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-x掉添加至主屏幕",
      "desc": "不再提示-取消",
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[vid=\"dlg_add_home_cancel\"] < FrameLayout - LinearLayout > [vid=\"dlg_add_home_checkbox\"][clickable=true][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/26026325",
          "exampleUrls": "https://e.gkd.li/72ec7310-ce0d-4c43-b8ad-7d2966d6e902"
        },
        {
          "matches": "@[vid=\"dlg_add_home_cancel\"] < FrameLayout - LinearLayout > [vid=\"dlg_add_home_checkbox\"][clickable=true][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/26026328",
          "exampleUrls": "https://e.gkd.li/e40f22fa-a74a-4a92-b816-11c1f2f2c901",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-关闭[登录WPS]弹窗",
      "key": 14,
      "rules": [
        {
          "matches": "[vid=\"login_viewpager\"] > [vid=\"public_login_cancel\"][visibleToUser=true]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28419420",
          "exampleUrls": "https://e.gkd.li/73900c79-8d76-47ba-9dd2-853a9a30d533",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-会员功能试用提示",
      "desc": "主页顶部功能试用=> x掉",
      "key": 15,
      "rules": [
        {
          "matches": "[vid=\"home_page_list_view\"] [vid=\"card_v\"] >2 LinearLayout + * > [vid=\"close_iv\"][visibleToUser=true]",
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28419645",
          "exampleUrls": "https://e.gkd.li/c033f70a-c2a9-43a5-83fd-519d7894d8c7",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-关闭[开启WPS云服务]弹窗",
      "desc": "自动点击不开启",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[vid=\"cloud_protocol_dialog_not_start_btn\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882536",
            "https://i.gkd.li/i/12882610",
            "https://i.gkd.li/i/12882678"
          ]
        },
        {
          "matches": "[vid=\"dialog_button_positive\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12882554"
        }
      ]
    },
    {
      "name": "局部广告-首页-文档列表广告",
      "enable": false,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/nativeclose\"||id=\"com.mopub.ad.xiaomi:id/nativeclose\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12505350",
            "https://i.gkd.li/import/12505286"
          ]
        },
        {
          "matches": "[text=\"关闭当前广告\"||text=\"不喜欢此广告\"]",
          "preKeys": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12505365",
            "https://i.gkd.li/import/13259090"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/afterlogin_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-开启WPS云服务",
      "desc": "自动点击不开启",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12882536",
            "https://i.gkd.li/import/12882610",
            "https://i.gkd.li/import/12882678"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/dialog_button_positive\"]",
          "snapshotUrls": "https://i.gkd.li/import/12882554",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-文档末尾广告",
      "enable": false,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/doc_end_ad_container_main\"] >2 [id=\"cn.wps.moffice_eng:id/btn_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13513911"
        },
        {
          "matches": "[text=\"关闭当前广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13513914"
        }
      ]
    },
    {
      "name": "局部广告-首页-底部广告",
      "enable": false,
      "fastQuery": true,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/home_banner_ad_spread_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-文档列表广告",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "[id$=\"/nativeclose\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12505350",
            "https://i.gkd.li/import/12505286"
          ]
        },
        {
          "matches": "[text=\"关闭当前广告\"||text=\"不喜欢此广告\"]",
          "preKeys": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12505365",
            "https://i.gkd.li/import/13259090"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/afterlogin_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "升级提示",
      "enable": false,
      "key": 24,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/close_new_func_guide_dialog_imageView\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开启WPS云服务",
      "desc": "自动点击不开启",
      "enable": false,
      "key": 25,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/cloud_protocol_dialog_not_start_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12882536",
            "https://i.gkd.li/import/12882610",
            "https://i.gkd.li/import/12882678"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/dialog_button_positive\"]",
          "snapshotUrls": "https://i.gkd.li/import/12882554",
          "key": 1
        }
      ]
    },
    {
      "name": "文档末尾广告",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/doc_end_ad_container_main\"] >2 [id=\"cn.wps.moffice_eng:id/btn_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13513911"
        },
        {
          "matches": "[text=\"关闭当前广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13513914"
        }
      ]
    },
    {
      "name": "首页-底部广告",
      "enable": false,
      "quickFind": true,
      "key": 27,
      "rules": [
        {
          "matches": "[id=\"cn.wps.moffice_eng:id/home_banner_ad_spread_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
