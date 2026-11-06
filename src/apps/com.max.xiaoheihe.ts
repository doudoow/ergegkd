// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小黑盒",
  "id": "com.max.xiaoheihe",
  "groups": [
    {
      "name": "功能类-签到成功弹窗",
      "desc": "返回关闭弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"签到成功\"][text.length<10]",
          "action": "back",
          "snapshotUrls": [
            "https://i.gkd.li/i/13421535",
            "https://i.gkd.li/i/15048252"
          ],
          "key": 0
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
          "matches": "[vid=\"iv_notify_close\"]",
          "activityIds": "com.max.xiaoheihe.module.bbs.post.ui.activitys.WebNewsPostPageActivity",
          "fastQuery": true,
          "name": "收藏帖子后底部推荐关注卡片",
          "snapshotUrls": "https://i.gkd.li/i/14914139",
          "exampleUrls": "https://m.gkd.li/57941037/b7c25b6e-cc77-4bcc-a477-23b3de74c61f",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_notify_close\"]",
          "activityIds": ".module.bbs.post.ui.activitys.WebNewsPostPageActivity",
          "fastQuery": true,
          "name": "收藏帖子后底部推荐关注卡片",
          "snapshotUrls": "https://i.gkd.li/i/14914139",
          "exampleUrls": "https://m.gkd.li/57941037/b7c25b6e-cc77-4bcc-a477-23b3de74c61f",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动点击查看原图",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"tv_original\"][visibleToUser=true]",
          "activityIds": [
            ".module.bbs.post.ui.activitys.WebNewsPostPageActivity",
            ".module.bbs.post.ui.activitys.PicturePostPageActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16646832",
            "https://i.gkd.li/i/17574462"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/22377026",
          "exampleUrls": "https://e.gkd.li/f7222b21-7037-4614-95ab-cff19ee15d38",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[查看原图]",
      "desc": "点击[查看原图]",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"tv_original\"][clickable=true]",
          "activityIds": [
            ".module.bbs.post.ui.activitys.WebNewsPostPageActivity",
            ".module.bbs.post.ui.activitys.PicturePostPageActivity",
            ".module.bbs.post.ui.activitys.v2.PicturePostPageActivityV2",
            ".module.bbs.post.ui.activitys.v2.WebNewsPostPageActivityV2"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/16646832",
            "https://i.gkd.li/i/17574462",
            "https://i.gkd.li/i/25336815",
            "https://i.gkd.li/i/30749472"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/22377026",
          "exampleUrls": "https://e.gkd.li/f7222b21-7037-4614-95ab-cff19ee15d38",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动隐藏cy评论",
      "desc": "进入帖子点击一次[Cy]按钮",
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"tb_cy_filter\"][text=\"关闭\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": [
            ".module.bbs.post.ui.activitys.v2.WebNewsPostPageActivityV2",
            ".module.bbs.post.ui.activitys.v2.PicturePostPageActivityV2"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/31803161",
            "https://i.gkd.li/i/31818275"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动查看原图",
      "desc": "浏览图片时自动切换至原图模式",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"tv_original\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16646832",
            "https://i.gkd.li/i/17574462",
            "https://i.gkd.li/i/25336815",
            "https://i.gkd.li/i/30749472"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/22377026",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗_签到成功",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[text=\"签到成功!\"]",
            "[id=\"com.max.xiaoheihe:id/tv_confirm\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13421535",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗_签到成功",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text=\"签到成功!\"]",
            "[id=\"com.max.xiaoheihe:id/tv_confirm\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13421535",
          "key": 0
        }
      ]
    }
  ]
});
