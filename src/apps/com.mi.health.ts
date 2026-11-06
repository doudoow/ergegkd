// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米运动健康",
  "id": "com.mi.health",
  "groups": [
    {
      "name": "评价提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"评分\"][visibleToUser=true]",
            "[text=\"下次再说\"][visibleToUser=true]"
          ],
          "activityIds": "com.xiaomi.fitness.baseui.common.CommonBaseActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13258813",
            "https://i.gkd.li/i/21979253"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-后台运行",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"开启后台无限制\"] + [id=\"com.mi.health:id/close_icon\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13495035",
          "key": 0
        },
        {
          "matches": "[text=\"开启后台无限制\"] + [vid=\"close_icon\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13495035",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "关闭各页面的全屏广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.mi.health:id/cardview\"] + [id=\"com.mi.health:id/dialog_close\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "key": 0,
          "name": "活动弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13537836"
        },
        {
          "matches": "@[clickable=true] > [desc=\"Close\"]",
          "activityIds": "com.xiaomi.wearable.yrn.views.WearableRNActivity",
          "key": 1,
          "name": "表盘广告",
          "snapshotUrls": "https://i.gkd.li/i/23923968"
        },
        {
          "matches": "[vid=\"cardview\"] + [vid=\"dialog_close\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "key": 2,
          "name": "活动弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13537836"
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
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"下载并安装\" || text=\"立即更新\"]",
            "[text=\"放弃更新\" || text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13537840",
            "https://i.gkd.li/i/13626328"
          ],
          "key": 0
        },
        {
          "matches": "[text^=\"发现新版本\"] < * + * >n [text=\"放弃更新\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13537840",
          "key": 1
        },
        {
          "matches": "[text=\"立即更新\"] + [id=\"com.mi.health:id/tv_negative\"][text=\"取消\"]",
          "activityIds": "com.mi.health.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/import/13626328",
          "key": 2
        }
      ]
    },
    {
      "name": "通知提示-公告栏",
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"bannerAnnouncementView\"] [vid=\"iv_close\"][clickable=true]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24099864",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-麦克风",
      "key": 5,
      "rules": [
        {
          "matches": "@[vid=\"close_instruction\"][clickable=true] - [text^=\"鼾声梦话监测开关因麦克风未授权而关闭\"]",
          "activityIds": "com.xiaomi.fitness.baseui.common.CommonBaseActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24229351",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-好评弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.mi.health:id/nextView\"][text=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-权限提醒",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"开启后台无限制\"] + [id=\"com.mi.health:id/close_icon\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-活动弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.mi.health:id/cardview\"] + [id=\"com.mi.health:id/dialog_close\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13537836"
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[text^=\"发现新版本\"] < * + * >n [text=\"放弃更新\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13537840",
          "key": 0
        },
        {
          "matches": "[text=\"立即更新\"] + [id=\"com.mi.health:id/tv_negative\"][text=\"取消\"]",
          "activityIds": "com.mi.health.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13626328",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "关闭各页面的局部广告",
      "enable": false,
      "matchTime": 10000,
      "key": 10,
      "rules": [
        {
          "matches": "[vid=\"bannerAnnouncementView\"] [vid=\"iv_close\"][clickable=true]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "fastQuery": true,
          "name": "调研邀请",
          "snapshotUrls": "https://i.gkd.li/i/24099864",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-好评弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.mi.health:id/nextView\"][text=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-权限提醒",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"开启后台无限制\"] + [id=\"com.mi.health:id/close_icon\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-活动弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.mi.health:id/cardview\"] + [id=\"com.mi.health:id/dialog_close\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13537836"
        }
      ]
    },
    {
      "name": "好评弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.mi.health:id/nextView\"][text=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提醒",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[text=\"开启后台无限制\"] + [id=\"com.mi.health:id/close_icon\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "活动弹窗",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.mi.health:id/cardview\"] + [id=\"com.mi.health:id/dialog_close\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13537836"
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "[text^=\"发现新版本\"] < * + * >n [text=\"放弃更新\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13537840",
          "key": 0
        },
        {
          "matches": "[text=\"立即更新\"] + [id=\"com.mi.health:id/tv_negative\"][text=\"取消\"]",
          "activityIds": "com.mi.health.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/import/13626328",
          "key": 1
        }
      ]
    }
  ]
});
