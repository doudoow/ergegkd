// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华为主题",
  "id": "com.huawei.android.thememanager",
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
          "matches": "[text^=\"跳过\"][text.length<=10]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12657379",
            "https://i.gkd.li/i/13069736",
            "https://i.gkd.li/i/13762181"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_ad_close\"][visibleToUser=true]",
          "activityIds": "com.huawei.android.thememanager.HwThemeManagerActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16993275",
          "exampleUrls": "https://e.gkd.li/2ca3890a-ef46-4f10-92ec-bfb921582a6a"
        },
        {
          "matches": "[vid=\"iv_vip_close\"][visibleToUser=true]",
          "activityIds": "com.huawei.android.thememanager.mvp.view.activity.onlinefont.OnlineFontPreviewActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16993276",
          "exampleUrls": "https://e.gkd.li/5e5afbbf-b891-47f3-9543-48ceb3fd0104"
        },
        {
          "matches": "[vid=\"iv_ad_close\"][visibleToUser=true]",
          "activityIds": ".HwThemeManagerActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16993275",
          "exampleUrls": "https://e.gkd.li/2ca3890a-ef46-4f10-92ec-bfb921582a6a"
        },
        {
          "matches": "[vid=\"iv_vip_close\"][visibleToUser=true]",
          "activityIds": ".mvp.view.activity.onlinefont.OnlineFontPreviewActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16993276",
          "exampleUrls": "https://e.gkd.li/5e5afbbf-b891-47f3-9543-48ceb3fd0104"
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"pps_label_ll\" || vid=\"announce_ad_close_layout\"][visibleToUser=true]",
          "activityIds": "com.huawei.android.thememanager.HwThemeManagerActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16992846",
            "https://i.gkd.li/i/16993185"
          ],
          "exampleUrls": "https://e.gkd.li/04d831b8-0a98-4b3a-9ecc-f9026c1d7f2c"
        },
        {
          "matches": "@LinearLayout[clickable=true] < LinearLayout -2 LinearLayout >2 [text=\"广告\"]",
          "activityIds": "com.huawei.android.thememanager.mvp.view.activity.onlinetheme.OnlineThemePreviewActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16993229",
          "exampleUrls": "https://e.gkd.li/1f3cecca-2339-4271-873e-5ecb65263a8a"
        },
        {
          "matches": "[vid=\"download_pps_close\"][visibleToUser=true]",
          "activityIds": "com.huawei.android.thememanager.mvp.view.activity.onlinefont.OnlineFontPreviewActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16993406",
          "exampleUrls": "https://e.gkd.li/8bace857-9eb3-4b6a-83b7-34328a3f96eb"
        },
        {
          "anyMatches": [
            "[text=\"直接关闭\"]",
            "@[clickable=true] >2 [text=\"不感兴趣\"]"
          ],
          "preKeys": [
            4,
            5,
            6
          ],
          "activityIds": [
            "com.huawei.openalliance.ad.activity.FeedbackActivity",
            ".HwThemeManagerActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16992845",
            "https://i.gkd.li/i/16993186"
          ],
          "exampleUrls": [
            "https://e.gkd.li/93458efb-d891-46b3-a2a0-8629a0399731",
            "https://e.gkd.li/0e72693d-4ad3-4efd-b469-5aa635dd958b"
          ],
          "key": 3
        },
        {
          "matches": "[vid=\"pps_label_ll\" || vid=\"announce_ad_close_layout\"][visibleToUser=true]",
          "activityIds": ".HwThemeManagerActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/16992846",
            "https://i.gkd.li/i/16993185"
          ],
          "exampleUrls": "https://e.gkd.li/04d831b8-0a98-4b3a-9ecc-f9026c1d7f2c"
        },
        {
          "matches": "@LinearLayout[clickable=true] < LinearLayout -2 LinearLayout >2 [text=\"广告\"]",
          "activityIds": ".mvp.view.activity.onlinetheme.OnlineThemePreviewActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16993229",
          "exampleUrls": "https://e.gkd.li/1f3cecca-2339-4271-873e-5ecb65263a8a"
        },
        {
          "matches": "[vid=\"download_pps_close\"][visibleToUser=true]",
          "activityIds": ".mvp.view.activity.onlinefont.OnlineFontPreviewActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/16993406",
          "exampleUrls": "https://e.gkd.li/8bace857-9eb3-4b6a-83b7-34328a3f96eb"
        }
      ]
    },
    {
      "name": "全屏广告-首页活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/campaign_dialog_close_image\"]",
          "activityIds": [
            "com.huawei.android.thememanager.HwThemeManagerActivity",
            "com.huawei.android.launcher.unihome.UniHomeLauncher"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12657939",
            "https://i.gkd.li/i/12667815"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"campaign_dialog_close_image\"]",
          "activityIds": [
            ".HwThemeManagerActivity",
            "com.huawei.android.launcher.unihome.UniHomeLauncher"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12657939",
            "https://i.gkd.li/i/12667815"
          ],
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
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < * - * >n [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-主题详情页“下应用领主题”横幅",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/iv_vip_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12647175",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-主题详情页广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.huawei.hms.ads.uiengine:id/unlike_iv\"||id=\"com.huawei.android.thememanager:id/download_pps_close\"||id=\"com.huawei.android.thememanager:id/pps_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647248",
            "https://i.gkd.li/i/12647292",
            "https://i.gkd.li/i/12647367"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-主题详情页广告关闭弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/12647268",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-主题详情信息流广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/pps_lable_top\"||id=\"com.huawei.android.thememanager:id/pps_img_video_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647311",
            "https://i.gkd.li/i/12647346"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/tv_btn_uninterested\"]",
          "snapshotUrls": "https://i.gkd.li/i/12647326",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-分类页“免费领取”",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/rl_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12647393",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-主页面（推荐、分类、我的）广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/announce_ad_close_btn\"||id=\"com.huawei.android.thememanager:id/pps_lable_top\"||id=\"com.huawei.android.thememanager:id/pps_img_video_close\"||id=\"com.huawei.android.thememanager:id/pps_label_ll\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647614",
            "https://i.gkd.li/i/12647653",
            "https://i.gkd.li/i/12647650",
            "https://i.gkd.li/i/12657822"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/tv_btn_uninterested\"]",
          "snapshotUrls": "https://i.gkd.li/i/12647655",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页活动弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/campaign_dialog_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12657939",
            "https://i.gkd.li/i/12667815"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求通知权限",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < * - * >n [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-主题详情页广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.huawei.hms.ads.uiengine:id/unlike_iv\"||id=\"com.huawei.android.thememanager:id/download_pps_close\"||id=\"com.huawei.android.thememanager:id/pps_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647248",
            "https://i.gkd.li/import/12647292",
            "https://i.gkd.li/import/12647367"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-主题详情页广告关闭弹窗",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/import/12647268",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-分类页“免费领取”",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/rl_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12647393",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-主页面（推荐、分类、我的）广告",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/announce_ad_close_btn\"||id=\"com.huawei.android.thememanager:id/pps_lable_top\"||id=\"com.huawei.android.thememanager:id/pps_img_video_close\"||id=\"com.huawei.android.thememanager:id/pps_label_ll\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647614",
            "https://i.gkd.li/import/12647653",
            "https://i.gkd.li/import/12647650",
            "https://i.gkd.li/import/12657822"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/tv_btn_uninterested\"]",
          "snapshotUrls": "https://i.gkd.li/import/12647655",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页活动弹窗-默认禁用",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/campaign_dialog_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12657939",
            "https://i.gkd.li/import/12667815"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < * - * >n [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "主题详情页“下应用领主题”横幅",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/iv_vip_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12647175",
          "key": 0
        }
      ]
    },
    {
      "name": "主题详情页广告",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.huawei.hms.ads.uiengine:id/unlike_iv\"||id=\"com.huawei.android.thememanager:id/download_pps_close\"||id=\"com.huawei.android.thememanager:id/pps_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647248",
            "https://i.gkd.li/import/12647292",
            "https://i.gkd.li/import/12647367"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "主题详情页广告关闭弹窗",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/import/12647268",
          "key": 0
        }
      ]
    },
    {
      "name": "主题详情信息流广告",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/pps_lable_top\"||id=\"com.huawei.android.thememanager:id/pps_img_video_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647311",
            "https://i.gkd.li/import/12647346"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/tv_btn_uninterested\"]",
          "snapshotUrls": "https://i.gkd.li/import/12647326",
          "key": 1
        }
      ]
    },
    {
      "name": "分类页“免费领取”",
      "enable": false,
      "key": 24,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/rl_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12647393",
          "key": 0
        }
      ]
    },
    {
      "name": "主页面（推荐、分类、我的）广告",
      "enable": false,
      "key": 25,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/announce_ad_close_btn\"||id=\"com.huawei.android.thememanager:id/pps_lable_top\"||id=\"com.huawei.android.thememanager:id/pps_img_video_close\"||id=\"com.huawei.android.thememanager:id/pps_label_ll\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647614",
            "https://i.gkd.li/import/12647653",
            "https://i.gkd.li/import/12647650",
            "https://i.gkd.li/import/12657822"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/tv_btn_uninterested\"]",
          "snapshotUrls": "https://i.gkd.li/import/12647655",
          "key": 1
        }
      ]
    },
    {
      "name": "首页活动弹窗-默认禁用",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.thememanager:id/campaign_dialog_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12657939",
            "https://i.gkd.li/import/12667815"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 27,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 28,
      "rules": [
        {
          "matches": "@[text=\"取消\"] < * - * >n [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    }
  ]
});
