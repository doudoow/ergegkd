// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百度网盘",
  "id": "com.baidu.netdisk",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            "com.baidu.netdisk.business.guide.dialog.lifeproduct.",
            "com.baidu.netdisk.ui.MainActivity",
            "com.baidu.netdisk.ui.Navigate"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642505",
            "https://i.gkd.li/i/12783106",
            "https://i.gkd.li/i/12923937",
            "https://i.gkd.li/i/13806852",
            "https://i.gkd.li/i/14730106",
            "https://i.gkd.li/i/14822799"
          ]
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            ".business.guide.dialog.lifeproduct.",
            ".ui.MainActivity",
            ".ui.Navigate"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642505",
            "https://i.gkd.li/i/12783106",
            "https://i.gkd.li/i/12923937",
            "https://i.gkd.li/i/13806852",
            "https://i.gkd.li/i/14730106",
            "https://i.gkd.li/i/14822799"
          ]
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"rl_ad_root\"] > [vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": ".video.VideoPlayerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20414230",
          "exampleUrls": "https://e.gkd.li/5e0625e3-ef3b-4a71-a222-54728c2274b0"
        },
        {
          "matches": "[id=\"com.baidu.netdisk:id/banner_item_close\"]",
          "fastQuery": true,
          "key": 1,
          "name": "首页特惠广告",
          "snapshotUrls": "https://i.gkd.li/i/12706544"
        },
        {
          "matches": "[id=\"com.baidu.netdisk:id/vf_content\"] + [id=\"com.baidu.netdisk:id/close\"]",
          "fastQuery": true,
          "key": 2,
          "name": "首页热门广告",
          "snapshotUrls": "https://i.gkd.li/i/12706544"
        },
        {
          "matches": "@TextView + [text=\"专属福利\"]",
          "key": 3,
          "name": "[我的]页面限时福利",
          "snapshotUrls": "https://i.gkd.li/i/12706549"
        },
        {
          "matches": "View[desc=\"续费\"] + ImageView",
          "key": 4,
          "name": "续费横幅提示",
          "snapshotUrls": "https://i.gkd.li/i/12924036"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"立即更新\"] -2 [text=\"下次再说\"]",
          "activityIds": [
            ".ui.MainActivity",
            ".ui.cloudp2p.RichMediaActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16118181",
            "https://i.gkd.li/i/24834209"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"立即更新\"] -(1,2) [text=\"下次再说\"]",
          "activityIds": [
            ".ui.MainActivity",
            ".ui.cloudp2p.RichMediaActivity",
            ".module.sharelink.ChainVerifyActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16118181",
            "https://i.gkd.li/i/24834209",
            "https://i.gkd.li/i/26574534",
            "https://i.gkd.li/i/33673328"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"立即更新\"] -n [text=\"下次再说\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.netdisk:id/dialog_cancel\"]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12923936",
          "key": 0
        },
        {
          "matches": [
            "[text=\"开启推送提醒\"]",
            "[text=\"暂不开启\"][clickable=true]"
          ],
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/25904597",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"view_score_style\"] > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14317054",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"float_btn_close\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14278618",
          "exampleUrls": "https://m.gkd.li/57941037/470eec82-ed99-4f50-beba-2587e525cfdf",
          "key": 0
        },
        {
          "matches": "[vid=\"float_btn_close\"][clickable=true][visibleToUser=true]",
          "activityIds": ".ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14278618",
          "exampleUrls": "https://m.gkd.li/57941037/470eec82-ed99-4f50-beba-2587e525cfdf",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-暂不开启自动备份",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[text=\"开启安全备份\"][visibleToUser=true]",
            "[text=\"暂不开启\"][visibleToUser=true]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/22401064",
          "exampleUrls": "https://e.gkd.li/e227fa57-f728-4ba4-8fff-493751bc5035"
        },
        {
          "matches": "[text=\"暂不开启\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/22401070",
          "exampleUrls": "https://e.gkd.li/aa9782d4-304f-401b-89f6-4fae703b8280",
          "key": 1
        },
        {
          "matches": "[text=\"立即开启\"] - [text=\"暂不开启\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/22401070",
            "https://i.gkd.li/i/25903983"
          ],
          "exampleUrls": "https://e.gkd.li/aa9782d4-304f-401b-89f6-4fae703b8280",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            "com.baidu.netdisk.business.guide.dialog.lifeproduct.",
            "com.baidu.netdisk.ui.MainActivity",
            "com.baidu.netdisk.ui.Navigate"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12642505",
            "https://i.gkd.li/i/12783106",
            "https://i.gkd.li/i/12923937",
            "https://i.gkd.li/i/13806852",
            "https://i.gkd.li/i/14730106",
            "https://i.gkd.li/i/14822799"
          ]
        },
        {
          "matches": "@ImageView[id=\"com.baidu.netdisk:id/close_btn\"] + ImageView[id=\"com.baidu.netdisk:id/bg_image\"]",
          "activityIds": "com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog",
          "key": 1,
          "name": "相册页面激活无限空间弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12648987"
        }
      ]
    },
    {
      "name": "通知提示-开启消息通知弹窗",
      "desc": "自动点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.netdisk:id/dialog_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-活动弹窗",
      "desc": "关闭VIP推广、一刻相册推广、幸运券包等活动弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12642505",
            "https://i.gkd.li/import/12923937",
            "https://i.gkd.li/import/13806852",
            "https://i.gkd.li/import/12783106",
            "https://i.gkd.li/i/14730106"
          ]
        },
        {
          "matches": "@ImageView[id=\"com.baidu.netdisk:id/close_btn\"] + ImageView[id=\"com.baidu.netdisk:id/bg_image\"]",
          "key": 1,
          "name": "相册页面激活无限空间弹窗",
          "snapshotUrls": "https://i.gkd.li/import/12648987"
        },
        {
          "matches": "[id=\"com.baidu.netdisk:id/cl_content\"] - [id=\"com.baidu.netdisk:id/iv_close\"]",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "key": 2,
          "name": "一刻相册推广弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642505"
          ]
        },
        {
          "matches": "[id=\"com.baidu.netdisk:id/view_content_bg2\"] - [id=\"com.baidu.netdisk:id/iv_close\"]",
          "activityIds": "com.baidu.netdisk.business.guide.dialog.lifeproduct.",
          "key": 3,
          "name": "VIP弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12923937"
          ]
        }
      ]
    },
    {
      "name": "局部广告-各类局部广告",
      "desc": "关闭各类局部广告，包括续费横幅、悬浮广告卡片等",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "View[desc=\"续费\"] + ImageView",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "key": 0,
          "name": "续费横幅提示",
          "snapshotUrls": "https://i.gkd.li/import/12924036"
        },
        {
          "matches": "[vid=\"float_btn_close\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "key": 1,
          "name": "右下角悬浮卡片",
          "snapshotUrls": "https://i.gkd.li/import/14278618"
        },
        {
          "matches": "[vid=\"rl_ad_root\"] > [vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": ".video.VideoPlayerActivity",
          "key": 2,
          "name": "播放界面下方广告",
          "snapshotUrls": "https://i.gkd.li/i/20414230"
        },
        {
          "matches": "[vid=\"close_singkil_tip_layout\"][visibleToUser=true]",
          "activityIds": ".ui.transfer.TransferListTabActivity",
          "key": 3,
          "name": "下载界面下方广告",
          "snapshotUrls": "https://i.gkd.li/i/23694176"
        }
      ]
    },
    {
      "name": "功能类-成长值页面签到",
      "desc": "自动点击成长值页面签到按钮",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "View[childCount=7] + TextView[clickable=true][text^=\"签到\"]",
          "activityIds": ".ui.cloudp2p.RichMediaActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18762226"
        }
      ]
    },
    {
      "name": "全屏广告-首页banner广告",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/banner_item_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页热门广告",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/vf_content\"] + [id=\"com.baidu.netdisk:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-我的页面-限时福利",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "@TextView + [text=\"专属福利\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-相册页面-激活无限空间弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.baidu.netdisk:id/close_btn\"] + ImageView[id=\"com.baidu.netdisk:id/bg_image\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-续费横幅提示",
      "desc": "关闭续费横幅提示",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "View[desc=\"续费\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12924036",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-开启消息通知弹窗",
      "desc": "自动点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.netdisk:id/dialog_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-看视频免费享极速下载弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "ViewGroup > [id=\"com.baidu.netdisk:id/background_image\"] +n [id=\"com.baidu.netdisk:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-幸运券包弹窗",
      "desc": "自动点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/tv_title\"][text^=\"恭喜获得\"] -3 ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13806852",
          "key": 0
        }
      ]
    },
    {
      "name": "活动弹窗",
      "desc": "关闭各种活动弹窗信息",
      "enable": false,
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/cl_content\"] - [id=\"com.baidu.netdisk:id/iv_close\"]",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "key": 0,
          "name": "一刻相册推广弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642505"
          ]
        },
        {
          "matches": "[id=\"com.baidu.netdisk:id/view_content_bg2\"] - [id=\"com.baidu.netdisk:id/iv_close\"]",
          "activityIds": "com.baidu.netdisk.business.guide.dialog.lifeproduct.",
          "key": 1,
          "name": "VIP弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12923937"
          ]
        }
      ]
    },
    {
      "name": "首页banner广告",
      "enable": false,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/banner_item_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页热门广告",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/vf_content\"] + [id=\"com.baidu.netdisk:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "我的页面-限时福利",
      "enable": false,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "@TextView + [text=\"专属福利\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "相册页面-激活无限空间弹窗",
      "enable": false,
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.baidu.netdisk:id/close_btn\"] + ImageView[id=\"com.baidu.netdisk:id/bg_image\"]",
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
      "key": 25,
      "rules": [
        {
          "matches": "[text=\"立即更新\"] -n [text=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "续费横幅提示",
      "desc": "关闭续费横幅提示",
      "enable": false,
      "quickFind": true,
      "key": 26,
      "rules": [
        {
          "matches": "View[desc=\"续费\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12924036",
          "key": 0
        }
      ]
    },
    {
      "name": "开启消息通知弹窗",
      "desc": "自动点击关闭",
      "enable": false,
      "quickFind": true,
      "key": 27,
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.netdisk:id/dialog_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "看视频免费享极速下载弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "quickFind": true,
      "key": 28,
      "rules": [
        {
          "matches": "ViewGroup > [id=\"com.baidu.netdisk:id/background_image\"] +n [id=\"com.baidu.netdisk:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "幸运券包弹窗",
      "desc": "自动点击关闭",
      "enable": false,
      "quickFind": true,
      "key": 29,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/tv_title\"][text^=\"恭喜获得\"] -3 ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13806852",
          "key": 0
        }
      ]
    }
  ]
});
