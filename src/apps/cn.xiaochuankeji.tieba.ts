// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "最右",
  "id": "cn.xiaochuankeji.tieba",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/15858014",
            "https://i.gkd.li/i/15858024"
          ]
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15858023"
        },
        {
          "matches": "[vid=\"contentView\"][visibleToUser=true]",
          "position": {
            "left": "width * 0.8903",
            "top": "width * 0.1342"
          },
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/15856190",
            "https://i.gkd.li/i/15858008"
          ]
        },
        {
          "matches": "RelativeLayout[childCount=7] > @[vid=\"ms_skipView\"][visibleToUser=true] + LinearLayout[vid=\"ms_shakeRoot\"] > [text*=\"点击按钮\"] ",
          "activityIds": ".media.browse.MediaActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/25619083",
          "exampleUrls": "https://e.gkd.li/4958c49b-32d2-4b99-865a-e39fb7183b98"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/15858014",
            "https://i.gkd.li/i/15858024"
          ]
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/15858023"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/btn_ok\"][text^=\"马上升级\"] + [id=\"cn.xiaochuankeji.tieba:id/btn_cancel\"][text=\"取消\"]",
          "activityIds": ".ui.home.setting.SettingActivity",
          "snapshotUrls": "https://i.gkd.li/i/12660882",
          "key": 0
        },
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/btn_ok\"][text^=\"马上升级\"] + [id=\"cn.xiaochuankeji.tieba:id/btn_cancel\"][text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12660882"
          ],
          "key": 1
        },
        {
          "matches": "[vid=\"btn_ok\"][text^=\"马上升级\"] + [vid=\"btn_cancel\"][text=\"取消\"]",
          "activityIds": ".ui.home.setting.SettingActivity",
          "snapshotUrls": "https://i.gkd.li/i/12660882",
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-评论区卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] <<n [vid=\"ad_container\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24209546",
            "https://i.gkd.li/i/24380002"
          ]
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": [
            3
          ],
          "snapshotUrls": "https://i.gkd.li/i/21334232",
          "key": 1
        },
        {
          "matches": "[vid=\"adLabelView\"] + [vid=\"iv_close\"][clickable=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/24209546",
            "https://i.gkd.li/i/24380002"
          ]
        },
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag\"] + [id=\"cn.xiaochuankeji.tieba:id/iv_close\"][clickable=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12661011"
        },
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/iv_dislike_reason\"] + LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            3
          ],
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12661028"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "系统通知弹窗，点击暂不开启",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/confirm\"][text=\"打开通知\"] + [id=\"cn.xiaochuankeji.tieba:id/cancel\"][text=\"暂不开启\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12660823"
        },
        {
          "matches": "[text^=\"开启通知\"] +(2) [id=\"cn.xiaochuankeji.tieba:id/tips_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12660851"
        },
        {
          "matches": "[vid=\"confirm\"][text=\"打开通知\"] + [vid=\"cancel\"][text=\"暂不开启\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12660823"
        },
        {
          "matches": "[text^=\"开启通知\"] +2 [vid=\"tips_close\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12660851"
        }
      ]
    },
    {
      "name": "未分类-评论区广告卡片",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag\"] + [id=\"cn.xiaochuankeji.tieba:id/iv_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12661011"
          ]
        },
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/iv_dislike_reason\"] + LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12661028"
          ]
        }
      ]
    },
    {
      "name": "未分类-系统通知弹窗",
      "desc": "系统通知弹窗，点击暂不开启",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/confirm\"][text=\"打开通知\"] + [id=\"cn.xiaochuankeji.tieba:id/cancel\"][text=\"暂不开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12660823"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-系统通知提示信息",
      "desc": "系统通知提示信息，点击x按钮",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] +(2) [id=\"cn.xiaochuankeji.tieba:id/tips_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12660851"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@[id=\"cn.xiaochuankeji.tieba:id/iv_close\"] - [id=\"cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag\"][text=\"广告\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12661011"
        },
        {
          "matches": "@[id=\"cn.xiaochuankeji.tieba:id/tvContent\"][text=\"不感兴趣\"] < LinearLayout - [id=\"cn.xiaochuankeji.tieba:id/iv_dislike_reason\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12661028"
        }
      ]
    },
    {
      "name": "通知提示-系统通知弹窗",
      "desc": "系统通知弹窗，点击暂不开启",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@Button[id=\"cn.xiaochuankeji.tieba:id/cancel\"][text=\"暂不开启\"] - [id=\"cn.xiaochuankeji.tieba:id/confirm\"][text=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/import/12660823",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-系统通知提示信息",
      "desc": "系统通知提示信息，点击x按钮",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView[id=\"cn.xiaochuankeji.tieba:id/tips_close\"] -2 TextView[text^=\"开启通知\"] < [id=\"cn.xiaochuankeji.tieba:id/tips\"]",
          "snapshotUrls": "https://i.gkd.li/import/12660851",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/btn_ok\"][text^=\"马上升级\"] + [id=\"cn.xiaochuankeji.tieba:id/btn_cancel\"][text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12660882"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[text$=\"青少年模式\"] + [text$=\"知道了\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12660929"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "评论区广告卡片",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag\"] + [id=\"cn.xiaochuankeji.tieba:id/iv_close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12661011"
          ]
        },
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/iv_dislike_reason\"] + LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12661028"
          ]
        }
      ]
    },
    {
      "name": "系统通知弹窗",
      "desc": "系统通知弹窗，点击暂不开启",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/confirm\"][text=\"打开通知\"] + [id=\"cn.xiaochuankeji.tieba:id/cancel\"][text=\"暂不开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12660823"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "系统通知提示信息",
      "desc": "系统通知提示信息，点击x按钮",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] +(2) [id=\"cn.xiaochuankeji.tieba:id/tips_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12660851"
          ],
          "key": 0
        }
      ]
    }
  ]
});
