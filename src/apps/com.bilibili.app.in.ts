// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "bilibili",
  "id": "com.bilibili.app.in",
  "groups": [
    {
      "name": "评价提示-评论区满意度评价",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@View[childCount=0][width<180 && height<180] - [childCount=0][text~=\"你.+评论.*氛围.+？\"] <<n [vid=\"compose_view\"]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/23125454",
            "https://i.gkd.li/i/23182150"
          ]
        },
        {
          "matches": "[text=\"对当前的评论区满意吗？\"] + [id=\"com.bilibili.app.in:id/close\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示-APP评分",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"鼓励一下\"]",
            "[text=\"下次再说\"]"
          ],
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/13180746",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-订阅感兴趣的通知",
      "desc": "点击\"暂不开启\"",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"订阅感兴趣的通知\"]",
            "[text=\"暂不开启\"]"
          ],
          "activityIds": "com.bilibili.bplus.im.communication.HomeCommunicationActivity",
          "snapshotUrls": "https://i.gkd.li/i/18392097",
          "exampleUrls": "https://e.gkd.li/283c2be2-80d7-43ab-976c-0896e678fc49",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击\"暂不\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"打开推送通知\"]",
            "[text=\"暂不\"]"
          ],
          "actionMaximum": 1,
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15907493",
          "exampleUrls": "https://e.gkd.li/e67d6d21-f09b-44b0-bf91-8b9fa0670e27"
        },
        {
          "matches": "@Image < View + [id=\"subscribeContainer\"] > [text=\"权益更新时推送通知\"]",
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23714120"
        },
        {
          "matches": [
            "[text=\"打开推送通知\"]",
            "[text=\"暂不\"]"
          ],
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/15907493",
          "exampleUrls": "https://e.gkd.li/e67d6d21-f09b-44b0-bf91-8b9fa0670e27",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动领取会员经验",
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"专属等级加速包\"] +n @TextView[childCount=0][text=\"领取\"] <<n [vid=\"webview\"]",
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "fastQuery": true,
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动关闭故事模式",
      "desc": "播放视频时退出竖屏模式",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"story_ctrl_router\"][visibleToUser=true]",
          "activityIds": "com.bilibili.video.story.StoryVideoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18164075",
          "exampleUrls": "https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-评论区-满意度评价",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"对当前的评论区满意吗？\"] + [id=\"com.bilibili.app.in:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-APP评分",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.bilibili.app.in:id/cancel\"][text=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-订阅感兴趣的通知",
      "desc": "点击【暂不开启】",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"订阅感兴趣的通知\"] +2 LinearLayout [text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-打开推送通知弹窗",
      "desc": "自动点击“暂不”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"打开推送通知\"] +2 LinearLayout > [id=\"com.bilibili.app.in:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区-满意度评价",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"对当前的评论区满意吗？\"] + [id=\"com.bilibili.app.in:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-APP评分",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.bilibili.app.in:id/cancel\"][text=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-订阅感兴趣的通知",
      "desc": "点击【暂不开启】",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"订阅感兴趣的通知\"] +2 LinearLayout [text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-打开推送通知弹窗",
      "desc": "自动点击“暂不”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[text=\"打开推送通知\"] +2 LinearLayout > [id=\"com.bilibili.app.in:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "评论区-满意度评价",
      "enable": false,
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[text=\"对当前的评论区满意吗？\"] + [id=\"com.bilibili.app.in:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "APP评分",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.bilibili.app.in:id/cancel\"][text=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "订阅感兴趣的通知",
      "desc": "点击【暂不开启】",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"订阅感兴趣的通知\"] +2 LinearLayout [text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "打开推送通知弹窗",
      "desc": "自动点击“暂不”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "[text=\"打开推送通知\"] +2 LinearLayout > [id=\"com.bilibili.app.in:id/close\"]",
          "key": 0
        }
      ]
    }
  ]
});
