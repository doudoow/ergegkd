// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "喜马拉雅",
  "id": "com.ximalaya.ting.android",
  "groups": [
    {
      "name": "局部广告-播放页广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[visibleToUser=true] < ViewGroup[childCount=1] - ViewGroup[childCount=6] > [text=\"广告\"] ",
          "activityIds": ".host.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18500523",
          "exampleUrls": "https://e.gkd.li/bbf93e2c-08b8-4155-b82c-89a629a62737"
        },
        {
          "matches": "[vid=\"main_buy_view_yellow_zone_btn_close\" || vid=\"main_play_ad_close_real\"][visibleToUser=true]",
          "activityIds": ".host.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/18683999",
            "https://i.gkd.li/i/24330967"
          ],
          "exampleUrls": "https://e.gkd.li/bf820eed-00ad-47a0-9581-8cdb3d76bde5"
        },
        {
          "matches": "@[visibleToUser=true] < ViewGroup[childCount=1] - ViewGroup[childCount=6] > [text=\"广告\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18500523",
          "exampleUrls": "https://e.gkd.li/bbf93e2c-08b8-4155-b82c-89a629a62737"
        },
        {
          "matches": "[vid=\"main_buy_view_yellow_zone_btn_close\" || vid=\"main_play_ad_close_real\" || vid=\"main_card_close\" || vid=\"x_play_ad_banner_close_real\"][clickable=true]",
          "actionCd": 300,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/18683999",
            "https://i.gkd.li/i/24330967",
            "https://i.gkd.li/i/27471367"
          ],
          "exampleUrls": "https://e.gkd.li/bf820eed-00ad-47a0-9581-8cdb3d76bde5"
        },
        {
          "matches": "[vid=\"main_buy_view_yellow_zone_btn_close\"][visibleToUser=true]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/18683999",
          "exampleUrls": "https://e.gkd.li/bf820eed-00ad-47a0-9581-8cdb3d76bde5"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击屏蔽",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"xm_ad_close_real\" || vid=\"main_close_layout\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/17112326",
            "https://i.gkd.li/i/17112313"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"屏蔽\" || text=\"直接关闭\" || text=\"不喜欢此内容\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13260487",
            "https://i.gkd.li/i/13275928",
            "https://i.gkd.li/i/17111444",
            "https://i.gkd.li/i/17111452",
            "https://i.gkd.li/i/24589005"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"直接关闭\" || text=\"不喜欢此内容\"][clickable=true]",
          "preKeys": [
            0
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/30309831"
        },
        {
          "matches": "@[clickable=true] > [text=\"屏蔽\" || text=\"直接关闭\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13260487",
            "https://i.gkd.li/i/13275928",
            "https://i.gkd.li/i/17111444",
            "https://i.gkd.li/i/17111452"
          ],
          "key": 3
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -8,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text*=\"青少年模式\"][id=\"com.ximalaya.ting.android:id/host_btn_set\"]",
            "[id=\"com.ximalaya.ting.android:id/host_dialog_close\"]"
          ],
          "activityIds": ".host.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12506209",
          "key": 0
        },
        {
          "matches": [
            "[text*=\"青少年模式\"][id=\"com.ximalaya.ting.android:id/host_btn_set\"]",
            "[id=\"com.ximalaya.ting.android:id/host_dialog_close\"]"
          ],
          "key": 1
        },
        {
          "matches": [
            "[text*=\"青少年模式\"][vid=\"host_btn_set\"]",
            "[vid=\"host_dialog_close\"]"
          ],
          "activityIds": ".host.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12506209",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-首页-专辑订阅推荐弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的专辑\"] + [id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13251713",
          "key": 0
        },
        {
          "matches": "[text=\"你可能感兴趣的专辑\"] + [id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.ximalaya.ting.android:id/host_close_firework\"] +2 [id=\"com.ximalaya.ting.android:id/host_firework_ad_tag\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13263421",
          "key": 0
        },
        {
          "matches": "@[id=\"com.ximalaya.ting.android:id/host_close_firework\"] +2 [id=\"com.ximalaya.ting.android:id/host_firework_ad_tag\"]",
          "key": 1
        },
        {
          "matches": "[!(text=\"定时\")] + [vid=\"main_iv_close\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13251713",
            "https://i.gkd.li/i/29967591",
            "https://i.gkd.li/i/30176023"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/30299404",
          "exampleUrls": [
            "https://e.gkd.li/8efcd568-13f2-4ac4-872a-fe6fc4affaec",
            "https://e.gkd.li/f82ca167-35a0-42b4-b955-c5ef6e5d94dd"
          ]
        },
        {
          "matches": "@[vid=\"host_close_firework\"] +2 [vid=\"host_firework_ad_tag\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13263421",
          "exampleUrls": "https://e.gkd.li/4f9a66b8-3bf5-4a8e-8ca6-db35625df270"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "取消推送通知",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text*=\"通知权限\"][visibleToUser=true]",
            "[text=\"取消\" || text=\"暂不开启\"][visibleToUser=true]"
          ],
          "activityIds": ".host.activity.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13389145",
            "https://i.gkd.li/i/18391977",
            "https://i.gkd.li/i/20499323"
          ],
          "exampleUrls": "https://e.gkd.li/ab40c096-d024-4b7c-9c6f-245beafd373a",
          "key": 0
        },
        {
          "matches": [
            "[text*=\"通知权限\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": ".host.activity.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13389145",
            "https://i.gkd.li/i/18391977"
          ],
          "exampleUrls": "https://e.gkd.li/ab40c096-d024-4b7c-9c6f-245beafd373a",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-免流提示",
      "desc": "关闭[开免流送会员]弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"host_iv_close\"][visibleToUser=true]",
          "activityIds": ".host.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18326083",
          "exampleUrls": "https://e.gkd.li/2a7e189b-b935-4bbd-9672-c18f2bf454e9",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页右侧浮动广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_broadside_close_real\"]",
          "key": 0
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_broadside_close_real\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12472620",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-播放页面-播放控制区域的广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/x_play_ad_banner_close_real\"]",
          "key": 0,
          "name": "暂停按钮下方的广告",
          "snapshotUrls": "https://i.gkd.li/i/12506218"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/host_game_close_tv\"]",
          "key": 1,
          "name": "喜马小游戏广告",
          "snapshotUrls": "https://i.gkd.li/i/12927110"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "key": 2,
          "name": "体验会员广告",
          "snapshotUrls": "https://i.gkd.li/import/13546642",
          "exampleUrls": "https://m.gkd.li/6328439/ea870e6f-07c9-4167-ab62-03e52838110b"
        }
      ]
    },
    {
      "name": "分段广告-播放页面-底部推荐列表-夹杂广告",
      "desc": "点击关闭-点击屏蔽",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"屏蔽\"] + [text=\"关闭当前广告\"]",
          "preKeys": 0,
          "activityIds": [
            "com.ximalaya.ting.android.main.dialog",
            "com.ximalaya.ting.android.host.activity.MainActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12506269",
            "https://i.gkd.li/i/13296565"
          ]
        },
        {
          "matches": "@[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true] > [id=\"com.ximalaya.ting.android:id/main_mark_text\"][text=\"广告\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12506225",
            "https://i.gkd.li/i/12701414",
            "https://i.gkd.li/i/13314183"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"屏蔽\"] + [text=\"关闭当前广告\"]",
          "preKeys": [
            0
          ],
          "activityIds": [
            "com.ximalaya.ting.android.main.dialog",
            "com.ximalaya.ting.android.host.activity.MainActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12506269",
            "https://i.gkd.li/i/13296565"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-播放页面-播放前广告",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_play_ad_close_real\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-首页-推荐列表广告",
      "desc": "点击关闭-选择原因",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_close_real\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12506253"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_dynamic_lay\"] >(4) ImageView + ImageView",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12701374"
        },
        {
          "matches": "@[name=\"android.widget.RelativeLayout\" || name=\"android.widget.LinearLayout\"] > [text=\"屏蔽\"]",
          "preKeys": [
            0,
            1
          ],
          "fastQuery": true,
          "key": 2,
          "name": "点击关闭原因【屏蔽】",
          "snapshotUrls": [
            "https://i.gkd.li/i/12506258",
            "https://i.gkd.li/i/13260487",
            "https://i.gkd.li/i/13275928"
          ]
        },
        {
          "matches": "[text=\"直接关闭\"][text.length<=5]",
          "preKeys": [
            0,
            1
          ],
          "fastQuery": true,
          "key": 3,
          "name": "点击【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/i/14019835"
        }
      ]
    },
    {
      "name": "局部广告-关闭热播推荐广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"热播推荐\"] + ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12506270",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "fastQuery": true,
      "order": -9,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/host_tv_update_later\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区广告",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_close_real\"][visibleToUser=true]",
          "key": 0
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_close_real\"][visibleToUser=true]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12869426",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-卡片式广告",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "key": 0,
          "name": "我的页面-点击卡片右上角关闭按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/13194838",
            "https://i.gkd.li/i/13296565"
          ]
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest\"]",
          "preKeys": 0,
          "activityIds": "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog",
          "key": 1,
          "name": "我的页面-点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/13194839"
        }
      ]
    },
    {
      "name": "通知提示",
      "desc": "取消推送通知",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/cancel_btn\"]",
          "actionMaximum": 1,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13389145",
          "exampleUrls": "https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df"
        }
      ]
    },
    {
      "name": "全屏广告-体验会员广告",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-有声书分类页面-信息流广告",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_dislike\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-签到弹窗",
      "key": 19,
      "rules": [
        {
          "matches": "ImageView < @[clickable=true] < [visibleToUser=true] >3 [text=\"立即签到\"]",
          "activityIds": ".host.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30167710",
          "exampleUrls": "https://e.gkd.li/8b93b8fb-1d31-42d2-95a1-c76dc0186e96",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-播放页面-底部推荐列表-夹杂广告",
      "desc": "点击关闭-点击屏蔽",
      "enable": false,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"屏蔽\"] + [text=\"关闭当前广告\"]",
          "activityIds": [
            "com.ximalaya.ting.android.main.dialog",
            "com.ximalaya.ting.android.host.activity.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12506269",
            "https://i.gkd.li/import/13296565"
          ],
          "key": 0
        },
        {
          "matches": "@[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true] > [id=\"com.ximalaya.ting.android:id/main_mark_text\"][text=\"广告\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/import/12506225",
            "https://i.gkd.li/import/12701414",
            "https://i.gkd.li/import/13314183"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页-推荐列表广告",
      "desc": "点击关闭-点击屏蔽",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_close_real\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12506253"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_dynamic_lay\"] >(4) ImageView + ImageView",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12701374"
        },
        {
          "matches": "@[name=\"android.widget.RelativeLayout\" || name=\"android.widget.LinearLayout\"] > [text=\"屏蔽\"]",
          "preKeys": [
            0,
            1
          ],
          "fastQuery": true,
          "name": "点击关闭原因【屏蔽】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12506258",
            "https://i.gkd.li/import/13260487",
            "https://i.gkd.li/import/13275928"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-关闭更新弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/host_tv_update_later\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "fastQuery": true,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "key": 0,
          "name": "我的页面-点击卡片右上角关闭按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/13194838",
            "https://i.gkd.li/import/13296565"
          ]
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest\"]",
          "preKeys": 0,
          "activityIds": "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog",
          "key": 1,
          "name": "我的页面-点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/import/13194839"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_dislike\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.SplashAdActivity",
          "key": 2,
          "name": "有声书分类页面-点击卡片右上角关闭按钮",
          "snapshotUrls": "https://i.gkd.li/import/13334685"
        }
      ]
    },
    {
      "name": "全屏广告-推送通知",
      "desc": "取消推送通知",
      "enable": false,
      "key": 24,
      "rules": [
        {
          "matches": "[id=`com.ximalaya.ting.android:id/cancel_btn`]",
          "actionMaximum": 1,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13389145",
          "exampleUrls": "https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df",
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
      "key": 25,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/17068586",
          "exampleUrls": "https://e.gkd.li/7ef0b1fb-aaa0-475d-b6b4-e927776adb27",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-播放页面-播放前广告",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_play_ad_close_real\"]",
          "activityIds": [
            "com.ximalaya.ting.android.host.activity.MainActivity",
            "com.ximalaya.ting.android.framework.view.dialog"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12506250",
            "https://i.gkd.li/i/12520626"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-热播推荐广告",
      "enable": false,
      "key": 27,
      "rules": [
        {
          "matches": "[text=\"热播推荐\"] + ImageView + ImageView",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12506270",
          "key": 0
        }
      ]
    },
    {
      "name": "首页右侧浮动广告",
      "enable": false,
      "quickFind": true,
      "key": 28,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_broadside_close_real\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "播放页面-播放控制区域的广告",
      "enable": false,
      "quickFind": true,
      "key": 29,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/x_play_ad_banner_close_real\"]",
          "key": 0,
          "name": "暂停按钮下方的广告",
          "snapshotUrls": "https://i.gkd.li/import/12506218"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/host_game_close_tv\"]",
          "key": 1,
          "name": "喜马小游戏广告",
          "snapshotUrls": "https://i.gkd.li/import/12927110"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "key": 2,
          "name": "体验会员广告",
          "snapshotUrls": "https://i.gkd.li/import/13546642",
          "exampleUrls": "https://m.gkd.li/6328439/ea870e6f-07c9-4167-ab62-03e52838110b"
        }
      ]
    },
    {
      "name": "播放页面-底部推荐列表-夹杂广告",
      "desc": "点击关闭-点击屏蔽",
      "enable": false,
      "quickFind": true,
      "key": 30,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"屏蔽\"] + [text=\"关闭当前广告\"]",
          "activityIds": [
            "com.ximalaya.ting.android.main.dialog",
            "com.ximalaya.ting.android.host.activity.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12506269",
            "https://i.gkd.li/import/13296565"
          ],
          "key": 0
        },
        {
          "matches": "@[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true] > [id=\"com.ximalaya.ting.android:id/main_mark_text\"][text=\"广告\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/import/12506225",
            "https://i.gkd.li/import/12701414",
            "https://i.gkd.li/import/13314183"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "播放页面-播放前广告",
      "enable": false,
      "quickFind": true,
      "key": 31,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_play_ad_close_real\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-推荐列表广告",
      "desc": "点击关闭-点击屏蔽",
      "enable": false,
      "key": 32,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_close_real\"]",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12506253"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_dynamic_lay\"] >(4) ImageView + ImageView",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12701374"
        },
        {
          "matches": "@[name=\"android.widget.RelativeLayout\" || name=\"android.widget.LinearLayout\"] > [text=\"屏蔽\"]",
          "preKeys": [
            0,
            1
          ],
          "quickFind": true,
          "name": "点击关闭原因【屏蔽】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12506258",
            "https://i.gkd.li/import/13260487",
            "https://i.gkd.li/import/13275928"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "关闭热播推荐广告",
      "enable": false,
      "key": 33,
      "rules": [
        {
          "matches": "[text=\"热播推荐\"] + ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12506270",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭更新弹窗",
      "enable": false,
      "quickFind": true,
      "key": 34,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/host_tv_update_later\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭青少年模式弹窗",
      "enable": false,
      "quickFind": true,
      "key": 35,
      "rules": [
        {
          "matches": [
            "[text*=\"青少年模式\"][id=\"com.ximalaya.ting.android:id/host_btn_set\"]",
            "[id=\"com.ximalaya.ting.android:id/host_dialog_close\"]"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "评论区广告",
      "enable": false,
      "quickFind": true,
      "key": 36,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_close_real\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "quickFind": true,
      "key": 37,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "key": 0,
          "name": "我的页面-点击卡片右上角关闭按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/13194838",
            "https://i.gkd.li/import/13296565"
          ]
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest\"]",
          "preKeys": 0,
          "activityIds": "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog",
          "key": 1,
          "name": "我的页面-点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/import/13194839"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_dislike\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.SplashAdActivity",
          "key": 2,
          "name": "有声书分类页面-点击卡片右上角关闭按钮",
          "snapshotUrls": "https://i.gkd.li/import/13334685"
        }
      ]
    },
    {
      "name": "首页-专辑订阅推荐弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 38,
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的专辑\"] + [id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 39,
      "rules": [
        {
          "matches": "@[id=\"com.ximalaya.ting.android:id/host_close_firework\"] +2 [id=\"com.ximalaya.ting.android:id/host_firework_ad_tag\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "推送通知",
      "desc": "取消推送通知",
      "enable": false,
      "key": 40,
      "rules": [
        {
          "matches": "[id=`com.ximalaya.ting.android:id/cancel_btn`]",
          "actionMaximum": 1,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13389145",
          "exampleUrls": "https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df",
          "key": 0
        }
      ]
    }
  ]
});
